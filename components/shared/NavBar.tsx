import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { useMoralis } from "react-moralis";

const NavBar = () => {
  const { authenticate, authError, user, isAuthenticated } = useMoralis();

  return (
    <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 text-white py-6 lg:py-7">
      <div className=" font-bold lg:text-xl lg:w-3/12">
        <h1>ONE-OF-BUSINESS</h1>
      </div>

      <div className="hidden lg:block lg:w-3/12">
        <ul className="flex justify-between">
          <li className="cursor-pointer text-primaryGreen font-medium ">
            Home
          </li>
          <li className="cursor-pointer hover:text-primaryGreen  ">Features</li>
          <li className="cursor-pointer hover:text-primaryGreen  ">About Us</li>
        </ul>
      </div>

      <div className="lg:w-3/12">
        <div className="hidden lg: w-full lg:flex items-center justify-between ">
          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer hover:text-primaryGreen  "
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faDiscord}
              className="cursor-pointer hover:text-primaryGreen  "
            />
          </div>
          <div className="w-6/12">
            {!isAuthenticated ? (
              <button
                onClick={() => authenticate()}
                className=" border border-white w-full py-2 px-5 hover:text-primaryGreen hover:border-primaryGreen"
              >
                Login
              </button>
            ) : (
              <p className="w-10/12 truncate">{user?.id}</p>
            )}
          </div>
        </div>

        <div className="lg:hidden cursor-pointer hover:text-primaryGreen ">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
