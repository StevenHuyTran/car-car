import React from "react";

class TechnicianForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      employeeNumber: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeNumberChange =
      this.handleEmployeeNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleEmployeeNumberChange(event) {
    const value = event.target.value;
    this.setState({ employeeNumber: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    data.employee_number = data.employeeNumber;
    delete data.employeeNumber;
    console.log(data);

    const body = JSON.stringify(data);

    const url = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const newTechnician = await response.json();
      console.log(newTechnician);

      const cleared = {
        name: "",
        employeeNumber: "",
      };
      this.setState(cleared);
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
              <h1>Create a technician</h1>
              <form onSubmit={this.handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handleNameChange}
                    placeholder="name"
                    value={this.state.name}
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={this.handleEmployeeNumberChange}
                    placeholder="Employee number"
                    value={this.state.employeeNumber}
                    required
                    type="number"
                    id="employeeNumber"
                    name="employeeNumber"
                    className="form-control"
                  />
                  <label htmlFor="employeeNumber">Employee number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicianForm;
