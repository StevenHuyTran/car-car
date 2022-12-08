from django.contrib import admin
from .models import AutomobileVO, SalesPerson, PotentialCustomer, SaleRecord, SalesList, EmployeeSalesList
# Register your models here.

@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesPerson)
class SalesPerson(admin.ModelAdmin):
    pass
@admin.register(PotentialCustomer)
class PotentialCustomer(admin.ModelAdmin):
    pass
@admin.register(SaleRecord)
class SaleRecord(admin.ModelAdmin):
    pass
@admin.register(SalesList)
class SalesList(admin.ModelAdmin):
    pass
@admin.register(EmployeeSalesList)
class EmployeeSalesList(admin.ModelAdmin):
    pass
