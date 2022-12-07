import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppointmentForm from "./service/AppointmentForm";
import VehicleModelForm from "./inventory/VehicleModelForm";
import VehicleModelList from "./inventory/VehicleModelList";
import ManufacturerForm from "./inventory/ManufacturerForm";
import AutomobileForm from "./inventory/AutomobileForm";
import ManufacturersList from "./inventory/ManufacturersList";
import MainPage from "./MainPage";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="/manufacturers/" element={<ManufacturersList />} />
          </Route>
          <Route path="manufacturers">
            <Route path="manufactures/new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models" element={<VehicleModelList />} />
          <Route path="models/new" element={<VehicleModelForm />} />
          {/* once automobileList is done, create parent route for automobileFirm */}
          <Route path="automobiles/new" element={<AutomobileForm />} />
          <Route path="services">
            <Route path="new" element={<AppointmentForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
