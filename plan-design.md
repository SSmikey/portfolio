# แผนออกแบบ Landing Page Portfolio (อ้างอิงจากภาพ "Ramisha")

อ้างอิงจากภาพที่แนบ เป็นเทมเพลตพอร์ตโฟลิโอสไตล์ UI/UX Designer โทนสีแดง-ดำ-ขาว
ตอนนี้มีภาพอ้างอิงครบทุกส่วนแล้ว: **Header + Hero**, **About me**, **Services**, **Projects**, **Testimonials**, **Contact**, **Footer**

โปรเจกต์นี้ใช้ Next.js 16 + Bootstrap 5 อยู่แล้ว (`src/app/page.tsx`, `src/app/globals.css`)
สีธีมปัจจุบันใน `globals.css` เป็นโทนแดงเข้ม/น้ำตาลแดง (`--accent: #ad2831`) ใกล้เคียงกับภาพอ้างอิงแล้ว
สามารถต่อยอดจากตัวแปรสีเดิมได้ อาจต้องปรับให้แดงสดขึ้นเล็กน้อยให้ตรงกับภาพ (ภาพอ้างอิงออกไปทาง `#e6483c` ~ `#e8503f`)

---

## 1) Navbar

- ซ้าย: โลโก้ข้อความ "Ramisha" — ตัว "R" สีแดง ตัวที่เหลือสีดำ (ใช้ `<span>` 2 span คนละสี ไม่ต้องใช้รูป)
- กลาง/ขวา: เมนู Home, About us, Services, Projects, Testimonials, Contact
- ขวาสุด: ปุ่ม "Download CV" พื้นแดง มุมโค้งเล็กน้อย (ไม่ใช่ pill เต็ม)
- พื้นหลัง navbar โปร่งใส/ขาว วางทับขอบบนของรูป Hero (จากภาพ nav ลอยอยู่บนรูปพื้นหลังมืด ตัวหนังสือสีขาว/ดำผสมกัน — ต้องเช็ก contrast ให้อ่านออกทั้งบนพื้นมืดและตอน sticky/scroll)
- แนะนำ: ทำ navbar แบบ sticky, ตอนอยู่บน Hero ให้ตัวอักษรสีขาว/ให้อ่านง่ายบนพื้นมืด, เพิ่ม background ทึบเมื่อ scroll ผ่าน hero (เก็บ logic นี้ไว้ตอน implement)

## 2) Hero Section

**เลย์เอาต์:** Bootstrap `row` 2 คอลัมน์ ซ้อนบนพื้นหลังภาพถ่ายเต็มความกว้าง (full-bleed) โทนมืด

- **พื้นหลัง:** รูปถ่ายผู้หญิงนั่งหน้าโน้ตบุ๊ก ใส่หูฟังคล้องคอ แสงมืด/ขรึม มีเงาไล่ระดับ (gradient overlay สีดำ) ทับรูปเพื่อให้ตัวหนังสืออ่านง่าย
- **คอลัมน์ซ้าย (ข้อความ):**
  - Heading ใหญ่สีแดงตัวหนา: "Hi, I am Ramisha"
  - Subtitle ตัวเอียงสีขาว/ครีม หนา: "Freelane UI/UX Designer"
  - Paragraph สีเทาอ่อน (lorem ipsum) 3-4 บรรทัด
  - ปุ่มคู่: `Hire me` (พื้นแดง) และ `Contact me` (outline ขาว/โปร่งใส)
- **คอลัมน์ขวา:** พื้นที่ว่างให้เห็นรูปถ่ายคน (ไม่มี element เพิ่ม อยู่ในรูปพื้นหลังอยู่แล้ว)
- ความสูงประมาณ 80-90vh, จัดข้อความกึ่งกลางแนวตั้ง

## 3) About Me Section

**เลย์เอาต์:** พื้นหลังขาว, Bootstrap `row` 2 คอลัมน์

