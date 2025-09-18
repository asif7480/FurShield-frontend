import './PetOwnerRegister.css';

import React, { useState } from 'react';

import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../../axios/axiosInstance'; // adjust path if needed
import { useAuth } from '../../context/AuthContext';

export default function PetOwnerRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    password: "",
    role: "owner",
  });
  const [profileImg, setProfileImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, loading } = useAuth()
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfileImg = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfileImg(file)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("contactNumber", form.contactNumber);
      formData.append("email", form.email);
      formData.append("address", form.address);
      formData.append("password", form.password);
      formData.append("role", form.role);

      if (profileImg) {
        formData.append("profileImg", profileImg);
      }

      const response = await register(formData)
      if (response?.data?.success) {
        toast.success("Owner registered successfully");
        navigate(`/login`);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-page d-flex align-items-center justify-content-center">
      <div className="register-card shadow-lg p-4 animate-fade">
        <h2 className="text-center mb-3">Pet Owner Registration</h2>
        <p className="text-center text-muted mb-4">
          Create your account to manage your pets and explore services
        </p>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
