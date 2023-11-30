import { Outlet } from "react-router-dom";
import { DashboardRoute } from "./dashboard-sidebar";

const DashboardRoot = () => {
  return (
    <div className="grid grid-cols-12">
      {/* side bar */}
      <div className="col-span-3 border">
        <DashboardRoute />
      </div>
      {/* side bar */}

      {/* Outlet [children] */}
      <div className="border col-span-9">
        <Outlet />
      </div>
      {/* Outlet [children] */}
    </div>
  );
};

export default DashboardRoot;
