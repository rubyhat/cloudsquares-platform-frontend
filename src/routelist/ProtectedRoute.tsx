import React from "react";
import { Navigate } from "react-router-dom";
// TODO: Deprecated, delete after tests
interface Props {
  isAuth: boolean;
  children: React.JSX.Element;
  hasAccess?: boolean;
}

const ProtectedRoute = ({ isAuth, hasAccess = true, children }: Props) => {
  if (!isAuth) {
    return <Navigate to="/no-auth" replace />;
  }

  if (!hasAccess) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
};

export default ProtectedRoute;
