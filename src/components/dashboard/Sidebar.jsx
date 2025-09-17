


// // src/components/dashboard/Sidebar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Sidebar.css";

// export default function Sidebar({ isOpen, toggleSidebar }) {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : ""}`}>
//       <h4>Admin Panel</h4>
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <NavLink to="/dashboard" className="nav-link" onClick={toggleSidebar}>
//             📊 <span>Dashboard</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/users" className="nav-link" onClick={toggleSidebar}>
//             👤 <span>Users</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/products" className="nav-link" onClick={toggleSidebar}>
//             📦 <span>Products</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/orders" className="nav-link" onClick={toggleSidebar}>
//             🛒 <span>Orders</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/pet" className="nav-link" onClick={toggleSidebar}>
//             🐾 <span>Pets</span>
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink to="/dashboard/appointment" className="nav-link" onClick={toggleSidebar}>
//             📅 <span>Appointments</span>
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }


// src/components/dashboard/Sidebar.jsx
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user, profile, loading } = useAuth()
  useEffect(() => {
    profile()
  }, [])

  if (loading) {
    return "loading...."
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h4>Admin Panel</h4>

      {
        user?.role === "admin" && (
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" onClick={toggleSidebar}>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/users" className="nav-link" onClick={toggleSidebar}>
                <span>Users</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/products" className="nav-link" onClick={toggleSidebar}>
                <span>Products</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/orders" className="nav-link" onClick={toggleSidebar}>
                <span>Orders</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/pet" className="nav-link" onClick={toggleSidebar}>
                <span>Pets</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/appointment" className="nav-link" onClick={toggleSidebar}>
                <span>Appointments</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/dashboard/careartical" className="nav-link" onClick={toggleSidebar}>
                <span>Care Articles</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/healthrecord" className="nav-link" onClick={toggleSidebar}>
                <span>Health Records</span>
              </NavLink>
            </li>
          </ul>

        )
      }

      {
        user?.role === "owner" && (
          <ul className="nav flex-column">

            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" onClick={toggleSidebar}>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/ownerAppointment" className="nav-link" onClick={toggleSidebar}>
                <span>Owner Appointments</span>
              </NavLink>
            </li>
          </ul>
        )
      }

      {
        user?.role === "vet" && (
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" onClick={toggleSidebar}>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/vetAppointment" className="nav-link" onClick={toggleSidebar}>
                <span>Veterianian Appointments</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/careartical" className="nav-link" onClick={toggleSidebar}>
                <span>Care Articles</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/healthrecord" className="nav-link" onClick={toggleSidebar}>
                <span>Health Records</span>
              </NavLink>
            </li>
          </ul>
        )
      }






    </div >
  );
}
