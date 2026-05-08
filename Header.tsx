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
            gap: 12,
            flexShrink: 0,
          }}
        >
          {/* Logo image — place ui/logo.svg in public/images/ui/ */}
          <Image
            src="/images/ui/logo.svg"
            alt="design.somin logo"
            width={50}
            height={50}
            style={{ width: 36, height: 36 }}
          />
          <Image
            src="/images/ui/logo-text.svg"
            alt="design.somin"
            width={140}
            height={21}
            style={{ height: 16, width: "auto" }}
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
