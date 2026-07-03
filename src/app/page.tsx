import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Portfolio</span>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>Miss</p>
              <h1>สร้างเว็บ portfolio ที่เรียบง่าย แต่โดดเด่นด้วยสีแดง</h1>
              <p>
                ผสานความเรียบและพลังผ่านดีไซน์ที่สะอาดตา พร้อมรายละเอียดเล็กๆ ที่ช่วยให้หน้าเว็บดูมีชีวิต
              </p>
            </div>
            <div className={styles.ctas}>
              <a className={styles.primary} href="#projects">
                ดูผลงาน
              </a>
              <a className={styles.secondary} href="#contact">
                ติดต่อฉัน
              </a>
            </div>
          </div>
          <aside className={styles.heroCard}>
            <p className={styles.heroCardTitle}>สวัสดีค่ะ ฉันคือ Miss</p>
            <p className={styles.heroCardText}>
              นักพัฒนาและนักออกแบบเว็บที่เชื่อใน UX ที่เรียบง่าย อ่านง่าย และมีพลังด้วยการเลือกใช้สีอย่างตั้งใจ
            </p>
            <div className={styles.accentCircle} />
          </aside>
        </section>

        <section className={styles.section} id="about">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>About</p>
            <h2>เน้นการเล่าเรื่องสั้น ๆ แต่มีความหมาย</h2>
          </div>
          <p className={styles.sectionText}>
            หน้านี้จะเป็นพื้นที่แนะนำตัวและแสดงผลงานพร้อมบอกจุดแข็งของ Miss ในการสร้างเว็บไซต์ที่ใช้งานง่ายและมีเอกลักษณ์
          </p>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutItem}>
              <h3>ออกแบบด้วยใจ</h3>
              <p>คำนึงถึงผู้ใช้ตั้งแต่หน้าจอแรกจนถึงการเข้าถึงข้อมูลสำคัญ</p>
            </div>
            <div className={styles.aboutItem}>
              <h3>เล่นสีอย่างชาญฉลาด</h3>
              <p>ใช้สีแดงเป็นจุดสนใจ โดยยังคงความเรียบง่ายและมีอารมณ์</p>
            </div>
            <div className={styles.aboutItem}>
              <h3>ปรับตัวได้ทุกหน้าจอ</h3>
              <p>ดีไซน์ที่ทำงานดีทั้งบนคอมพิวเตอร์ แท็บเล็ต และมือถือ</p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionLabel}>Projects</p>
            <h2>ผลงานที่ช่วยเล่าเรื่องของ Miss</h2>
          </div>
          <div className={styles.projectGrid}>
            <article className={styles.projectCard}>
              <span className={styles.projectTag}>Web Design</span>
              <h3>เว็บไซต์ภาพรวมตัวตน</h3>
              <p>
                สร้างเว็บไซต์ portfolio ที่เน้นภาพลักษณ์และความเข้าใจง่ายของผู้เข้าชม
              </p>
              <a className={styles.projectLink} href="#contact">
                ดูรายละเอียด
              </a>
            </article>
            <article className={styles.projectCard}>
              <span className={styles.projectTag}>UX/UI</span>
              <h3>เว็บงานบริการ</h3>
              <p>
                ออกแบบหน้าเว็บให้เข้าใจไว ตอบโจทย์ผู้ใช้งานด้วยข้อมูลที่จัดวางอย่างเป็นระบบ
              </p>
              <a className={styles.projectLink} href="#contact">
                ดูรายละเอียด
              </a>
            </article>
            <article className={styles.projectCard}>
              <span className={styles.projectTag}>Branding</span>
              <h3>Landing page แบรนด์ส่วนตัว</h3>
              <p>
                ออกแบบหน้าเดียวที่สื่อสารคาแรกเตอร์ และมีพื้นที่แสดงงานสำคัญอย่างชัดเจน
              </p>
              <a className={styles.projectLink} href="#contact">
                ดูรายละเอียด
              </a>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.splitSection}`} id="contact">
          <div>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Skills</p>
              <h2>เครื่องมือและทักษะที่ใช้งานบ่อย</h2>
            </div>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>HTML</span>
              <span className={styles.skillTag}>CSS</span>
              <span className={styles.skillTag}>JavaScript</span>
              <span className={styles.skillTag}>Next.js</span>
              <span className={styles.skillTag}>Figma</span>
              <span className={styles.skillTag}>Responsive Design</span>
            </div>
          </div>

          <aside className={styles.contactCard}>
            <p className={styles.contactLabel}>Contact</p>
            <h3 className={styles.contactTitle}>พร้อมสร้างโปรเจ็กต์ใหม่ด้วยกัน</h3>
            <p className={styles.contactText}>
              หากต้องการงานออกแบบเว็บไซต์หรือ portfolio ที่สวย และใช้งานง่าย ติดต่อ Miss ได้ที่ด้านล่าง
            </p>
            <div className={styles.contactLinks}>
              <a className={styles.contactButton} href="mailto:miss@example.com">
                ส่งอีเมล
              </a>
              <a className={styles.contactButtonSecondary} href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </aside>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>Miss Portfolio — ดีไซน์เรียบง่าย สีแดงโดดเด่น</p>
      </footer>
    </div>
  );
}
