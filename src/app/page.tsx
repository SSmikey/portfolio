import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="position-relative vh-100 w-100 overflow-hidden">
        <Image
          src="/img/BG page1.png"
          alt="Sittichai Sangnon - Programmer Portfolio"
          fill
          priority
          sizes="100vw"
          className="object-fit-cover"
        />

        <nav className="navbar navbar-expand-lg navbar-dark position-absolute top-0 start-0 w-100 bg-transparent px-3 px-lg-5 py-4">
          <div className="container-fluid px-0">
            <a
              className="navbar-brand fw-bold text-uppercase"
              href="#home"
              style={{ color: "#eee6d6", letterSpacing: "0.50em" }}
            >
              <span>Sittichai</span>
              <span style={{ marginLeft: "12rem" }}>Sangnon</span>
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
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
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
      </section>
    </main>
  );
}
