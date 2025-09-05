/**
 * Единый список маршрутов приложения.
 * - Любой маршрут с полем `permission` автоматически оборачивается в RequirePermission
 *   с fallback на /access-denied.
 * - Ленивая загрузка сохраняется.
 * - Весь набор роутов читается из одного массива `routes`.
 */

import * as React from "react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { RequirePermission } from "../shared/permissions/guards/RequirePermission";
import type { accessRules } from "../shared/permissions/rules";
import { RoutesFallback } from "./RoutesFallback";

// ===== Lazy pages =====
const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));

const Profile = React.lazy(() => import("../pages/Profile"));
const ProfileDetails = React.lazy(() => import("../pages/ProfileDetails"));

const Properties = React.lazy(() => import("../pages/Properties"));
const PropertyDetails = React.lazy(() => import("../pages/PropertyDetails"));
const PropertyCreate = React.lazy(() => import("../pages/PropertyCreate"));
const PropertyUpdate = React.lazy(() => import("../pages/PropertyUpdate"));
const PropertyOwners = React.lazy(() => import("../pages/PropertyOwners"));
const PropertyCategories = React.lazy(
  () => import("../pages/PropertyCategories"),
);

const Users = React.lazy(() => import("../pages/Users"));
const Customers = React.lazy(() => import("../pages/Customers"));

const Dashboards = React.lazy(() => import("../pages/Dashboards"));

const AccessDenied = React.lazy(() => import("../pages/System/AccessDenied"));
const PageNotFound = React.lazy(() => import("../pages/System/PageNotFound"));

/**
 * Тип разрешения, синхронизированный с accessRules.
 */
type Permission = keyof typeof accessRules;

/**
 * Описание одного маршрута.
 */
interface RouteConfig {
  /** Путь маршрута (как в <Route path=.../>) */
  path: string;
  /** Элемент страницы (JSX) */
  element: React.JSX.Element;
  /** Необязательное требование на разрешение (accessRules key) */
  permission?: Permission;
}

/**
 * Универсальная обёртка: если есть permission — добавляем RequirePermission с fallback.
 */
const withPermission = (
  element: React.JSX.Element,
  permission?: Permission,
) => {
  if (!permission) return element;
  return (
    <RequirePermission
      permission={permission}
      fallback={<Navigate to="/access-denied" replace />}
    >
      {element}
    </RequirePermission>
  );
};

/**
 * Единый список маршрутов приложения.
 * Добавляй новые строки сюда — логика оборачивания правами единообразная.
 */
const routes: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },

  { path: "/profile", element: <Profile />, permission: "viewProfile" },
  {
    path: "/profile/details",
    element: <ProfileDetails />,
    permission: "viewProfileDetails",
  },

  // Properties
  {
    path: "/properties",
    element: <Properties />,
    permission: "viewPropertyList",
  },
  {
    path: "/properties/:id",
    element: <PropertyDetails />,
    permission: "viewPropertyDetails",
  },
  {
    path: "/properties/create",
    element: <PropertyCreate />,
    permission: "viewPropertyCreate",
  },
  {
    path: "/properties/:id/update",
    element: <PropertyUpdate />,
    permission: "viewPropertyUpdate",
  },
  {
    path: "/properties/owners",
    element: <PropertyOwners />,
    permission: "viewPropertyOwners",
  },
  {
    path: "/properties/categories",
    element: <PropertyCategories />,
    permission: "viewPropertyCategories",
  },

  // Agency
  { path: "/agency/users", element: <Users />, permission: "viewAgencyUsers" },
  {
    path: "/agency/customers",
    element: <Customers />,
    permission: "viewAgencyCustomers",
  },
  {
    path: "/agency/dashboards",
    element: <Dashboards />,
    permission: "viewAnalytics",
  },

  // System
  { path: "/access-denied", element: <AccessDenied /> },
  { path: "*", element: <PageNotFound /> },
];

export const RouteList: React.FC = () => {
  return (
    <Suspense fallback={<RoutesFallback />}>
      <Routes>
        {routes.map(({ path, element, permission }) => (
          <Route
            key={path}
            path={path}
            element={withPermission(element, permission)}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
