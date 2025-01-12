const nodemailer = require('nodemailer');
const Cors = require('cors');

// Initialize CORS
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: '*', // Allows all origins (use caution, explained below)
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { email, name, phone } = req.body;

    // Validate input fields
    if (!email || !name || !phone) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Add to environment variables in Vercel
        pass: process.env.EMAIL_PASS, // Add to environment variables in Vercel
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SUBSCRIPTION_EMAIL || 'your-email@example.com', // Add recipient email in environment variables
      subject: 'New Subscription',
      text: `
        New subscription received:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return res.status(200).json({ message: 'Subscription successful. Thank you!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to process subscription. Please try again.' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
