import React from 'react';
import './Contact.css';
import Layout from '../components/Layout';

export default function Contact() {
  return (

    <Layout>
    <div className="contact-page container my-5">
      <div className="card contact-card shadow-lg p-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold contact-title">📞 Get in Touch</h2>
          <p className="text-muted">We’d love to hear from you! Fill the form below or reach us via details.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-7">
            <form className="fade-in">
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 send-btn">
                Send Message 🚀
              </button>
            </form>
          </div>

          <div className="col-md-5 fade-in">
            <div className="info-box p-3 shadow-sm mb-3">
              <h6 className="fw-bold">📍 Address</h6>
              <p className="text-muted mb-0">Karachi Pakistan</p>
            </div>
            <div className="info-box p-3 shadow-sm mb-3">
              <h6 className="fw-bold">📧 Email</h6>
              <p className="text-muted mb-0">support@furshield.com</p>
            </div>
            <div className="info-box p-3 shadow-sm">
              <h6 className="fw-bold">📞 Phone</h6>
              <p className="text-muted mb-0">+92 31244232</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout> 
  );
}

