import './ShelterRegister.css';

import React, { useState } from 'react';

import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';

export default function ShelterRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    password: "",
    contactPerson: "",
    role: "shelter",
  });
  const [profileImg, setProfileImg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, loading } = useAuth()
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("contactNumber", form.contactNumber);
        formData.append("contactPerson", form.contactPerson);
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
    //   try {
    //     // Build FormData for file upload
    //     const formData = new FormData();
    //     Object.keys(form).forEach((key) => formData.append(key, form[key]));
    //     if (profileImg) formData.append("profileImg", profileImg);

    //     const res = await axiosInstance.post("/auth/register", formData, {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });

    //     if (res.data.success) {
    //       toast.success(res.data.message || "Shelter registered successfully");
    //       navigate("/login");
    //     } else {
    //       toast.error(res.data.message || "Registration failed");
    //     }
    //   } catch (err) {
    //     console.error("Registration error:", err.response?.data || err);
    //     toast.error(
    //       err.response?.data?.message || "Something went wrong. Please try again."
    //     );
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    return (
      <div className="shelter-page d-flex align-items-center justify-content-center">
        <div className="shelter-card shadow-lg p-4 animate-fade">
          <h2 className="text-center mb-3">Animal Shelter Registration</h2>
          <p className="text-center text-muted mb-4">
            Register your shelter to manage pets and adoptions
          </p>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label className="form-label fw-bold">Shelter Name</label>
              <input
                type="text"
                className="form-control"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Enter shelter name"
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
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Contact Person</label>
              <input
                type="text"
                className="form-control"
                value={form.contactPerson}
                onChange={(e) =>
                  setForm({ ...form, contactPerson: e.target.value })
                }
                placeholder="Person in charge"
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
              <textarea
                className="form-control"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Enter shelter address"
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
              className="btn btn-success w-100 animate-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register Shelter"}
            </button>

          </form>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    );
  }
