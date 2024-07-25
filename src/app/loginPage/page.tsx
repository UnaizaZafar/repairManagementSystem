import Login from "@/components/ui/Login";
import RightFrame from "@/components/ui/RightFrame";
import React from "react";

const page = () => {
  return (
    <>
    <div className="flex">
      <div className="w-1/2">
        <Login />
        </div>
        <div className="w-1/2">
        <RightFrame />
      </div>
      </div>
    </>
  );
};

export default page;
