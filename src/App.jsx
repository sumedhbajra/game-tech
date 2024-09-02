import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewGames from "./pages/ViewGames";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Finance from "./pages/Finance";
import User from "./pages/User";
import Company from "./pages/Company";
import Employee from "./pages/Employee";
import Calender from "./pages/Calender";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";

import "./styles/index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="viewgames" element={<ViewGames />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="finance" element={<Finance />} />
            <Route path="user" element={<User />} />
            <Route path="company" element={<Company />} />
            <Route path="employee" element={<Employee />} />
            <Route path="calender" element={<Calender />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/settings" element={<Setting />} />
          </Route>
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
