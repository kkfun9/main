import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">Our Products</h1>
            <p className="lead mb-4">High-quality construction aggregates for all your building needs</p>
            <div className="row justify-content-center">
              <div className="col-md-2 mb-4">
                <img src="/VelMuruganStoneCrusher.jpg" alt="VelMurugan Stone Crusher" className="img-fluid rounded shadow" />
                <div className="mt-2">Stone Crusher</div>
              </div>
              <div className="col-md-2 mb-4">
                <img src="/newVSIcrushed20MM.jpg" alt="VSI Crushed 20MM" className="img-fluid rounded shadow" />
                <div className="mt-2">VSI Crushed 20MM</div>
              </div>
              <div className="col-md-2 mb-4">
                <img src="/newVSIcrushed12MM.jpg" alt="VSI Crushed 12MM" className="img-fluid rounded shadow" />
                <div className="mt-2">VSI Crushed 12MM</div>
              </div>
              <div className="col-md-2 mb-4">
                <img src="/newMsand.jpg" alt="M Sand" className="img-fluid rounded shadow" />
                <div className="mt-2">M Sand</div>
              </div>
              <div className="col-md-2 mb-4">
                <img src="/20MMvs40MM.jpg" alt="20MM vs 40MM" className="img-fluid rounded shadow" />
                <div className="mt-2">20MM vs 40MM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
