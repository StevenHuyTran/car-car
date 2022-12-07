from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Technician, Appointment, AutomobileVO
from common.json import ModelEncoder



# Create your views here.

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
    ]




class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "auto_vin",
        "customer_name",
        # "date",
        # "time",
        "reason",
        "finished",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }




class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "auto_vin",
        "customer_name",
        # "date",
        # "time",
        "reason",
        "vip",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder()
    }



@require_http_methods(["GET", "POST"])
def api_list_appointments(request, auto_vin=None):
    if request.method == "GET":
        if auto_vin is not None:
            appointments = Appointment.objects.filter(auto_vin=auto_vin)
        else:
            appointments = Appointment.objects.filter(finished=False)
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        print(content)
        try:
            vin_number = content["auto_vin"]
            auto = AutomobileVO.objects.get(vin=vin_number)
            content["vip"] = True

        except AutomobileVO.DoesNotExist:
            content["vip"] = False

        try:
            employee_number = content["technician"]
            technician = Technician.objects.get(employee_number=employee_number)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee number"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_appointment_detail(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk):
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    elif re
