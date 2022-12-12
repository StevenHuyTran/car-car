import React from "react";

class Sale_RecordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            automobiles: [],
            salesPerson: [],
            potentialCustomers: [],
            customer: "",
            price: "",
            sales_person: ""
        }
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAutomobileChange(event){
        const value = event.target.value
        this.setState({ vin: value});
    }

    handleSalesPersonChange(event){
        const value = event.target.value
        this.setState({ sales_person: value});
    }

    handleCustomerChange(event){
        const value = event.target.value
        this.setState({ customer: value});
    }

    handlePriceChange(event){
        const value = event.target.value
        this.setState({ price: value});
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {
          vin: this.state.vin,
          sales_person: this.state.sales_person,
          customer: this.state.customer,
          price: this.state.price,
        };
        const url = "http://localhost:8090/api/sales/sale_record";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const newSaleRecord = await response.json();
          const cleared = {
            vin: '',
            sales_person: '',
            customer: '',
            price: '',
        }
          this.setState(cleared)
        }
    };

  async componentDidMount() {
    const url1 = "http://localhost:8100/api/automobiles/";
    const url2 = "http://localhost:8090/api/sales/";
    const url3 = "http://localhost:8090/api/sales/potential_customer";
    const response1 = await fetch(url1);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    if (response1.ok && response2.ok && response3.ok) {
      const data1 = await response1.json();
      const data2 = await response2.json();
      const data3 = await response3.json();
      this.setState({
        automobiles: data1.autos,
        salesPerson: data2.sales_person,
        potentialCustomers: data3.potential_customer,
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Record a new sale</h1>
            <form onSubmit={this.handleSubmit} id="create-sale-record-form">
              <div className="form-floating mb-3">
                <select
                  onChange={this.handleAutomobileChange}
                  value={this.state.vin}
                  required
                  name="vin"
                  id="vin"
                  className="form-select"
                >
                  <option value="">Choose an automobile</option>
                  {this.state.automobiles.map((automobile) => {
                    return (
                      <option key={automobile.id} value={automobile.vin}>
                        {automobile.vin}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <select
                  onChange={this.handleSalesPersonChange}
                  value={this.state.sales_person}
                  required
                  name="sales_person"
                  id="sales_person"
                  className="form-select"
                >
                  <option value="">Choose a sales person</option>
                  {this.state.salesPerson.map((salesPersons) => {
                    return (
                      <option key={salesPersons.id} value={salesPersons.id}>
                        {salesPersons.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <select
                  onChange={this.handleCustomerChange}
                  value={this.state.customer}
                  required
                  name="customer"
                  id="customer"
                  className="form-select"
                >
                  <option value="">Choose a customer</option>
                  {this.state.potentialCustomers.map((potentialCustomer) => {
                    return (
                      <option
                        key={potentialCustomer.id}
                        value={potentialCustomer.id}
                      >
                        {potentialCustomer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handlePriceChange}
                  placeholder="Price"
                  required
                  type="number"
                  name="Price"
                  id="Price"
                  className="form-control"
                  value={this.state.price}
                />
                <label htmlFor="phone_number">Price</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Sale_RecordForm;
