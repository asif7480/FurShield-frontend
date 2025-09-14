// src/pages/dashboard/UpdatePet.jsx
import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./UpdatePet.css";
import { useGlobal } from "../../context/GlobalContext";

export default function UpdatePet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation()
  const { updatePet } = useGlobal()

  const {
    name: initialName = "",
    species: initialSpecies = "",
    breed: initialBreed = "",
    age: initialAge = "",
    gender: initialGender = "",
    medicalHistory: initialMedicalHistory = ""
  } = state || {}

  const [form, setForm] = useState({
    name: initialName,
    species: initialSpecies,
    breed: initialBreed,
    age: initialAge,
    gender: initialGender,
    medicalHistory: initialMedicalHistory
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updatePet(id, form)
      if (response?.status === 200 || response?.data?.success) {
        alert(`Product ID ${id} updated successfully ✅`);
        navigate("/dashboard/pet"); // Optional redirect
      } else {
        alert("Something went wrong while updating the product.");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <Layout>
      <div className="updatepet-page container py-4">
        <h3 className="page-title">✏️ Update Pet</h3>
        <form className="pet-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Pet Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="species"
            placeholder="Species (Dog, Cat...)"
            value={form.species}
            onChange={handleChange}
            required
          />
        <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={form.breed}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="string"
            name="medicalHistory"
            placeholder="Medical History"
            value={form.medicalHistory}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit">
            { isSubmitting ? "Updating..." : "Update Pet" }
          </button>
        </form>
      </div>
    </Layout>
  );
}
