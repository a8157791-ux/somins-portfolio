"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p className="footer__copy">© 2026 design.somin</p>
      <button className="footer__back-top" onClick={scrollToTop} aria-label="맨 위로">
        <svg viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="28" x2="12" y2="2" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="4,10 12,2 20,10" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
}
