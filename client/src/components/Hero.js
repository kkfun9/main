import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold mb-4">
              Quality Aggregate Products for Construction
            </h1>
            <p className="lead mb-4">
              VMBM provides high-quality construction aggregates including 20MM, 12MM, 40MM aggregates and M.Sand. 
              Delivering excellence in every project.
            </p>
            <div className="row text-center mt-5">
              <div className="col-md-3">
                <div className="mb-3">
                  <i className="fas fa-truck fa-3x mb-3"></i>
                  <h5>Fast Delivery</h5>
                  <p className="small">Quick and reliable delivery service</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <i className="fas fa-award fa-3x mb-3"></i>
                  <h5>Quality Assured</h5>
                  <p className="small">Premium quality aggregates</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <i className="fas fa-rupee-sign fa-3x mb-3"></i>
                  <h5>Best Prices</h5>
                  <p className="small">Competitive pricing in the market</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <i className="fas fa-handshake fa-3x mb-3"></i>
                  <h5>Trusted Partner</h5>
                  <p className="small">Reliable construction partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
