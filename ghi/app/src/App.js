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
          </Route>

          <Route path="automobiles">
            <Route path="" element={<AutomobileList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
