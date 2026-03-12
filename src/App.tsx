import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import SessionsPage from "./pages/SessionsPage";
import SessionPage from "./pages/SessionPage";

function App() {
  return (
    <Routes>
      {/* Route groups */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route
          path="/sessions/:sessionId/details/:sessionTitle"
          element={<SessionPage />}
        />
      </Route>

      {/* 404 page */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;