import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleModelForm from "./inventory/VehicleModelForm";
import ManufacturerForm from "./inventory/ManufacturerForm";
import MainPage from "./MainPage";
import Nav from "./Nav";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
         <Route path="models/new" element={<VehicleModelForm />} />
         <Route path="manufacturers/new" element={<ManufacturerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
