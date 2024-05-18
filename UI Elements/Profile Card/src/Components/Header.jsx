import React from "react";

const Header = () => {
  return (
    <div className="bg-cardh flex justify-center rounded-t-[24px] box-border p-1 text-cardh h-32 w-full">
      <div className="mt-2">
        <div className="p-0 border-solid border-cardh border-[6px] rounded-full">
          <img
            src="pf.jpg"
            className="rounded-full aspect-square self-center w-44 border-white border-[4px] border-solid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
