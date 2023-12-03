import { Outlet, useNavigation } from "react-router-dom";
import { DashboardRoute } from "./dashboard-sidebar";

const DashboardRoot = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* <Modal /> */}
      <div className="grid grid-cols-12 gap-2">
        {/* side bar */}
        <div className="2xl:col-span-2 xl:col-span-3 border">
          <DashboardRoute />
        </div>
        {/* side bar */}

        {/* Outlet [children] */}
        <div className="2xl:col-span-10 xl:col-span-9">
          <div className="app py-10">
            {navigation.state !== "loading" ? <Outlet /> : "data loading..."}
          </div>
        </div>
        {/* Outlet [children] */}
      </div>
    </>
  );
};

export default DashboardRoot;
