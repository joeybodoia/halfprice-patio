import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ error: 'Email is not configured.' });
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Half-Price Patio" <${SMTP_USER}>`,
      to: 'jbodoia@gmail.com',
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: [
        `Name: ${name || 'Not provided'}`,
        `Email: ${email}`,
        '',
        'Message:',
        message || '(No message provided)',
      ].join('\n'),
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending contact email', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
