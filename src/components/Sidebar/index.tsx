"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import SidebarHeader from "./SidebarHeader";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar:React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-blackDark duration-300 ease-linear dark:bg-boxDark  lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/*  Sidebar header */}
      <SidebarHeader sidebarTrigger={trigger} setSidebarOpen={setSidebarOpen} sidebarOpen/>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/*  Sidebar Menu  */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-slate-400 uppercase">Menu</h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/*  Menu Item  */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-slate-200 duration-300 ease-in-out hover:bg-gray dark:hover:bg-meta ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-gray dark:bg-meta"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <RxDashboard/>
                        Dashboard
                        <MdKeyboardArrowDown className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current w-6 h-6 ${
                            open && "rotate-180"
                          }`}/>
                      </Link>
                      {/*  Dropdown Menu Start  */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-slate-400 duration-300 ease-in-out hover:text-white ${
                                pathname === "/" && "text-white"
                              }`}
                            >
                              Task List
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/*  Dropdown Menu End  */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/*  Menu Item Dashboard  */}
            </ul>
          </div>
        </nav>
        {/*  Sidebar Menu  */}
      </div>
    </aside>
  );
};

export default Sidebar;
