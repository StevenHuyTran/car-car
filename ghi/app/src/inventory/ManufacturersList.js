import React from "react";

function ManufacturerTable(props) {
    return (
        <tr key={props.manufacturer.id}>
            <td>{props.manufacturer.name}</td>
        </tr>
    )
}


class ManufacturersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manufacturers: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            this.setState({ manufacturers: data.manufacturers});
        }
    }

    render() {
        return (
            <>
            <div>
                <h1 className="shadow p-4 mt-4">Manufactures</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.manufacturers.map((manufacturer) => {
                            return (
                                <ManufacturerTable manufacturer={manufacturer} key={manufacturer.id}
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
    export default ManufacturersList;
    