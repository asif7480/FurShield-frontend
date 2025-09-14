// src/pages/dashboard/Pet.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/dashboard/Layout";
import "./Pet.css";
import { useGlobal } from "../../context/GlobalContext";

export default function Pet() {
  const { pets, getAllPets, deletePet } = useGlobal()

  useEffect(() => {
    getAllPets()
  }, [])

  const handleDelete = async(id) => {
    try{
      const response = await deletePet(id)
      alert("Product has been deleted.")
    }catch(err){
      console.log(err);
    }finally{
      getAllPets()
    }
  }

  return (
    <Layout>
      <div className="pets-page container py-4">
        <div className="pets-header">
          <h3 className="pets-title">🐾 Pets</h3>
          {/* ✅ Add Pet Button */}
          <Link to="/dashboard/addpet" className="btn-add">
            ➕ Add Pet
          </Link>
        </div>

        <p className="pets-subtitle">
          Manage all <span>registered pets</span> here.
        </p>

        <div className=" table-responsive">
          <table className="pets-table table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Gender</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={pet.id} className="fade-in">
                  <td>{index + 1}</td>
                  <td>{pet.name}</td>
                  <td>{pet.species}</td>
                  <td>{pet.breed} years</td>
                  <td>{pet.age}</td>
                  <td>{pet.gender}</td>
                  {/* <td>
                    <span className={`status-badge ${pet.status.toLowerCase()}`}>
                      {pet.status}
                    </span>
                  </td> */}
                  <td className="text-center">
                    {/* ✅ Edit -> UpdatePet Page */}
                    <Link
                      to={`/dashboard/updatepet/${pet._id}`}
                      className="btn-action edit"
                      state={pet}
                    >
                      ✏️
                    </Link>
                    <button onClick={() => handleDelete(pet._id)} className="btn-action delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className=" table-responsive">
          <table className="pets-table table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Species</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Gender</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={pet.id} className="fade-in">
                  <td>{index + 1}</td>
                  <td>{pet.name}</td>
                  <td>{pet.type}</td>
                  <td>{pet.age} years</td>
                  <td>{pet.owner}</td>
                  <td>
                    <span className={`status-badge ${pet.status.toLowerCase()}`}>
                      {pet.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/dashboard/updatepet/${pet.id}`}
                      className="btn-action edit"
                    >
                      ✏️
                    </Link>
                    <button className="btn-action delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </Layout>
  );
}
