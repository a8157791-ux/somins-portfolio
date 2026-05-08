"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px var(--container-px)",
        position: "relative",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 17,
          letterSpacing: "-0.03em",
          color: "var(--color-text)",
        }}
      >
        © 2026 design.somin
      </p>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          width: 52,
          height: 65,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          cursor: "pointer",
        }}
      >
        {/* Arrow SVG */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ transform: "rotate(-90deg)" }}
        >
          <path
            d="M4 10h12M10 4l6 6-6 6"
            stroke="var(--color-text)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.05em",
            color: "var(--color-text)",
            writingMode: "vertical-rl",
          }}
        >
          TOP
        </span>
      </button>
    </footer>
  );
}
