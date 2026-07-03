export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-white text-dark">
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold text-uppercase" href="#">
              Miss
            </a>
            <div className="d-flex gap-3">
              <a className="nav-link text-white px-2" href="#about">
                About
              </a>
              <a className="nav-link text-white px-2" href="#projects">
                Projects
              </a>
              <a className="nav-link text-white px-2" href="#skills">
                Skills
              </a>
              <a className="nav-link text-white px-2" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container py-5 flex-grow-1">
        <section className="row align-items-center g-5 mb-5 bg-white border-start border-danger border-5 rounded-0 shadow-lg p-4">
          <div className="col-lg-7">
            <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger mb-3 px-3 py-2 fw-semibold text-uppercase">
              Portfolio
            </span>
            <div className="mb-4">
              <p className="text-uppercase text-danger fw-bold mb-2 small">Miss</p>
              <h1 className="display-5 fw-bold">
                สร้างเว็บ portfolio ที่เรียบง่าย แต่โดดเด่นด้วยสีแดง
              </h1>
              <p className="lead text-muted">
                ผสานความเรียบและพลังผ่านดีไซน์ที่สะอาดตา พร้อมรายละเอียดเล็กๆ ที่ช่วยให้หน้าเว็บดูมีชีวิต
              </p>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-danger btn-lg rounded-pill" href="#projects">
                ดูผลงาน
              </a>
              <a className="btn btn-outline-secondary btn-lg rounded-pill" href="#contact">
                ติดต่อฉัน
              </a>
            </div>
          </div>

          <div className="col-lg-5 position-relative">
            <div className="card border-0 shadow-lg rounded-0 h-100">
              <div className="card-body">
                <h2 className="h5 text-danger fw-bold">สวัสดีค่ะ ฉันคือ Miss</h2>
                <p className="text-muted mb-0">
                  นักพัฒนาและนักออกแบบเว็บที่เชื่อใน UX ที่เรียบง่าย อ่านง่าย และมีพลังด้วยการเลือกใช้สีอย่างตั้งใจ
                </p>
              </div>
            </div>
            <div
              className="position-absolute rounded-circle bg-danger bg-opacity-10"
              style={{ width: 160, height: 160, top: -30, right: -30 }}
            />
          </div>
        </section>

        <section id="about" className="mb-5">
          <div className="mb-4">
            <p className="text-uppercase text-danger fw-bold small mb-2">About</p>
            <h2 className="fw-bold">เน้นการเล่าเรื่องสั้น ๆ แต่มีความหมาย</h2>
          </div>
          <p className="text-muted mb-4">
            หน้านี้จะเป็นพื้นที่แนะนำตัวและแสดงผลงานพร้อมบอกจุดแข็งของ Miss ในการสร้างเว็บไซต์ที่ใช้งานง่ายและมีเอกลักษณ์
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <article className="col">
              <div className="card border-0 shadow-sm rounded-0 h-100 border-start border-danger border-5">
                <div className="card-body">
                  <h3 className="h5 fw-semibold">ออกแบบด้วยใจ</h3>
                  <p className="text-muted mb-0">
                    คำนึงถึงผู้ใช้ตั้งแต่หน้าจอแรกจนถึงการเข้าถึงข้อมูลสำคัญ
                  </p>
                </div>
              </div>
            </article>
            <article className="col">
              <div className="card border-0 shadow-sm rounded-0 h-100 border-start border-danger border-5">
                <div className="card-body">
                  <h3 className="h5 fw-semibold">เล่นสีอย่างชาญฉลาด</h3>
                  <p className="text-muted mb-0">
                    ใช้สีแดงเป็นจุดสนใจ โดยยังคงความเรียบง่ายและมีอารมณ์
                  </p>
                </div>
              </div>
            </article>
            <article className="col">
              <div className="card border-0 shadow-sm rounded-0 h-100 border-start border-danger border-5">
                <div className="card-body">
                  <h3 className="h5 fw-semibold">ปรับตัวได้ทุกหน้าจอ</h3>
                  <p className="text-muted mb-0">
                    ดีไซน์ที่ทำงานดีทั้งบนคอมพิวเตอร์ แท็บเล็ต และมือถือ
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="mb-5">
          <div className="mb-4">
            <p className="text-uppercase text-danger fw-bold small mb-2">Projects</p>
            <h2 className="fw-bold">ผลงานที่ช่วยเล่าเรื่องของ Miss</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <article className="col">
              <div className="card border-0 shadow-sm rounded-0 h-100">
                <div className="card-body">
                  <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger mb-3">
                    Web Design
                  </span>
                  <h3 className="h5 fw-semibold">เว็บไซต์ภาพรวมตัวตน</h3>
                  <p className="text-muted">
                    สร้างเว็บไซต์ portfolio ที่เน้นภาพลักษณ์และความเข้าใจง่ายของผู้เข้าชม
                  </p>
                  <a className="stretched-link text-decoration-none fw-semibold text-danger" href="#contact">
                    ดูรายละเอียด
                  </a>
                </div>
              </div>
            </article>
            <article className="col">
              <div className="card border-0 shadow-sm rounded-0 h-100">
                <div className="card-body">
                  <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger mb-3">
                    UX/UI
                  </span>
                  <h3 className="h5 fw-semibold">เว็บงานบริการ</h3>
                  <p className="text-muted">
                    ออกแบบหน้าเว็บให้เข้าใจไว ตอบโจทย์ผู้ใช้งานด้วยข้อมูลที่จัดวางอย่างเป็นระบบ
                  </p>
                  <a className="stretched-link text-decoration-none fw-semibold text-danger" href="#contact">
                    ดูรายละเอียด
                  </a>
                </div>
              </div>
            </article>
            <article className="col">
              <div className="card border-0 shadow-sm rounded-0 h-100">
                <div className="card-body">
                  <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger mb-3">
                    Branding
                  </span>
                  <h3 className="h5 fw-semibold">Landing page แบรนด์ส่วนตัว</h3>
                  <p className="text-muted">
                    ออกแบบหน้าเดียวที่สื่อสารคาแรกเตอร์ และมีพื้นที่แสดงงานสำคัญอย่างชัดเจน
                  </p>
                  <a className="stretched-link text-decoration-none fw-semibold text-danger" href="#contact">
                    ดูรายละเอียด
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="row gy-4 mb-5">
          <div className="col-lg-7">
            <div className="mb-4">
              <p className="text-uppercase text-danger fw-bold small mb-2">Skills</p>
              <h2 className="fw-bold">เครื่องมือและทักษะที่ใช้งานบ่อย</h2>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'Next.js', 'Figma', 'Responsive Design'].map((skill) => (
                <span key={skill} className="badge rounded-pill bg-secondary bg-opacity-10 text-secondary py-2 px-3">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <aside className="col-lg-5">
            <div className="card border-0 shadow-lg rounded-0 h-100">
              <div className="card-body d-flex flex-column h-100">
                <p className="text-uppercase text-danger fw-bold small mb-2">Contact</p>
                <h3 className="fw-bold">พร้อมสร้างโปรเจ็กต์ใหม่ด้วยกัน</h3>
                <p className="text-muted mb-4">
                  หากต้องการงานออกแบบเว็บไซต์หรือ portfolio ที่สวย และใช้งานง่าย ติดต่อ Miss ได้ที่ด้านล่าง
                </p>
                <div className="mt-auto d-flex flex-wrap gap-2">
                  <a className="btn btn-danger btn-lg rounded-pill" href="mailto:miss@example.com">
                    ส่งอีเมล
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-lg rounded-pill"
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className="bg-light py-4">
        <div className="container text-center text-muted small">
          Miss Portfolio — ดีไซน์เรียบง่าย สีแดงโดดเด่น
        </div>
      </footer>
    </div>
  );
}
