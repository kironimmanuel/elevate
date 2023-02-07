import React, { FunctionComponent } from "react";
import { Navigate, RouteComponentProps } from "react-router-dom";
import { useAppContext } from "../context/appContext";

interface ProtectedRouteProps extends RouteComponentProps {
  children: React.ReactNode;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  children,
}) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
