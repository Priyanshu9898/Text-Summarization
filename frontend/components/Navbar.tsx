import React, { FC } from "react";
import ThemeButton from "./ThemeButton";

const Navbar: FC = () => {
  return (
    <div className="flex w-full h-[64px] text-gray-50 items-center justify-between p-4 bg-gray-900">
      <div className="text-xl md:text-2xl lg:text-2xl">
        Text Summarization
      </div>
      <div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
