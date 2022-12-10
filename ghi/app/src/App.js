import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentForm from "./service/AppointmentForm";
import AppointmentList from "./service/AppointmentList";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import AutomobileForm from "./inventory/AutomobileForm";
import ManufacturersList from "./inventory/ManufacturersList";
import TechnicianForm from "./service/TechnicianForm";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AutomobileList from "./inventory/AutomobileList";
import EmployeeSalesList from "./sales/EmployeeSalesList";
import Potential_CustomerForm from "./sales/Potential_CustomerForm";
import Sale_RecordForm from "./sales/Sale_RecordForm";
import Sales_PersonForm from "./sales/Sales_PersonForm";
import SalesList from "./sales/SalesList";
import ServiceHistoryList from "./service/ServiceHistory";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="manufacturers">
            <Route path="/manufacturers/" element={<ManufacturersList />} />
            <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          </Route>

          <Route path="models">
            <Route path="" element={<VehicleModelList />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>

          <Route path="services">
            <Route path="" element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistoryList />} />
          </Route>

          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>

          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
          <Route path="employee_sales" element={<EmployeeSalesList />} />
          <Route
            path="/sales/potential_customer"
            element={<Potential_CustomerForm />}
          />
          <Route path="/sales/sale_record" element={<Sale_RecordForm />} />
            <Route path="/sales/sales_list" element={< SalesList />} />
            <Route path="sales">
            <Route path="create" element={ <Sales_PersonForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
