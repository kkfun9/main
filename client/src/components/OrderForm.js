import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ cart, onUpdateCart, onRemoveFromCart, totalAmount }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      setSubmitMessage('Please add items to cart before placing order.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const orderData = {
        ...formData,
        items: cart,
        totalAmount: totalAmount
      };

      const response = await axios.post('/api/orders', orderData);
      
      if (response.data.success) {
        setSubmitMessage('Order placed successfully! We will contact you soon.');
        setFormData({
          customerName: '',
          email: '',
          phone: '',
          address: ''
        });
        // Clear cart after successful order
        cart.forEach(item => onRemoveFromCart(item.id));
      } else {
        setSubmitMessage('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      setSubmitMessage('Error placing order. Please check your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="order-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Place Your Order</h2>
            <p className="lead">Fill in your details and we'll get back to you</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                {cart.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h4>Your cart is empty</h4>
                    <p className="text-muted">Add some products to get started</p>
                  </div>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="mb-4">
                      <h5>Order Summary</h5>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart.map((item) => (
                              <tr key={item.id}>
                                <td>
                                  <strong>{item.name}</strong>
                                </td>
                                <td>
                                  <div className="input-group" style={{ width: '120px' }}>
                                    <button 
                                      className="btn btn-outline-secondary btn-sm" 
                                      type="button"
                                      onClick={() => onUpdateCart(item.id, item.quantity - 1)}
                                    >
                                      -
                                    </button>
                                    <input 
                                      type="number" 
                                      className="form-control form-control-sm text-center" 
                                      value={item.quantity}
                                      onChange={(e) => onUpdateCart(item.id, parseInt(e.target.value) || 0)}
                                      min="1"
                                    />
                                    <button 
                                      className="btn btn-outline-secondary btn-sm" 
                                      type="button"
                                      onClick={() => onUpdateCart(item.id, item.quantity + 1)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td>₹{item.price}/{item.unit}</td>
                                <td>₹{item.price * item.quantity}</td>
                                <td>
                                  <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onRemoveFromCart(item.id)}
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="table-primary">
                              <th colSpan="3">Total Amount</th>
                              <th>₹{totalAmount}</th>
                              <th></th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>

                    {/* Customer Details Form */}
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="customerName" className="form-label">Full Name *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="customerName"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="phone" className="form-label">Phone Number *</label>
                          <input 
                            type="tel" 
                            className="form-control" 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="address" className="form-label">Delivery Address *</label>
                          <textarea 
                            className="form-control" 
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="3"
                            required
                          ></textarea>
                        </div>
                      </div>

                      {submitMessage && (
                        <div className={`alert ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-danger'} mb-3`}>
                          {submitMessage}
                        </div>
                      )}

                      <div className="text-center">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg px-5"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Placing Order...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-check me-2"></i>
                              Place Order
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
