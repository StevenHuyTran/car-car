from django.db import models

# Create your models here.

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f"{self.name}"


class Appointment(models.Model):
    auto_vin  = models.CharField(max_length=17, null=True, blank=True)
    customer_name = models.CharField(max_length=200)
    time = models.DateTimeField(auto_now=False, auto_now_add=False, null=True)
    reason = models.CharField(max_length=300)
    # status = models.BooleanField(default=False)
    vip = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return (f"{self.customer_name} on {self.time}")

    def finish(self):
        return (f"{self.reason} for {self.customer_name}")


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"
