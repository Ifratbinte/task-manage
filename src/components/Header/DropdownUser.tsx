import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { GrUserSettings,GrLogout } from "react-icons/gr";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-blackDark dark:text-white">
            Kazi Ifrat
          </span>
          <span className="block text-xs">Software Engineer</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={"/images/user/user-01.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>

        <MdKeyboardArrowDown className="h-6 w-6"/>
      </Link>

      {/*  Dropdown Start  */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokeDark dark:bg-boxDark  ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokeDark">
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out text-gray hover:text-primary lg:text-base"
            >
              <AiOutlineUser/>
              My Profile
            </Link>
          </li>
          
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out text-gray hover:text-primary lg:text-base"
            >
              <GrUserSettings/>
              Account Settings
            </Link>
          </li>
        </ul>
        <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out text-gray hover:text-primary lg:text-base">
          <GrLogout/>
          Log Out
        </button>
      </div>
      {/*  Dropdown End  */}
    </div>
  );
};

export default DropdownUser;
