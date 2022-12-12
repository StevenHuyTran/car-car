import React from "react";

class AppointmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  async handleCancel(event) {
    const value = event.target.value;
    const appointmentUrl = `http://localhost:8080/api/appointments/edit/${value}/`;
    const fetchConfig = {
      method: "delete",
    };

    const response = await fetch(appointmentUrl, fetchConfig);
    const appointmentDeleted = await response.json();
    console.log(appointmentDeleted);
    if (response.ok) {
      this.componentDidMount();
    }
  }

  async handleFinish(event) {
    const value = event.target.value;
    const appointmentUrl = `http://localhost:8080/api/appointments/edit/${value}/`;
    const fetchConfig = {
      method: "put",
    };

    const response = await fetch(appointmentUrl, fetchConfig);
    const appointmentFinished = await response.json();
    console.log(appointmentFinished);
    if (response.ok) {
      this.componentDidMount();
    }
  }

  async componentDidMount() {
    // if this url loads, set the state of the
    // appointment empty appointment list to reflect current appointments
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      this.setState({ appointments: data.appointments });
    }
  }

  // async handleClick(event) {
  //   event.preventDefault();
  //   const statusInput = event.target.value;
  //   const serviceId = event.target.name;
  //   const data = { status: statusInput };
  //   const body = JSON.stringify(data);

  //   const url = `http://localhost:8080/api/services/${serviceId}/`;
  //   const fetchConfig = {
  //     method: "put",
  //     body: body,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const response = await fetch(url, fetchConfig);

  //   if (response.ok) {
  //     const updatedService = await response.json();
  //     console.log(updatedService);
  //     window.location.reload();
  //   }
  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="alert">
            <div></div>
          </div>
          <div className="col-10">
            <h1>Service Appointments</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Technician</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {this.state.appointments.map((appointment) => {
                  const dateObj = new Date(appointment.time);
                  const options = { timeStyle: "short" };
                  return (
                    <tr key={appointment.id}>
                      <td>{appointment.auto_vin}</td>
                      <td>{appointment.customer_name}</td>
                      <td>{dateObj.toLocaleDateString()}</td>
                      <td>{dateObj.toLocaleTimeString([], options)}</td>
                      <td>{appointment.technician.name}</td>
                      <td>{appointment.reason}</td>
                      <td className="btn-group" role="group">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={this.handleCancel}
                          value={appointment.id}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={this.handleFinish}
                          value={appointment.id}
                        >
                          Finished
                        </button>
                      </td>
                      {/* <td>
                        <button
                          className="btn btn-danger"
                          onClick={this.handleCancel}
                          value={appointment.id}
                        >
                          Cancel
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={this.handleFinish}
                          value={appointment.id}
                        >
                          Finished
                        </button>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentList;
