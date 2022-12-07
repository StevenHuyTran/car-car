from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField()

    def get_api_url(self):
        return reverse("api_sales_person", kwargs={"pk": self.id})

class PotentialCustomer(models.Model): 
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.PositiveIntegerField()

class SaleRecord(models.Model): 
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.PROTECT)
    sales_person =  models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.PROTECT)
    customer =  models.ForeignKey(
        PotentialCustomer,
        related_name="customer",
        on_delete=models.PROTECT)
    price = models.PositiveIntegerField()

class SalesList(models.Model):
    sales_person =  models.ForeignKey(
        SalesPerson,
        related_name="sales_list_sales_person",
        on_delete=models.PROTECT)
    customer =  models.ForeignKey(
        PotentialCustomer,
        related_name="sales_list_customer",
        on_delete=models.PROTECT)
    vin =  models.ForeignKey(
        AutomobileVO,
        related_name="sales_list_vin",
        on_delete=models.PROTECT)
    price = models.ForeignKey(
        SaleRecord,
        related_name="sales_price",
        on_delete=models.PROTECT)

class EmployeeSalesList(models.Model):
    sales_person =  models.ForeignKey(
        SalesPerson,
        related_name="employee_sales_list_sales_person",
        on_delete=models.PROTECT)
    customer =  models.ForeignKey(
        PotentialCustomer,
        related_name="employee_sales_list_customer",
        on_delete=models.PROTECT)
    vin =  models.ForeignKey(
        AutomobileVO,
        related_name="employee_sales_list_vin",
        on_delete=models.PROTECT)
    price = models.ForeignKey(
        SaleRecord,
        related_name="employee_sales_price",
        on_delete=models.PROTECT)




