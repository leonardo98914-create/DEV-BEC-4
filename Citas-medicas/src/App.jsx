import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import AppointmentForm from "./pages/AppointmentForm";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/appointment"
          element={<AppointmentForm />}
        />

        <Route
          path="/appointments"
          element={<Appointments />}
        />
      </Routes>
    </>
  );
}

export default App;