- **คอลัมน์ซ้าย (ภาพตกแต่ง):**
  - รูปทรงอินทรีย์ (organic blob) สีแดงเป็นพื้นหลัง
  - เส้น outline ลายเส้นสีแดงบาง ๆ วาดทับ/ล้อมรอบ blob (decorative line art)
  - รูปถ่ายคน (ตัดพื้นหลังออกแล้ว/PNG โปร่งใส) วางซ้อนอยู่ตรงกลาง blob
- **คอลัมน์ขวา (เนื้อหา):**
  - Heading: "About me" (ตัวหนาสีดำ)
  - Paragraph lorem ipsum
  - รายการทักษะ 4 อัน พร้อม progress/range bar สีแดง (มี handle กลมด้านขวา):
    1. UX Design
    2. App Design
    3. Graphic Design
    4. Web Design
  - แต่ละแถว: label เล็กด้านบน + แถบ progress ด้านล่าง (ใช้ `<input type="range">` disabled หรือ custom `div` progress bar + วง handle ด้วย CSS ก็ได้ ไม่จำเป็นต้องเป็น input จริง)

## 4) Services Section

**เลย์เอาต์:** พื้นหลังขาว, หัวข้อกึ่งกลาง + การ์ด 4 ใบเรียงแนวนอน (Bootstrap `row row-cols-4`)

- Heading กึ่งกลาง: "Services" ตัวหนาสีดำ
- Paragraph lorem ipsum กึ่งกลาง ใต้ heading
- การ์ด 4 ใบ พื้นหลังชมพูอ่อน/แดงจาง (`bg-danger bg-opacity-10`), มุมเหลี่ยม/โค้งเล็กน้อย ไม่มีเงา ไม่มีเส้นขอบ:
  1. **UI/UX Design** — ไอคอนกรอบสี่เหลี่ยม+รูปคน (คล้าย browser window)
  2. **App Design** — ไอคอนมือถือ
  3. **Graphic Design** — ไอคอนวงเวียน/ปากกาช่างเขียนแบบ
  4. **Web Design** — ไอคอนจอมอนิเตอร์ + "www"
- แต่ละการ์ด: ไอคอนลายเส้นสีแดง (บนกรอบสี่เหลี่ยมเล็ก) → Title ตัวหนาสีดำ → Paragraph เล็กสีเทา (lorem ipsum 2-3 บรรทัด)
- ไอคอนทั้ง 4 เป็น **line icon สไตล์เดียวกัน** ไม่ใช่ภาพถ่าย — ใช้ไอคอนจากไลบรารี (เช่น Bootstrap Icons ที่ยังไม่ได้ติดตั้ง, หรือ SVG custom) ได้เลย ไม่ต้องหารูป

## 5) Projects Section

**เลย์เอาต์:** พื้นหลังขาว, หัวข้อกึ่งกลาง + แถบ filter + กริดผลงาน 3 คอลัมน์

- Heading กึ่งกลาง: "Projects" ตัวหนาสีดำ
- Paragraph lorem ipsum กึ่งกลาง ใต้ heading
- แถบปุ่ม filter กึ่งกลาง (pill buttons): `All`, `UI/UX Design` (active สีแดงพื้นทึบ), `App Design`, `Graphic Design`, `Web Design`
  - ใช้ state ง่าย ๆ (client component) สลับ active class ตอน implement
- กริดผลงาน 3 คอลัมน์ (`row row-cols-1 row-cols-md-3 g-4`): แต่ละใบเป็น **รูปภาพ mockup/screenshot โปรเจกต์** แนวตั้ง (ภาพซ้อนหลายจอ/หน้าเว็บในธีมสีของโปรเจกต์นั้น ๆ)
- แถบสีแดงยาวเต็มความกว้างด้านล่างสุดของ section (decorative divider คั่นก่อนเข้า section ถัดไป) — ทำด้วย CSS ธรรมดา ไม่ต้องหารูป

## 6) Testimonials Section

