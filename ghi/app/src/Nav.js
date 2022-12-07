import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <NavLink className="navbar-link" to="/manufacturers/new">Create Manufacturer</NavLink>
        <div>
        <NavLink className="navbar-link" to="/manufacturers">Manufacturer List</NavLink>
        </div>
        <NavLink className="nav-link" to="/models">Vehicle Models</NavLink>
        <NavLink className="nav-link" to="/models/new">New Vehicle Model</NavLink>
        <NavLink className="nav-link" to="/automobiles/new">New Automobile</NavLink>
        <NavLink className="nav-link" to="/services/new">New Appointment</NavLink>
        <NavLink className="nav-link" to="/services/">Appointments</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          {/* <li className="nav-item">
          </li> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
