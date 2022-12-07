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




class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "auto_vin",
        "customer_name",
        "date",
        "time",
        "reason",
        "status",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }




@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        try:
            te
