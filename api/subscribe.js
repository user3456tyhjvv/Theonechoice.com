const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, phone } = req.body;

    if (!email || !name || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'theonething416@gmail.com',
      subject: 'New Subscription',
      text: `
        New subscription:
        Email: ${email}
        Name: ${name}
        Phone: ${phone}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error processing subscription' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
