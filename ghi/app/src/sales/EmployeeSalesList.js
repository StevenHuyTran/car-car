import React from "react";

function EmployeeSalesTable({ sale }) {
  return (
    <tr key={sale.sales_person.id}>
      <td>{sale.sales_person.name}</td>
      <td>{sale.customer.name}</td>
      <td>{sale.automobile.vin} </td>
      <td>${sale.price} </td>
    </tr>
  );
}

class EmployeeSalesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeList: [],
      employee: "",
      sale_record: [],
    };
    this.handleEmployeeChange = this.handleEmployeeChange.bind(this);
  }

  async handleEmployeeChange(event) {
    const value = event.target.value;
    this.setState({ employee: value });
    const recordsUrl = "http://localhost:8090/api/sales/sale_record";
    const recordsresponse = await fetch(recordsUrl);
    const recordsdata = await recordsresponse.json();

    this.setState({ ...recordsdata });
  }

  async componentDidMount() {
    const url = "http://localhost:8090/api/sales/";

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      // console.log(data)
      this.setState({ employeeList: data.sales_person });
    }
  }
  render() {
    return (
      <>
        <div>
          <h1 className="shadow p-4 mt-4">Employee sales history</h1>
          <select
            onChange={this.handleEmployeeChange}
            value={this.state.employee}
            required
            name="employee"
            id="employee"
            className="form-select"
          >
            <option value="">Choose a sales person</option>
            {/* {console.log(this)} */}
            {this.state.employeeList.map((employee) => {
              return (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              );
            })}
          </select>

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
              {this.state.sale_record
                .filter((x) => x.sales_person.id == this.state.employee)
                .map((employee_sales_list) => {
                  return (
                    <EmployeeSalesTable
                      sale={employee_sales_list}
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
