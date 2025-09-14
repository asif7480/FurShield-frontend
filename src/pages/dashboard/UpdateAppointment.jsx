// src/pages/dashboard/UpdateAppointment.jsx
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./UpdateAppointment.css";

export default function UpdateAppointment() {
  const { id } = useParams();
  const [form, setForm] = useState({
    pet: "Max",
    owner: "Basil Khan",
    date: "2025-09-15",
    time: "10:00",
    status: "Confirmed",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✏️ Appointment ${id} Updated!`);
    navigate("/dashboard/appointment");
  };

  return (
    <Layout>
      <div className="updateappointment-page container py-4">
        <h3 className="page-title">✏️ Update Appointment</h3>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="pet"
            placeholder="Pet Name"
            value={form.pet}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="owner"
            placeholder="Owner Name"
            value={form.owner}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button type="submit" className="btn-submit">
            Update Appointment
          </button>
        </form>
      </div>
    </Layout>
  );
}
