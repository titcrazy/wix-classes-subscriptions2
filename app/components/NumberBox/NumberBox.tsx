// components/NumberBox.js
import React from 'react';

interface NumProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: NumProp) => {
  return (
    // Container for the entire number box with padding
    <div className="flex flex-col items-center overflow-clip">
      {/* Styled box with number */}
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-24 h-24 md:text-5xl mt-2">
        {/* Top part of the box */}
        <div className="rounded-t-lg rounded-b-lg bg-[#dde0fe] w-full h-full"></div>

        {/* Displayed number */}
        <div className="text-5xl absolute text-black z-10 font-redhat md:text-5xl xl:text-5xl font-mono">
          {num}
        </div>

        {/* Bottom part of the box */}
        <div className="rounded-b-lg rounded-t-lg bg-[#d5d5f3] w-full h-full"></div>

        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[48px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[48px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
      </div>

      {/* Unit text below the number box */}
      <div className="overflow-auto">
        <p className="text-lg mt-1 font-semibold md:text-2xl text-[#dad9d9]">{unit}</p>
      </div>
    </div>
  );
};

