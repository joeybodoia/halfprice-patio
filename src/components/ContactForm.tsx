import React, { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message 
        }),
      });

      const contentType = response.headers.get("content-type");
      const isJson = contentType?.includes("application/json");
      const data = isJson ? await response.json() : {};

      if (response.ok && (data.ok || isJson === false)) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Server connection failed. Please try again later.");
    }
  };

  return (
    <div className={className}>
      {status === "success" && (
        <div className="mb-4 p-3 bg-green-900/30 border border-green-500/50 rounded-md text-green-100 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <span>Message sent successfully! We&apos;ll get back to you soon.</span>
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-500/50 rounded-md text-red-100 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm uppercase tracking-[0.2em] text-white/70">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm uppercase tracking-[0.2em] text-white/70">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm uppercase tracking-[0.2em] text-white/70">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={status === "sending"}
            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
            placeholder="Tell us what you're looking for"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto uppercase tracking-[0.25em] bg-white text-black px-8 py-3 rounded-md font-semibold transition duration-300 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" />
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
