const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample products data
const products = [
  {
    id: 1,
    name: '20MM Aggregate',
    price: 550,
    unit: 'MT',
    description: 'High quality 20mm aggregate for construction purposes',
    image: 'icon'
  },
  {
    id: 2,
    name: '12MM Aggregate',
    price: 550,
    unit: 'MT',
    description: 'Premium 12mm aggregate suitable for various construction applications',
    image: 'icon'
  },
  {
    id: 3,
    name: '40MM Aggregate',
    price: 550,
    unit: 'MT',
    description: 'Coarse 40mm aggregate ideal for heavy construction work',
    image: 'icon'
  },
  {
    id: 4,
    name: 'M.Sand',
    price: 550,
    unit: 'MT',
    description: 'Manufactured sand for superior concrete quality',
    image: 'icon'
  }
];

// Email configuration (you'll need to set up your email service)
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can change this to your preferred email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/orders', async (req, res) => {
  try {
    const { customerName, email, phone, address, items, totalAmount } = req.body;
    
    // Create order object
    const order = {
      id: Date.now(),
      customerName,
      email,
      phone,
      address,
      items,
      totalAmount,
      status: 'pending',
      createdAt: new Date()
    };

    // Here you would typically save to database
    console.log('New Order:', order);

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Order Confirmation - VMBM',
      html: `
        <h2>Order Confirmation</h2>
        <p>Dear ${customerName},</p>
        <p>Thank you for your order! Here are the details:</p>
        <ul>
          ${items.map(item => `<li>${item.name}: ${item.quantity} ${item.unit} @ ₹${item.price}/${item.unit}</li>`).join('')}
        </ul>
        <p><strong>Total Amount: ₹${totalAmount}</strong></p>
        <p>We will contact you shortly to confirm delivery details.</p>
        <p>Best regards,<br>VMBM Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, orderId: order.id, message: 'Order placed successfully!' });
  } catch (error) {
    console.error('Order error:', error);
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
});

app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const enquiry = {
      id: Date.now(),
      name,
      email,
      phone,
      message,
      createdAt: new Date()
    };

    console.log('New Enquiry:', enquiry);

    // Send email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.ADMIN_EMAIL || 'admin@vmbm.com',
      subject: 'New Enquiry - VMBM Website',
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Please respond to this enquiry at the earliest.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.json({ success: true, message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error('Enquiry error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit enquiry' });
  }
});

// Catch all handler for React routing
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
