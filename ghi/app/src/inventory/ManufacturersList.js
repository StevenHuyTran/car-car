import React from "react";

class ManufacturerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manufacturer: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            this.setState({ manufacturers: data.manufacturers});
        }
    }

    render() {
        return (
            
        )
    }
}