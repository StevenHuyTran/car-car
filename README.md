[TOC]
# CarCar

Team:

- Steven Tran - Services microservice
- Elviza Fallon-Hanify - Sales microservice

## Design

## Step by step installation and getting started

1. Fork the repository https://gitlab.com/elviza/project-beta
2. Select clone with HTTPS, and copy the link
3. Clone the repo using Terminal: git clone "repo-link"
4. Change your directory to the newly cloned repo: cd "repo-name"
5. To open project in VSCODE : code .
6. Run : 
         docker volume create beta-data
         docker-compose build
         docker-compose up
7. If you run docker-compose up and if you're on macOS, you'll see
   a warning about an
   environment variable named OS being missing. You can safely ignore this.
8. Once docker is up and running, go to http://localhost:3000/ to
   see the web app.

## Application Diagram

![Diagram](https://gitlab.com/elviza/project-beta/-/raw/steven/source/images/CarCar%20Overview%20Diagram.png)

## Service microservice

Explain your models and integration with the inventory
microservice, here.

A service management api that can handle appointments and creating new technicians for a dealership.

Data is polled by requesting data about automobiles in inventory from the "Inventory" monolith, to create a copy of automobile information as
Value objects. This allows the Service API to handle its own automobile data without the risk of altering any data from the Inventory producer/monolith.

The front-end of this api allows users to create a service appointment with details including the model of the car, vin number, customer/owner name, time and date of the appointment,
reason for the appointment, and the technician assigned to that appointment. It also allows users to create a new technician should the need arise.

The service appointment history page also includes a list of all appointments with a live search filter using the VIN number and a button feature to list all appointments.
The service appointment page lists all of the current appointments with two buttons that allow the user to either "cancel" the appointment and remove it from
the list or mark the appointment as "finished" and move it to the service history page.

The models are currently set up in a way that allows the back-end to delete a technician either through Insomnia or the admin page. Once a technician is deleted, appointments associated to that technician will be deleted because appointments depend on the technicians available.

## Endpoints for Service API

```
Base url: http://localhost:8080/
```

| Action               | Method | URL                               |
| -------------------- | ------ | --------------------------------- |
| List Appointments    | GET    | api/appointments/                 |
| Create Appointment   | POST   | api/appointments/                 |
| Appointment by VIN   | GET    | api/appointments/<str:vin>/       |
| Appointment Detail   | GET    | api/appointments/edit/<int:pk>/   |
| Complete Appointment | PUT    | api/appointments/edit/<int:pk>/   |
| Cancel Appointment   | PUT    | api/appointments/<int:pk>/cancel/ |
| Create Technician    | POST   | api/technicians/                  |
| List Technicians     | GET    | api/technicians/                  |
| Delete Technician    | DELETE | api/technicians/<int:pk>          |

## JSON body samples for Post Requests

<b>Creating an appointment:

```
{
	"auto_vin": "1FDLF47M6RRA05066",
	"customer_name": "Bill",
	"time": "2022-12-08T07:23:48+00:00",
	"reason": "Wheel change",
	"technician": 2
}
```

<b>Response for creating an appointment

```
{
	"id": 8,
	"auto_vin": "1FDLF47M6RRA05066",
	"customer_name": "Bill",
	"time": "2022-12-08T07:23:48+00:00",
	"reason": "Wheel change",
	"technician": {
		"id": 2,
		"name": "Amy",
		"employee_number": 2
	}
}
```

<b>Creating a Technician

```
{
"name": "Paul",
"employee_number": 1
}
```

<b>Response for creating a technician

```
{
	"name": "Carl",
	"employee_number": 1
}
```

## Sales microservice

The Sales functionality needs to keep track of automobile sales that come from the inventory. Currently the following fron-end portion of sales microservice working (you can access it through navigation bar "Sales"):
 - Add a sales person
 - Add potential customer
 - Create a sale record
 - All sales record
 - List of sales (ables to sort by sales person)

## Endpoints for Sales API

```
Base url: http://localhost:8090/
```

| Action               | Method | URL                               |
| -------------------- | ------ | --------------------------------- |
| List Sales           | GET    | api/sales/sales_list              |
| Create Sale Record   | POST   | api/sales/sale_record             |
| View Sale Record     | GET    | api/sales/sale_record             |
| Create customer      | POST   | api/sales/potential_customer      |
| View customer list   | GET    | api/sales/potential_customer      |
| Create Sales Person  | POST   | api/api/sales/                    |
| View Sales Person    | GET    | api/api/sales/                    |

## JSON body samples for Post Requests

- Create Sales Record

```
{
	"vin": "1FDLF47M6RRA05066",
	"sales_person": 1,
	"customer": 1,
	"price": 25000
}

```
- Create Customer

```
{
	"name": "Elena",
	"address": "1234 NE 11th Ave, Seattle WA ",
	"phone_number": 2147483647
}

```
- Create Sales Person

```
{
	"name": "Nick",
	"employee_number": 1
}

```
