import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { RequirePermission } from "../shared/permissions/guards/RequirePermission";

const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));
const Profile = React.lazy(() => import("../pages/Profile"));
const ProfileDetails = React.lazy(() => import("../pages/ProfileDetails"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/profile"
        element={
          <RequirePermission
            permission="viewProfileDetails"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <Profile />
          </RequirePermission>
        }
      />
      <Route
        path="/profile/details"
        element={
          <RequirePermission
            permission="viewProfileDetails"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <ProfileDetails />
          </RequirePermission>
        }
      />

      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
