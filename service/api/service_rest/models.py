from django.db import models

# Create your models here.

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f"{self.name}"


class Appointment(models.Model):
    auto_vin = models.CharField(max_length=200)
    customer_name = models.CharField(max_length=200)
    date = models.DateField()
    time = models.TimeField()
    reason = models.CharField
    finished = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return (f"{self.customer_name} on {self.date}")


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=200)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"
