import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerForm from "./inventory/ManufacturerForm";
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
         <Route path="models/new" element={<VehicleModelForm />} />
         <Route path="manufacturers">
            <Route path="/manufacturers/" element={ <ManufacturersList />} />
            </Route>
            <Route path="manufacturers">
            <Route path="/manufacturers/new" element={ <ManufacturerForm />} />
          </Route>
          <Route path="models" element={<VehicleModelList />} />
          <Route path="models/new" element={<VehicleModelForm />} />
          <Route path="automobiles" element={ <AutomobileList />} />
          <Route path="employee_sales" element={ <EmployeeSalesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
