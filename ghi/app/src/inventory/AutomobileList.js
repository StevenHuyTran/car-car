import React from "react";

function AutomobileTable(props) {
    return (
        <tr key={props.automobile.id}>
            <td>{props.automobile.vin}</td>
            <td>{props.automobile.color} </td>
            <td>{props.automobile.year} </td>
            <td>{props.automobile.model.name} </td>
            <td>{props.automobile.model.manufacturer.name}</td>
        </tr>
    )
}

class AutomobileList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        automobiles: [],
      }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch (url);
        const data = await response.json();

        if (response.ok) {
            console.log(data)
            this.setState({ automobiles: data.autos});
        }
    }

    render() {
        return (
            <>
            <div>
                <h1 className="shadow p-4 mt-4">Vehicle Model</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th >VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.automobiles.map((automobile) => {
                            return (
                                <AutomobileTable
                                automobile={automobile}
                                key={automobile.id}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </>
        );
    }
}
export default AutomobileList;





