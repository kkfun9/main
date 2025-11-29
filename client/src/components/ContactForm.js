import React, { useState } from 'react';
import axios from 'axios';
import ChatWidget from './ChatWidget';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    signup: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Include signup preference in enquiry payload
      const payload = { ...formData };
      const response = await axios.post('/api/enquiry', payload);
      
      if (response.data.success) {
        setSubmitMessage('Thank you for your enquiry! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitMessage('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Enquiry submission error:', error);
      setSubmitMessage('Error submitting enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Get In Touch</h2>
            <p className="lead">Have questions? We'd love to hear from you</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="text-center">
                      <i className="fas fa-phone fa-3x text-primary mb-3"></i>
                      <h5>Phone</h5>
                      <p className="text-muted">+91 9959796665</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="text-center">
                      <i className="fas fa-envelope fa-3x text-primary mb-3"></i>
                      <h5>Email</h5>
                      <p className="text-muted">general.vmsc@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="text-center">
                      <i className="fas fa-map-marker-alt fa-3x text-primary mb-3"></i>
                      <h5>Address</h5>
                      <p className="text-muted">188 A.Kothur Road Satrawada<br />Nagari (M) Chittoor (D) AP 517590</p>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        name="name"
                        value={formData.name}
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
                  
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      className="form-control" 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Tell us about your requirements..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="signup" name="signup" checked={formData.signup} onChange={handleInputChange} />
                    <label className="form-check-label" htmlFor="signup">
                      Sign me up for email updates and offers
                    </label>
                  </div>

                  {submitMessage && (
                    <div className={`alert ${submitMessage.includes('Thank you') ? 'alert-success' : 'alert-danger'} mb-3`}>
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Enquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chat widget included so users can start a live chat */}
      <ChatWidget />
    </section>
  );
};

export default ContactForm;
