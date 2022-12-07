import React from "react";

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auto_vin: "",
      customer_name: "",
      date: "",
      time: "",
      reason: "",
      technician: "",
      technicians: [],
      newAppointment: false,
    };

    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleCustomerChange = this.handleCustomerChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleReasonChange = this.handleReasonChange.bind(this);
    this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.models;
    delete data.newAutomobile;

    const serviceUrl = "http://localhost:8100/api/services/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(serviceUrl, fetchConfig);
    if (response.ok) {
      const appointmentData = await response.json();
      console.log(appointmentData);

      const cleared = {
        vin: "",
        customer_name: "",
        date: "",
        time: "",
        reason: "",
        technician: "",
      };
      this.setState(cleared);
      window.location.href = "/appointments";
    }
  }

  handleVinChange(event) {
    const value = event.target.value;
    this.setState({ auto_vin: value });
  }

  handleCustomerChange(event) {
    const value = event.target.value;
    this.setState({ customer_name: value });
  }

  handleDateChange(event) {
    const value = event.target.value;
    this.setState({ date: value });
  }

  handleTimeChange(event) {
    const value = event.target.value;
    this.setState({ time: value });
  }

  handleReasonChange(event) {
    const value = event.target.value;
    this.setState({ reason: value });
  }

  handleTechnicianChange(event) {
    const value = event.target.value;
    this.setState({ technician: value });
  }

  async componentDidMount() {
    //Retreiving technician list
    const url = "http://localhost:8080/api/technicians";
    techResponse = await fetch(url);

    if (techResponse.ok) {
      const data = await techResponse.json();
      console.log(data);
      this.setState({ technicians: data.technicians });
    }

    const vinUrl = "http://localhost:8100/api/automobiles";
    vinResponse = await fetch(vinUrl);

    if (vinResponse.ok) {
      //Retreiving automobile list for vin data
      const data = await vinResponse.json();
      console.log(data);
      this.setState({ auto_vin: data.auto_vin });
    }
  }

  render() {
    let messageClasses = "alert alert-success d-none mb-0";
    let formClasses = "";
    if (this.state.newAppointment) {
      messageClasses = "alert alert-success mb-0";
      formClasses = "d-none";
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new appointment</h1>
            <form
              className={formClasses}
              onSubmit={this.handleSubmit}
              id="create-appointment-form"
            >
              <div className="form-floating mb-3">
                <input
                  value={this.state.vin}
                  onChange={this.handleVinChange}
                  placeholder="vin"
                  required
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">Vin</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  value={this.state.customer_name}
                  onChange={this.handleCustomerChange}
                  placeholder="Customer"
                  required
                  type="text"
                  name="customer"
                  id="customer"
                  className="form-control"
                />
                <label htmlFor="customer">Customer</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  placeholder="date"
                  required
                  type="text"
                  name="date"
                  id="date"
                  className="form-control"
                />
                <label htmlFor="date">Date</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  value={this.state.time}
                  onChange={this.handleTimeChange}
                  placeholder="Picture URL"
                  type="text"
                  name="time"
                  id="time"
                  className="form-control"
                />
                <label htmlFor="time">Time</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  value={this.state.reason}
                  onChange={this.handleReasonChange}
                  placeholder="Reason"
                  type="text"
                  name="reason"
                  id="reason"
                  className="form-control"
                />
                <label htmlFor="reason">Reason</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  onChange={this.handleTechnicianChange}
                  value={this.state.technician}
                  placeholder="Technician"
                  type="text"
                  name="technician"
                  id="technician"
                  className="form-select"
                >
                  <option value="">Assign Technician</option>
                  {this.state.technicians.map((technician) => {
                    return (
                      <option
                        key={technician.employee_number}
                        value={technician.employee_number}
                      >
                        {technician.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Make Appointment</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentForm;
