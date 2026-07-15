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

function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card border-0 shadow-lg h-100">
      <div
        className="card-header fw-bold text-uppercase"
        style={{ backgroundColor: "#8b1721", color: "#e7e7d8", letterSpacing: "0.1em" }}
      >
        {title}
      </div>
      <div className="card-body" style={{ backgroundColor: "#262626", color: "#e7e7d8" }}>
        {children}
      </div>
    </div>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span
      className="badge fw-normal"
      style={{ backgroundColor: "#8b1721", color: "#e7e7d8" }}
    >
      {label}
    </span>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="h-100 p-4"
      style={{
        backgroundColor: "#262626",
        boxShadow: "-12px -12px 0 0 #8b1721",
      }}
    >
      <h5 className="fw-bold mb-2" style={{ color: "#eee6d6" }}>
        {title}
      </h5>
      <p className="mb-0" style={{ color: "#e7e7d8" }}>
        {description}
      </p>
    </div>
  );
}

function TechGroup({ name, items }: { name: string; items: string[] }) {
  return (
    <div className="col-6">
      <h6 className="fw-bold mb-2" style={{ color: "#e7e7d8" }}>
        {name}
      </h6>
      <div className="d-flex flex-wrap gap-2">
        {items.map((item) => (
          <TechBadge key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

const PERSONAL_INFO = [
  "ชื่อ-นามสกุล",
  "สาขา / มหาวิทยาลัย",
  "จังหวัด",
  "Email",
  "เบอร์โทร",
  "GitHub",
  "LinkedIn (ถ้ามี)",
  "Resume (PDF)",
  "Portfolio URL",
];

const WHAT_I_DO = [
  "Web Development",
  "Mobile Development",
  "Backend Development",
  "Frontend Development",
  "Database Design",
  "REST API Development",
  "GIS & Map Integration",
  "Cloud Deployment",
];

const TECH_STACK = [
  { name: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"] },
  { name: "Backend", items: ["Django", "Node.js", "Express.js", "REST API"] },
  { name: "Mobile", items: ["Flutter"] },
  { name: "Database", items: ["MongoDB", "MySQL"] },
  { name: "Cloud & DevOps", items: ["Docker", "Vercel", "Google Cloud Storage", "Cloudinary"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
  { name: "APIs & Services", items: ["LINE LIFF", "LINE Messaging API", "Google Maps API", "Leaflet"] },
];

const SKILLS = [
  "Full Stack Development",
  "Database Design",
  "REST API Development",
  "Authentication (JWT / OAuth)",
  "Responsive Web Design",
  "System Analysis",
  "UI Implementation",
  "Deployment & DevOps",
  "Version Control (Git)",
  "Problem Solving",
  "Debugging",
  "Team Collaboration",
];

const SERVICES = [
  {
    title: "Full Stack Web Development",
    description:
      "พัฒนาเว็บแอปครบวงจร ตั้งแต่ออกแบบฐานข้อมูล เขียน Backend/API ไปจนถึง Frontend และ Deploy ขึ้นระบบจริง",
  },
  {
    title: "Mobile App Development",
    description: "พัฒนาแอปมือถือด้วย Flutter รองรับทั้ง Android และ iOS",
  },
  {
    title: "Backend & API Development",
    description:
      "ออกแบบและพัฒนา REST API ระบบ Authentication (JWT/OAuth) พร้อมเชื่อมต่อฐานข้อมูล",
  },
  {
    title: "System Integration",
    description:
      "เชื่อมต่อบริการภายนอก เช่น LINE LIFF, LINE Messaging API, Google Maps และระบบ GIS",
  },
  {
    title: "Cloud Deployment & DevOps",
    description: "Deploy และดูแลระบบด้วย Docker, Vercel, Google Cloud ให้พร้อมใช้งานจริง",
  },
];

const INTRODUCTION =
  "สวัสดีครับ ผมชื่อ Miss นักศึกษาสาขาวิทยาการคอมพิวเตอร์ ผู้สนใจด้าน Full Stack Development " +
  "มีประสบการณ์พัฒนา Web และ Mobile Application ตั้งแต่การวิเคราะห์ความต้องการ ออกแบบฐานข้อมูล " +
  "พัฒนา Frontend และ Backend ไปจนถึงการ Deploy ระบบ พร้อมเรียนรู้เทคโนโลยีใหม่และพัฒนาซอฟต์แวร์ที่ตอบโจทย์การใช้งานจริง";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section id="home" className="position-relative vh-100 w-100 overflow-hidden">
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

        <section id="about" className="position-relative container py-5">
          <h2
            className="fw-bold text-uppercase text-center mb-5"
            style={{ color: "#eee6d6", letterSpacing: "0.15em" }}
          >
            About
          </h2>

          <div className="row g-4">
            <div className="col-12">
              <AboutCard title="Introduction">
                <p className="mb-0">{INTRODUCTION}</p>
              </AboutCard>
            </div>

            <div className="col-md-6">
              <AboutCard title="Personal Information">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {PERSONAL_INFO.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AboutCard>
            </div>

            <div className="col-md-6">
              <AboutCard title="What I Do">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  {WHAT_I_DO.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AboutCard>
            </div>

            <div className="col-md-7">
              <AboutCard title="Tech Stack">
                <div className="row g-3 ps-2">
                  {TECH_STACK.map((group) => (
                    <TechGroup key={group.name} name={group.name} items={group.items} />
                  ))}
                </div>
              </AboutCard>
            </div>

            <div className="col-md-5">
              <AboutCard title="Skills">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 ps-2">
                  {SKILLS.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </AboutCard>
            </div>
          </div>
        </section>
        <section id="services" className="position-relative container py-5">
          <h2
            className="fw-bold text-uppercase text-center mb-5"
            style={{ color: "#eee6d6", letterSpacing: "0.15em" }}
          >
            Services
          </h2>

          <div className="row g-4 pt-3 ps-3">
            {SERVICES.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <ServiceCard title={service.title} description={service.description} />
              </div>
            ))}
          </div>
        </section>
        <PlaceholderSection id="projects" title="Projects" />
        <PlaceholderSection id="contact" title="Contact" />
      </div>
    </main>
  );
}
