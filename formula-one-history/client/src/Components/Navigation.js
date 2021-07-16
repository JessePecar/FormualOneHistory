import {
    NavLink
  } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="md:pr-0 lg:pr-64 invisible lg:visible">
            <nav className="flex items-start justify-start flex-wrap h-screen bg-red-600 fixed md:w-52 lg:w-64 ">
            
                <ul className="inline-block text-lg justify-items-start">
                    <li className="mb-8 mt-8">
                        <span className="font-semibold text-xl tracking-tight"><a href="/">Formula One History</a></span>
                    </li>
                    <li className="mb-1">
                      <NavLink to="/Teams" className="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-red-50 hover:bg-red-900 transition duration-250 font-semibold flex justify-start">Teams</NavLink>
                    </li>
                    <li className="mb-1 ">
                      <NavLink to="/Drivers" className="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-red-50 hover:bg-red-900 transition duration-250 font-semibold flex justify-start">Drivers</NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink to="/Schedule" className="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-red-50 hover:bg-red-900 transition duration-250 font-semibold flex justify-start">Schedule</NavLink>
                    </li>
                    <li className="mb-1">
                      <NavLink to="/Results" className="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-red-50 hover:bg-red-900 transition duration-250 font-semibold flex justify-start">Results</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;