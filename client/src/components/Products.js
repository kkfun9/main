import React, { useState } from 'react';

const Products = ({ products, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  // Fallback sample products when `products` prop is empty (useful for local preview)
  const sampleProducts = [
    { id: 'vsi-20', name: 'VSI Crushed 20MM', price: 600, unit: 'ton', description: 'High-quality 20mm aggregate (VSI)', image: '/newVSIcrushed20MM.jpg' },
    { id: 'vsi-12', name: 'VSI Crushed 12MM', price: 550, unit: 'ton', description: 'Fine 12mm aggregate (VSI)', image: '/newVSIcrushed12MM.jpg' },
    { id: 'msand', name: 'M.Sand', price: 400, unit: 'ton', description: 'Manufactured sand for masonry and plastering', image: '/newMsand.jpg' },
  ];

  const displayedProducts = Array.isArray(products) && products.length > 0 ? products : sampleProducts;

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
          {/* Removed repeated 'Our Products' and description text */}
        </div>
        
        <div className="row">
          {displayedProducts.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card product-card h-100">
                <div className="position-relative">
                  {/* Show product image if available, otherwise use name-based fallback images */}
                  <div className="product-image bg-light">
                    {(() => {
                      const name = (product.name || '').toLowerCase();
                      let src = null;
                      if (product.image) src = product.image;
                      else if (name.includes('20')) src = '/newVSIcrushed20MM.jpg';
                      else if (name.includes('12')) src = '/newVSIcrushed12MM.jpg';
                      else if (name.includes('m sand') || name.includes('msand') || name.includes('m.sand')) src = '/newMsand.jpg';
                      else src = '/20MMvs40MM.jpg';

                      return (
                        <img src={src} alt={product.name} className="img-fluid" style={{height: '160px', width: '100%', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px'}} />
                      );
                    })()}
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
