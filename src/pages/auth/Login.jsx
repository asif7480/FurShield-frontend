import './Login.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../../axios/axiosInstance';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await login(form)
      // console.log(response);
      const { user } = response.data
      console.log(user);
      if (user.role === "admin" || user.role === "vet" || user.role === "shelter") {
        navigate("/dashboard")
      }

      if (user.role === "owner") {
        navigate("/")
      }
      // const res = await axiosInstance.post("/auth/login", form);

      // if (res.data.success) {
      //   toast.success(res.data.message || "Login successful");

      //   // The cookie is automatically saved (http-only)
      //   // You can use user info from res.data.user
      //   // Navigate based on role or just to home
      //   if (res.data.user.role === "admin" || res.data.user.role === "shelter") {
      //     navigate("/dashboard"); // example admin/shelter dashboard
      //   } else if (res.data.user.role === "vet") {
      //     navigate("/dashboard");
      //   } else {
      //     navigate("/"); // pet owner homepage
      //   }
      // } else {
      //   toast.error(res.data.message || "Login failed");
      // }
    } catch (err) {
      console.error("Login error:", err);
      toast.error(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="auth-card shadow-lg p-4">
        <h2 className="text-center mb-3">Login</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              className="form-control"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              className="form-control"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button
            className="btn btn-primary w-100 mb-3"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="fw-bold">New here? Register as:</p>
          <div className="d-flex flex-column gap-2">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/owner-register")}
            >
              Pet Owner
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/shelter-register")}
            >
              Animal Shelter
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => navigate("/veterinarian-register")}
            >
              Veterinarian
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
