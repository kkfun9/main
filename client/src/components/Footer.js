import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 style={{display: 'flex', alignItems: 'center'}}>
              <img src="/MuruganIcon.png" alt="Murugan Icon" style={{height: '32px', width: '32px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px'}} />
              Velmurugan Stone Crushers
            </h5>
            <p className="mb-3">
              Your trusted partner for high-quality construction aggregates. 
              We deliver excellence in every project with our premium products.
            </p>
            <div className="social-links">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#order" className="text-light text-decoration-none">Order</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h6>Products</h6>
            <ul className="list-unstyled">
              <li><a href="#products" className="text-light text-decoration-none">20MM Aggregate</a></li>
              <li><a href="#products" className="text-light text-decoration-none">12MM Aggregate</a></li>
              <li><a href="#products" className="text-light text-decoration-none">40MM Aggregate</a></li>
              <li><a href="#products" className="text-light text-decoration-none">M.Sand</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 mb-4">
            <h6>Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +91 9959796665
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                general.vmsc@gmail.com
              </li>
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                Your Business Address
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2024 Velmurugan Stone Crushers. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              Built with ❤️ for quality construction
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
