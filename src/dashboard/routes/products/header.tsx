import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex items-start">
          <div className="flex items-center gap-3 mr-7">
            <button
              onClick={() => navigation("/products/new")}
              type="button"
              className="rounded-md bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Create new
            </button>
            <div className="flex items-center ms-5 cursor-pointer">
              <div className="h-10 w-10 flex-shrink-0 mr-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://github.com/tanvir1017.png"
                  alt="tanvir's github profile as user"
                />
              </div>
              <div>
                <h5 className="font-semibold text-lg -mb-2">Tanvir</h5>
                <span className=" text-sm text-gray-600">User</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <ChevronDown className="" strokeWidth={0.8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
