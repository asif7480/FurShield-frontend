// src/pages/dashboard/AddPet.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Pet.css";
import "./Form.css";
import { useGlobal } from "../../context/GlobalContext";

export default function PetAdd() {
  const [form, setForm] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    gender: "Healthy",
    medicalHistory: ""
  });

  const { createPet } = useGlobal()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("species", form.species);
      formData.append("breed", form.breed);
      formData.append("age", form.age);
      formData.append("gender", form.gender);
      formData.append("medicalHistory", form.medicalHistory);
      const response = await createPet(formData)
      console.log(response);
      alert("Pet Added Successfully!");
      navigate(`/dashboard/pets`)
    } catch (err) {
      console.log(err)
    } finally {

    }
    navigate("/dashboard/pet");
  };

  return (
    <Layout>
      <div className="addpet-page container py-4">
        <h3 className="page-title">➕ Add New Pet</h3>
        <div className="d-flex justify-content-center">
          <Link to={`/dashboard/pet`} className="btn btn-primary">View All Pets</Link>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Pet Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="species"
            placeholder="Species (Dog, Cat...)"
            value={form.species}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="text"
            name="breed"
            placeholder="Breed"
            value={form.breed}
            onChange={handleChange}
            required
          />
          <input
            className="form-control"
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />

          <select className="form-control" name="status" value={form.status} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            className="form-control"
            type="string"
            name="medicalHistory"
            placeholder="Medical History"
            value={form.medicalHistory}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-primary">
            {isSubmitting ? "Adding..." : "Add Pet"}
          </button>


        </form>
      </div>
    </Layout>
  );
}
