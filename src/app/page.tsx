import Image from "next/image";
import Navbar from "./Navbar";
import Reveal from "./Reveal";

const BG_IMAGE = "/img/BG page1.png";

function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card border-0 shadow-lg h-100 about-card">
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
      className="badge fw-normal tech-badge"
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
      className="h-100 p-4 service-card"
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

function ProjectCard({
  title,
  description,
  highlights,
  tech,
  link,
}: {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link: string;
}) {
  return (
    <div className="position-relative project-card" style={{ marginLeft: 90 }}>
      <div
        className="position-absolute project-card-strip"
        style={{ left: -90, top: -14, bottom: -14, width: 90, backgroundColor: "#8b1721" }}
      />
      <div className="p-4 position-relative project-card-body" style={{ backgroundColor: "#262626" }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
          <h4 className="fw-bold mb-0" style={{ color: "#eee6d6" }}>
            {title}
          </h4>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="fw-semibold text-uppercase small text-nowrap view-project-link"
            style={{ color: "#e8503f" }}
          >
            View Project <span className="arrow">→</span>
          </a>
        </div>
        <p style={{ color: "#e7e7d8" }}>{description}</p>
        <ul className="mb-3 ps-3" style={{ color: "#e7e7d8" }}>
          {highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="d-flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>
      </div>
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

const PERSONAL_INFO_HEADS = new Set([
  "ชื่อ-นามสกุล",
  "ชื่อเล่น",
  "วันเกิด",
  "อายุ",
  "การศึกษา",
]);

const PERSONAL_INFO = [
  "ชื่อ-นามสกุล",
  ": นายสิทธิชัย แสงนนท์",
  "ชื่อเล่น",
  ": มิกซ์",
  "วันเกิด",
  ": 9 กุมภาพันธ์ 2548",
  "อายุ",
  ": 21 ปี",
  "การศึกษา",
  ": มัธยมศึกษา หลักสูตร วิท-คณิต",
  "โรงเรียนจตุรภูมิพิทยาคาร",
  ": ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์",
  "มหาวิทยาลัยราชภัฏศรีสะเกษ GPA 3.84",
];

const INTERESTS = [
  "Backend Development",
  "System Design",
  "REST API",
  "Database Design",
  "Authentication",
  "Cloud & Deployment",
  "AI Integration",
];

const TECH_STACK = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Bootstrap"],
  },
  {
    name: "Backend",
    items: ["Next.js API Routes", "Node.js", "Django", "REST API"],
  },
  {
    name: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Postman"],
  },
  {
    name: "AI Tools",
    items: ["ChatGPT", "Claude", "Gemini"],
  },
]

const SKILLS = [
  "Backend Development",
  "REST API",
  "Database Design",
  "Authentication",
  "System Design",
  "Deployment",
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

const PROJECTS = [
  {
    title: "PSSK Patient Visit Management System",
    description:
      "ระบบเว็บสำหรับบริหารจัดการการฝากเยี่ยมผู้ป่วย พร้อมระบบ Agent Buddy และ Admin Dashboard",
    highlights: [
      "พัฒนา Web Application สำหรับระบบฝากเยี่ยมผู้ป่วย พร้อมระบบ Admin Dashboard, Agent Buddy, รีวิว และการจัดการข้อมูล",
      "พัฒนา Full Stack พร้อมเชื่อมต่อ LINE LIFF, LINE Messaging API และ MongoDB รวมถึง Deploy ด้วย Docker",
    ],
    tech: ["Next.js", "MongoDB", "LINE LIFF", "LINE API", "React", "TypeScript", "JWT", "Google Cloud Storage", "Docker"],
    link: "#",
  },
  {
    title: "GeoPass University Activity Check-in System",
    description: "ระบบเว็บสำหรับลงทะเบียนและเช็กอินกิจกรรมมหาวิทยาลัย พร้อมระบบสำหรับนักศึกษา เจ้าหน้าที่ และผู้ดูแลระบบ",
    highlights: [
      "พัฒนา Web Application สำหรับลงทะเบียนและเช็กอินกิจกรรมมหาวิทยาลัย พร้อมระบบ Student, Staff และ Admin",
      "รองรับการเช็กอินด้วย GPS, QR Code, รูปถ่าย และ Time Code พร้อมแจ้งเตือนผ่าน LINE และแผนที่แบบเรียลไทม์",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth", "LINE OA", "Cloudinary", "Vercel"],
    link: "#",
  },
  {
    title: "SSK Robot Competition 2026 Certificate Management System (Module)",
    description: "ระบบออกและดาวน์โหลดเกียรติบัตรสำหรับผู้เข้าแข่งขัน โดยสร้างจาก Template และข้อมูลผลการแข่งขัน",
    highlights: [
      "พัฒนาระบบออกและดาวน์โหลดเกียรติบัตรสำหรับผู้เข้าแข่งขัน รองรับการสร้างจาก Template และข้อมูลผลการแข่งขัน",
    ],
    tech: ["Next.js", "React", "TypeScript", "PDF-lib", "Google Cloud Storage"],
    link: "#",
  },
  {
    title: "Law Office Management System",
    description: "ระบบสำหรับสำนักงานกฎหมายที่รับดำเนินคดีหนี้เสีย (NPL) ให้สถาบันการเงิน จัดการข้อมูลลูกหนี้/สินเชื่อ และออกเอกสารทวงหนี้อัตโนมัติ",
    highlights: [
      "พัฒนา Web Application สำหรับบริหารจัดการข้อมูลลูกหนี้และสินเชื่อ พร้อมระบบสร้างเอกสารกฎหมายอัตโนมัติจาก Template",
      "พัฒนาระบบค้นหา แก้ไข และจัดการข้อมูลคดีและสินเชื่อ เพื่อเพิ่มประสิทธิภาพในการดำเนินงาน",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "JWT", "Docxtemplater", "Bootstrap"],
    link: "#",
  },
  {
    title: "SL Concrete Production & Inventory Management System",
    description: "ระบบบริหารจัดการการผลิต ตรวจสอบคุณภาพ และคลังสินค้าสำหรับโรงงานผลิตคอนกรีตสำเร็จรูป",
    highlights: [
      "พัฒนาระบบบันทึกการผลิต (Production Control) และตรวจสอบคุณภาพ (Quality Control)",
      "พัฒนาระบบจัดการคลังสินค้าและการขาย พร้อมอัปเดตสต็อกอัตโนมัติจากข้อมูลการผลิต",
      "พัฒนาระบบจัดการผู้ใช้งานและกำหนดสิทธิ์การเข้าถึงด้วย JWT Authentication",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "JWT", "Bootstrap", "Docker"],
    link: "#",
  },
  {
    title: "Stall Lock Market Stall Booking System",
    description: "ระบบเว็บสำหรับจองแผงขายของในตลาด พร้อมระบบชำระเงินและตรวจสอบการจอง",
    highlights: [
      "พัฒนาระบบจองแผงและอัปโหลดหลักฐานการชำระเงิน",
      "พัฒนาระบบอนุมัติการจองและจัดการแผงผ่าน Admin Dashboard",
      "พัฒนาระบบหมดเวลาการจองและคืนแผงอัตโนมัติ",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "JWT", "Cloudinary", "Bootstrap", "Docker"],
    link: "#",
  },
  {
    title: "Bill Mate Dormitory Billing Management System",
    description: "ระบบเว็บสำหรับบริหารจัดการค่าเช่าและบิลหอพัก พร้อมระบบตรวจสอบการชำระเงินและแจ้งซ่อม",
    highlights: [
      "พัฒนาระบบจัดการห้องพัก ผู้เช่า และการออกบิลรายเดือน",
      "พัฒนาระบบอัปโหลดสลิป พร้อมตรวจสอบข้อมูลด้วย OCR และ QR Code",
      "พัฒนาระบบแจ้งซ่อมและแจ้งเตือนสำหรับผู้เช่าและผู้ดูแลระบบ",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth", "AWS S3", "Tesseract.js", "Google Cloud Vision"],
    link: "#",
  },
  {
    title: "CPES Classroom Project Evaluation System",
    description: "ระบบเว็บสำหรับประเมินผลงานโครงงานของนักศึกษา พร้อมระบบจัดการแบบประเมินและสรุปผลการประเมิน",
    highlights: [
      "พัฒนาระบบประเมินโครงงานออนไลน์ พร้อมป้องกันการประเมินซ้ำและการประเมินกลุ่มของตนเอง",
      "พัฒนาระบบจัดการแบบประเมิน กลุ่มโครงงาน และข้อมูลนักศึกษาผ่าน Admin Dashboard",
      "พัฒนาระบบสรุปสถิติและส่งออกผลการประเมิน",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Radix UI", "Docker"],
    link: "#",
  },
  {
    title: "SPVV Clothing E-commerce Website",
    description: "เว็บไซต์จำหน่ายเสื้อโปโลออนไลน์ พร้อมระบบจัดการสินค้า สต็อก และคำสั่งซื้อ",
    highlights: [
      "พัฒนาระบบแสดงสินค้าและจัดการสต็อกแบบเรียลไทม์",
      "พัฒนาระบบสั่งซื้อและยืนยันตัวตนของผู้ใช้งาน",
    ],
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "NextAuth", "Bootstrap"],
    link: "#",
  },
];

const CONTACT_INFO = [
  {
    label: "Email",
    value: "Seangnon09@gmail.com",
  },
  { label: "Phone", value: "0980461071"},
  { label: "Location", value: "บ้านตาเกษ ตำบลตาเกษ อำเภออุทุมพรพิสัย จังหวัดศรีสะเกษ" },
  {
    label: "GitHub",
    value: "github.com/SSmikey",
    href: "https://github.com/SSmikey",
  },
  {
    label: "Line",
    value: "mik003",
  },
];

const INTRODUCTION =
  "สวัสดีครับ ผมชื่อ มิกซ์ นักศึกษาสาขาวิทยาการคอมพิวเตอร์ ผู้สนใจด้าน Full Stack/Backend Development เป็นหลัก" +
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
            <Reveal className="col-12">
              <AboutCard title="Introduction">
                <p className="mb-0">{INTRODUCTION}</p>
              </AboutCard>
            </Reveal>

            <Reveal className="col-md-6" delay={80}>
              <AboutCard title="Personal Information">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 info-list">
                  {PERSONAL_INFO.map((item) => (
                    <li key={item} className={PERSONAL_INFO_HEADS.has(item) ? "fw-bold" : undefined}>
                      {item}
                    </li>
                  ))}
                </ul>
              </AboutCard>
            </Reveal>

            <Reveal className="col-md-6" delay={160}>
              <AboutCard title="Interests">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 info-list">
                  {INTERESTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </AboutCard>
            </Reveal>

            <Reveal className="col-md-7" delay={80}>
              <AboutCard title="Tech Stack">
                <div className="row g-3 ps-2">
                  {TECH_STACK.map((group) => (
                    <TechGroup key={group.name} name={group.name} items={group.items} />
                  ))}
                </div>
              </AboutCard>
            </Reveal>

            <Reveal className="col-md-5" delay={160}>
              <AboutCard title="Skills">
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 ps-2 info-list">
                  {SKILLS.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </AboutCard>
            </Reveal>
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
            {SERVICES.map((service, index) => (
              <Reveal className="col-md-6 col-lg-4" delay={(index % 3) * 100} key={service.title}>
                <ServiceCard title={service.title} description={service.description} />
              </Reveal>
            ))}
          </div>
        </section>
        <section id="projects" className="position-relative container py-5">
          <h2
            className="fw-bold text-uppercase text-center mb-5"
            style={{ color: "#eee6d6", letterSpacing: "0.15em" }}
          >
            Projects
          </h2>

          <div className="d-flex flex-column gap-5" style={{ paddingTop: 28 }}>
            {PROJECTS.map((project, index) => (
              <Reveal key={`${project.title}-${index}`}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </section>
        <section id="contact" className="position-relative pt-5">
          <div
            className="w-100 p-4"
            style={{
              backgroundColor: "#262626",
              borderTop: "4px solid #8b1721",
            }}
          >
            <div className="container">
              <h2
                className="fw-bold text-uppercase text-center mb-3"
                style={{ color: "#eee6d6", letterSpacing: "0.15em" }}
              >
                Contact
              </h2>
              <p className="text-center text-nowrap mx-auto mb-5" style={{ color: "#d8cfc0" }}>
                สนใจร่วมงานหรือพูดคุยเกี่ยวกับโปรเจกต์ ติดต่อได้ตามช่องทางด้านล่าง ยินดีตอบกลับโดยเร็วที่สุด
              </p>

              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                {CONTACT_INFO.map((item, index) => (
                  <li key={item.label}>
                    <Reveal
                      className="d-flex flex-wrap align-items-center gap-2 contact-item"
                      delay={index * 60}
                    >
                      <TechBadge label={item.label} />
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          style={{ color: "#e7e7d8" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span style={{ color: "#e7e7d8" }}>{item.value}</span>
                      )}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
