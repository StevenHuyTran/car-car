import React from "react";

class Sales_PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            employee_number: '',
        }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(event){
        const value = event.target.value
        this.setState({ name: value});
    }

    handleEmployeeNumberChange(event){
        const value = event.target.value
        this.setState({ employee_number: value});
    }

    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        const url = "http://localhost:8090/api/sales/"; 
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
          const newSalesPerson = await response.json();
          const cleared = {
            name:'',
            employee_number:'',
          };
          this.setState(cleared)
    }
    }
    
    render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Add a sales person</h1>
                <form onSubmit = {this.handleSubmit} id="create-sales-person-form">
                  <div className="form-floating mb-3">
                    <input onChange ={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" value={this.state.name} />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange ={this.handleEmployeeNumberChange} placeholder="Employee number" required type="number" name="employee_number" id="employee_number" className="form-control" value={this.state.employee_number} />
                    <label htmlFor="employee_number">Employee Number</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
            );
          }
        }
export default Sales_PersonForm;
        
    

    
