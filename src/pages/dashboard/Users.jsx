import React from "react";
import Layout from "../../components/dashboard/Layout";
import "./Users.css";

export default function Users() {
  const users = [
    { id: 1, name: "Basil Khan", email: "basil@example.com", role: "Admin" },
    { id: 2, name: "Jawad", email: "jawad@example.com", role: "User" },
    { id: 3, name: "Zain", email: "zain@example.com", role: "Editor" },
    { id: 4, name: "Walid", email: "walid@example.com", role: "User" },
  ];

  return (
    <Layout>
      <div className="users-page container py-4">
        <div className="users-header">
          <h3 className="users-title">👤 Users</h3>
        </div>

        <p className="users-subtitle">
          Manage all registered <span>users</span> in the system.
        </p>

        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`role-badge ${
                        user.role.toLowerCase() === "admin"
                          ? "admin"
                          : user.role.toLowerCase() === "editor"
                          ? "editor"
                          : "user"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="text-center">
                    <button className="btn-action edit">✏️ Edit</button>
                    <button className="btn-action delete">🗑️ Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
