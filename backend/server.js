import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// In-memory inquiry storage for demonstration / review
const inquiries = [];

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Sivasudhan E Portfolio API',
    timestamp: new Date().toISOString(),
  });
});

// Contact Form Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'Missing required fields. Name, email, subject, and message are required.',
    });
  }

  // Simple email regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const record = {
    id: `msg_${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  inquiries.push(record);
  console.log(`[Contact Form Received] From: ${record.name} <${record.email}> | Subject: ${record.subject}`);

  // In production with configured SMTP / Resend / SendGrid credentials:
  // await sendEmailNotification(record);

  return res.status(200).json({
    success: true,
    message: 'Inquiry received successfully. Sivasudhan will respond shortly.',
    id: record.id,
  });
});

const server = app.listen(PORT, () => {
  console.log(`Portfolio API Server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[Server Warning] Port ${PORT} is already in use by another process.`);
    console.error(`Please close any existing process on port ${PORT} or configure a custom PORT in .env.\n`);
  } else {
    console.error('Server error:', err);
  }
});
