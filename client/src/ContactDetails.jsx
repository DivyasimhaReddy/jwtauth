// src/ContactDetails.jsx
import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactDetails = () => {
  return (
    <div id="contact" className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#3E2723' }}>Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4" style={{ borderRadius: '10px' }}>
            <h5 className="mb-3" style={{ color: '#6D4C41' }}>Get in Touch</h5>
            <p style={{ color: '#3E2723', fontWeight: '500' }}>
              <strong>Address:</strong> Kadapa, Andhra Pradesh, India
            </p>
            <p style={{ color: '#3E2723', fontWeight: '500' }}>
              <strong>Phone:</strong> +91 95784 52687
            </p>
            <p style={{ color: '#3E2723', fontWeight: '500' }}>
              <strong>Email:</strong> info@classicconstruction.com
            </p>
            <Link to="/login" className="btn btn-lg"
              style={{ backgroundColor: '#6D4C41', color: '#fff', fontWeight: 'bold', borderRadius: '8px' }}>
              Login / Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;  // ✅ Make sure this line exists
