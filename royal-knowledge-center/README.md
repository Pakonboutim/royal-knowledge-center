# ศูนย์การเรียนรู้ตามศาสตร์พระราชา

เว็บไซต์ 4 ฐานความรู้ ภายใต้ธีมสีทอง-ครีม-เขียวและเมฆหมอก พัฒนาต่อจากไฟล์เว็บไซต์เดิมที่มีแบนเนอร์ ภาพประกอบ และวิดีโอเล่นอัตโนมัติ

## สถานะ ณ 15 พฤศจิกายน 2569

- **เขียนโค้ดเรียบร้อย** สำหรับเว็บไซต์สาธารณะ, `/edit/`, ระบบแก้ไขหน้าแรกและฐานความรู้, Google Apps Script และ Vercel API bridge
- **Google Sheets/Drive มีอยู่จริงแล้ว** ในบัญชีที่เชื่อมต่อ
- **Vercel project `royal-knowledge-center` สร้างไว้แล้ว** ภายใต้ team ID `team_SHTv1dGph2fDNWpmYloLgoCl`, project ID `prj_1SnTIDE68vZ2dPEH3oUsJ7Qt2H9i`
- **ยังไม่ Deploy / ยังไม่ต่อ Apps Script** เพราะบัญชีที่เชื่อมต่อในรอบนี้ยังไม่รองรับการสร้างและเผยแพร่ Apps Script หรือการสร้าง GitHub repository ใหม่โดยตรง
- ก่อนเปิด CMS ใช้งาน ต้องกำหนดรหัสผ่านสำหรับ 4 กลุ่ม + ผู้ดูแลหน้าแรก และตั้งค่า secret ใน Apps Script/Vercel

## โครงสร้าง

```
public/
  index.html             เว็บสาธารณะ (ไม่มีเมนูแก้ไข)
  edit/index.html        หน้า Visual Editor (แยกเส้นทางและ noindex)
  site.js                ข้อมูลเริ่มต้น + โหมดแก้ไข
  qrcode.js              QR code generator
  site.css               ธีมเมฆหมอก สีทอง รองรับมือถือ
  assets/                ภาพเดิม 17 ไฟล์ (แบนเนอร์และภาพฐาน)
api/bridge.js            Vercel API (ปกปิด backend URL / secret)
apps-script/Code.gs      Google Sheets/Drive backend
```

**เส้นทางที่ใช้งาน:** `/` หน้าแรก, `/#/station/herbs` ฐาน 1, `/#/station/vegetables` ฐาน 2, `/#/station/compost` ฐาน 3, `/#/station/water` ฐาน 4, `/#/principles` หลักการทรงงาน, `/edit/` สำหรับผู้แก้ไข, `/edit/#/home-edit` สำหรับผู้ดูแลหน้าแรก

## ขั้นตอนเชื่อม Google Apps Script

1. เปิด Google Sheets ฐานข้อมูลเว็บไซต์: https://docs.google.com/spreadsheets/d/1N1ifPkMyyEhhUuqFGOAMFlHxd5a-vRRTM6SNrTLJric/edit
2. เลือก **ส่วนขยาย > Apps Script** เพื่อสร้าง *สคริปต์ที่ผูกกับสเปรดชีต* (หรือใช้โปรเจกต์ Apps Script ใหม่ภายใต้บัญชีเดียวกัน)
3. วางเนื้อหาไฟล์ `apps-script/Code.gs` ลงในไฟล์ `Code.gs`
4. เข้า **Project Settings > Script properties** และเพิ่ม `BRIDGE_SECRET` = ค่ารหัสลับสุ่มยาวอย่างน้อย 32 ตัวอักษร ห้ามใส่ไว้ในโค้ดสาธารณะ
5. เพิ่ม Script properties อีก 5 ค่า ได้แก่ `PIN_HERBS`, `PIN_VEGETABLES`, `PIN_COMPOST`, `PIN_WATER`, `PIN_HOME` โดยตั้งรหัสผ่าน **ที่ต่างกัน** สำหรับแต่ละกลุ่ม (อย่างน้อย 5 ตัวอักษรต่อรหัส) จากนั้นสั่งรันฟังก์ชัน `setupGroupPins` ครั้งเดียวและอนุญาตสิทธิ์ตามที่ Google ขอ; เมื่อสำเร็จฟังก์ชันจะเก็บเพียง hash ลงชีต และลบ Script properties `PIN_*` อัตโนมัติ จากนั้นรัน `checkSetup` เพื่อตรวจชีต โฟลเดอร์ และค่า secret ก่อน Deploy
6. เลือก **Deploy > New deployment > Web app** โดยใช้ **Execute as: Me** และ **Who has access: Anyone** เพื่อให้ Vercel เรียกได้แบบ server-to-server การอนุญาตเข้าถึงข้อมูลจริงจะยังต้องผ่าน `BRIDGE_SECRET` และรหัสผ่านกลุ่ม
7. คัดลอก URL ที่ลงท้าย `/exec` เพื่อใช้ใน Vercel เมื่อลองเปิดในเบราว์เซอร์ควรเห็น `{"ok":true,"service":"royal-knowledge-center","status":"ready","api":"POST"}` โดยไม่เปิดเผยข้อมูลฐานหรือรหัสลับ

