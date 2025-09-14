import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer text-white mt-5 pt-4">
      <div className="container-lg">
        <div className="row gy-4 align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h4 className="fw-bold mb-2">FurShield</h4>
            <p className="mb-0 tagline">Every Paw/Wing Deserves a Shield of Love</p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 ">
          <small>© {new Date().getFullYear()} FurShield — All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
}
