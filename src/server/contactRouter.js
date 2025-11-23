import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

const { SMTP_USER, SMTP_PASS } = process.env;

// Lazily create transporter so we can throw early if env vars are missing
const getTransporter = () => {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP credentials are missing");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

router.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const transporter = getTransporter();

    const emailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      to: "jbodoia@gmail.com",
      from: `"Half-Price Patio Contact Form" <${SMTP_USER}>`,
      replyTo: email,
      subject: `New inquiry from: ${name}`.slice(0, 120),
      text: emailBody,
    });

    res.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    const message =
      error instanceof Error ? error.message : "Failed to send message.";
    if (message === "SMTP credentials are missing") {
      return res.status(500).json({ error: "Email is not configured." });
    }
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;
