import SideBar from "@/components/ui/SideBar";
import TopBar from "@/components/ui/TopBar";
import Hero from "@/components/ui/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex font-[Manrope]">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col">
          <div>
            <TopBar />
          </div>
          <div className="mt-6 mx-7">
            <Hero/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
