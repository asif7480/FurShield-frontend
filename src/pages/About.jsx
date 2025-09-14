import React from 'react';
import './About.css';
import Layout from '../components/Layout';

export default function About() {
  return (

    <Layout>
    <div className="about-page container py-5">
       <section className="text-center mb-5">
        <h2 className="about-title">About FurShield</h2>
        <p className="about-subtitle">
          Protecting every paw, wing, and tail with love ❤️.  
          FurShield is more than just an online store — it’s a mission to make pet care simple, safe, and stylish.
        </p>
      </section>

      <section className="row g-4 align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="./aboutpet.jpg"
            alt="Our Mission"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold">Our Mission</h3>
          <p>
            We aim to provide high-quality food, grooming essentials, and accessories for your beloved pets.  
            FurShield stands for trust, compassion, and affordability — ensuring every pet parent can care without compromise.
          </p>
          <h3 className="fw-bold mt-4">Our Vision</h3>
          <p>
            To become the most loved pet-care platform where every product is designed with pets’ well-being at the heart of it.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h3 className="fw-bold mb-4">Why Choose FurShield?</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="about-card shadow-sm p-4 rounded">
              <h5 className="fw-bold mb-2">💎 Premium Quality</h5>
              <p>Only carefully selected, safe, and pet-friendly products make it to our shelves.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card shadow-sm p-4 rounded">
              <h5 className="fw-bold mb-2">🚚 Fast Delivery</h5>
              <p>Quick and reliable doorstep delivery to keep your pets happy without delay.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-card shadow-sm p-4 rounded">
              <h5 className="fw-bold mb-2">❤️ Pet-Centered</h5>
              <p>Every decision we make is guided by the happiness and health of pets.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
