"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "var(--header-h)",
        background: scrolled
          ? "rgba(255,255,255,0.96)"
          : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        transition: "border-color 0.3s ease, background 0.3s ease",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--container-px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          {/* logo.png — public/images/ui/logo.png */}
          <Image
            src="/images/ui/logo.png"
            alt="design.somin"
            width={100}
            height={40}
            style={{ height: "clamp(28px, 3.5vw, 36px)", width: "auto" }}
            priority
          />
        </Link>

        {/* Nav */}
        <nav
          style={{
            display: "flex",
            gap: "clamp(16px, 3vw, 25px)",
            alignItems: "center",
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/" || pathname.startsWith("/project")
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(14px, 2vw, 20px)",
                  letterSpacing: "-0.03em",
                  color: isActive ? "var(--color-accent)" : "var(--color-text)",
                  position: "relative",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
                {/* Underline indicator */}
                <span
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: 0,
                    width: isActive ? "100%" : "0%",
                    height: 1,
                    background: "var(--color-accent)",
                    transition: "width 0.3s ease",
                  }}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
