import React, { useEffect, useState } from "react";
import { data } from "./data.js";

// Elviza method
// function ServiceHistoryTable(props) {
//   return (
//     <tr key={props.appointment.id}>
//       <td>{props.appointment.auto_vin}</td>
//     </tr>
//   );
// }

function ServiceHistoryFilter() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);



  
  useEffect(() => {
    loadData();
    getData();
  }, []);

  const loadData = async () => {
    await fetch("http://localhost:8080/api/appointments/")
    .then(response => response.json())
    .then(data => setData(data));

  }



  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <h1>Service History</h1>

      <ul className="list">
        {this.state.appointments
          .filter((appointment) =>
            appointment.auto_vin.toLowerCase().includes(query)
          )
          .map((appointment) => (
            <tr key={appointment.id}>
              <li>{appointment.auto_vin}</li>
            </tr>
          ))}
      </ul>
    </div>
  );
}

// class ServiceHistoryList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appointments: [],
//       vin: "",
//     };
//   }

//   async componentDidMount() {
//     const url = "http://localhost:8080/api/appointments/";
//     const response = await fetch(url);

//     if (response.ok) {
//       const data = await response.json();
//       this.setState({ appointments: data.appointments });
//     }
//   }

//   render() {
//     return (
//         <div className="app">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="search"
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <h1>Service History</h1>

//           <ul className="list">
//             {this.state.appointments
//               .filter((appointment) =>
//                 appointment.auto_vin.toLowerCase().includes(query)
//               )
//               .map((appointment) => (
//                 <tr key={appointment.id}>
//                   <li>{appointment.auto_vin}</li>
//                 </tr>
//               ))}
//           </ul>
//         </div>
//       );
//   }
// }

// export default ServiceHistoryList;
export default ServiceHistoryFilter;
