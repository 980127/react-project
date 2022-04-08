import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import HeaderStats from "components/Headers/HeaderStats.js";
export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col mx-10-percent md:mx-64-px mt-30-px md:mt-123-px">
          <span className="text-[24px] text-[#FFFFFF] ml-[3px]">
              <HeaderStats />
          </span>
        </div>
    </>
  );
}
