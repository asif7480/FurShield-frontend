import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import {
  FaDog,
  FaWalking,
  FaHome,
  FaMoon,
  FaCar,
  FaPills,
} from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <section className="home-page d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-section">
              <h1 className="home-title">
                FurShield <span>— PetCare</span> for Every Friend 🐾
              </h1>
              <p className="home-subtitle">
                Discover nutritious food, cozy accessories, grooming essentials,
                and manage your pets’ profiles all in one place.
              </p>
              <div className="mt-4">
                <Link to="/products" className="btn btn-primary btn-lg me-3">
                  🛒 Browse Products
                </Link>
                <Link to="/about" className="btn btn-outline-secondary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-card shadow-lg rounded-4 overflow-hidden">
                <Carousel fade interval={3000} pause="hover">
                  <Carousel.Item>
                    <img
                      src="./pet.jpg"
                      className="d-block w-100 hero-img"
                      alt="Happy pets"
                    />
                    <div className="carousel-overlay">
                      <h3>Healthy Food</h3>
                      <p>Nutritious meals for every furry friend.</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="./pet2.jpg"
                      className="d-block w-100 hero-img"
                      alt="Accessories"
                    />
                    <div className="carousel-overlay">
                      <h3>Cozy Accessories</h3>
                      <p>Make your pets feel at home anywhere.</p>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="./pet3.jpg"
                      className="d-block w-100 hero-img"
                      alt="Grooming"
                    />
                    <div className="carousel-overlay">
                      <h3>Grooming Essentials</h3>
                      <p>Keep your pets fresh, clean & happy.</p>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Our Pet Care Services
          </h2>
          <div className="row g-4">
            {[
              {
                icon: <FaDog />,
                title: "Puppy Sitting",
                desc: "Helping your new pup to be a good boy or girl isn’t always easy, but we’re here to help.",
              },
              {
                icon: <FaWalking />,
                title: "Dog Walking",
                desc: "Choose from a 30, 45, or 60-minute visit to give your pet their daily fun-filled exercise.",
              },
              {
                icon: <FaHome />,
                title: "Pet Sitting",
                desc: "While you’re away we’ll make sure your pet gets food, water, exercise & love.",
              },
              {
                icon: <FaMoon />,
                title: "Overnight Care",
                desc: "If you’re away for the night, we’ll take care of your pet’s evening and morning needs.",
              },
              {
                icon: <FaCar />,
                title: "Pet Taxi",
                desc: "Need a lift to the groomer, vet, or dog park? We’ve got you covered.",
              },
              {
                icon: <FaPills />,
                title: "Pet Medical Administration",
                desc: "Our professionals can help with everything from pills to injections.",
              },
            ].map((service, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="service-card text-center p-4 h-100">
                  <div className="service-icon mb-3">{service.icon}</div>
                  <h5 className="service-title">{service.title}</h5>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animals-section mt-5">
        <h2 className="section-title mb-4" style={{ textAlign: "center" }}>
    🐾 Meet Our Lovely Animals
  </h2>
        <div className="row g-4">
          {[
            { img: "./dog.jpg", name: "Dogs", desc: "Loyal and playful companions." },
            { img: "./cat.jpg", name: "Cats", desc: "Independent yet affectionate." },
            { img: "./bird.jpg", name: "Birds", desc: "Colorful and cheerful friends." },
            { img: "./fish.jpg", name: "Fish", desc: "Peaceful swimmers for your aquariums." },
            { img: "./rabbit.jpg", name: "Rabbits", desc: "Cute hoppers full of energy." },
            { img: "./turtle.jpg", name: "Turtles", desc: "Slow, calm, and wise pets." },
            { img: "./horse.jpg", name: "Horses", desc: "Majestic and strong companions." },
            { img: "./parrot.jpg", name: "Parrots", desc: "Charming talkative birds." },
            { img: "./hamster.jpg", name: "Hamsters", desc: "Tiny pets with big hearts." },
            { img: "./goat.jpg", name: "Goats", desc: "Playful and friendly farm animals." },
            { img: "./cow.jpg", name: "Cows", desc: "Gentle giants of the farm." },
            { img: "./duck.jpg", name: "Ducks", desc: "Quirky and lovable swimmers." },
          ].map((animal, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="animal-card shadow-sm">
                <img
                  src={animal.img}
                  alt={animal.name}
                  className="animal-img"
                />
                <div className="animal-info">
                  <h5>{animal.name}</h5>
                  <p className="animal-desc">{animal.desc}</p>
                  <div className="animal-stars">⭐⭐⭐⭐⭐</div>
                  <button className="animal-btn">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
