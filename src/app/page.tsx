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
        </section>
      </main>
    </div>
  );
}
