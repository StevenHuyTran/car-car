import React from "react";

function EmployeeSalesTable(props) {
    return (
        <tr key={props.sales_person.id}>
            <td>{props.sales_person.name}</td>
            <td>{props.customer.name}</td>
            <td>{props.automobile.vin} </td>
            <td>{props.sale_record.price} </td>
        </tr>
    )
}

class EmployeeSalesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee_sales_list: [],
        };
    }

    async componentDidMount() {
        const url = "http://localhost:8090/api/sales/sale_record/";
        const response = await fetch (url);
        const data = await response.json();

        if (response.ok) {
            console.log(data)
            this.setState({ employee_sales_list: data.sales });
        }
    }
    render() {
        return (
            <>
            <div>
                <h1 className="shadow p-4 mt-4">Employee sales history</h1>
                <div className="dropdown show">
                <a className="btn btn-secondary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select a sales person
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                </div>
            </div>
                <table className="table table-striped">
                <thead>
                        <tr>
                        <th>Sales Person</th>
                        <th>Customer</th>
                        <th>Vin Number</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employee_sales_list.map((employee_sales_list) => {
                            return (
                                <EmployeeSalesTable
                                employee_sales_list={employee_sales_list}
                                key={employee_sales_list.id}
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
export default EmployeeSalesList;

