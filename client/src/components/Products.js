import React, { useState } from 'react';

const Products = ({ products, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    setQuantities({
      ...quantities,
      [productId]: parseInt(value) || 0
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantities({
        ...quantities,
        [product.id]: 0
      });
      alert(`${quantity} ${product.unit} of ${product.name} added to cart!`);
    }
  };

  return (
    <section id="products" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Our Products</h2>
            <p className="lead">High-quality construction aggregates for all your building needs</p>
          </div>
        </div>
        
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card product-card h-100">
                <div className="position-relative">
                  <div className="product-image d-flex align-items-center justify-content-center bg-light">
                    <div className="text-center">
                      <i className="fas fa-cubes fa-4x text-muted mb-3"></i>
                      <h6 className="text-muted">{product.name}</h6>
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="price-tag">
                      ₹{product.price}/{product.unit}
                    </span>
                  </div>
                </div>
                
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text flex-grow-1">{product.description}</p>
                  
                  <div className="mt-auto">
                    <div className="input-group mb-3">
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control quantity-input" 
                        value={quantities[product.id] || 0}
                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                        min="0"
                      />
                      <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      className="btn btn-primary w-100"
                      onClick={() => handleAddToCart(product)}
                      disabled={!quantities[product.id] || quantities[product.id] <= 0}
                    >
                      <i className="fas fa-cart-plus me-2"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
