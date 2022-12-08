import React from "react";

class Sale_RecordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automobile: "",
            automobiles: [],
            sales_person: [],
            customer: [],
            price: ""
        }
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    async loadAutomobiles() {
        const response = await fetch('http://localhost:8000/api/automobiles');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          this.setState({
            automobile: data
          })
        } else {
          console.error(response);
        }
    }
    handleAutomobileChange(event){
        const value = event.target.value
        this.setState({ automobile: value});
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
        const data = {...this.state};
        console.log(data)
        const url = "http://localhost:8090/api/sales/sale_record"; 
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        }
        const response = await fetch(url, fetchConfig);
        console.log(response)
        if (response.ok) {
          const newSaleRecord = await response.json();
          console.log(newSaleRecord);
          const cleared = {
            automobile: [],
            sales_person: [],
            customer: [],
            price: '',
        }
          this.setState(cleared)
    }
    }
    componentDidMount(){
        this.loadAutomobiles()
    }

    render() {
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a sale record</h1>
              <form onSubmit = {this.handleSubmit} id="create-sale-record-form">
                    <div className="form-floating mb-3">
                      <select onChange = {this.handleAutomobileChange} value={this.state.vin} required name="vin" id="vin" className="form-select">
                          <option value="">Choose an automobile</option>
                          {console.log(this)}
                          {this.state.automobiles.map(automobiles => {
                              return (
                                  <option key = {automobiles.id} value = {automobiles.id}>
                                      {automobiles.vin}
                              </option>
                          )
                      })}
                      </select>
                    </div>          
                <div className="form-floating mb-3">
                      <select onChange = {this.handleSalesPersonChange} value={this.state.name} required name="name" id="name" className="form-select">
                          <option value="">Choose a sales person</option>
                          {console.log(this)}
                          {this.state.sales_person.map(sales_person => {
                              return (
                                  <option key = {sales_person.id} value = {sales_person.id}>
                                      {sales_person.name}
                              </option>
                          )
                      })}
                      </select>
                    </div> 
                <div className="form-floating mb-3">
                      <select onChange = {this.handleCustomerChange} value={this.state.name} required name="name" id="name" className="form-select">
                          <option value="">Choose a customer</option>
                          {console.log(this)}
                          {this.state.customer.map(customer => {
                              return (
                                  <option key = {customer.id} value = {customer.id}>
                                      {customer.name}
                              </option>
                          )
                      })}
                      </select>
                    </div> 
                <div className="form-floating mb-3">
                  <input onChange ={this.handlePriceChange} placeholder="Price" required type="number" name="Price" id="Price" className="form-control" value={this.state.price} />
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
      
    