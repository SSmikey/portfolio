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
  const [activeId, setActiveId] = useState("home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );

    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setHidden(currentScrollY > 80 && scrollingDown);
      lastScrollY.current = currentScrollY;

      const offset = window.innerHeight * 0.4;
      let current = sections[0]?.id ?? "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }
      setActiveId(current);
    }

    handleScroll();
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
          style={{ color: "#eee6d6", letterSpacing: "0.50em", transition: "color 0.3s ease" }}
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
            {NAV_LINKS.map((item) => {
              const isActive = item.href.slice(1) === activeId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link fw-semibold text-uppercase small position-relative nav-link-custom"
                  style={{
                    color: isActive ? "#e8503f" : "#eee6d6",
                    opacity: isActive ? 1 : 0.85,
                  }}
                >
                  {item.label}
                  <span
                    className="nav-underline"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      height: 2,
                      width: isActive ? "100%" : 0,
                      backgroundColor: "#e8503f",
                      transition: "width 0.25s ease",
                    }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
