import { Outlet } from "react-router-dom";

export default function NonAuth() {
  return (
    <div>
      NonAuth
      <Outlet />
    </div>
  );
}
