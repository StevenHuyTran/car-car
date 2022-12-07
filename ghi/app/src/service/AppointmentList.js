import React from "react";

class AppointmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }

  async componentDidMount() {
    // if this url loads, set the state of the
    // appointment empty appointment list to reflect current appointments
    const url = "http://localhost:8080/api/services/";
    const response = await fetch(url);
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      this.setState({ appointments: data.appointments });
    }
  }

  async handleClick(event) {
    event.preventDefault();
    const statusInput = event.target.value;
    const serviceId = event.target.name;
    const data = { status: statusInput };
    const body = JSON.stringify(data);

    const url = `http://localhost:8080/api/services/${serviceId}/`;
    const fetchConfig = {
      method: "put",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const updatedService = await response.json();
      console.log(updatedService);
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="alert">
            <div></div>
          </div>
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Appointment List</h1>
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
                  <tr>
                    <td>
                      <button type="button" className="btn btn-danger">
                        Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentList;
