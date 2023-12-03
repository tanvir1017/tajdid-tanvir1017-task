import { ChevronDown, LogIn } from "lucide-react";
import React from "react";
import { Link, useMatches } from "react-router-dom";
import { cn } from "../../utils/cn";
import {
  Analytics,
  Billing,
  BrandLogo,
  Home,
  Information,
  Layer,
  User,
} from "../svg/all-link-icon";

type RoutesLinkType = {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
};
const routesLink: RoutesLinkType[] = [
  {
    id: 1,
    name: "Products",
    link: "/",
    icon: <Layer />,
  },
  { id: 2, name: "Analytics", link: "/analytics", icon: <Analytics /> },
  {
    id: 3,
    name: "Billing",
    link: "/billing",
    icon: <Billing />,
  },
  {
    id: 4,
    name: "Company",
    link: "/company",
    icon: <Home />,
  },
  {
    id: 5,
    name: "Admin",
    link: "/admin",
    icon: <User />,
  },
];

export function DashboardRoute() {
  const matches = useMatches();
  const pathName = matches.map((m) => m.pathname);

  return (
    <aside className="flex h-[100dvh] w-full overflow-x-clip flex-col overflow-y-auto bg-white border-r py-8 sticky top-0">
      <Link to={"/"} className="flex items-center justify-center">
        <BrandLogo />
        <span className="font-bold ms-2 text-xl text-blue-500 brand-logo">
          TAJDID STORE
        </span>
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3">
          <ul className="">
            {routesLink.map((route: RoutesLinkType) => (
              <li
                key={route.id}
                className={cn("px-5 my-2 hover:bg-[#EFF8FF]", {
                  ["bg-[#EFF8FF]"]: route.link === pathName[1],
                })}
              >
                <Link
                  className="flex transform items-center rounded-lg px-3 py-2  transition-colors duration-300"
                  to={route.link}
                >
                  <span>{route.icon}</span>
                  <div className="flex w-full justify-between">
                    <span className="mx-2 text-sm font-medium">
                      {route.name}
                    </span>
                    {[2, 3, 4].includes(route.id) && (
                      <span className="justify-end">
                        <ChevronDown strokeWidth={0.8} />
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
            <li className={"px-5 py-2 hover:bg-[#EFF8FF] block cursor-pointer"}>
              <div className="flex px-2.5 items-center">
                <LogIn className="h-4 w-4 text-gray-400" />
                <span className="mx-2 text-sm font-medium">Logout</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="mt-6 2xl:px-4 xl:px-2.5  relative">
          <div className="shadow-xl w-14 h-14 bg-white rounded-full flex items-center justify-center absolute -top-[15%] left-[39%]">
            <Information />
          </div>
          <div className="rounded-lg bg-[#f5faff] p-3 ">
            <h2 className="text-xl font-bold text-center my-5 text-gray-800">
              Help Center
            </h2>
            <p className="text-center 2xl:my-6 xl:my-3 text-xs text-gray-500">
              Getting trouble on Simplebook? Reach out and solve your problem
            </p>
            <button className="bg-blue-600 px-5 2xl:py-2 py-1 rounded-md w-full text-white font-semibold text-lg">
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
