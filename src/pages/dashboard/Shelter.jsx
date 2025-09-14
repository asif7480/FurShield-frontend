import React, { useState } from "react";
import "./Shelter.css";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function Shelter({ isOpen, toggleSidebar }) {
  const [pets, setPets] = useState([
    {
      name: "Browny 🐕",
      type: "Dog",
      age: "3 Years",
      status: "Available",
    },
    {
      name: "Kitty 🐈",
      type: "Cat",
      age: "1.5 Years",
      status: "Adopted",
    },
    {
      name: "Milo 🐾",
      type: "Puppy",
      age: "8 Months",
      status: "Available",
    },
  ]);

  const handleAdd = () => {
    alert("👉 Add new pet form khulega!");
  };

  const handleEdit = (index) => {
    alert(`✏️ Edit karna hai: ${pets[index].name}`);
  };

  const handleDelete = (index) => {
    if (window.confirm("❌ Kya aap is pet ko delete karna chahte ho?")) {
      setPets(pets.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className="shelterpet-page">
          <div className="page-header">
            <h2>🐾 Shelter Pets</h2>
            <button className="add-btn" onClick={handleAdd}>
              <FaPlus /> Add Pet
            </button>
          </div>

          <p>Manage the pets in the shelter – available and adopted ones.</p>

          <table className="shelter-table">
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>Type</th>
                <th>Age</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={index}>
                  <td data-label="Pet Name">{pet.name}</td>
                  <td data-label="Type">{pet.type}</td>
                  <td data-label="Age">{pet.age}</td>
                  <td data-label="Status">{pet.status}</td>
                  <td className="actions-col" data-label="Actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
