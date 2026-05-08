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

      {/* Scroll to top — ico-arrow-top.svg */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          width: 52,
          height: 52,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ui/ico-arrow-top.svg"
          alt=""
          width={52}
          height={52}
          style={{ width: 52, height: 52 }}
        />
      </button>
    </footer>
  );
}
