import Image from "next/image";
import Navbar from "./Navbar";

const BG_IMAGE = "/img/BG page1.png";

function PlaceholderSection({ id, title }: { id: string; title: string }) {
  return (
    <section
      id={id}
      className="position-relative vh-100 container d-flex flex-column align-items-center justify-content-center text-center"
    >
      <h2
        className="fw-bold text-uppercase mb-3"
        style={{ color: "#eee6d6", letterSpacing: "0.15em" }}
      >
        {title}
      </h2>
      <p className="mb-0" style={{ color: "#d8cfc0", maxWidth: 560 }}>
        เนื้อหาส่วนนี้กำลังจะเพิ่มเติมเร็ว ๆ นี้
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="position-relative vh-100 w-100 overflow-hidden">
        <Image
          src="/img/BG page1.png"
          alt="Sittichai Sangnon - Programmer Portfolio"
          fill
          priority
          sizes="100vw"
          className="object-fit-cover"
        />
      </section>

      <div className="position-relative">
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url("${BG_IMAGE}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
            transform: "scale(1.15)",
            zIndex: -2,
          }}
        />
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(10, 6, 6, 0.55)", zIndex: -1 }}
        />

        <PlaceholderSection id="about" title="About" />
        <PlaceholderSection id="services" title="Services" />
        <PlaceholderSection id="projects" title="Projects" />
        <PlaceholderSection id="contact" title="Contact" />
      </div>
    </main>
  );
}
