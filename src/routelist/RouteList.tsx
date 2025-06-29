import React from "react";
import { Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* TODO: add this example to wiki */}
      {/* <Route
        path="/profile/details"
        element={
          <RequirePermission
            permission="viewProfileDetails"
            // fallback={<Navigate to="/access-denied" replace />}
          >
            <PrivatePage />
          </RequirePermission>
        }
      /> */}

      {/* TODO: deprecated, delete after tests */}
      {/* <Route
        path="/access-denied"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <AccessDenied />
          </ProtectedRoute>
        }
      /> */}

      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
