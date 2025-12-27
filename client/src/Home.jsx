import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // import Navbar
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar at top */}

      {/* Hero Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1581091215361-2deed7d44149?auto=format&fit=crop&w=1470&q=80")`,
          height: '80vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#f5f5f5',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        }}
      >
        <h1 className="display-4 fw-bold" style={{ color: '#333333', textShadow: 'none' }}>
          Build Your Dream Home
        </h1>
        <p className="lead mb-4" style={{ color: '#b0854f' }}>
          Classic Construction Solutions for Apartments, Houses, and Roads
        </p>
        <a
          href="#services"
          className="btn"
          style={{ backgroundColor: '#b0854f', color: '#fff', fontWeight: 'bold' }}
        >
          Explore Our Services
        </a>
      </div>

      {/* Services Section */}
      <div id="services" className="container my-5">
        <h2 className="text-center mb-4" style={{ color: '#333333' }}>Our Services</h2>
        <div className="row text-center">
          {/* Apartments */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="Apartments"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#b0854f' }}>Apartments</h5>
                <p className="card-text" style={{ color: '#555555' }}>
                  Modern apartment construction with stylish designs, high-quality finishes, and premium amenities.
                </p>
              </div>
            </div>
          </div>

          {/* Houses */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="Houses"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#b0854f' }}>Houses</h5>
                <p className="card-text" style={{ color: '#555555' }}>
                  Custom-built houses using premium materials, blending durability and elegance.
                </p>
              </div>
            </div>
          </div>

          {/* Road Connectivity */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="Road Connectivity"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#b0854f' }}>Road Connectivity</h5>
                <p className="card-text" style={{ color: '#555555' }}>
                  Expert construction of roads and pathways for smooth connectivity in residential areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-5" style={{ backgroundColor: '#333333', color: '#f5f5f5' }}>
        <h3 style={{ color: '#b0854f' }}>Ready to Start Your Project?</h3>
        <p style={{ color: '#f5f5f5' }}>Contact us today to make your dream property a reality!</p>
        <Link
          to="/contact"
          className="btn btn-lg"
          style={{ backgroundColor: '#b0854f', color: '#fff', fontWeight: 'bold' }}
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;
