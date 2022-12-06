import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleModelForm from "./inventory/VehicleModelForm";
import MainPage from "./MainPage";
import Nav from "./Nav";
import VehicleModelForm from "./inventory/VehicleModelForm";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models/new" element={<VehicleModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
