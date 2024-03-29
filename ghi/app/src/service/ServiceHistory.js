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
    this.setState({ vin: value }, () => {
      this.handleVinSearch();
    });
  }

  async handleVinSearch(event) {
    // event.preventDefault();
    //Loading Vin info
    const data = { ...this.state };
    const url = `http://localhost:8080/api/appointments/${data["vin"]}`;
    // const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      await this.setState({ appointments: data.appointments });
    } else {
      this.setState({ appointments: [] });
    }
  }

  render() {
    // if (this.state.appointments === []) {
    // }

    return (
      <div className="container">
        <br></br>
        <input
          type="text"
          className="form-control"
          placeholder="Vehicle VIN"
          maxLength={17}
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
            List All VINs
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
            {this.state.appointments.map((appointment, i) => {
              let isComplete = "";
              if (appointment.completed === false) {
                isComplete = "d-none";
              }
              const dateObj = new Date(appointment.time);
              const options = { timeStyle: "short" };
              return (
                <tr className={isComplete} key={appointment.id}>
                  <td>{appointment.auto_vin}</td>
                  <td>{appointment.customer_name}</td>
                  <td>{dateObj.toLocaleDateString()}</td>
                  <td>{dateObj.toLocaleTimeString([], options)}</td>
                  <td>{appointment.technician.name}</td>
                  <td>{appointment.reason}</td>
                  <td>{appointment.vip ? "yes" : "no"}</td>
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
