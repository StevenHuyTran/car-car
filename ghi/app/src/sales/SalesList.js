import React from "react";

function SalesTable({sale}) {
    return (
        <tr key={sale.sales_person.id}>
            <td>{sale.sales_person.name}</td>
            <td>{sale.customer.name}</td>
            <td>{sale.automobile.vin} </td>
            <td>${sale.price} </td>
        </tr>
    )
}

class SalesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sales_list: [],
        };
    }

    async componentDidMount() {
        const url = "http://localhost:8090/api/sales/sales_list";
        const response = await fetch (url);
        const data = await response.json();

        if (response.ok) {
            this.setState({ sales_list: data.sales });
        }
    }
    render() {
        return (
            <>
            <div className="dropdown show">
                <h1 className="display-4 fw-bold text-center">All Sales</h1>
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
                        {this.state.sales_list.map((sales_list) => {
                            return (
                                <SalesTable
                                sale={sales_list}
                                key={sales_list.id}
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
export default SalesList;
