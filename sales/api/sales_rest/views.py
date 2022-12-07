from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from django.http import JsonResponse
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SaleRecord, SalesList, EmployeeSalesList
import json


# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "color",
        "year",
        "vin",
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
   
    ]
class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]

class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "id",
        "automobile",
        "sales_person",
        "customer",
        "price",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": PotentialCustomerEncoder(),
    }

class SalesListEncoder(ModelEncoder):
    model = SalesList
    properties = [
        "id", 
        "sales_person", 
        "customer", 
        "vin", 
        "price",
    ]
    encoders = {
        "automobile": AutomobileVO(),
        "sales_person": SalesPerson(),
        "customer": PotentialCustomer(),
        "price": SaleRecord(),
    }

class EmployeeSalesListEncoder(ModelEncoder):
    model = EmployeeSalesList
    properties = [
        "id", 
        "sales_person", 
        "customer", 
        "vin", 
        "price",
    ]
    encoders = {
        "automobile": AutomobileVO(),
        "sales_person": SalesPerson(),
        "customer": PotentialCustomer(),
        "price": SaleRecord(),
    }

@require_http_methods(["GET", "POST"])
def api_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {'sales_person': sales_person},
            encoder=SalesPersonEncoder,
        )

    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                    sales_person,
                    encoder=SalesPersonEncoder,
                    safe=False,
                )
        except:
            return JsonResponse(
                {'message': 'Could not create the sales person'},
                status=400,
            )

@require_http_methods(["GET", "POST"])
def api_potential_customer(request):
    if request.method == "GET":
        potential_customer = PotentialCustomer.objects.all()
        return JsonResponse(
            {'potential_customer': potential_customer},
            encoder=PotentialCustomerEncoder,
        )

    else:
        try:
            content = json.loads(request.body)
            potential_customer = PotentialCustomer.objects.create(**content)
            return JsonResponse(
                    potential_customer,
                    encoder=PotentialCustomerEncoder,
                    safe=False,
                )
        except:
            return JsonResponse(
                {'message': 'Could not create a potential customer'},
                status=400,
            )

@require_http_methods(["GET", "POST"])
def api_sale_record(request):
    if request.method == "GET":
        sale_record = SaleRecord.objects.all()
        return JsonResponse(
            {'sale_record': sale_record},
            encoder=SaleRecordEncoder,
        )

    else:
        try:
            content = json.loads(request.body)
            sale_record = SaleRecord.objects.create(**content)
            return JsonResponse(
                    sale_record,
                    encoder=SaleRecordEncoder,
                    safe=False,
                )
        except:
            return JsonResponse(
                {'message': 'Could not create a sale record'},
                status=400,
            )

@require_http_methods(["GET", "POST"])
def api_sales_list(request):
    if request.method == "GET":
        sales_list = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales_list },
            encoder = SaleRecordEncoder, 
        )
    else:
        content = json.loads(request.body) 
        automobile = AutomobileVO.objects.get(vin = content["vin"])
        content["automobile"] = automobile 

    return JsonResponse(
        sales_list,
        encoder=SalesListEncoder, 
        safe=False,
    )

@require_http_methods(["GET", "POST"])
def api_employee_sales_list(request):
    if request.method == "GET":
        employee_sales_list = EmployeeSalesList.objects.all()
        return JsonResponse(
            {"employee_sales": employee_sales_list },
            encoder = EmployeeSalesListEncoder, 
        )
    else:
        content = json.loads(request.body) 
        automobile = AutomobileVO.objects.get(vin = content["vin"])
        content["automobile"] = automobile 

    return JsonResponse(
        employee_sales_list,
        encoder=EmployeeSalesListEncoder, 
        safe=False,
    )



