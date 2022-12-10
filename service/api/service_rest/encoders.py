from .models import Technician, Appointment, AutomobileVO
from common.json import ModelEncoder


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "auto_vin",
        "customer_name",
        "time",
        "reason",
        # "vip",
        "completed",
        "canceled",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
