import './PetOwnerRegister.css';

import React, { useState } from 'react';

import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../../axios/axiosInstance'; // adjust path if needed

export default function PetOwnerRegister() {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    password: "",
    role: "owner",
  });
  const [profileImg, setProfileImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Build FormData for file upload
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));

      if (profileImg) {
        formData.append("profileImg", profileImg);
      }

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
      console.error("Registration error:", err.response?.data || err);
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page d-flex align-items-center justify-content-center">
      <div className="register-card shadow-lg p-4 animate-fade">
        <h2 className="text-center mb-3">Pet Owner Registration</h2>
        <p className="text-center text-muted mb-4">
          Create your account to manage your pets and explore services
        </p>

        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="form-label fw-bold">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label fw-bold">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
              placeholder="Enter contact number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Address</label>
            <input
              type="text"
              className="form-control"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Enter your address"
              required
            />
          </div>

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

          <div className="mb-3">
            <label className="form-label fw-bold">Profile Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setProfileImg(e.target.files[0])}
            />
            <small className="text-muted">
              Optional. If left empty, a default avatar will be used.
            </small>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 animate-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
