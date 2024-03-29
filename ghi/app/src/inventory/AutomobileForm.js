import React from "react";

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      year: "",
      vin: "",
      model_id: "",
      models: [],
      newAutomobile: false,
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleVinChange = this.handleVinChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.models;
    delete data.newAutomobile;

    const url = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    console.log(response);
    if (response.ok) {
      const cleared = {
        color: "",
        year: "",
        vin: "",
        model_id: "",
        newAutomobile: true,
      };

      this.setState(cleared);
      this.componentDidMount();
    }
  }

  async componentDidMount() {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
    }
  }

  handleColorChange(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleYearChange(event) {
    const value = event.target.value;
    this.setState({ year: value });
  }

  handleVinChange(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }

  handleModelChange(event) {
    const value = event.target.value;
    this.setState({ model_id: value });
  }

  render() {
    let messageClasses = "alert alert-success d-none mb-0";
    let formClasses = "";
    if (this.state.newAutomobile) {
      messageClasses = "alert alert-success alert-dismissible mb-0";
      formClasses = "d-none";
    }

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add an automobile to inventory</h1>
            <form onSubmit={this.handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleColorChange}
                  value={this.state.color}
                  placeholder="color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={this.handleYearChange}
                  value={this.state.year}
                  placeholder="year"
                  required
                  type="number"
                  name="year"
                  id="year"
                  className="form-control"
                />
                <label htmlFor="year">Year</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={this.handleVinChange}
                  value={this.state.vin}
                  placeholder="vin"
                  required
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">VIN</label>
              </div>

              <div className="mb-3">
                <select
                  onChange={this.handleModelChange}
                  value={this.state.model_id}
                  required
                  name="model_id"
                  id="model_id"
                  className="form-select"
                >
                  <option value="">Choose a Model</option>
                  {this.state.models.map((model) => {
                    return (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
        <p></p>
        <div className={messageClasses} id="success-message">
          Successfully added automobile to inventory!
        </div>
      </div>
    );
  }
}

export default AutomobileForm;
