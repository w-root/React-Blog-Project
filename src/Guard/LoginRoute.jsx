import { Navigate, Outlet, useLocation } from "react-router-dom";

function LoginRoute() {
  let user = localStorage.getItem("token");
  let location = useLocation();

  if (user) return <Navigate to="/" state={{ from: location }} />;

  return <Outlet />;
}

export default LoginRoute;
