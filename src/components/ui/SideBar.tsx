import React from "react";
import Image from "next/image";
import logo from "../../images/finalMouseLogo(white).svg";
import Link from "next/link";
const SideBar = () => {
  return (
    <>
      <div>
        <div className="bg-[#18181B] flex-col flex items-center p-10  w-[260px] h-[1161px]">
          <div className="p-3">
            <Image src={logo} width={50} height={44} alt="Logo" />
          </div>
          <div className="text-white p-1 w-56 h-10 font-[Manrope] font-normal text">
            <ul className="grid gap-5 h-10">
              <li className=" h-10 active:bg-[#3F3F46] active:h-10 active:rounded-lg active:w-56 p-2 ">
                {" "}
                <Link href="/">Analytics</Link>{" "}
              </li>
              <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
                {" "}
                <Link href="/">Tickets</Link>{" "}
              </li>
              <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
                {" "}
                <Link href="/">Customers</Link>{" "}
              </li>
              <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
                {" "}
                <Link href="/">Hardware</Link>{" "}
              </li>
              <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
                {" "}
                <Link href="/">Team</Link>{" "}
              </li>
              <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
                {" "}
                <Link href="/">Settings</Link>{" "}
              </li>
              <li className="active:bg-[#3F3F46]  active:rounded-lg active:w-56 p-2 h-10 active:h-10 ">
                {" "}
                <Link href="/">Tag Manager</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
