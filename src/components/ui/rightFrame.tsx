"use client";
import React from "react";
import Image from "next/image";
import ticketTrends from "../../images/Ticket Trends 3.png";
function RightFrame() {
  return (
    <>
      <div className=" bg-black w-[720px] pt-10">
        <div className=" text-white  grid gap-16 ">
          <div className=" grid gap-4 justify-center">
            <h1 className="font-bold text-[32px] ">Repair Management System</h1>
            <p className="text-[16px] ">
              Resolve customer support tickets efficiently
            </p>
          </div>
          <div className="ml-5 mb-5 flex justify-end">
            <Image
              src={ticketTrends}
              width={600}
              height={450}
              className="shadow-lg shadow-gray-500 border-gray-300 rounded-l-xl border-l-[14px] border-y-[14px]"
              alt="Dashboard screen of trends"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightFrame;
