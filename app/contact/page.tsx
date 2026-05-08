"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 전송 기능은 EmailJS 또는 Formspree로 연결 가능
    setSent(true);
  };

  return (
    <div className="page-container">
      <main className="contact-section">
        <div className="contact-inner">
          <h1 className="contact-title">Contact</h1>
          <p className="contact-desc">
            A visual designer working across branding, editorial, and digital design,<br />
            building clear and consistent visual systems.
          </p>

          {sent ? (
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "15px",
              color: "var(--color-primary)",
              padding: "40px 0",
              borderTop: "1px solid var(--color-border)",
            }}>
              메시지가 전송되었습니다. 감사합니다! ✓
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <polyline points="12,5 19,12 12,19" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
