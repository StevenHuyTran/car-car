import React from "react";

class Potential_CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            phone_number: "",
        }
        this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value})
    }
    handleAddressChange(event){
        const value = event.target.value
        this.setState({ address: value});
    }
        
    handlePhoneNumberChange(event){
        const value = event.target.value
        this.setState({ phone_number: value});
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};  
        const url = "http://localhost:8090/api/sales/potential_customer"; 
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
      const newPotentialCustomer = await response.json();
      console.log(newPotentialCustomer);
      const cleared = {
        name:"",
        address:"",
        phone_number:"",
      };
      this.setState(cleared)
}
}
render() {
    let messageClasses = "alert alert-success d-none mb-0";
    let formClasses = "";
    if (this.state.newVehicle) {
      messageClasses = "alert alert-success mb-0";
      formClasses = "d-none";
    }
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a potential customer</h1>
            <form onSubmit = {this.handleSubmit} id="create-sales-person-form">
          <div className="form-floating mb-3">
          <input onChange ={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange ={this.handleAddressChange} placeholder="Address" required type="text" name="Address" id="Address" className="form-control" value={this.state.address} />
            <label htmlFor="address">Address</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange ={this.handlePhoneNumberChange} placeholder="Phone Number" required type="digit" name="phoneNumber" id="phoneNumber" className="form-control" value={this.state.phone_number} />
            <label htmlFor="phone_number">Phone Number</label>
          </div>
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
    <div className={messageClasses} id="success-message">
          Successfully added potential customer!
        </div>
  </div>
    );
  }
}
export default Potential_CustomerForm;