ข้อควรระวัง: อย่าตั้งค่า `BRIDGE_SECRET` เป็นค่าเดียวกับรหัสของกลุ่ม อย่าฝัง secret หรือรหัสกลุ่มจริงในไฟล์เว็บ หรือเผยแพร่รหัสผ่านใน GitHub หากโดเมน Google Workspace ไม่อนุญาตให้แชร์ไฟล์แก่ "Anyone with link" ระบบอัปโหลดสื่อจะปฏิเสธการอัปโหลดแทนการสร้างไฟล์ที่ผู้ชมเปิดไม่ได้

## ขั้นตอนเชื่อม GitHub และ Vercel

1. สร้าง repository **ใหม่** บน GitHub เช่น `Pakonboutim/royal-knowledge-center` ไม่ใช้ repo โปรเจกต์โรงเรียนที่มีอยู่
2. แตก ZIP ที่โฟลเดอร์โครงการและ push ไฟล์ทั้งหมดไปที่ branch `main` โดย **ไม่ commit ไฟล์ `.env` หรือรหัสผ่านจริง**
3. เปิด [Vercel Dashboard](https://vercel.com/dashboard) เลือกโปรเจกต์ `royal-knowledge-center` ที่สร้างไว้แล้ว (ไม่ต้องสร้างชื่อซ้ำ), เชื่อม repository ใหม่นี้ ในกรณีที่โปรเจกต์เดิมยังไม่รองรับการเชื่อม Git หลังสร้าง ให้ใช้ Import Git Repository สร้างโปรเจกต์ใหม่อย่างระมัดระวังโดยไม่ทับโปรเจกต์อื่น
4. ตั้งค่าโปรเจกต์เป็น **Other** หรือ framework null, Root Directory = repository root, Output Directory = `public`, Node.js = 22.x, และ Build Command = `npm run build`
5. ใน Vercel **Settings > Environment Variables** เพิ่ม `GAS_WEB_APP_URL` = URL จากข้อ 7 และ `GAS_BRIDGE_SECRET` = ค่าเดียวกับ Script properties โดยตั้งค่าทั้ง Preview และ Production ตามต้องการ
6. Deploy ใหม่ ตรวจหน้าแรกและหน้า `/edit/` ทดสอบรหัสกลุ่ม บันทึกหน้าแรก อัปโหลดภาพและตรวจบนอีกเบราว์เซอร์หนึ่ง

### การแก้ไขบนเว็บ

- ผู้ชมทั่วไปเห็นหน้าเว็บและสื่อ แต่ **ไม่มีปุ่มแก้ไข**
- `/edit/`: เลือกกลุ่ม ป้อนรหัสเฉพาะกลุ่ม จากนั้นแก้เนื้อหาจริงในฐานและกดบันทึก
- `/edit/#/home-edit`: ใส่รหัสผู้ดูแลหน้าแรก คลิกข้อความเพื่อแก้ คลิกภาพเพื่ออัปโหลด เปลี่ยน/สลับ/ลบส่วน และเพิ่มบล็อกภาพหรือวิดีโอพร้อมข้อความ
- การบันทึกสำเร็จจะบันทึกลงชีตทันที ผู้เข้าชมเห็นข้อมูลใหม่เมื่อโหลด/รีเฟรชหน้าเว็บ ไม่ใช่การถ่ายทอดเรียลไทม์ให้แท็บที่เปิดค้างอยู่โดยอัตโนมัติ
- วิดีโอรองรับไฟล์ MP4/WebM ขนาดเล็ก (ไม่เกิน 2.8 MB) หรือวางลิงก์ HTTPS ของ MP4/YouTube เพื่อให้เล่นอัตโนมัติแบบไม่มีเสียงตามข้อจำกัดของเบราว์เซอร์

## การเก็บข้อมูล

- `Activities`: ข้อมูลหลัก 4 ฐาน
- `VisualPages`: ส่วนเนื้อหาย่อยแบบสลับภาพ/ข้อความในแต่ละฐาน
- `HomePage`: เนื้อหาและส่วนพิเศษบนหน้าแรก
- `GroupAccess`: `salt:sha256(salt|pin)` เท่านั้น ไม่เก็บรหัสผ่านเป็นข้อความ
- `EditHistory`: เวลาบันทึก กลุ่มและการดำเนินการ
- Google Drive โฟลเดอร์ภาพ ID `1syECJqd40isDn9A0nQCCPK7Y9M6xCHiS`, โฟลเดอร์วิดีโอ ID `1s_c7QQPuLl7JlRrqIRgq2ujSNzp8spY2`

## เปิดดูเว็บไซต์บนคอมพิวเตอร์

แตกไฟล์ ZIP เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วรัน `npm run dev` และเปิด `http://127.0.0.1:4173/` ได้ทันที (ต้องติดตั้ง Node.js 22) หน้าเว็บจะแสดงข้อมูลเริ่มต้นแต่ **การบันทึกยังไม่ทำงาน** จนกว่าจะเชื่อม Google Apps Script จริง

## การทดสอบ

`npm test` ตรวจ JavaScript syntax ส่วน frontend/API โค้ด Visual Editor ผ่านการทดสอบ DOM สำหรับหน้าแรก การแสดง 4 ฐาน การซ่อนปุ่มแก้ไข และการบันทึกแบบ mock แล้ว **ยังไม่ได้ทดสอบ Apps Script ที่เผยแพร่จริง, บริการอัปโหลด Drive หรือ Deploy Vercel production**
