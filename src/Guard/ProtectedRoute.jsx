import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
  let user = localStorage.getItem("token");
  let location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
}

export default ProtectedRoute;
