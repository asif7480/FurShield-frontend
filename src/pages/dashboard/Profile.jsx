// src/pages/dashboard/Profile.jsx
import React, { useEffect } from "react";
import Layout from "../../components/dashboard/Layout";
import "./Profile.css";
import { useGlobal } from "../../context/GlobalContext";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { profile, user } = useAuth()
  console.log(user);

  function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  }
  return (
    <Layout>
      <div className="profile-page container py-4">
        <h3 className="page-title">Profile</h3>

        <div className="profile-card">
          <div className="avatar">{user?.name.split("")[0]}</div>
          <h4>{user?.name}</h4>
          <p>{capitalize(user?.role)}</p>
          <div className="info">
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Contact:</strong> {user?.contactNumber}</p>
            <p><strong>Joined:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>
          <button className="btn-edit">✏️ Edit Profile</button>
        </div>
      </div>
    </Layout>
  );
}