**เลย์เอาต์:** พื้นหลังแดงเต็ม section มีลายทางแนวตั้ง (แถบสีแดงเข้ม/อ่อนสลับกันจาง ๆ เป็น background pattern), หัวข้อกึ่งกลาง + การ์ดรีวิว 4 ใบแบบ carousel

- Heading กึ่งกลาง สีขาวตัวหนา: "Testimonials"
- Paragraph กึ่งกลาง สีขาว/ครีมอ่อน lorem ipsum
- **ปุ่มลูกศรซ้าย-ขวา** (วงกลมขาว ไอคอนลูกศร) วางชิดขอบซ้าย/ขวาของแถวการ์ด สำหรับเลื่อน carousel
- การ์ดรีวิว 4 ใบต่อแถว แต่ละใบ:
  - พื้นหลังขาว ขอบสีแดงบาง ๆ ทรงคล้าย speech-bubble (มุมหนึ่งโค้งมน มุมตรงข้ามเหลี่ยม)
  - **รูปโปรไฟล์วงกลม** ลอยครึ่งบนของขอบการ์ด (avatar อยู่กึ่งกลางด้านบน เกยขอบการ์ดขึ้นไปครึ่งวง)
  - ข้อความรีวิว (lorem ipsum) สีดำ/เทาเข้ม ขนาดเล็ก
  - ดาวให้คะแนน 5 ดวง สีแดง ด้านล่างสุดของการ์ด
- **จุด pagination** (dots) ตรงกลางใต้แถวการ์ด บอกตำแหน่งสไลด์ปัจจุบัน (จุดกลางยาวกว่า = active)
- แนะนำ implement เป็น carousel จริง (Bootstrap Carousel หรือ client component + state) ให้ลูกศร/dots ทำงานได้

## 7) Contact Section

**เลย์เอาต์:** อยู่ต่อในพื้นหลังแดงลายทางเดียวกับ Testimonials (ไม่มีเส้นแบ่ง section ชัดเจน), เนื้อหากึ่งกลาง

- Heading กึ่งกลาง สีขาวตัวหนา: "Contact me"
- Paragraph กึ่งกลาง สีขาว/ครีมอ่อน lorem ipsum 2-3 บรรทัด
- ฟอร์มแนวนอนกึ่งกลาง: ช่องกรอกอีเมล (input สีขาว มุมโค้ง, placeholder "Enter Your Email") + ปุ่ม "Contact Me" (พื้นเข้ม/ดำอมเทา มุมโค้ง) วางติดกันเป็นแถวเดียว
- ฟอร์มนี้ต้องมี logic ส่งจริง (mailto / API / third-party form service) ตอน implement — ในภาพมีแค่หน้าตา UI

## 8) Footer

**เลย์เอาต์:** พื้นหลังชมพูอ่อน (แถบบน) + แถบขาวล่างสุด (copyright), ทุกอย่างจัดกึ่งกลาง

- แถบบน (พื้นชมพูอ่อน):
  - โลโก้ "Ramisha" (R สีแดง ตัวอื่นดำ) กึ่งกลาง
  - เมนูซ้ำ: Home, About us, Services, Projects, Testimonials, Contact (ตัวหนังสือดำ แนวนอน กึ่งกลาง)
  - ไอคอน social 4 ปุ่ม วงกลมพื้นแดง ไอคอนขาว: Facebook, Twitter, Instagram, LinkedIn
- แถบล่าง (พื้นขาว, เส้นคั่นบาง ๆ ด้านบน): ข้อความเล็กกึ่งกลาง "© 2023 **Ramisha** All Rights Reserved , Inc." (ชื่อแบรนด์สีแดง)

---

## รูปภาพที่ต้องเตรียมเพิ่ม (Assets ที่โค้ดสร้างเองไม่ได้)

