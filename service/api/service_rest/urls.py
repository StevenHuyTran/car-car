from django.urls import path

from .views import api_appointments, api_technicians, api_appointment_detail, api_technician_detail, api_cancel_appointment, api_appointments_with_vin

urlpatterns = [
    path("appointments/", api_appointments, name="list_appointments"),
    # path("appointments/<str:auto_vin>/", api_appointments, name="appointment_vin"),
    path("appointments/edit/<int:pk>/", api_appointment_detail, name="edit_appointment"),
    path("appointments/<int:pk>/cancel/", api_cancel_appointment, name="api_cancel_appointment"),
    path("appointments/<str:vin>/", api_appointments_with_vin, name="api_appointments_with_vin"),
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:pk>/", api_technician_detail, name="edit_technicians"),

]
