"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FormSelectStatus: React.FC = () => {

  const statusData = [
    { option: "All", value:"all" },
    { option: "Complete" , value: "complete"},
    { option: "Active" , value: "active"},
  ]
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  return (
      <div className="relative z-20 bg-white dark:bg-meta">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent pl-4 pr-8 py-2 outline-none transition focus:border-primary active:border-primary dark:border-strokeDark dark:bg-meta ${
            isOptionSelected ? "text-black dark:text-white" : ""
          }`}
        >
        
        {statusData.map((status:any, i:number) => {
          return (
            <option value={status.value} className="text-body dark:text-bodydark">
                {status.option}
            </option> 
          )
        })}
        </select>

        <span className="absolute right-1.5 top-1/2 z-10 -translate-y-1/2">
          <MdKeyboardArrowDown className="w-5 h-5 dark:text-slate-400"/>
        </span>
      </div>
  );
};

export default FormSelectStatus;
