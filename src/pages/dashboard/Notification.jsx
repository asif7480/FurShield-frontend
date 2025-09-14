// src/pages/dashboard/Notification.jsx
import React, { useState } from "react";
import Layout from "../../components/dashboard/Layout";
import "./Notification.css";

export default function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New pet added: 🐶 Max", time: "2 mins ago", read: false },
    { id: 2, message: "Rio's status updated to Sick", time: "10 mins ago", read: false },
    { id: 3, message: "Admin logged in successfully", time: "1 hour ago", read: false },
  ]);

  // ✅ mark as read handler
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((note) =>
        note.id === id ? { ...note, read: true } : note
      )
    );
  };

  return (
    <Layout>
      <div className="notification-page container py-4">
        <h3 className="page-title">🔔 Notifications</h3>

        <ul className="notification-list">
          {notifications.map((note) => (
            <li
              key={note.id}
              className={`notification-item fade-in ${note.read ? "read" : ""}`}
            >
              <div>
                <p>{note.message}</p>
                <span className="time">{note.time}</span>
              </div>
              {!note.read && (
                <button
                  className="btn-mark-read"
                  onClick={() => markAsRead(note.id)}
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
