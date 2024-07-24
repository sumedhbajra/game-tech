import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewGames from "./pages/ViewGames";

function App() {
  const a = 0;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="viewgames" element={<ViewGames />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
