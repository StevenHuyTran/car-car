import React from "react";

class ServiceHistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      vin: "",
    };
    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleVinSearch = this.handleVinSearch.bind(this);
  }

  handleVinChange(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }

  async handleVinSearch(event) {
    event.preventDefault();
    //Loading Vin info
    const data = { ...this.state };
    const url = `http://localhost:8080/api/appointments/${data["vin"]}`;
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ appointments: data.appointments });
    }
  }

  render() {
    if (this.state.appointments === []) {
    }
    return (
      <div className="container">
        <br></br>
        <input
          type="text"
          className="form-control"
          placeholder="Vehicle VIN"
          aria-label="vin"
          onChange={this.handleVinChange}
          value={this.state.vin}
        />
        <div className="input-group-append">
          <button
            onClick={this.handleVinSearch}
            className="btn btn-outline-secondary"
            type="button"
          >
            Search VIN
          </button>
        </div>
        <h1>Service History</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>VIN</th>
              <th>Customer name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Technician</th>
              <th>Reason</th>
              <th>VIP status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appointment) => {
              const dateObj = new Date(appointment.time);
              const options = { timeStyle: "short" };
              return (
                // <tr key={appointment.id}>
                //   <td>{appointment.auto_vin}</td>
                //   <td>{appointment.customer_name}</td>
                //   <td>{new Date(appointment.time).toLocaleDateString()}</td>
                //   <td>
                //     {new Date(appointment.time).toLocaleDateString([], {
                //       hour: "2-digit",
                //       minute: "2-digit",
                //     })}
                //   </td>
                //   <td>{appointment.technician}</td>
                //   <td>{appointment.reason}</td>
                //   <td>{appointment.vip ? "yes" : "no"}</td>
                // </tr>
                <tr key={appointment.id}>
                  <td>{appointment.auto_vin}</td>
                  <td>{appointment.customer_name}</td>
                  <td>{dateObj.toLocaleDateString()}</td>
                  <td>{dateObj.toLocaleTimeString([], options)}</td>
                  <td>{appointment.technician.name}</td>
                  <td>{appointment.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ServiceHistoryList;
