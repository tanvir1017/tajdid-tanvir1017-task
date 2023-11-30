import { ChevronDown, LogIn } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { Analytics, Billing, Home, Layer, User } from "../svg/all-link-icon";

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
  { id: 2, name: "Analytics", link: "analytics", icon: <Analytics /> },
  {
    id: 3,
    name: "Billing",
    link: "billing",
    icon: <Billing />,
  },
  {
    id: 4,
    name: "Company",
    link: "company",
    icon: <Home />,
  },
  {
    id: 5,
    name: "Admin",
    link: "admin",
    icon: <User />,
  },
];

export function DashboardRoute() {
  return (
    <aside className="flex h-screen w-full overflow-x-clip flex-col overflow-y-auto bg-white border-r py-8">
      <Link to={"/"} className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="44"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M9.61855 0.921371L9.00636 2.91797L10.3012 3.22561L11.2153 2.40529L9.61859 0.921371H9.61855ZM15.522 0.924325L13.9926 2.34665L14.9609 3.26072L16.1621 3.00726L15.522 0.924325ZM12.4779 3.70893C11.8054 3.71937 11.1368 3.81286 10.4872 3.98728C6.12411 5.15634 3.52761 9.65386 4.69677 14.017C5.0532 15.3473 5.71972 16.513 6.59661 17.458C6.60486 17.4698 6.61325 17.4814 6.62155 17.4932L6.62595 17.4902C8.62611 19.6227 11.7072 20.6148 14.725 19.8061C19.0882 18.637 21.6847 14.1411 20.5156 9.77789C19.5657 6.23268 16.4189 3.855 12.9321 3.71484C12.7812 3.70875 12.6299 3.70659 12.4779 3.70893ZM4.50636 3.87014L4.97356 5.90625L6.24941 5.52393L6.63027 4.35792L4.50636 3.87009V3.87014ZM20.6328 3.8789L18.5951 4.34625L18.9775 5.62209L20.1435 6.0029L20.6328 3.8789ZM12.6303 4.58203C12.7207 4.58222 12.8114 4.58437 12.9013 4.58789C16.0173 4.71023 18.8186 6.83132 19.6689 10.0049C20.7155 13.9108 18.4053 17.9144 14.4995 18.9609C11.8142 19.6805 9.08333 18.8125 7.29828 16.9306L7.29688 16.9292C6.93491 16.4036 6.64222 15.8291 6.43409 15.2271C5.28692 11.9092 6.93059 8.02247 10.3218 6.85987C13.1786 5.88051 16.5177 7.28292 17.504 10.1763C18.3304 12.6009 17.124 15.4395 14.6475 16.2759C12.5837 16.9728 10.1751 15.9542 9.47516 13.8676C8.89545 12.1398 9.75795 10.1198 11.52 9.53461C12.9691 9.05334 14.6584 9.77057 15.1397 11.2309C15.5161 12.3736 14.981 13.7028 13.8681 14.1577C14.3731 13.6712 14.6078 12.9306 14.4146 12.2095C14.1673 11.2867 13.2983 10.6879 12.3784 10.7417C12.247 10.7494 12.1132 10.7693 11.9814 10.8047C10.927 11.0872 10.2956 12.1833 10.5781 13.2378C10.6101 13.3573 10.6533 13.4735 10.707 13.5849C10.7081 13.5874 10.7089 13.5899 10.71 13.5923C10.7133 13.5991 10.7168 13.6059 10.7202 13.6127C11.2814 14.8647 12.6831 15.4702 13.9956 15.0424C15.6949 14.4886 16.5101 12.5909 15.9717 10.957C15.3289 9.00632 13.1319 8.07529 11.2432 8.70257C8.99525 9.44915 7.91647 11.9768 8.64458 14.1474C9.50834 16.7221 12.425 17.9505 14.9288 17.1049C17.8891 16.1052 19.3105 12.7612 18.3331 9.89348C17.3972 7.14773 14.6822 5.56739 11.9288 5.67768C11.2846 5.70309 10.6476 5.82199 10.0377 6.03065C7.40586 6.933 5.70538 9.25096 5.29297 11.8242C5.32119 8.62036 7.46591 5.70436 10.7143 4.83393C11.3551 4.66223 11.9978 4.58072 12.6304 4.58198L12.6303 4.58203ZM3.63477 8.34084L1.55173 8.97951L2.97411 10.5103L3.88817 9.54196L3.63481 8.34079L3.63477 8.34084ZM21.5835 8.3789L21.276 9.67382L22.0963 10.5879L23.5816 8.99118L21.5835 8.3789ZM12.5293 11.6133C13.0087 11.6249 13.4367 11.9466 13.5679 12.4365C13.728 13.0337 13.3813 13.6359 12.7843 13.7959C12.2618 13.9359 11.7349 13.6876 11.504 13.2231C11.4818 13.1698 11.4617 13.1155 11.444 13.0605L11.4381 13.0619C11.4328 13.045 11.4279 13.0279 11.4234 13.0108C11.2635 12.4136 11.6115 11.8114 12.2086 11.6514C12.2819 11.6318 12.357 11.6195 12.4327 11.6147C12.4651 11.6128 12.4974 11.6126 12.5294 11.6133L12.5293 11.6133ZM3.03261 13.2877L1.54883 14.8828L3.54542 15.4966L3.85292 14.2002L3.03261 13.2876V13.2877ZM22.1548 13.3652L21.2407 14.3335L21.4941 15.5347L23.5771 14.8946L22.1547 13.3653L22.1548 13.3652ZM4.98523 17.8711L4.49745 19.9966L6.5337 19.5292L6.15134 18.2534L4.98523 17.8711ZM20.1552 17.9692L18.8793 18.3501L18.5 19.5175L20.624 20.0053L20.1552 17.9692H20.1552ZM10.1694 20.6133L8.96816 20.8667L9.60683 22.9497L11.1376 21.5273L10.1694 20.6133ZM14.8275 20.6484L13.9135 21.4687L15.5102 22.9541L16.1239 20.9561L14.8275 20.6484H14.8275Z"
            fill="#1570EF"
          />
        </svg>
        <span className="font-bold ms-2 text-xl text-blue-500">
          TAJDID STORE
        </span>
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3">
          {routesLink.map((route: RoutesLinkType) => (
            <ul key={route.id} className="">
              <li
                className={cn("px-5 my-2 hover:bg-blue-50", {
                  ["bg-blue-50"]: route.id === 1,
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
            </ul>
          ))}
        </nav>
        <div className="mt-6 px-1.5">
          <div className="rounded-lg bg-gray-100 p-3 ">
            <h2 className="text-sm font-medium text-gray-800">
              New feature availabel!
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              harum officia eligendi velit.
            </p>
            <img
              className="mt-2 h-32 w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
              alt="Feature"
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="h-7 w-7 rounded-full object-cover"
                src="https://github.com/tanvir1017.png"
                alt="avatar"
              />
              <span className="text-sm font-medium text-gray-700">
                Tanvir Hossain
              </span>
            </a>
            <a
              href="#"
              className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
            >
              <LogIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
