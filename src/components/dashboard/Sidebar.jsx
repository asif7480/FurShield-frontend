import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user, profile, loading } = useAuth();

  useEffect(() => {
    profile();
  }, []);

  if (loading) {
    return "loading....";
  }

  // helper to apply active class
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h4>
        <Link to={`/`}>
          FurShield
        </Link>
      </h4>

      {user?.role === "admin" && (
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" end className={linkClass} onClick={toggleSidebar}>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/users" className={linkClass} onClick={toggleSidebar}>
              <span>Users</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/products" className={linkClass} onClick={toggleSidebar}>
              <span>Products</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/orders" className={linkClass} onClick={toggleSidebar}>
              <span>Orders</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/pet" className={linkClass} onClick={toggleSidebar}>
              <span>Pets</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/appointment" className={linkClass} onClick={toggleSidebar}>
              <span>Appointments</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/careartical" className={linkClass} onClick={toggleSidebar}>
              <span>Care Articles</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/healthrecord" className={linkClass} onClick={toggleSidebar}>
              <span>Health Records</span>
            </NavLink>
          </li>
        </ul>
      )}

      {user?.role === "owner" && (
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" end className={linkClass} onClick={toggleSidebar}>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/ownerAppointment" className={linkClass} onClick={toggleSidebar}>
              <span>Owner Appointments</span>
            </NavLink>
          </li>
        </ul>
      )}

      {user?.role === "vet" && (
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" end className={linkClass} onClick={toggleSidebar}>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/vetAppointment" className={linkClass} onClick={toggleSidebar}>
              <span>Veterianian Appointments</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/careartical" className={linkClass} onClick={toggleSidebar}>
              <span>Care Articles</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/healthrecord" className={linkClass} onClick={toggleSidebar}>
              <span>Health Records</span>
            </NavLink>
          </li>
        </ul>
      )}

      {user?.role === "shelter" && (
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" end className={linkClass} onClick={toggleSidebar}>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/products" className={linkClass} onClick={toggleSidebar}>
              <span>Products</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/pet" className={linkClass} onClick={toggleSidebar}>
              <span>Pets</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/orders" className={linkClass} onClick={toggleSidebar}>
              <span>Orders</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
