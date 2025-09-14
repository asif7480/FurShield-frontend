
import React from 'react';

import './Header.css';
import {
  FiLogOut,
  FiMenu,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Left Section: Menu + Logo */}
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <h5 className="header-title">Dashboard</h5>
      </div>

      {/* Right Section: Actions */}
      <div className="header-right">
        {/* 🔔 Notifications */}
        {/* <div
          className="notification"
          onClick={() => navigate("/dashboard/notification")}
        >
          🔔
          <span className="badge">3</span>
        </div> */}

        {/* 👤 Admin Profile */}
        <div
          className="admin-profile"
          onClick={() => navigate("/dashboard/profile")}
        >
          <div className="admin-avatar">A</div>
          <span className="admin-name">Admin</span>
        </div>

        {/* 🚪 Logout */}
        <div className="logout-icon" onClick={() => navigate("/login")}>
          <FiLogOut />
          <span className="tooltip">Sign out</span>
        </div>
      </div>
    </header>
  );
}
