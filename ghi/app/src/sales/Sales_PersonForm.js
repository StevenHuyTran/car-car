import React from "react";

class Sale_PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            employee_number: "",
        }
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        const value = event.target.value
        this.setState({ name: value});
    }
    
    handleEmploeeNumberChange(event){
        const value = event.target.value
        this.setState({ employee_number: value});
    }
    async handleSubmit(event){
        event.preventDefault();
        const data = {...this.state};
        console.log(data)
        const url = "http://localhost:8090/api/sales/sale_person"; 
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
          const newSalePerson = await response.json();
          console.log(newSalePerson);
         
          this.setState(cleared)
    }

    }
    

    
