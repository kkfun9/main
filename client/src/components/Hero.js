import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">Premium Aggregates</div>
          <h1 className="hero-title">Crushing stone, building dreams</h1>
          <p className="hero-sub">Reliable supply, transparent pricing and timely deliveries for construction professionals and homeowners.</p>

          <div className="hero-cta">
            <a href="#products" className="btn btn-cta btn-lg">See Products</a>
            <a href="#contact" className="btn btn-ghost btn-lg">Contact Sales</a>
          </div>
        </div>

        <div className="hero-media">
          <img src="/VelMuruganStoneCrusher.jpg" alt="Stone Crusher" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
