import React from "react";

class VehicleModelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture_url: "",
      manufacturers: [],
      newVehicle: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.manufacturers;
    delete data.newVehicle;
    console.log(data);

    const vehicleUrl = "http://localhost:8100/api/models";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const cleared = {
      name: "",
      picture_url: "",
      manufacturers: "",
      newVehicle: true,
    };

    this.setState(cleared);
    window.location.href = "/models";
  }

  handleNameChange(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handlePictureUrlChange(event) {
    const value = event.target.value;
    this.setState({ picture_url: value });
  }

  handleManufacturerChange(event) {
    const value = event.target.value;
    this.setState({ manufacturers: value });
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/manufacturers";

    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  render() {
    let messageClasses = "alert alert-success d-none mb-0";
    let formClasses = "";
    if (this.state.newVehicle) {
      messageClasses = "alert alert-success mb-0";
      formClasses = "d-none";
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a vehicle model</h1>
            <form onSubmit={this.handleSubmit} id="create-vehicle-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleNameChange}
                  value={this.state.name}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handlePictureUrlChange}
                  value={this.state.picture_url}
                  placeholder="pictureurl"
                  required
                  type="text"
                  name="pictureurl"
                  id="pictureurl"
                  className="form-control"
                />
                <label htmlFor="pictureurl">Picture URL</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleManufacturerChange}
                  value={this.state.manufacturer_id}
                  required
                  name="manufacturer"
                  id="manufacturer"
                  className="form-select"
                >
                  <option value="">Choose a Manufacturer</option>
                  {this.state.manufacturers.map((manufacturer) => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        <div className={messageClasses} id="success-message">
          New Vehicle Created!
        </div>
      </div>
    );
  }
}
export default VehicleModelForm;