| # | รูป | รายละเอียด | หมายเหตุ |
|---|-----|-----------|---------|
| 1 | รูปพื้นหลัง Hero | ภาพถ่ายคน (หรือของผู้ใช้เอง) นั่งหน้าโน้ตบุ๊ก ใส่หูฟังคล้องคอ โทนมืด/ขรึม แนวนอน กว้าง | **ต้องหารูปจริง** — ถ่ายเอง หรือใช้ stock photo (Unsplash/Pexels) ที่มีลิขสิทธิ์ใช้ได้ฟรี |
| 2 | รูปคนใน About | ภาพคนโพสท่าครึ่งตัว **ตัดพื้นหลังออกเป็น PNG โปร่งใส** เพื่อวางซ้อนบน blob สีแดงได้ | **ต้องหา/ตัดรูปเอง** — ถ้ามีรูปต้นฉบับ ใช้เครื่องมือลบพื้นหลัง (remove.bg หรือ Photoshop) |
| 3 | โลโก้/ไอคอนอื่น ๆ | ไม่มีในภาพอ้างอิงนอกจากโลโก้ตัวอักษร | ไม่ต้องเตรียมเพิ่ม |
| 4 | ไฟล์ CV (PDF) | ปุ่ม "Download CV" ต้องลิงก์ไปยังไฟล์จริง | ผู้ใช้ต้องเตรียมไฟล์ CV ของตัวเอง วางไว้ใน `public/` |
| 5 | รูป thumbnail ใน Projects | ภาพ mockup/screenshot ผลงานจริง 3 ชิ้น (หรือมากกว่า ถ้าจะทำ filter ให้ทำงานจริงตามหมวด) | **ต้องเตรียมรูปผลงานจริง** — เป็น screenshot งานที่เคยทำ หรือสร้าง mockup ใหม่ |
| 6 | รูปโปรไฟล์ลูกค้าใน Testimonials | ภาพหน้าคน 4 คน (หรือมากกว่า) ครอปเป็นวงกลม | **ต้องหารูปจริง** — รูปลูกค้า/ผู้รีวิวจริง หรือ stock photo คนหน้าตรง ถ้ายังไม่มีรีวิวจริงให้ใช้ placeholder ชั่วคราว |

**สิ่งที่ไม่ต้องหารูป สร้างด้วยโค้ดได้เลย:**
- Blob shape สีแดง (SVG path หรือ `border-radius` เพี้ยน ๆ + CSS)
- เส้น outline ลายเส้นล้อมรอบ (SVG `<path>` stroke)
- Overlay เงาไล่ระดับบน Hero (CSS gradient)
- แถบ progress/skill bar (CSS/Bootstrap progress หรือ range input)
- ไอคอน 4 อันใน Services (line icon จากไลบรารีไอคอน หรือ SVG custom)
- แถบสีแดงคั่นท้าย section Projects (CSS block ธรรมดา)
- ลายทางพื้นหลัง Testimonials/Contact (CSS gradient/stripe pattern)
- ไอคอน social ใน Footer (Bootstrap Icons หรือ SVG custom)
- ดาวให้คะแนนในการ์ดรีวิว (ตัวอักษร/SVG star)

---

## ขั้นตอนถัดไป (แนะนำ)

1. ยืนยันคอนเทนต์จริง (ชื่อ, ตำแหน่ง, bio, ทักษะ%, รายละเอียดบริการ/ผลงาน, รีวิวลูกค้าจริง, ลิงก์ social) แทน lorem ipsum
2. เตรียม/จัดหารูป: Hero background, About cutout, project thumbnails, testimonial avatars (ตามตารางด้านบน)
3. Implement ทีละ section: Navbar → Hero → About → Services → Projects → Testimonials → Contact → Footer
4. Testimonials ต้องทำ carousel จริง (ลูกศร + dots ใช้งานได้), Contact ต้องต่อ logic ส่งฟอร์มจริง
5. ปรับสีใน `globals.css` ให้ตรงกับภาพอ้างอิง (แดงสดขึ้นเล็กน้อยจากปัจจุบัน)
