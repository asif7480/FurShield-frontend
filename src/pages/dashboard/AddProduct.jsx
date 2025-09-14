// src/pages/dashboard/AddProduct.jsx
import React, { useState } from "react";
import Layout from "../../components/dashboard/Layout";
import "./AddProduct.css";
import { useGlobal } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

  const { loading, createProduct } = useGlobal()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()

  console.log(loading);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
    }
  }

  console.log(image);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("category", form.category);
      formData.append("price", form.price);
      formData.append("description", form.description);
      if (image) {
        formData.append("image", image);
      }

      const response = await createProduct(formData)
      console.log(response);
      alert("Product Added Successfully");
      navigate(`/dashboard/products`)
    } catch (err) {
      console.log(err);
    }finally{
      setIsSubmitting(false)
    }

  };

  return (
    <Layout>
      <div className="addproduct-page container py-4">
        <h3 className="page-title">➕ Add Product</h3>
        <form className="addproduct-form" onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
          <button type="submit" className="btn-submit">
            {isSubmitting ? "Adding..." : `Add Product`}
          </button>
        </form>
      </div>
    </Layout>
  );
}
