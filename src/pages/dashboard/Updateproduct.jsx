// src/pages/dashboard/Update.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Updateproduct.css";
import { useGlobal } from "../../context/GlobalContext";

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { updateProduct } = useGlobal();

  // Destructure with fallback values in case state is undefined
  const {
    name: initialName = "",
    category: initialCategory = "",
    price: initialPrice = "",
    description: initialDescription = "",
  } = state || {};

  const [form, setForm] = useState({
    name: initialName,
    category: initialCategory,
    price: initialPrice,
    description: initialDescription,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await updateProduct(id, form);

      if (response?.status === 200 || response?.data?.success) {
        alert(`Product ID ${id} updated successfully ✅`);
        navigate("/dashboard/products"); // Optional redirect
      } else {
        alert("Something went wrong while updating the product.");
      }
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Error updating product. Check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="update-page container py-4">
        <h3 className="page-title">✏️ Update Product</h3>
        <form className="update-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price (Rs.)"
            value={form.price}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            rows="4"
          />
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update Product"}
          </button>
        </form>
      </div>
    </Layout>
  );
}
