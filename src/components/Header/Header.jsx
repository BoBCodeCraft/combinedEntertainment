import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/your.png";

export default function Header() {
  const [divStatus, setdivStatus] = useState(true);
  useEffect(() => {
    // Set the div status to false (none) after the initial render
    setdivStatus(false);
  }, []);
  function handleClick() {
    setdivStatus(!divStatus);
    let trigerDiv = document.querySelector("#try");
    trigerDiv.style.display = divStatus ? "none" : "block";
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className=" bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 backdrop-blur-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          {/* <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div> */}
          <div className="grid grid-cols-2 h-20 items-center gap-3">
            {/* <div className=" h-[50%] w-10 flex items-end">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  className=" bg-cover h-[100%] w[100%]"
                  alt="Logo"
                />
              </Link>
            </div> */}

            <div className="w-10 h-[50%]" onClick={handleClick}>
              <div>
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {/* <span className="absolute -inset-1.5"></span> */}
                  {/* <span className="sr-only">Open user menu</span> */}
                  <img
                    className="h-10 w-10 rounded-full "
                    src="
                    data:image/jpeg;base64,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
                    "
                    alt=""
                  />
                </button>
              </div>

              <div
                className=" absolute top-17 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
                id="try"
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>

          <div
            className="justify-between items-center flex w-auto order-1"
            id="mobile-menu-2"
          >
            <ul className="grid grid-flow-col mt-4 font-medium sm:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  sync music
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// src="data:image/png;base64,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"
