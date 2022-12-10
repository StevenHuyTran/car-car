from django import urls
from django.urls import path
from .views import (
    api_sales_list,
    api_sales_person, 
    api_potential_customer,
    api_sale_record,
    api_employee_sales_list,
)

urlpatterns = [
    path('sales/', api_sales_person, name="api_sales_person"),
    path('sales/potential_customer', api_potential_customer, name="api_potential_customer"),
    path('sales/sale_record', api_sale_record, name="api_sale_record"),
    path("sales/sales_list", api_sales_list, name="api_sales_list"),
    path("sales/employee_sales_list", api_employee_sales_list, name="api_employee_sales_list"),
]

