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
            color="8F1D79"
          >
            Inventory
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink
                className="nav-item dropdown-item"
                to="/manufacturers/new"
              >
                Add Manufacturer
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/models/new">
                Add Model
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/automobiles/new">
                Add Automobile
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/manufacturers">
                Manufacturers List
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/models">
                Model List
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/automobiles">
                Automobile List
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
            color="8F1D79"
          >
            Service
          </a>

          <ul className="dropdown-menu">
            <li>
              <NavLink className="nav-link" to="/services/new">
                New Appointment
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-item dropdown-item" to="/services/">
                Service Appointments
              </NavLink>
            </li>

            <li>
              <NavLink className="nav-link" to="/services/history">
                Service History
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/technicians/new">
                Add Technician
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
            color="8F1D79"
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
