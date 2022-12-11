# CarCar


Team:

* Steven Tran - Services microservice
* Elviza Fallon-Hanify - Sales microservice

## Design

## Step by step installation and getting started
1. Fork the repository https://gitlab.com/elviza/project-beta
2. Select clone with HTTPS, and copy the link
3. Clone the repo using Terminal: git clone "repo-link"
4. Change your directory to the newly cloned repo: cd "repo-name"
5. To open project in VSCODE : code .
6. Run : docker volume create pgdata
         docker-compose build
         docker-compose up
7. If you run docker-compose up and if you're on macOS, you'll see
   a warning about an
   environment variable named OS being missing. You can safely ignore this.
8. Once docker is up and running, go to http://localhost:3000/ to
   see the web app.

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

## Restful API endpoints for the service API
| Action | Method | URL |
| ---    | ---    | --- |
| List Appointments| GET | api/appointments/ |


## Sales microservice

Explain your models and integration with the inventory
microservice, here.
