import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { RequirePermission } from "../shared/permissions/guards/RequirePermission";

const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));

const Profile = React.lazy(() => import("../pages/Profile"));
const ProfileDetails = React.lazy(() => import("../pages/ProfileDetails"));

const Properties = React.lazy(() => import("../pages/Properties"));
const PropertyDetails = React.lazy(() => import("../pages/PropertyDetails"));
const PropertyCreate = React.lazy(() => import("../pages/PropertyCreate"));
const PropertyUpdate = React.lazy(() => import("../pages/PropertyUpdate"));

const Users = React.lazy(() => import("../pages/Users"));
const Customers = React.lazy(() => import("../pages/Customers"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<Profile />} />
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
      <Route
        path="/properties"
        element={
          <RequirePermission
            permission="viewPropertyList"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <Properties />
          </RequirePermission>
        }
      />
      <Route
        path="/properties/:id"
        element={
          <RequirePermission
            permission="viewPropertyDetails"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <PropertyDetails />
          </RequirePermission>
        }
      />
      <Route
        path="/properties/create"
        element={
          <RequirePermission
            permission="viewPropertyCreate"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <PropertyCreate />
          </RequirePermission>
        }
      />
      <Route
        path="/properties/:id/update"
        element={
          <RequirePermission
            permission="viewPropertyUpdate"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <PropertyUpdate />
          </RequirePermission>
        }
      />

      <Route
        path="/agency/users"
        element={
          <RequirePermission
            permission="viewAgencyUsers"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <Users />
          </RequirePermission>
        }
      />

      <Route
        path="/agency/customers"
        element={
          <RequirePermission
            permission="viewAgencyCustomers"
            fallback={<Navigate to="/access-denied" replace />}
          >
            <Customers />
          </RequirePermission>
        }
      />

      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
