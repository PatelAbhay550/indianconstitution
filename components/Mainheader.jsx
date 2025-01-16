import Link from "next/link";
import React from "react";

const Mainheader = () => {
  return (
    <nav className="min-h-[175px] mx-auto flex flex-col bg-[#1e3a8a] max-w-[1010px] mt-2 w-[75%] rounded-md shadow-lg">
      <div id="header" className="text-center flex flex-col items-center py-4">
        {/* Logo Section */}

        {/* Title Section */}
        <div
          id="head-title"
          className="pt-8 font-bold text-3xl md:text-4xl text-white"
        >
          <Link href="/">Indian Constitution</Link>
        </div>
      </div>
    </nav>
  );
};

export default Mainheader;
