import React from "react";


class ServiceHistoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            vin: "",
        };
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleVinSearch = this.handleVinSearch.bind(this);

    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({ vin: value});
    }

    async handleVinSearch(event) {
        event.preventDefault();
        //Loading Vin info
        const data = { ...this.state };
        const url = 
    }



}
