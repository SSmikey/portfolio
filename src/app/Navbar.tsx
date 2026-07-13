"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setHidden(currentScrollY > 80 && scrollingDown);
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark position-fixed top-0 start-0 w-100 px-3 px-lg-5 py-2"
      style={{
        zIndex: 1000,
        backgroundColor: "rgba(15, 8, 8, 0.45)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.35s ease",
      }}
    >
      <div className="container-fluid px-0">
        <a
          className="navbar-brand fw-bold text-uppercase"
          href="#home"
          style={{ color: "#eee6d6", letterSpacing: "0.50em" }}
        >
          <span>Sittichai</span>
          <span>Sangnon</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <div className="d-flex flex-column flex-lg-row gap-lg-4 mt-3 mt-lg-0">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link fw-semibold text-uppercase small"
                style={{ color: "#eee6d6" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
