// src/pages/dashboard/Profile.jsx
import React from "react";
import Layout from "../../components/dashboard/Layout";
import "./Profile.css";

export default function Profile() {
  const admin = {
    name: "Admin",
    email: "admin@example.com",
    role: "Super Admin",
    joined: "Jan 2023",
  };

  return (
    <Layout>
      <div className="profile-page container py-4">
        <h3 className="page-title">👤 Admin Profile</h3>

        <div className="profile-card">
          <div className="avatar">A</div>
          <h4>{admin.name}</h4>
          <p>{admin.role}</p>
          <div className="info">
            <p><strong>Email:</strong> {admin.email}</p>
            <p><strong>Joined:</strong> {admin.joined}</p>
          </div>
          <button className="btn-edit">✏️ Edit Profile</button>
        </div>
      </div>
    </Layout>
  );
}
