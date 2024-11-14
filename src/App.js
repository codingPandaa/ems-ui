import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AllEmployee from "./components/AllEmployee.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import EditEmployee from "./components/EditEmployee.jsx";
import Ems from "./components/Ems.jsx";
import AllDepartment from "./components/AllDepartment.jsx";
import EditDepartment from "./components/EditDepartment.jsx";
import AddDepartment from "./components/AddDepartment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Ems></Ems>}></Route>
        <Route
          path="/allEmployee"
          element={<AllEmployee></AllEmployee>}
        ></Route>
        <Route
          path="/addEmployee"
          element={<AddEmployee></AddEmployee>}
        ></Route>
        <Route
          path="/editEmployee/:id"
          element={<EditEmployee></EditEmployee>}
        ></Route> 
        <Route
          path="/allDepartment"
          element={<AllDepartment></AllDepartment>}
        ></Route>
        <Route
          path="/addDepartment"
          element={<AddDepartment></AddDepartment>}
        ></Route>
        <Route
          path="/editDepartment/:id"
          element={<EditDepartment></EditDepartment>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
