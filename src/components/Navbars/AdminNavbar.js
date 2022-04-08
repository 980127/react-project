import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
  
      <div className="flex justify-end items-center">
        <div className="hidden md:flex">
          <div className="flex flex-col align-center md:flex md:flex-row justify-end mr-6 w-48 mt-6 gap-6">
              <div className="mt-0">
                <div className="flex flex-row justify-center mx-6 normal-case bg-lightBlue-500 rounded-lg  h-10" style={{width: '202px',marginRight:'24px',marginLeft:'24px'}}>
                  <span className="text-1 text-white py-1 font-semibold">
                      Buy $ POLAR
                  </span>
                </div>
              </div>
              <div className="mt-0">
                <div className="flex flex-row justify-center mx-8 normal-case bg-lightBlue-500 rounded-lg w-40 md:w-40 h-10" style={{width: '202px'}}>
                  <span className="text-1 text-white  py-1 font-semibold">
                      Connect Wallet
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
  );
}
