// import './VeterinarianRegister.css';

// import React, { useState } from 'react';

// import {
//   Link,
//   useNavigate,
// } from 'react-router-dom';
// import { toast } from 'react-toastify';

// import axiosInstance from '../../axios/axiosInstance'; // adjust path if needed
// import { useAuth } from '../../context/AuthContext';

// export default function VeterinarianRegister() {
//   const [form, setForm] = useState({
//     name: "",
//     contactNumber: "",
//     email: "",
//     address: "",
//     specialization: "",
//     experience: "",
//     availableTimeSlots: "",
//     password: "",
//     role: "vet",
//   });

//   const [profileImg, setProfileImg] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const navigate = useNavigate();

//   const { register, loading } = useAuth()
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleProfileImg = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setProfileImg(file)
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const formData = new FormData();
//       formData.append("name", form.name);
//       formData.append("contactNumber", form.contactNumber);
//       formData.append("email", form.email);
//       formData.append("address", form.address);
//       formData.append("specialization", form.specialization);
//       formData.append("experience", form.experience);
//       formData.append("timeslots", form.timeslots);
//       formData.append("password", form.password);
//       formData.append("role", form.role);

//       if (profileImg) {
//         formData.append("profileImg", profileImg);
//       }

//       const response = await register(formData)
//       if (response?.data?.success) {
//         toast.success("Owner registered successfully");
//         navigate(`/login`);
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error(err.response?.data?.message || "Registration failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   // const onSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);

//   //   try {
//   //     // Convert availableTimeSlots to array
//   //     const slotsArray = form.availableTimeSlots
//   //       ? form.availableTimeSlots.split(',').map(s => s.trim())
//   //       : [];

//   //     // Build FormData
//   //     const formData = new FormData();
//   //     Object.keys(form).forEach((key) => {
//   //       if (key === 'availableTimeSlots') {
//   //         formData.append(key, JSON.stringify(slotsArray));
//   //       } else {
//   //         formData.append(key, form[key]);
//   //       }
//   //     });
//   //     if (profileImg) formData.append("profileImg", profileImg);

//   //     const res = await axiosInstance.post("/auth/register", formData, {
//   //       headers: { "Content-Type": "multipart/form-data" },
//   //     });

//   //     if (res.data.success) {
//   //       toast.success(res.data.message || "Registration successful");
//   //       navigate("/login");
//   //     } else {
//   //       toast.error(res.data.message || "Registration failed");
//   //     }
//   //   } catch (err) {
//   //     console.error("Registration error: ", err);
//   //     toast.error("Something went wrong. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   return (
//     <div className="veterinarian-page d-flex align-items-center justify-content-center">
//       <div className="veterinarian-card shadow-lg p-4 animate-fade">
//         <h2 className="text-center mb-3">Veterinarian Registration</h2>
//         <p className="text-center text-muted mb-4">
//           Register to manage treatments, appointments & pet health
//         </p>

//         <form onSubmit={handleSubmit} encType="multipart/form-data">
//           {/* Full Name */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               placeholder="Enter email"
//               required
//             />
//           </div>

//           {/* Contact Number */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Contact Number</label>
//             <input
//               type="tel"
//               className="form-control"
//               value={form.contactNumber}
//               onChange={(e) => setForm({ ...form, contactNumber: e.target.value })}
//               placeholder="Enter contact number"
//               required
//             />
//           </div>

//           {/* Address */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Address</label>
//             <input
//               type="text"
//               className="form-control"
//               value={form.address}
//               onChange={(e) => setForm({ ...form, address: e.target.value })}
//               placeholder="Enter address"
//               required
//             />
//           </div>

//           {/* Specialization */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Specialization</label>
//             <input
//               type="text"
//               className="form-control"
//               value={form.specialization}
//               onChange={(e) => setForm({ ...form, specialization: e.target.value })}
//               placeholder="E.g. Surgery, Vaccination, General Care"
//               required
//             />
//           </div>

//           {/* Experience */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Experience</label>
//             <input
//               type="text"
//               className="form-control"
//               value={form.experience}
//               onChange={(e) => setForm({ ...form, experience: e.target.value })}
//               placeholder="e.g. 5 years"
//               required
//             />
//           </div>

//           {/* Available Time Slots */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Available Time Slots</label>
//             <input
//               type="text"
//               className="form-control"
//               value={form.availableTimeSlots}
//               onChange={(e) => setForm({ ...form, availableTimeSlots: e.target.value })}
//               placeholder="E.g. 9am-12pm, 2pm-5pm"
//               required
//             />
//             <small className="text-muted">Separate multiple slots with commas</small>
//           </div>

//           {/* Password */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               placeholder="Create a password"
//               required
//             />
//           </div>

//           {/* Profile Image */}
//           <div className="mb-3">
//             <label className="form-label fw-bold">Profile Image</label>
//             <input
//               type="file"
//               className="form-control"
//               accept="image/*"
//               onChange={(e) => setProfileImg(e.target.files[0])}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? "Creating Account..." : "Register Veterinarian"}
//           </button>
//         </form>

//         <p className="text-center mt-3">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import './VeterinarianRegister.css';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    availableTimeSlots: [], // ✅ now array
    password: "",
    role: "vet",
  });

  const [profileImg, setProfileImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Example time slots
  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
    "02:00 - 03:00",
    "03:00 - 04:00",
    "04:00 - 05:00",
  ];

  const handleSlotChange = (slot) => {
    setForm((prev) => {
      if (prev.availableTimeSlots.includes(slot)) {
        // remove if already selected
        return {
          ...prev,
          availableTimeSlots: prev.availableTimeSlots.filter((s) => s !== slot),
        };
      } else {
        // add new slot
        return {
          ...prev,
          availableTimeSlots: [...prev.availableTimeSlots, slot],
        };
      }
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const formData = new FormData();
  //     Object.keys(form).forEach((key) => {
  //       if (key === "availableTimeSlots") {
  //         formData.append(key, JSON.stringify(form.availableTimeSlots));
  //       } else {
  //         formData.append(key, form[key]);
  //       }
  //     });
  //     if (profileImg) formData.append("profileImg", profileImg);

  //     const res = await axiosInstance.post("/auth/register", formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     if (res.data.success) {
  //       toast.success(res.data.message || "Registration successful");
  //       navigate("/login");
  //     } else {
  //       toast.error(res.data.message || "Registration failed");
  //     }
  //   } catch (err) {
  //     console.error("Registration error: ", err);
  //     toast.error("Something went wrong. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (key === "availableTimeSlots") {
          // append each slot separately
          form.availableTimeSlots.forEach((slot) => {
            formData.append("availableTimeSlots", slot);
          });
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
      toast.error(err.response?.data?.message || "Something went wrong. Please try again.");
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

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
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
              onChange={(e) =>
                setForm({ ...form, specialization: e.target.value })
              }
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
              onChange={(e) =>
                setForm({ ...form, experience: e.target.value })
              }
              placeholder="e.g. 5 years"
              required
            />
          </div>

          {/* Available Time Slots */}
          <div className="mb-3">
            <label className="form-label fw-bold">Available Time Slots</label>
            <div className="d-flex flex-wrap gap-2">
              {timeSlots.map((slot) => (
                <label
                  key={slot}
                  className={`px-3 py-2 border rounded ${form.availableTimeSlots.includes(slot)
                      ? "bg-primary text-white"
                      : "bg-light"
                    }`}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={form.availableTimeSlots.includes(slot)}
                    onChange={() => handleSlotChange(slot)}
                  />
                  {slot}
                </label>
              ))}
            </div>
            <small className="text-muted">
              Select one or more available time slots
            </small>
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
