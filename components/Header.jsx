"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="header">
      <div className="header__inner">
        {/* 로고 */}
        <Link href="/" className="header__logo">
          <div className="header__logo-avatar">
            {/* 프로필 사진: /public/images/profile.jpg 로 교체하세요 */}
            <div style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #DA7A97, #c96080)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              fontFamily: "var(--font-mono)",
            }}>S</div>
          </div>
          <span className="header__logo-text">Somin Chung</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="header__nav">
          <Link
            href="/"
            className={`header__nav-link ${isActive("/") && !isActive("/about") && !isActive("/contact") ? "active" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`header__nav-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`header__nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
