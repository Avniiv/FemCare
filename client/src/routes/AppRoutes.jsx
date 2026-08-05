
import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import Register from "../pages/auth/RegisterPage.jsx";

import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import CycleTrackerPage from "../pages/cycle/CycleTrackerPage.jsx";
import CalendarPage from "../pages/calendar/CalendarPage.jsx";
import NutritionPage from "../pages/nutrition/NutritionPage.jsx";
import WellnessPage from "../pages/wellness/WellnessPage.jsx";
import EmergencyPage from "../pages/emergency/EmergencyPage.jsx";
import ProfilePage from "../pages/profile/ProfilePage.jsx";
import SettingsPage from "../pages/settings/SettingsPage.jsx";

import ProtectedRoute from "../components/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cycle-tracker"
        element={
          <ProtectedRoute>
            <CycleTrackerPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <CalendarPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/nutrition"
        element={
          <ProtectedRoute>
            <NutritionPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wellness"
        element={
          <ProtectedRoute>
            <WellnessPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/emergency"
        element={
          <ProtectedRoute>
            <EmergencyPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;