from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Technician, Appointment, AutomobileVO
from .encoders import AppointmentEncoder, TechnicianEncoder


# Create your views here.



##working
@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(pk=content["technician"])
            content["technician"] = technician
            try:
                automobile = AutomobileVO.objects.get(vin=content["auto_vin"])
                content["vip"] = True
            except:
                content["vip"] = False
            content["completed"] = False
            content["canceled"] = False
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the appointment"}
            )
            response.status_code = 400
            return response



# works List technicians
@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )

# technician detail
@require_http_methods(["GET", "DELETE"])
def api_technician_detail(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoders=TechnicianEncoder,
            safe=False
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})




@require_http_methods(["GET", "PUT", "DELETE"])
def api_appointment_detail(request, pk):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method =="PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.complete()

            return JsonResponse({
                "finished": "Appointment complete"
            })
        except Appointment.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})



@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    appointment = Appointment.objects.get(id=pk)
    appointment.cancel()
    return JsonResponse(
        {"canceled": "Appointment has been canceled"}
    )





@require_http_methods(["GET"])
def api_appointments_with_vin(request, vin):
    appointments = Appointment.objects.filter(auto_vin__icontains=vin)
    if len(appointments) > 0:
        return JsonResponse(
        {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        response = JsonResponse(
            {"message": "VIN does not exist"}
        )
        response.status_code = 404
        return response
