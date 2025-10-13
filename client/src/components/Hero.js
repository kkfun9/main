import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home" style={{background: 'linear-gradient(135deg, #ffd700 0%, #ff4500 100%)'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1
              style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '62px',
                fontWeight: 400,
                lineHeight: '74.4px',
                letterSpacing: 'normal',
                color: 'inherit',
                textAlign: 'center',
                margin: 0,
                boxSizing: 'border-box',
                WebkitFontSmoothing: 'antialiased',
                textShadow: 'none',
                textTransform: 'none',
                width: '100%',
                maxWidth: '100%',
                overflowWrap: 'break-word',
                display: 'inline-block',
              }}
            >
              Crushing stone, building<br />dreams.
            </h1>
            <p className="lead mb-4">High-quality construction aggregates for all your building needs</p>
            <div className="row justify-content-center">
              {/* Line 1: Stone Crusher */}
              <div className="col-12 mb-4">
                <img src="/VelMuruganStoneCrusher.jpg" alt="VelMurugan Stone Crusher" style={{width: '60%', maxWidth: '600px', height: 'auto'}} className="img-fluid rounded shadow" />
                <div className="mt-2">Stone Crusher</div>
              </div>
              {/* Line 2: VSI Crushed 20MM and 12MM side by side */}
              <div className="col-12 mb-4 d-flex justify-content-center gap-4">
                <div>
                  <img src="/newVSIcrushed20MM.jpg" alt="VSI Crushed 20MM" style={{width: '300px', height: 'auto'}} className="img-fluid rounded shadow" />
                  <div className="mt-2">VSI Crushed 20MM</div>
                </div>
                <div>
                  <img src="/newVSIcrushed12MM.jpg" alt="VSI Crushed 12MM" style={{width: '300px', height: 'auto'}} className="img-fluid rounded shadow" />
                  <div className="mt-2">VSI Crushed 12MM</div>
                </div>
              </div>
              {/* Line 3: M Sand */}
              <div className="col-12 mb-4">
                <img src="/newMsand.jpg" alt="M Sand" style={{width: '50%', maxWidth: '400px', height: 'auto'}} className="img-fluid rounded shadow" />
                <div className="mt-2">M Sand</div>
              </div>
              {/* Line 4: 20MM vs 40MM */}
              <div className="col-12 mb-4">
                <img src="/20MMvs40MM.jpg" alt="20MM vs 40MM" style={{width: '50%', maxWidth: '400px', height: 'auto'}} className="img-fluid rounded shadow" />
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
