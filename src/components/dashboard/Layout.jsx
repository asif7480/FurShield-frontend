
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";
import { useAuth } from "../../context/AuthContext";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const { loading, user, profile } = useAuth()
    useEffect(() => {
        profile()
    }, [])

  if (loading) {
    return "loading...."
  }



  return (
    <div className="dashboard d-flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content flex-grow-1">
        <Header toggleSidebar={toggleSidebar} />
        <div className="content p-4">{children}</div>
      </div>
    </div>
  );
}
