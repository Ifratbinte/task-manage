"use client";
import "./global.css";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import AppProvider from "./provider"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-dark dark:text-darkSlate">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
          />
          <AppProvider>
            {/* {loading ? <Loader /> : children} */}
            {children}
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
