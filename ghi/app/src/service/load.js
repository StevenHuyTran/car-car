

class Loader extends React.Component {

    async componentDidMount() {
    //Loading Vin info
    const data = { ...this.state };
    const url = `http://localhost:8080/api/appointments/${data["vin"]}`;
    // const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ appointments: data.appointments });
    }
  }



}

export default Loader;
