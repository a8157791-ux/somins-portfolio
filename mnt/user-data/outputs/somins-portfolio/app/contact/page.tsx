"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

// ── EmailJS 설정 ──
// 1. https://www.emailjs.com 에서 무료 계정 생성
// 2. Email Service 연결 (Gmail 등)
// 3. Email Template 생성: {{from_name}}, {{from_email}}, {{message}} 변수 사용
// 4. 아래 상수를 본인 값으로 교체
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "design.somin@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "15px",
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(14px, 1.6vw, 16px)",
    color: "var(--color-text)",
    background: "transparent",
    border: "1px solid var(--color-border)",
    outline: "none",
    transition: "border-color 0.2s ease",
    borderRadius: 0,
    appearance: "none",
    WebkitAppearance: "none",
  };

  return (
    <div
      style={{
        minHeight: "calc(100dvh - var(--header-h) - 200px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 6vw, 80px) var(--container-px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 985 }}>
        {/* Heading */}
        <div style={{ marginBottom: "clamp(32px, 5vw, 60px)" }}>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 47px)",
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              lineHeight: 1.1,
              marginBottom: "clamp(12px, 2vw, 20px)",
            }}
          >
            Contact
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "var(--color-text-sub)",
              lineHeight: 1.5,
            }}
          >
            Have a project in mind? I&rsquo;d love to hear about it.
          </p>
        </div>

        {/* Form */}
        {status === "success" ? (
          <div
            style={{
              padding: "clamp(32px, 5vw, 60px)",
              border: "1px solid var(--color-border)",
              textAlign: "center",
              animation: "fadeUp 0.6s ease forwards",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(14px, 1.8vw, 18px)",
                color: "var(--color-text)",
                marginBottom: 12,
              }}
            >
              Message sent ✓
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(13px, 1.6vw, 16px)",
                color: "var(--color-text-sub)",
              }}
            >
              Thank you! I&rsquo;ll get back to you soon.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 3vw, 30px)" }}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(12px, 1.4vw, 14px)",
                  color: "var(--color-text)",
                  marginBottom: 10,
                  letterSpacing: "0.01em",
                }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                style={{
                  ...inputBase,
                  height: 50,
                  borderColor: errors.name ? "var(--color-accent)" : "var(--color-border)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-text)")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = errors.name
                    ? "var(--color-accent)"
                    : "var(--color-border)")
                }
              />
              {errors.name && (
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--color-accent)", marginTop: 6 }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(12px, 1.4vw, 14px)",
                  color: "var(--color-text)",
                  marginBottom: 10,
                }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                style={{
                  ...inputBase,
                  height: 50,
                  borderColor: errors.email ? "var(--color-accent)" : "var(--color-border)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-text)")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = errors.email
                    ? "var(--color-accent)"
                    : "var(--color-border)")
                }
              />
              {errors.email && (
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--color-accent)", marginTop: 6 }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(12px, 1.4vw, 14px)",
                  color: "var(--color-text)",
                  marginBottom: 10,
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                rows={7}
                style={{
                  ...inputBase,
                  height: 170,
                  resize: "vertical",
                  borderColor: errors.message ? "var(--color-accent)" : "var(--color-border)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-text)")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = errors.message
                    ? "var(--color-accent)"
                    : "var(--color-border)")
                }
              />
              {errors.message && (
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--color-accent)", marginTop: 6 }}>
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                width: "100%",
                height: 50,
                background: status === "loading" ? "var(--color-text-sub)" : "var(--color-text)",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: "clamp(14px, 1.6vw, 16px)",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background 0.2s ease, transform 0.1s ease",
                border: "none",
              }}
              onMouseEnter={(e) => {
                if (status !== "loading")
                  e.currentTarget.style.background = "#333";
              }}
              onMouseLeave={(e) => {
                if (status !== "loading")
                  e.currentTarget.style.background = "var(--color-text)";
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.99)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              {status !== "loading" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

            {status === "error" && (
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(13px, 1.5vw, 15px)",
                  color: "var(--color-accent)",
                  textAlign: "center",
                }}
              >
                Something went wrong. Please try again or email directly at design.somin@gmail.com
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
