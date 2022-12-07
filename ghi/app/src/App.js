import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import AutomobileForm from "./inventory/AutomobileForm";
import ManufacturersList from "./inventory/ManufacturersList";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AutomobileList from "./inventory/AutomobileList";
import EmployeeSalesList from "./sales/EmployeeSalesList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="/manufacturers/" element={<ManufacturersList />} />
            <Route path="manufacturers/new" element={<ManufacturerForm />} />
          </Route>
          <Route path="vehicles">
          <Route path="models" element={<VehicleModelList />} />
          <Route path="models/new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
          <Route path="automobiles/new" element={<AutomobileForm />} />
          <Route path="automobiles/" element={<AutomobileList />} />
          </Route>
          <Route path="services">
            <Route path="new" element={<AppointmentForm />} />
            <Route path="" element={<AppointmentList />} />
          </Route>
          <Route path="employee_sales" element={ <EmployeeSalesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
