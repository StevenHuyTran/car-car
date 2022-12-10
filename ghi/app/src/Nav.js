import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          CarCar
        </NavLink>

        <li className="nav-link dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Inventory
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="nav-item dropdown-item" to="/manufacturers">
                Manufacturers List
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item dropdown-item"
                to="/manufacturers/new"
              >
                Add Manufacturer
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/automobiles/new">
                New Automobile
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/automobiles">
                Automobile List
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/models">
                Vehicle Models
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/models/new">
                New Vehicle Model
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-link dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Service
          </a>

          <ul className="dropdown-menu">
            <li>
              <NavLink className="nav-item dropdown-item" to="/services/">
                Appointments
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/services/new">
                New Appointment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/services/history">
                Service History
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/technicians/new">
                Create Technician
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-link dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sales
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="nav-link" to="/employee_sales">
                Employee Sales List
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/sales/create">
                Sales Person Form
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/sales/potential_customer">
                Potential Customer
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/sales/sale_record">
                Sale Record
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/sales/create">
                Sales Person Form
              </NavLink>
            </li>
          </ul>
        </li>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          {/* <li className="nav-item"></li> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
