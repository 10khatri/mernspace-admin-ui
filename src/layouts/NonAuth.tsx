import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store";

export default function NonAuth() {
  const { user } = useAuthStore();
  if (user !== null) return <Navigate to="/" replace={true} />;
  return (
    <div>
      NonAuth
      <Outlet />
    </div>
  );
}
