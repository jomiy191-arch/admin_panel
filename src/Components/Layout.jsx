import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-[280px]">
        {/* Header */}
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Outlet (Students / Teachers) */}
        <main className="mt-[70px] p-6 bg-gray-50 min-h-screen">
          <Outlet context={{ searchTerm }} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
