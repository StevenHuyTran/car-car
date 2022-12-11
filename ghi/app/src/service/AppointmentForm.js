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
    data.time = `${data.date} ${data.time}`;
    console.log(data);
    console.log(data.time);
    delete data.date;
    delete data.technicians;
    delete data.newAppointment;

    const serviceUrl = "http://localhost:8080/api/appointments/";
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
        auto_vin: "",
        customer_name: "",
        date: "",
        time: "",
        reason: "",
        technician: "",
      };
      this.setState(cleared);
      window.location.href = "/services";
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
    const url = "http://localhost:8080/api/technicians/";
    const techResponse = await fetch(url);

    if (techResponse.ok) {
      const data = await techResponse.json();
      console.log(data);
      this.setState({ technicians: data.technicians });
    }

    const vinUrl = "http://localhost:8100/api/automobiles";
    const vinResponse = await fetch(vinUrl);

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
            <h1>Create a New Service Appointment</h1>
            <form
              className={formClasses}
              onSubmit={this.handleSubmit}
              id="create-appointment-form"
            >
              <div className="form-floating mb-3">
                <input
                  value={this.state.vin}
                  onChange={this.handleVinChange}
                  maxLength="17"
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
                  type="date"
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
                  placeholder="time"
                  type="time"
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
                        key={technician.id}
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
