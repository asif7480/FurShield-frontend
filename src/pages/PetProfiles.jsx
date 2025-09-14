import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import "./PetProfiles.css";
import Layout from "../components/Layout";
import { useGlobal } from "../context/GlobalContext";

export default function PetProfiles() {
  // const { pets } = useContext(AppContext);
  const { pets, loading, error, getAllPets } = useGlobal()
  useEffect(() => {
    getAllPets()
  }, [])

  console.log(pets);

  if (loading) {
    return (
      <Layout>
        <div className="products-page container-lg py-5 text-center">
          <p>Loading pet...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="products-page container-lg py-5 text-center">
          <p className="text-danger">{error}</p>
        </div>
      </Layout>
    );
  }

  return (

    <Layout>
      {/* <div className="pet-profiles container py-5">
      <section className="profiles-header text-center mb-5">
        <h2 className="fw-bold text-primary">🐾 Pet Profiles</h2>
        <p className="text-muted">
          Manage your furry friends here — add, view, and organize your pets easily.
        </p>
        <Link to="/add-pet" className="btn btn-primary shadow-sm mt-3">
          ➕ Add New Pet
        </Link>
      </section>

      <section className="profiles-list">
        {pets.length === 0 ? (
          <div className="text-center py-5 empty-message">
            <h5 className="text-muted">No pets yet 🐶🐱</h5>
            <p>Add one to get started!</p>
          </div>
        ) : (
          <div className="row g-4">
            {pets.map((pet, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="pet-card card shadow-sm h-100">
                  <div className="pet-avatar mb-3">
                    <span>{pet.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <h5 className="fw-bold">{pet.name}</h5>
                  <div className="small text-muted mb-2">
                    {pet.species} • {pet.breed}
                  </div>
                  <p className="pet-notes">{pet.notes}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      
      <section className="profiles-tips mt-5 text-center">
        <h4 className="fw-bold text-secondary">💡 Pet Care Tips</h4>
        <p className="text-muted">
          Keep your pets happy and healthy! Don’t forget regular checkups, walks, and lots of love ❤️
        </p>
      </section>
    </div> */}

      <div className="products-page container-lg py-5">
        <div className="products-header text-center mb-5">
          <h2 className="section-title">Our Pets</h2>
          <p className="section-subtitle">
            Explore the best pets for your furry and feathered friends
          </p>
        </div>

        <div className="row g-4">
          {pets.length > 0 ? (
            pets.map((pet) => (
              <div key={pet._id} className="col-6 col-md-4 col-lg-3">
                <div className="card">
                  <img src={pet.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Pet Name: {pet.name}</h5>
                    <p className="card-text">Animal: { pet.species}</p>
                    <p className="card-text">Breed: { pet.breed}</p>
                    <p className="card-text">Age: { pet.age} years</p>
                    <p className="card-text">Gender: { pet.gender}</p>
                    
                    <a href="#" className="btn btn-primary">Add to cart</a>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="no-products">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
