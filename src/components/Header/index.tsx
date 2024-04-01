import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { RiMenu2Line } from "react-icons/ri";

interface HeaderProps{
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Header:React.FC<HeaderProps> = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxDark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between lg:justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/*  Hamburger Toggle BTN start  */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokeDark dark:bg-boxDark lg:hidden"
          >
            <RiMenu2Line className="w-6 h-6"/>
          </button>
          {/*  Hamburger Toggle BTN  end  */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.png"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="flex items-center gap-2 2xsm:gap-4">
            {/*  Dark Mode Toggler  */}
            <DarkModeSwitcher />
            {/*  Dark Mode Toggler  */}
          </div>

          {/*  User Area  */}
          <DropdownUser />
          {/*  User Area  */}
        </div>
      </div>
    </header>
  );
};

export default Header;
