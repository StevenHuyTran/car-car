import React from "react";

class VehicleModelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      picture_url: "",
      manufacturers: "",
      models: [],
    };
  }

  async componentDidMount() {
    const url = await fetch("http://localhost:8100/api/models/");
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({ models: data.models });
    }
  }
  render() {
    return (
      <>
        <p></p>
        <h1 className="shadow p-4 mt-4">Vehicle Models</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {this.state.models.map((model) => {
              return (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>
                    <img src={model.picture_url} width="100" />
                  </td>
                  <td>{model.manufacturer.name}</td>
                </tr>
                
              );
            })}
          </tbody>
        </table>
        </>
    );
  }
}

export default VehicleModelList;
