const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { email, name, country, phone } = req.body;

  if (!email || !name || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'theonething416@gmail.com',
    subject: 'New Subscription',
    text: `
      New subscription:
      Email: ${email}
      Name: ${name}
      Country: ${country}
      Phone: ${phone}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error processing subscription' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Test the server
console.log('Server is running. You can test it by sending a POST request to http://localhost:3001/api/subscribe');

