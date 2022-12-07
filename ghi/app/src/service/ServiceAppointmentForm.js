import React from "react";

class ServiceAppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            customer_name: "",
            date: "",
            time: "",
            reason: "",
            technician: "",
            newAppointment: false,
        };

        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleCustomerChange = this.handleVinChange.bind(this);
        this.handleDateChange = this.handleVinChange.bind(this);
        this.handleTimeChange = this.handleVinChange.bind(this);
        this.handleReasonChange = this.handleVinChange.bind(this);
        this.handleTechnicianChange = this.handleVinChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.models;
        delete data.newAutomobile;

        const url = "http://localhost:8100/api/service/";
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };











}
