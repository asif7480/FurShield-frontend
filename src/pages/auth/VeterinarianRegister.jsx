import './VeterinarianRegister.css';

import React, { useState } from 'react';

import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../../axios/axiosInstance'; // adjust path if needed

export default function VeterinarianRegister() {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    specialization: "",
    experience: "",
    availableTimeSlots: "",
    password: "",
    role: "vet",
  });

  const [profileImg, setProfileImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert availableTimeSlots to array
      const slotsArray = form.availableTimeSlots
        ? form.availableTimeSlots.split(',').map(s => s.trim())
        : [];

      // Build FormData
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === 'availableTimeSlots') {
          formData.append(key, JSON.stringify(slotsArray));
        } else {
          formData.append(key, form[key]);
        }
      });
      if (profileImg) formData.append("profileImg", profileImg);

      const res = await axiosInstance.post("/auth/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        toast.success(res.data.message || "Registration successful");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error: ", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="veterinarian-page d-flex align-items-center justify-content-center">
      <div className="veterinarian-card shadow-lg p-4 animate-fade">
        <h2 className="text-center mb-3">Veterinarian Registration</h2>
        <p className="text-center text-muted mb-4">
          Register to manage treatments, appointments & pet health
        </p>

        <form onSubmit={onSubmit} encType="multipart/form-data">
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter email"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label className="form-label fw-bold">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              value={form.contactNumber}
              onChange={(e) => setForm({ ...form, contactNumber: e.target.value })}
              placeholder="Enter contact number"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label fw-bold">Address</label>
            <input
              type="text"
              className="form-control"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Enter address"
              required
            />
          </div>

          {/* Specialization */}
          <div className="mb-3">
            <label className="form-label fw-bold">Specialization</label>
            <input
              type="text"
              className="form-control"
              value={form.specialization}
              onChange={(e) => setForm({ ...form, specialization: e.target.value })}
              placeholder="E.g. Surgery, Vaccination, General Care"
              required
            />
          </div>

          {/* Experience */}
          <div className="mb-3">
            <label className="form-label fw-bold">Experience</label>
            <input
              type="text"
              className="form-control"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              placeholder="e.g. 5 years"
              required
            />
          </div>

          {/* Available Time Slots */}
          <div className="mb-3">
            <label className="form-label fw-bold">Available Time Slots</label>
            <input
              type="text"
              className="form-control"
              value={form.availableTimeSlots}
              onChange={(e) => setForm({ ...form, availableTimeSlots: e.target.value })}
              placeholder="E.g. 9am-12pm, 2pm-5pm"
              required
            />
            <small className="text-muted">Separate multiple slots with commas</small>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Create a password"
              required
            />
          </div>

          {/* Profile Image */}
          <div className="mb-3">
            <label className="form-label fw-bold">Profile Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setProfileImg(e.target.files[0])}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Creating Account..." : "Register Veterinarian"}
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
