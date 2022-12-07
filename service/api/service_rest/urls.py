from django.urls import path

from .views import api_list_appointments

urlpatterns = [
    path("appointments/", api_list_appointments, name="list_appointments"),
    path("appointments/<str:auto_vin>/", api_list_appointments, name="appointment_vin"),
]
