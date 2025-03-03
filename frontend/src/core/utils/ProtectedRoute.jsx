import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ canNavigate, redirectPath = "/login" }) => {
  //! TODO activar este codigo para proteger las rutas
  // if (!canNavigate) {
  //   return <Navigate to={redirectPath} replace />;
  // }
  return <Outlet />;
};
ProtectedRoute.propTypes = {
  canNavigate: PropTypes.object,
  redirectPath: PropTypes.string.isRequired,
};