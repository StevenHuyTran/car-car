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
        console.log(data)
      
      
        // delete data.potentialCustomers
      
        // delete data.automobiles
        
        // delete data.salesPerson

        // console.log(data)
        const url = "http://localhost:8090/api/sales/sale_record"; 
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        };
        console.log(data)
        const response = await fetch(url, fetchConfig);
        // console.log(response)
        if (response.ok) {
          const newSaleRecord = await response.json();
        
          // console.log(newSaleRecord);
          const cleared = {
            vin: '',
            sales_person: '',
            customer: '',
            price: '',
        }
          this.setState(cleared)
        }
    };

// import React from "react";

// class Sale_RecordForm extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       price: '',
//       salesPerson: [],
//       potentialCustomer: [],
//       automobiles: []
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handlePriceChange = this.handlePriceChange.bind(this);
//     this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
//     this.handlePotentialCustomerChange = this.handlePotentialCustomerChange.bind(this);
//     this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const data = { ...this.state };
//     data.sales_person = data.salesPerson;
//     data.potential_customer = data.potentialCustomer;
//     delete data.price;
//     delete data.automobile;
//     delete data.salesPerson;
//     delete data.potentialCustomer;
//     delete data.salesPersons;
//     delete data.potentialCustomers;
//     delete data.automobiles;
//     console.log("Submit data: ", data);

//     const postUrl = 'http://localhost:8090/api/sales/sales_list';
//     const fetchConfig = {
//       method: "post",
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const response = await fetch(postUrl, fetchConfig);
//     if (response.ok) {
//       const newSale = await response.json();
//       console.log("New Sale: ", newSale);
//     }

//     const cleared = {
//       price: '',
//       salesPerson: '',
//       potentialCustomer: '',
//       automobile: '',
//     };

//     this.setState(cleared);

//   }

//   handlePriceChange(event) {
//     const value = event.target.value;
//     this.setState({ price: value })
//   }

//   handleSalesPersonChange(event) {
//     const value = event.target.value;
//     this.setState({ salesPerson: value })
//   }

//   handlePotentialCustomerChange(event) {
//     const value = event.target.value;
//     this.setState({ potentialCustomer: value })
//   }

//   handleAutomobileChange(event) {
//     const value = event.target.value;
//     this.setState({ automobile: value })
//   }
    async componentDidMount() {
        const url1 = 'http://localhost:8100/api/automobiles/';
        const url2 = 'http://localhost:8090/api/sales/';
        const url3 = 'http://localhost:8090/api/sales/potential_customer';
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
        if (response1.ok && response2.ok && response3.ok) {
          const data1 = await response1.json();
          const data2 = await response2.json();
          const data3 = await response3.json();
          this.setState({automobiles: data1.autos, salesPerson: data2.sales_person, potentialCustomers: data3.potential_customer})
      }    
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
                          {/* {console.log(this)} */}
                          {this.state.automobiles.map(automobile => {
                              return (
                                  <option key = {automobile.id} value = {automobile.vin}>
                                      {automobile.vin}
                              </option>
                          )
                      })}
                      </select>
                    </div>          
                <div className="form-floating mb-3">
                      <select onChange = {this.handleSalesPersonChange} value={this.state.sales_person} required name="sales_person" id="sales_person" className="form-select">
                          <option value="">Choose a sales person</option>
                          {console.log(this)}
                          {this.state.salesPerson.map(salesPersons => {
                              return (
                                  <option key = {salesPersons.id} value = {salesPersons.id}>
                                      {salesPersons.name}
                              </option>
                          )
                      })}
                      </select>
                    </div> 
                <div className="form-floating mb-3">
                      <select onChange = {this.handleCustomerChange} value={this.state.customer} required name="customer" id="customer" className="form-select">
                          <option value="">Choose a customer</option>
                          {/* {console.log(this)} */}
                          {this.state.potentialCustomers.map(potentialCustomer => {
                              return (
                                  <option key = {potentialCustomer.id} value = {potentialCustomer.id}>
                                      {potentialCustomer.name}
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
      
    