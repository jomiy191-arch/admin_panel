import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import Students from "./Components/pages/Students";
import Teachers from "./Components/pages/Teachers";
import Library from "./Components/pages/Library"; // yangi sahifa
import Events from "./Components/pages/Events";   // yangi sahifa
import Login from "./Components/pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Protected Layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            {/* Default route */}
            <Route index element={<Navigate to="/students" replace />} />

            {/* Existing pages */}
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />

            {/* New pages */}
            <Route path="library" element={<Library />} />
            <Route path="events" element={<Events />} />
          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-3xl font-bold text-red-500">
                Page not found
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
