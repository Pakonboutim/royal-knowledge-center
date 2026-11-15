
/* เว็บไซต์ศูนย์การเรียนรู้ตามศาสตร์พระราชา | UI อ้างอิงสีและจังหวะจากเว็บทะเบียนกีฬา */
const SOURCES={
 herbs:{url:'https://commons.wikimedia.org/wiki/File:Herb_Garden.jpg',by:'National Institutes of Health',license:'สาธารณสมบัติ'},
 vegetables:{url:'https://commons.wikimedia.org/wiki/File:Garden_with_vegetables.jpg',by:'Peace Batuma',license:'CC BY-SA 4.0'},
 compost:{url:'https://commons.wikimedia.org/wiki/File:Compost_pile.JPG',by:'Ksd5',license:'CC0'},
 water:{url:'https://commons.wikimedia.org/wiki/File:Fish_Farming_Pond.jpg',by:'Alabama Extension',license:'CC0'},
 hero:{url:'https://commons.wikimedia.org/wiki/File:Raised_Vegetable_Beds.jpg',by:'AcornToOak',license:'CC BY-SA 4.0'}
};
const PHOTO={
 herbs:'/assets/photo-01-3ef90ee3cb.jpg',
 vegetables:'/assets/photo-02-f8c36ee0ea.jpg',
 compost:'/assets/photo-03-99edf31332.jpg',
 water:'/assets/photo-04-4876c60931.jpg',
 hero:'https://commons.wikimedia.org/wiki/Special:FilePath/Raised_Vegetable_Beds.jpg?width=1600'
};
const PRINCIPLES=[
'ซื่อสัตย์ สุจริต จริงใจต่อกัน','อ่อนน้อม ถ่อมตน','ความเพียร','รู้ รัก สามัคคี','ทำเรื่อย ๆ ทำแบบสังฆทาน','มีความสุขในการทำประโยชน์ให้กับผู้อื่น','ศึกษาข้อมูลอย่างเป็นระบบ ทำงานอย่างผู้รู้จริง','ระเบิดจากข้างใน','ทำตามลำดับขั้น','ภูมิสังคม','องค์รวม','ประหยัด เรียบง่าย ได้ประโยชน์สูงสุด','ขาดทุนคือกำไร','ปลูกป่าในใจคน','ใช้ธรรมชาติช่วยธรรมชาติ','อธรรมปราบอธรรม','ประโยชน์ส่วนรวม','การพึ่งตนเอง','เศรษฐกิจพอเพียง','เข้าใจ เข้าถึง พัฒนา','แก้ปัญหาที่จุดเล็ก คิด Macro เริ่ม Micro','ไม่ติดตำรา ทำให้ง่าย','การมีส่วนร่วม','พออยู่พอกิน','บริการรวมที่จุดเดียว','ร่าเริง รื่นเริง คึกคัก ครึกครื้น กระฉับกระเฉง มีพลัง เป็นปัจจัยของการทำงานที่มีประสิทธิภาพ','ชัยชนะของการพัฒนา'];
const PRINCIPLE_DETAILS=[
["ความซื่อสัตย์เป็นรากฐานของความไว้วางใจ ทั้งในการปฏิบัติต่อกัน การใช้ทรัพยากร และการรายงานผลการทำงาน ผู้ร่วมงานควรยึดข้อเท็จจริง ไม่ปกปิดปัญหา และรับผิดชอบต่อหน้าที่ของตน","บันทึกปริมาณวัสดุและผลผลิตในแต่ละฐานตามจริง เพื่อให้คนรุ่นต่อไปนำข้อมูลไปปรับปรุงได้"],
["การอ่อนน้อมถ่อมตนคือการเปิดใจรับฟังผู้อื่น ยอมรับความรู้จากทั้งนักวิชาการและชาวบ้าน ไม่ยึดความเห็นของตนเป็นใหญ่ ช่วยสร้างความร่วมมือและลดความขัดแย้ง","เชิญปราชญ์ชาวบ้านมาแนะนำการปลูกสมุนไพรและเปิดโอกาสให้สมาชิกทุกคนเสนอความคิดเห็น"],
["ความเพียรหมายถึงความมุ่งมั่น อดทน และลงมือแก้ไขปัญหาอย่างต่อเนื่อง แม้พบอุปสรรคหรือผลการทดลองครั้งแรกยังไม่สำเร็จ ควรเรียนรู้จากข้อผิดพลาดและปรับวิธีการ","เฝ้าดูการงอกของเมล็ดพันธุ์ บันทึกสาเหตุที่พืชไม่โต แล้วทดลองปรับดิน น้ำ และแสง"],
["การรู้ปัญหาและรู้ศักยภาพของตน ทำงานด้วยความรักต่อสิ่งที่ทำ และรวมกำลังกันอย่างสามัคคี ทำให้เกิดพลังในการขับเคลื่อนงานใหญ่ โดยสมาชิกมีเป้าหมายร่วมกัน","แบ่งงานดูแลฐานเพาะปลูก ฐานปุ๋ย และฐานน้ำ แล้วช่วยกันแลกเปลี่ยนสิ่งที่เรียนรู้"],
["การทำงานเพื่อประโยชน์ของผู้อื่นอย่างสม่ำเสมอ ไม่เลือกปฏิบัติและไม่หวังผลตอบแทนในทันที เป็นการให้ที่ยึดประโยชน์ส่วนรวมและความต่อเนื่องของการพัฒนา","จัดเวรดูแลฐานการเรียนรู้ต่อเนื่อง และแบ่งปันต้นกล้าหรือความรู้ให้ผู้เยี่ยมชมโดยไม่หวังสิ่งตอบแทน"],
["เมื่อเห็นคุณค่าของการช่วยเหลือผู้คนและการทำประโยชน์ร่วมกัน ความสุขจะเป็นแรงผลักดันให้ทำงานได้อย่างต่อเนื่อง โดยไม่มองผลสำเร็จเฉพาะด้านวัตถุ","ให้สมาชิกผลัดกันเป็นวิทยากรเล่าประสบการณ์และชื่นชมความสำเร็จเล็ก ๆ ของแต่ละฐาน"],
["การดำเนินงานควรเริ่มจากการรวบรวมข้อมูลให้ครบถ้วน ทั้งเอกสาร ข้อคิดเห็นของผู้มีประสบการณ์ และสภาพจริงในพื้นที่ แล้ววิเคราะห์อย่างเป็นระบบก่อนตัดสินใจ","สำรวจชนิดดิน แสงแดด ปริมาณน้ำ และชนิดสมุนไพรที่เหมาะสมก่อนวางแผนปลูก"],
["การพัฒนาที่ยั่งยืนต้องเริ่มสร้างความรู้ ความเข้าใจ และความพร้อมให้คนในพื้นที่ก่อน เพื่อให้ผู้เกี่ยวข้องเห็นประโยชน์ มีส่วนร่วม และสามารถดำเนินงานได้ด้วยตนเอง","ฝึกให้สมาชิกผลิตปุ๋ยหมักและดูแลแปลงด้วยตนเองก่อนขยายผลสู่ครอบครัวหรือชุมชน"],
["เริ่มแก้สิ่งที่จำเป็นเร่งด่วนและเป็นพื้นฐานก่อน แล้วจึงต่อยอดไปสู่ขั้นที่ซับซ้อนขึ้นตามความพร้อม ช่วยลดความเสี่ยงและไม่สร้างภาระเกินกำลัง","เริ่มจากแปลงทดลองขนาดเล็ก จัดระบบน้ำที่ใช้ได้จริง แล้วค่อยเพิ่มปริมาณพืชหรือจำนวนบ่อ"],
["การทำงานต้องคำนึงถึงภูมิประเทศ ภูมิอากาศ วิถีชีวิต วัฒนธรรม และความต้องการของผู้คน ไม่ใช้วิธีเดียวกันกับทุกพื้นที่โดยไม่ปรับให้เหมาะสม","เลือกสมุนไพรทนแดดหรือทนฝนตามสภาพพื้นที่ และเลือกวัสดุหมักที่หาได้ในท้องถิ่น"],
["องค์รวมคือการมองทุกส่วนว่ามีความสัมพันธ์กัน การแก้ปัญหาหนึ่งอาจส่งผลต่อดิน น้ำ พืช สัตว์ คน และค่าใช้จ่าย จึงต้องวางแผนให้ระบบต่าง ๆ เกื้อกูลกัน","ใช้เศษผักทำปุ๋ย ปุ๋ยบำรุงแปลงผัก และวางระบบน้ำหมุนเวียนโดยคำนึงถึงคุณภาพน้ำ"],
["ใช้ทรัพยากรอย่างพอเหมาะ เลือกวิธีการไม่ซับซ้อนแต่ตอบโจทย์ และคำนึงถึงค่าใช้จ่ายตลอดการใช้งาน ไม่จำเป็นต้องใช้เครื่องมือราคาแพงเสมอไป","ทำถังหมักจากภาชนะที่มีอยู่ ใช้ใบไม้แห้งและเศษผักที่สะอาดแทนการซื้อวัตถุดิบใหม่"],
["การเสียสละเงิน แรงงาน หรือเวลาในระยะสั้นอาจสร้างคุณค่าระยะยาวที่มากกว่า เช่น ความรู้ สิ่งแวดล้อม และความเข้มแข็งของชุมชน จึงไม่ควรตัดสินผลสำเร็จจากกำไรทางเงินอย่างเดียว","ลงทุนจัดทำป้ายความรู้และแหล่งเรียนรู้ที่ทุกคนใช้ประโยชน์ได้ แม้ไม่สร้างรายได้ทันที"],
["การดูแลธรรมชาติต้องเริ่มที่จิตสำนึกของผู้คน เมื่อเข้าใจคุณค่าของป่า ดิน และน้ำแล้ว จึงจะร่วมกันรักษาทรัพยากรได้อย่างต่อเนื่อง ไม่ใช่เพียงปลูกต้นไม้แล้วจบ","ให้ผู้เข้าชมมีส่วนร่วมดูแลพืชและเรียนรู้วิธีลดการใช้ทรัพยากรในแต่ละฐาน"],
["อาศัยกระบวนการทางธรรมชาติเป็นตัวช่วยแก้ปัญหาหรือฟื้นฟูระบบนิเวศ โดยพิจารณาความเหมาะสมและติดตามผล เพื่อให้เกิดความสมดุลระหว่างการใช้ประโยชน์กับการรักษาทรัพยากร","นำเศษพืชเหมาะสมมาทำปุ๋ยหมัก และใช้พืชช่วยดูดซับธาตุอาหารส่วนเกินเมื่อออกแบบระบบน้ำ"],
["เข้าใจธรรมชาติของปัญหาแล้วนำกลไกที่เหมาะสมมาใช้แก้ไขอย่างมีเหตุผล โดยไม่ขยายปัญหาหรือใช้วิธีรุนแรงเกินความจำเป็น และต้องประเมินผลกระทบด้วย","จัดการแมลงศัตรูพืชด้วยวิธีที่เหมาะสมและปลอดภัย เช่น การสำรวจวงจรแมลงและใช้วิธีชีวภาพที่ได้รับการแนะนำ"],
["ทุกกิจกรรมควรให้ประโยชน์ต่อประชาชนหรือส่วนรวมเป็นเป้าหมายสำคัญ การตัดสินใจควรดูว่าช่วยคนจำนวนมากได้อย่างเป็นธรรม และไม่ก่อผลเสียที่หลีกเลี่ยงได้","จัดทำข้อมูลและรหัสคิวอาร์ให้ผู้เยี่ยมชมทุกคนเข้าถึงความรู้ของทั้งสี่ฐานได้โดยไม่เสียค่าใช้จ่าย"],
["ส่งเสริมให้คนสามารถดำรงชีวิตและแก้ปัญหาเบื้องต้นได้ด้วยตนเอง ไม่พึ่งพาทรัพยากรภายนอกเกินความจำเป็น แต่ยังเปิดรับความร่วมมือและองค์ความรู้จากผู้อื่น","เพาะต้นกล้า ผลิตปุ๋ยอินทรีย์ และดูแลระบบน้ำด้วยทักษะของสมาชิกกลุ่ม"],
["เป็นแนวทางดำเนินชีวิตและพัฒนางานอย่างพอประมาณ มีเหตุผล และมีภูมิคุ้มกัน พร้อมใช้ความรู้และคุณธรรมประกอบการตัดสินใจ ไม่มุ่งขยายกิจกรรมจนเกินศักยภาพ","วางงบประมาณอย่างพอดี ปลูกพืชหลากหลาย ลดความเสี่ยง และเก็บข้อมูลต้นทุนเพื่อปรับแผน"],
["เข้าใจสภาพปัญหาและผู้คนอย่างแท้จริงก่อน เข้าถึงพื้นที่และร่วมรับฟังประสบการณ์ แล้วจึงพัฒนาแนวทางที่เหมาะสมโดยให้ผู้เกี่ยวข้องมีส่วนร่วม","สำรวจปัญหาน้ำของฐานบ่อปลา พูดคุยกับผู้ดูแล ทดลองปรับระบบ แล้วประเมินผลร่วมกัน"],
["พิจารณาภาพรวมและเป้าหมายระยะยาว แต่เริ่มแก้ที่จุดเล็กซึ่งเห็นผลได้ชัดเจน เมื่องานส่วนย่อยดีขึ้นจึงค่อยเชื่อมไปสู่การพัฒนาทั้งระบบ","เริ่มแก้การรั่วของท่อน้ำจุดเดียวก่อนปรับปรุงระบบหมุนเวียนน้ำทั้งฐาน"],
["ไม่ยึดติดรูปแบบตามตำราเมื่อไม่สอดคล้องกับสภาพจริง ควรปรับเทคนิคให้เรียบง่าย เข้าใจได้ และทำได้ด้วยวัสดุหรือความสามารถที่มีอยู่ โดยยังคำนึงถึงความถูกต้องและความปลอดภัย","ดัดแปลงภาชนะปลูกผักจากวัสดุใช้ซ้ำที่ปลอดภัยและเหมาะกับพื้นที่แทนการซื้ออุปกรณ์ชุดใหญ่"],
["เปิดโอกาสให้ทุกฝ่ายร่วมคิด ร่วมตัดสินใจ ร่วมลงมือ และร่วมติดตามผล การรับฟังผู้ใช้พื้นที่จริงช่วยให้โครงการตรงความต้องการและมีผู้รับผิดชอบร่วมกัน","ให้สมาชิกทุกคนช่วยเลือกชนิดผัก วางเวรดูแล และปรับเนื้อหาป้ายกิจกรรมก่อนเผยแพร่"],
["มุ่งให้ประชาชนมีปัจจัยพื้นฐานสำหรับการดำรงชีวิตอย่างเหมาะสมก่อน แล้วจึงค่อยสร้างความมั่นคงและพัฒนาคุณภาพชีวิตในขั้นต่อไป","ปลูกผักที่นำไปประกอบอาหารได้จริงก่อนขยายสู่แปลงสาธิตชนิดพืชที่มีต้นทุนสูง"],
["รวบรวมการให้บริการหรือการประสานงานที่เกี่ยวข้องไว้ในจุดเดียว ช่วยให้ประชาชนเข้าถึงข้อมูล ลดการเดินทางและขั้นตอนที่ซ้ำซ้อน","ใช้หน้าเว็บศูนย์เป็นจุดรวมฐานการเรียนรู้ 4 กิจกรรม พร้อมป้าย QR เข้าสู่เนื้อหาโดยตรง"],
["การทำงานด้วยจิตใจเบิกบาน กระตือรือร้น และมีพลัง ช่วยสร้างบรรยากาศที่ดี เปิดโอกาสให้เกิดความคิดสร้างสรรค์และความร่วมมือ ซึ่งเป็นส่วนหนึ่งของประสิทธิภาพในการทำงาน","ทำกิจกรรมสาธิตให้ผู้เข้าชมลงมือจริง สลับบทบาทการนำเสนอและจัดกิจกรรมที่เหมาะกับวัย"],
["ผลของการพัฒนาไม่ได้วัดจากสิ่งก่อสร้างหรือปริมาณผลผลิตเท่านั้น แต่พิจารณาว่าผู้คนมีชีวิตดีขึ้น พึ่งตนเองได้มากขึ้น และทรัพยากรธรรมชาติได้รับการดูแลอย่างต่อเนื่อง","วัดความสำเร็จจากความรู้ของผู้เข้าชม ต้นทุนที่ลดลง และสุขภาพของดินและน้ำ ไม่ใช่เพียงจำนวนผู้สแกน QR"]
];
const DEFAULTS=[
{id:'herbs',group:'กลุ่ม 1',kicker:'ภูมิปัญญาพืชพื้นถิ่น',title:'พืชผักสมุนไพร',short:'เรียนรู้คุณค่าพืชสมุนไพร รักษาภูมิปัญญา และใช้ทรัพยากรให้เหมาะกับท้องถิ่น',intro:'ฐานนี้ศึกษาและปลูกพืชสมุนไพรที่พบได้ในชุมชน เช่น ตะไคร้ ข่า ขมิ้น และโหระพา เรียนรู้การดูแล การขยายพันธุ์ และการใช้ประโยชน์อย่างถูกต้อง โดยเชื่อมโยงการเลือกปลูกพืชกับภูมิอากาศและทรัพยากรที่มีอยู่',objective:'รู้จักพืชสมุนไพรในท้องถิ่น\nฝึกขยายพันธุ์และดูแลพืชด้วยตนเอง\nตระหนักถึงคุณค่าภูมิปัญญาท้องถิ่น',equipment:'ต้นพันธุ์สมุนไพร\nดินและปุ๋ยอินทรีย์\nอุปกรณ์ขุดปลูกและบัวรดน้ำ\nป้ายระบุชื่อพืช',steps:'สำรวจชนิดสมุนไพรที่เหมาะกับพื้นที่\nเตรียมแปลงและปรับปรุงดิน\nปลูกและจัดทำป้ายชื่อ\nดูแล รดน้ำ และบันทึกการเจริญเติบโต\nสรุปประโยชน์และข้อควรระวังในการใช้',takeaway:'ผู้เรียนสามารถเลือกปลูกพืชให้เหมาะกับภูมิสังคมของพื้นที่ นำความรู้ไปใช้ในชีวิตประจำวันและสืบทอดความรู้จากชุมชน',principles:[7,10,18],interpretation:'ข้อ 7 ใช้ข้อมูลจริงในการเลือกพืชและติดตามผล ข้อ 10 เลือกพืชให้เหมาะกับภูมิประเทศ ภูมิอากาศ และวัฒนธรรมชุมชน ข้อ 18 ฝึกปลูกสมุนไพรไว้ใช้เองอย่างเหมาะสม',image:PHOTO.herbs,updatedAt:''},
{id:'vegetables',group:'กลุ่ม 2',kicker:'ปลูกกินได้ ปลูกอย่างพอดี',title:'ผักสวนครัว',short:'ลงมือปลูกผักปลอดภัยในพื้นที่เล็ก ๆ เรียนรู้ความพอประมาณและการพึ่งตนเอง',intro:'เรียนรู้การวางแผนแปลงผักสวนครัว เช่น ผักบุ้ง คะน้า พริก และกะเพรา ตั้งแต่การเพาะเมล็ดไปจนถึงเก็บเกี่ยว โดยคำนึงถึงฤดูกาล การใช้น้ำ และการปลูกเพื่อบริโภคอย่างพอเหมาะ',objective:'วางแผนปลูกผักตามฤดูกาล\nลดรายจ่ายด้วยการปลูกผักไว้บริโภค\nรู้จักใช้ดิน น้ำ และแรงงานอย่างคุ้มค่า',equipment:'เมล็ดพันธุ์ผัก\nกระบะเพาะหรือแปลงปลูก\nดินปลูกและปุ๋ยหมัก\nบัวรดน้ำและอุปกรณ์ทำสวน',steps:'เลือกชนิดผักและวางแผนพื้นที่ปลูก\nเตรียมแปลงและเพาะเมล็ด\nย้ายกล้าลงแปลงปลูก\nดูแลโดยใช้น้ำและปุ๋ยอย่างเหมาะสม\nเก็บเกี่ยว บันทึกผล และปรับปรุงการปลูก',takeaway:'ผู้เรียนเห็นความสำคัญของความมั่นคงทางอาหารในครัวเรือนและการพึ่งพาตนเอง เริ่มได้จากพื้นที่เล็ก ๆ',principles:[12,18,19,24],interpretation:'ข้อ 12 ใช้วัสดุที่มีให้เกิดประโยชน์สูงสุด ข้อ 18 ปลูกผักเพื่อพึ่งตนเอง ข้อ 19 วางแผนตามกำลังและทรัพยากร ข้อ 24 เริ่มจากการมีอาหารเพียงพอ',image:PHOTO.vegetables,updatedAt:''},
{id:'compost',group:'กลุ่ม 3',kicker:'ของเหลือสร้างคุณค่า',title:'ปุ๋ยหมักและอีเอ็ม',short:'เปลี่ยนเศษอินทรียวัตถุให้เกิดประโยชน์ ลดขยะและส่งเสริมการปรับปรุงดิน',intro:'ศึกษาแนวทางทำปุ๋ยหมักจากใบไม้แห้ง เศษหญ้า และเศษพืช รวมถึงการใช้จุลินทรีย์ที่เหมาะสมในกระบวนการย่อยสลาย โดยคำนึงถึงการจัดการความชื้น การระบายอากาศ และความปลอดภัย',objective:'ลดปริมาณเศษวัสดุอินทรีย์ภายในศูนย์\nเรียนรู้กระบวนการย่อยสลายทางธรรมชาติ\nนำปุ๋ยหมักกลับไปใช้ในฐานปลูกพืช',equipment:'เศษใบไม้และเศษพืช\nวัสดุสีน้ำตาลและวัสดุสีเขียว\nถังหรือพื้นที่ทำปุ๋ยหมัก\nน้ำและอุปกรณ์คลุกเคล้า',steps:'คัดแยกวัสดุอินทรีย์ ไม่ใช้ขยะปนเปื้อน\nจัดชั้นวัสดุสีน้ำตาลสลับสีเขียว\nเติมน้ำให้ชื้นพอเหมาะและคลุกเคล้า\nติดตามความชื้น อากาศ และอุณหภูมิ\nนำปุ๋ยหมักที่สลายตัวสมบูรณ์ไปบำรุงดิน',takeaway:'ผู้เรียนเห็นวงจรการใช้ทรัพยากรอย่างคุ้มค่า เชื่อมโยงวัสดุเหลือใช้กับการปลูกพืชภายในศูนย์',principles:[11,12,15],interpretation:'ข้อ 11 มองความสัมพันธ์ของขยะ ดิน และการปลูกพืช ข้อ 12 ใช้เศษวัสดุที่หาได้ในพื้นที่ ข้อ 15 ประยุกต์กระบวนการย่อยสลายตามธรรมชาติเพื่อช่วยฟื้นฟูดิน',image:PHOTO.compost,updatedAt:''},
{id:'water',group:'กลุ่ม 4',kicker:'ใช้น้ำทุกหยดอย่างรู้คุณค่า',title:'บ่อปลา บ่อกบ และระบบน้ำหมุนเวียน',short:'ศึกษาการเลี้ยงสัตว์น้ำควบคู่การบำบัดและหมุนเวียนน้ำอย่างเหมาะสม',intro:'สำรวจการจัดการบ่อปลาและบ่อกบ การดูแลคุณภาพน้ำ การให้อาหาร และการออกแบบระบบกรอง-หมุนเวียนน้ำโดยคำนึงถึงความสะอาด สวัสดิภาพสัตว์ และการใช้น้ำอย่างประหยัด',objective:'เข้าใจองค์ประกอบการเลี้ยงปลาและกบ\nฝึกสังเกตและดูแลคุณภาพน้ำ\nออกแบบแนวทางใช้น้ำอย่างคุ้มค่าและปลอดภัย',equipment:'บ่อเลี้ยงปลาและบ่อกบ\nปั๊มน้ำและท่อส่งน้ำ\nถังกรองและวัสดุกรองที่เหมาะสม\nอุปกรณ์ตรวจคุณภาพน้ำ',steps:'สำรวจระบบบ่อและแนวทางการไหลเวียนน้ำ\nติดตั้งและตรวจสอบระบบกรองที่เหมาะสม\nติดตามคุณภาพน้ำและสุขภาพสัตว์อย่างสม่ำเสมอ\nดูแลให้อาหารและทำความสะอาดตามแผน\nบันทึกการใช้น้ำและปรับปรุงระบบ',takeaway:'ผู้เรียนเข้าใจความสัมพันธ์ระหว่างสัตว์น้ำ น้ำ และสิ่งแวดล้อม รวมถึงการจัดการระบบอย่างมีเหตุผลและความรับผิดชอบ',principles:[10,11,12,21],interpretation:'ข้อ 10 ออกแบบระบบตามพื้นที่และทรัพยากร ข้อ 11 มองวงจรน้ำและการเลี้ยงสัตว์แบบเชื่อมโยง ข้อ 12 ประหยัดน้ำอย่างคุ้มค่า ข้อ 21 เริ่มแก้ปัญหาคุณภาพน้ำจากจุดเล็กก่อนขยายผล',image:PHOTO.water,updatedAt:''}
];
const APP_ID='royal-science-uiux-v1';
const ROYAL_PORTRAIT='https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Portrait_painting_of_King_Bhumibol_Adulyadej_%289to12%29.jpg/960px-Portrait_painting_of_King_Bhumibol_Adulyadej_%289to12%29.jpg';
const ROYAL_MONOGRAM='https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Royal_Monogram_of_King_Bhumibol_Adulyadej.svg/250px-Royal_Monogram_of_King_Bhumibol_Adulyadej.svg.png';
let activities=JSON.parse(JSON.stringify(DEFAULTS));
let baseUrl='';
let loggedGroup=null, loginCode='',editorStatus='';
let isLoading=false;
let qrInput='';
const GAS=true; // The standalone site always uses its server-side Vercel bridge.
const IS_EDITOR=window.IS_EDITOR===true;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imgUrl=s=>{const v=String(s||'').trim();return /^(https:\/\/|\/assets\/[A-Za-z0-9._-]+$)/i.test(v)?esc(v):''};
const nl=s=>String(s||'').split('\n').map(x=>x.trim()).filter(Boolean);
const icon=(n,sm=false)=>{const paths={leaf:'<path d="M20 4c-7 0-14 3-14 11a5 5 0 0 0 5 5c8 0 11-7 9-16Z"/><path d="M4 21c2-6 6-10 12-13"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="m14 7-5 5 5 5"/><path d="M20 12H9"/>',book:'<path d="M4 19V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0 0 4h13"/><path d="M4 19a2 2 0 0 0 2 2"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',edit:'<path d="M12 20h9"/><path d="M15.5 4.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',qr:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h2m4 0h1m-7 4h2m2 3h3m-2-5v2"/>',check:'<path d="m5 12 4 4L19 6"/>',water:'<path d="M12 22a8 8 0 0 0 8-8c0-5-8-12-8-12S4 9 4 14a8 8 0 0 0 8 8Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 17v4h14v-4"/>',camera:'<path d="M14.5 4h-5L7 7H4v13h16V7h-3Z"/><circle cx="12" cy="13" r="3"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',home:'<path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-7h6v7"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>'};return `<svg class="icon ${sm?'icon-sm':''}" viewBox="0 0 24 24" aria-hidden="true">${paths[n]||paths.leaf}</svg>`};

/* Validate CMS links before insertion into HTML. Never allow script/data URLs. */
function safeContentUrl(value){
  const raw=String(value||'').trim();
  if(!raw||raw.length>1600||/[\\u0000-\\u001f\\u007f]/.test(raw))return '';
  if(/^#\/[A-Za-z0-9_\/-]+$/.test(raw))return raw;
  try{const u=new URL(raw);return u.protocol==='https:'&&!u.username&&!u.password?u.href:''}catch(_){return ''}
}
function contentLinkAttrs(value){
 const safe=safeContentUrl(value);
 return safe?`href="${esc(safe)}" ${safe.startsWith('#/')?'':'target="_blank" rel="noopener noreferrer"'}`:'';
}
function contentLinkMode(item){return ['image','button','both'].includes(item?.linkMode)?item.linkMode:'both'}
function contentLinkLabel(item){return String(item?.linkLabel||'อ่านรายละเอียดเพิ่มเติม').trim().slice(0,100)||'อ่านรายละเอียดเพิ่มเติม'}
function contentLinkButton(item,cssClass=''){
 const url=safeContentUrl(item?.linkUrl),mode=contentLinkMode(item);
 if(!url||!['button','both'].includes(mode))return '';
 return `<a class="content-link-action ${cssClass}" ${contentLinkAttrs(url)}>${icon('link',true)} ${esc(contentLinkLabel(item))}</a>`;
}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toastT);window.__toastT=setTimeout(()=>t.classList.remove('show'),2800)}
function readLocal(){try{const data=JSON.parse(localStorage.getItem(APP_ID)||'null');if(data&&typeof data==='object'){activities=DEFAULTS.map(x=>({...x,...(data[x.id]||{}),id:x.id,group:x.group}));}}catch(e){}}
function saveLocal(){try{localStorage.setItem(APP_ID,JSON.stringify(Object.fromEntries(activities.map(x=>[x.id,x]))));return true}catch(e){toast('ไม่สามารถบันทึกในเบราว์เซอร์นี้ได้ กรุณาเปิดผ่านเว็บเซิร์ฟเวอร์ หรืออนุญาตการจัดเก็บข้อมูล');return false}}
async function gsCall(action,...args){
  const r=await fetch('/api/bridge',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action,args}),cache:'no-store'});
  let v;try{v=await r.json()}catch(_){throw Error('ฐานข้อมูลตอบกลับไม่ถูกต้อง')}
  if(!r.ok || !v || v.ok===false)throw Error(v?.message||'ฐานข้อมูลไม่พร้อมใช้งาน');return v;
}
async function hydrateServer(){
  try{
    const data=await gsCall('getPublicData');
    if(data&&Array.isArray(data.activities)){
      activities=DEFAULTS.map(d=>({...d,...(data.activities.find(x=>x.id===d.id)||{}),id:d.id,group:d.group}));
      if(data.homePage && typeof data.homePage==='object')homeData={...HOME_DEFAULTS,...data.homePage};
      render();
    }
  }catch(e){console.warn('ใช้เนื้อหาสำรองระหว่างรอเชื่อมต่อ Google Sheets:',e.message)}
}
function route(){const h=decodeURIComponent(location.hash||(IS_EDITOR?'#/editor':'#/home'));const seg=h.replace(/^#\/?/,'').split('/');if(!IS_EDITOR&&['editor','home-edit'].includes(seg[0]))return ['home'];return seg}
function navActive(path){const r=route()[0];return r===path?'active':''}
function header(){return `<header class="site-header"><div class="container nav-wrap"><a class="brand" href="#/home" aria-label="กลับหน้าแรก"><div class="brandmark">${icon('leaf')}</div><span><b>ศูนย์การเรียนรู้ตามศาสตร์พระราชา</b><small>4 ฐานองค์ความรู้ · เรียนรู้เพื่อความพอเพียง</small></span></a><nav class="desktop-nav" aria-label="เมนูหลัก"><a class="${navActive('home')}" href="#/home">หน้าแรก</a><a class="${navActive('station')}" href="#/stations">ฐานการเรียนรู้</a><a class="${navActive('principles')}" href="#/principles">หลักการทรงงาน 27 ข้อ</a></nav>${IS_EDITOR?`<div class="head-actions"><a class="btn btn-lime btn-sm" href="#/home-edit">แก้ไขหน้าแรก</a><a class="btn btn-plain btn-sm" href="#/editor">แก้ไขฐาน</a></div>`:''}</div></header>`}
function mobile(){return `<nav class="mobile-nav" aria-label="เมนูสำหรับมือถือ"><a href="#/home" class="${navActive('home')}" >${icon('home')}หน้าแรก</a><a href="#/stations" class="${navActive('stations')||navActive('station')}">${icon('grid')}4 ฐานความรู้</a><a href="#/principles" class="${navActive('principles')}">${icon('book')}27 หลักการ</a>${IS_EDITOR?`<a href="#/editor" class="${navActive('editor')}">${icon('edit')}แก้ไขฐาน</a><a href="#/home-edit">แก้ไขหน้าแรก</a>`:''}</nav>`}
function footer(){return `<footer class="footer"><div class="container"><div class="footer-grid"><div><div class="brand"><div class="brandmark">${icon('leaf')}</div><span><b>ศูนย์การเรียนรู้ตามศาสตร์พระราชา</b><small>ศึกษาความรู้ด้วยตนเอง</small></span></div><p>ศูนย์เรียนรู้ที่นำองค์ความรู้และแนวทางศาสตร์พระราชามาประยุกต์ใช้กับกิจกรรมการเรียนรู้ ไม่ได้ระบุว่าฐานเหล่านี้เป็นโครงการพระราชดำริโดยตรง</p></div><div class="footer-links"><a href="#/home">หน้าแรก</a><a href="#/principles">หลักการทรงงาน</a></div></div><div class="footer-bottom">ภาพประกอบจริงจาก <a href="https://commons.wikimedia.org/wiki/File:Raised_Vegetable_Beds.jpg" target="_blank" rel="noopener">AcornToOak (CC BY-SA 4.0)</a> · <a href="https://commons.wikimedia.org/wiki/File:Herb_Garden.jpg" target="_blank" rel="noopener">NIH (สาธารณสมบัติ)</a> · <a href="https://commons.wikimedia.org/wiki/File:Garden_with_vegetables.jpg" target="_blank" rel="noopener">Peace Batuma (CC BY-SA 4.0)</a> · <a href="https://commons.wikimedia.org/wiki/File:Compost_pile.JPG" target="_blank" rel="noopener">Ksd5 (CC0)</a> · <a href="https://commons.wikimedia.org/wiki/File:Fish_Farming_Pond.jpg" target="_blank" rel="noopener">Alabama Extension (CC0)</a> · พระบรมสาทิสลักษณ์: <a href="https://commons.wikimedia.org/wiki/File:Portrait_painting_of_King_Bhumibol_Adulyadej_(9to12).jpg" target="_blank" rel="noopener">รัฐบาลไทย / Wikimedia Commons (CC BY 2.0)</a> · ตราพระปรมาภิไธยย่อ ภ.ป.ร.: <a href="https://commons.wikimedia.org/wiki/File:Royal_Monogram_of_King_Bhumibol_Adulyadej.svg" target="_blank" rel="noopener">Pitpisit / Zsoy (CC BY-SA 4.0)</a> · อ้างอิงหลักการทรงงาน: <a href="https://web.rdpb.go.th/th/King" target="_blank" rel="noopener">สำนักงาน กปร.</a> · เมื่อใช้งานจริง ควรเปลี่ยนเป็นภาพกิจกรรมของศูนย์</div></div></footer>`}
function card(x,i){return `<a class="station-card" href="#/station/${x.id}" aria-label="เปิดฐาน ${esc(x.title)}"><div class="station-media"><img src="${imgUrl(PHOTO[x.id]||x.image)}" alt="ภาพปุ่มเมนูฐาน${esc(x.title)}" loading="lazy" onerror="this.style.opacity='.05'"></div><span class="sr-only">เปิดฐาน ${esc(x.title)}</span></a>`}
function cards(){return `<div class="stations-grid">${activities.map(card).join('')}</div>`}
function stationSummaryRows(){
 return `<div class="home-bases">${activities.map((x,i)=>{
  const media=KNOWLEDGE_IMAGES[x.id]?.scene||x.image||PHOTO.herbs;
  return `<article class="home-base-row ${i%2?'reverse':''}" id="base-${esc(x.id)}"><a class="home-base-photo" href="#/station/${esc(x.id)}" aria-label="ดูข้อมูล${esc(x.title)}"><img src="${imgUrl(media)}" alt="${esc(x.title)}" loading="lazy"></a><div class="home-base-copy"><span class="home-base-kicker">ฐานองค์ความรู้ที่ ${String(i+1).padStart(2,'0')} · ${esc(x.kicker)}</span><h3>${esc(x.title)}</h3><p>${esc(x.short)}</p><p>${esc(x.intro).slice(0,300)}</p><a class="btn btn-dark" href="#/station/${esc(x.id)}">สำรวจฐานองค์ความรู้ ${icon('arrow',true)}</a></div></article>`;
 }).join('')}</div>`;
}
function legacyHome(){return `<main class="view"><section class="golden-home-banner" aria-label="ศูนย์การเรียนรู้ตามศาสตร์พระราชา"><img class="banner-picture" src="/assets/photo-05-e392f0ad13.png" alt="แบนเนอร์ศูนย์การเรียนรู้ตามศาสตร์พระราชา แสดงพระบรมสาทิสลักษณ์รัชกาลที่ ๙ ตรา ภ.ป.ร. และสี่ฐานกิจกรรม ได้แก่ พืชผักสมุนไพร ผักสวนครัว ปุ๋ยหมักอีเอ็ม และบ่อปลา/บ่อกบพร้อมระบบน้ำหมุนเวียน" fetchpriority="high"><div class="banner-bottom-mist"></div></section><section class="golden-intro"><div class="container golden-intro-inner"><div><span class="eyebrow accent">เรียนรู้ สืบสาน ต่อยอด</span><h1>เรียนรู้ศาสตร์พระราชา<br>ผ่านการลงมือทำจริง</h1><p>สำรวจ 4 ฐานองค์ความรู้ เชื่อมโยงหลักการทรงงาน 27 ข้อ พร้อมบทความให้ผู้เยี่ยมชมศึกษารายละเอียดของแต่ละฐานได้ทันที</p></div><div class="hero-ctas"><a href="#/stations" class="btn btn-lime">สำรวจ 4 ฐานองค์ความรู้ ${icon('arrow',true)}</a><a href="#/principles" class="btn btn-dark">หลักการทรงงาน 27 ข้อ ${icon('book',true)}</a></div></div></section><div class="marquee"><div class="marquee-track"><span>เรียนรู้ผ่านองค์ความรู้</span><i>✦</i><span>รู้จักทรัพยากรท้องถิ่น</span><i>✦</i><span>ปลูกผักเพื่อพึ่งตนเอง</span><i>✦</i><span>ใช้ประโยชน์จากธรรมชาติ</span><i>✦</i><span>เรียนรู้ผ่านองค์ความรู้</span></div></div><section class="section" id="stations"><div class="container"><div class="section-header"><div><span class="eyebrow accent">เส้นทางการเรียนรู้</span><h2>4 ฐานองค์ความรู้<br>ต่อยอดสู่ความพอเพียง</h2></div><p>ทำความเข้าใจความหมาย องค์ประกอบ ประโยชน์ และความเชื่อมโยงกับหลักการทรงงานของแต่ละฐาน</p></div>${stationSummaryRows()}</div></section><section class="story-section"><div class="container story-layout"><img class="story-photo" src="${imgUrl(PHOTO.vegetables)}" alt="ภาพถ่ายสวนผักในพื้นที่ปลูก" loading="lazy" onerror="this.style.opacity='.08'"><div><span class="eyebrow accent">แนวทางการจัดการเรียนรู้</span><h2 class="story-heading">ไม่ใช่แค่การปลูกพืช<br>แต่คือการปลูกวิธีคิด</h2><p class="story-p">ศูนย์การเรียนรู้เชื่อมกิจกรรมทั้ง 4 ฐานเข้าด้วยกัน ตั้งแต่การปลูกพืช การผลิตปุ๋ยอินทรีย์ ไปจนถึงการจัดการน้ำและสัตว์น้ำ เพื่อให้ผู้เยี่ยมชมมองเห็นความสัมพันธ์ของทรัพยากรในระบบเดียวกัน</p><div class="story-list"><div class="story-list-item"><span class="story-bullet">${icon('check',true)}</span><div><b>เข้าใจบริบทพื้นที่</b><span>เรียนรู้จากทรัพยากรและข้อจำกัดของชุมชนจริง</span></div></div><div class="story-list-item"><span class="story-bullet">${icon('check',true)}</span><div><b>ลงมือทำ ทดลอง และปรับปรุง</b><span>บันทึกสิ่งที่ได้ผลและสิ่งที่ต้องพัฒนา</span></div></div><div class="story-list-item"><span class="story-bullet">${icon('check',true)}</span><div><b>แบ่งปันองค์ความรู้</b><span>ผู้เยี่ยมชมเข้าถึงข้อมูลความรู้ของแต่ละฐานได้ด้วยตนเอง</span></div></div></div><a href="#/stations" class="btn btn-dark">ดูฐานองค์ความรู้ทั้งหมด ${icon('arrow',true)}</a></div></div></section><section class="principles-band"><div class="container principles-band-grid"><div><span class="eyebrow" style="color:var(--signal)">ศาสตร์พระราชากับการปฏิบัติจริง</span><h2>27 หลักการทรงงาน<br><span style="color:var(--signal)">นำมาปรับใช้ได้จริง</span></h2><p>สำรวจแนวทางคิดและตัวอย่างการประยุกต์ใช้ที่แต่ละกลุ่มเชื่อมโยงกับฐานกิจกรรมของตน</p><a href="#/principles" class="btn btn-lime" style="margin-top:20px">อ่านหลักการทรงงานทั้งหมด ${icon('arrow',true)}</a></div><div class="principles-pills"><div class="principle-chip"><strong>10</strong><span>ภูมิสังคม</span></div><div class="principle-chip"><strong>11</strong><span>องค์รวม</span></div><div class="principle-chip"><strong>12</strong><span>ประหยัด เรียบง่าย ได้ประโยชน์สูงสุด</span></div><div class="principle-chip"><strong>18</strong><span>การพึ่งตนเอง</span></div><div class="principle-chip"><strong>19</strong><span>เศรษฐกิจพอเพียง</span></div><div class="principle-chip"><strong>24</strong><span>พออยู่พอกิน</span></div></div></div></section></main>`}
function banner(title,sub,crumb=''){return `<div class="inner-banner"><div class="container"><div class="breadcrumbs"><a href="#/home">หน้าแรก</a> ${icon('arrow',true)} <span>${esc(crumb||title)}</span></div><span class="eyebrow" style="color:var(--signal)">ศูนย์การเรียนรู้ตามศาสตร์พระราชา</span><h1>${esc(title)}</h1><p>${esc(sub)}</p></div></div>`}
function stationList(){return `<main class="view">${banner('ฐานองค์ความรู้ทั้ง 4 ฐาน','เลือกฐานกิจกรรมเพื่อดูรายละเอียด ขั้นตอนเรียนรู้ และหลักการทรงงานที่เกี่ยวข้อง')}<section class="section"><div class="container">${cards()}</div></section></main>`}
function credit(id){const v=SOURCES[id];return v?`<p class="tiny-credit">ภาพประกอบ: <a class="source-link" href="${v.url}" target="_blank" rel="noopener">${esc(v.by)} · ${esc(v.license)}</a> (เป็นภาพประกอบจากแหล่งภาพสาธารณะ)</p>`:''}
function listRows(txt,ordered){const a=nl(txt);if(!a.length)return '<p>ยังไม่มีข้อมูลจากกลุ่มผู้รับผิดชอบ</p>';return `<${ordered?'ol':'ul'}>${a.map(s=>`<li>${esc(s)}</li>`).join('')}</${ordered?'ol':'ul'}>`}
const LEARNING_GUIDE={
 herbs:{
  meaning:'พืชสมุนไพรคือพืชที่มีองค์ประกอบหรือคุณสมบัติที่นำไปใช้ประโยชน์ในด้านอาหาร เครื่องหอม หรือภูมิปัญญาการดูแลสุขภาพตามความเหมาะสม เช่น ตะไคร้ ข่า ขมิ้น กะเพรา และโหระพา ทั้งนี้การใช้เป็นยาต้องคำนึงถึงหลักฐานและความปลอดภัย',
  system:'ศึกษาชื่อชนิดพืช สภาพแวดล้อมที่เหมาะสม แหล่งพันธุ์ วิธีขยายพันธุ์ การดูแล และข้อควรระวังในการใช้ประโยชน์ ตลอดจนรวบรวมความรู้จากชุมชนเพื่อตรวจสอบร่วมกับข้อมูลวิชาการ',
  connection:'ประยุกต์หลักภูมิสังคมโดยเลือกพืชที่เหมาะกับสภาพพื้นที่ ศึกษาข้อมูลอย่างเป็นระบบก่อนใช้ประโยชน์ และส่งเสริมการพึ่งตนเองด้วยการปลูกพืชที่จำเป็นอย่างเหมาะสม',
  note:'การเลือกปลูกพืชตามทรัพยากรและการใช้ประโยชน์ตามความจำเป็น สอดคล้องกับแนวคิดการพัฒนาที่เริ่มจากความพอมีพอกินพอใช้',
  quote:'“พอมีพอกินนี้ก็แปลว่า เศรษฐกิจพอเพียงนั่นเอง”',
  attribution:'พระราชดำรัส เนื่องในโอกาสวันเฉลิมพระชนมพรรษา วันที่ 4 ธันวาคม 2540 (ข้อความตัดตอน)',
  url:'https://km.rdpb.go.th/Knowledge/view/52'
 },
 vegetables:{
  meaning:'ผักสวนครัวคือพืชผักที่ปลูกเพื่อใช้ประกอบอาหารในครัวเรือน เช่น ผักบุ้ง คะน้า พริก มะเขือ และผักกินใบ เป็นตัวอย่างการผลิตอาหารใกล้ตัวที่ปรับตามพื้นที่ ฤดูกาล และความต้องการบริโภคได้',
  system:'เรียนรู้การเลือกชนิดผักตามฤดูกาล การเตรียมดิน การเพาะและย้ายกล้า การจัดการน้ำและแสง การดูแลแมลงศัตรูพืชอย่างเหมาะสม ตลอดจนการเก็บเกี่ยวอย่างปลอดภัย',
  connection:'เชื่อมโยงการพึ่งตนเอง พออยู่พอกิน และเศรษฐกิจพอเพียง โดยปลูกเพื่อบริโภคตามความจำเป็น ใช้ต้นทุนที่เหมาะสม และลดความเสี่ยงจากการพึ่งพาอาหารเพียงแหล่งเดียว',
  note:'ตัวอย่างนี้เป็นการประยุกต์แนวคิดพอมีพอกิน ไม่ใช่ข้อกำหนดว่าทุกครัวเรือนต้องผลิตอาหารทั้งหมดด้วยตนเอง',
  quote:'“ความพอเพียงนี้ ไม่ได้หมายความว่า ทุกครอบครัวจะต้องผลิตอาหารของตัว”',
  attribution:'พระราชดำรัส 4 ธันวาคม 2540 (ข้อความตัดตอน)',
  url:'https://km.rdpb.go.th/Knowledge/View/180'
 },
 compost:{
  meaning:'ปุ๋ยหมักเป็นวัสดุปรับปรุงดินที่เกิดจากการย่อยสลายอินทรียวัตถุโดยจุลินทรีย์ ส่วน EM เป็นชื่อเรียกกลุ่มผลิตภัณฑ์จุลินทรีย์ที่บางแนวทางนำมาใช้ร่วมกับการจัดการเศษวัสดุอินทรีย์ ทั้งสองเรื่องไม่ใช่สิ่งเดียวกัน และการทำปุ๋ยหมักไม่จำเป็นต้องเติม EM เสมอไป',
  system:'ศึกษาแหล่งของเศษใบไม้และเศษพืช การคัดแยกวัสดุที่ปลอดภัย อัตราส่วนวัสดุแห้งและสด ความชื้น อากาศ และการสลายตัว เพื่อให้ได้ปุ๋ยหมักที่สมบูรณ์ก่อนนำไปใช้บำรุงดิน',
  connection:'เชื่อมโยงหลักประหยัด เรียบง่าย ได้ประโยชน์สูงสุด องค์รวม และใช้ธรรมชาติช่วยธรรมชาติ โดยนำวัสดุเหลือใช้กลับมาเป็นทรัพยากรของฐานปลูกพืช ลดการสูญเปล่าและดูแลคุณภาพดิน',
  note:'ปุ๋ยหมักและ EM เป็นเทคนิคที่ศูนย์เลือกใช้เพื่อประยุกต์หลักการ ไม่ควรระบุว่าพระราชดำรัสกล่าวถึงเทคนิค EM โดยตรง',
  quote:'“ความพอเพียงนี้ก็แปลว่าความพอประมาณ และความมีเหตุผล”',
  attribution:'พระราชดำรัส เนื่องในโอกาสวันเฉลิมพระชนมพรรษา วันที่ 4 ธันวาคม 2540 (ข้อความตัดตอน)',
  url:'https://km.rdpb.go.th/Knowledge/View/74'
 },
 water:{
  meaning:'ฐานนี้อธิบายการเลี้ยงปลาและกบควบคู่กับการจัดการน้ำ โดยศึกษาบ่อเลี้ยง ปั๊มน้ำ ท่อ และระบบกรองที่นำน้ำกลับมาใช้ซ้ำเท่าที่คุณภาพน้ำเหมาะสม พร้อมคำนึงถึงสุขภาพสัตว์ ความปลอดภัย และการดูแลสิ่งแวดล้อม',
  system:'เรียนรู้เส้นทางการไหลของน้ำจากบ่อผ่านการกรองและกลับสู่บ่อ การตรวจคุณภาพน้ำ การเติมอากาศ การจัดการของเสีย และข้อจำกัดของระบบน้ำหมุนเวียนซึ่งยังต้องมีการตรวจและเปลี่ยนน้ำบางส่วนเมื่อจำเป็น',
  connection:'เชื่อมโยงหลักองค์รวม ภูมิสังคม การพึ่งตนเอง และการแก้ปัญหาที่จุดเล็ก โดยออกแบบระบบให้เหมาะกับพื้นที่ ต้นทุน ปริมาณน้ำ และความสามารถในการดูแลจริง',
  note:'ระบบน้ำหมุนเวียนเป็นตัวอย่างการประยุกต์หลักการบริหารทรัพยากรอย่างมีเหตุผล ไม่ใช่โครงการพระราชดำริเฉพาะที่กล่าวถึงในพระราชดำรัสนี้',
  quote:'“ฉะนั้นเศรษฐกิจพอเพียงก็มีเป็นขั้น ๆ”',
  attribution:'พระราชดำรัส 4 ธันวาคม 2541 (ข้อความตัดตอน)',
  url:'https://www.chaipat.or.th/content/porpeing/porpeing.html'
 }
};

const KNOWLEDGE_IMAGES={"herbs": {"scene": "/assets/photo-06-ce8475f32e.webp", "detail": "/assets/photo-07-5a6321e686.webp", "context": "/assets/photo-08-70841793c0.webp"}, "vegetables": {"scene": "/assets/photo-09-bd1b9e37b6.webp", "detail": "/assets/photo-10-ea83d5e9a2.webp", "context": "/assets/photo-11-d816095165.webp"}, "compost": {"scene": "/assets/photo-12-a60264f324.webp", "detail": "/assets/photo-13-d3023343bd.webp", "context": "/assets/photo-14-f2dc8211ad.webp"}, "water": {"scene": "/assets/photo-15-50218d3937.webp", "detail": "/assets/photo-16-f40ea96f22.webp", "context": "/assets/photo-17-d5b35acaa9.webp"}};
function detail(id){
 const x=activities.find(z=>z.id===id);
 if(!x)return stationList();
 const ix=activities.indexOf(x),k=LEARNING_GUIDE[id];
 const photo=(variant)=>KNOWLEDGE_IMAGES[id]?.[variant]||imgUrl(PHOTO[id]||x.image);
 const split=(num,tag,title,body,variant,reverse=false)=>`<section class="knowledge-row ${reverse?'reverse':''}" aria-label="${esc(title)}">
   <div class="knowledge-photo"><img src="${photo(variant)}" alt="ภาพประกอบ${esc(x.title)} หัวข้อ${esc(title)}" loading="lazy"><div class="knowledge-cloud"></div></div>
   <div class="knowledge-copy"><span class="knowledge-step"><b>${num}</b> ${tag}</span><h2>${title}</h2>${body}</div>
 </section>`;
 const meaning=split('01','ทำความรู้จัก',`${esc(x.title)} คืออะไร?`,`<p>${esc(k.meaning)}</p>${x.intro?`<p>${esc(x.intro)}</p>`:''}`,'scene');
 const system=split('02','หลักการทำงาน','องค์ประกอบและกระบวนการ',`<p>${esc(k.system)}</p><h3>องค์ประกอบสำคัญ</h3>${listRows(x.equipment,false)}<h3>ลำดับกระบวนการ</h3>${listRows(x.steps,true)}`,'context',true);
 const benefits=split('03','คุณค่าและประโยชน์','เหตุใดฐานนี้จึงสำคัญ?',`<p>${esc(x.takeaway)}</p>${listRows(x.objective,false)}`,'detail');
 const connection=split('04','เชื่อมโยงศาสตร์พระราชา','หลักการทรงงานที่เกี่ยวข้อง',`<div class="knowledge-inline-tags">${(x.principles||[]).filter(i=>PRINCIPLES[i-1]).map(i=>`<span class="chip">ข้อ ${i} · ${esc(PRINCIPLES[i-1])}</span>`).join('')}</div><p>${esc(k.connection)}</p><p>${esc(x.interpretation)}</p><p class="knowledge-source">เป็นการประยุกต์แนวคิด มิได้หมายความว่าฐานนี้เป็นโครงการพระราชดำริโดยตรง <a href="#/principles">อ่านหลักการทรงงานทั้ง 27 ข้อ</a></p>`,'scene',true);
 const royal=split('05','เรียนรู้จากพระราชดำรัส','พระราชดำรัสที่เชื่อมโยง',`<blockquote class="knowledge-quote">${esc(k.quote)}</blockquote><span class="knowledge-source">${esc(k.attribution)}</span><p><b>แนวทางการประยุกต์:</b> ${esc(k.note)}</p><span class="knowledge-source">เป็นข้อความตัดตอนเพื่ออธิบายแนวคิดทั่วไป ไม่ได้กล่าวถึงเทคนิคของฐานโดยตรง <a href="${k.url}" target="_blank" rel="noopener noreferrer">อ่านแหล่งข้อมูลต้นทาง</a></span>`,'context');
 return `<main class="view knowledge-page">${banner(x.title,'แหล่งเรียนรู้เพื่อศึกษาความหมาย หลักการ ประโยชน์ และความเชื่อมโยงกับศาสตร์พระราชา','ฐานองค์ความรู้ที่ '+(ix+1)+' · '+x.title)}
 <div class="container knowledge-wrap"><header class="knowledge-intro"><span class="eyebrow">ฐานองค์ความรู้ที่ ${String(ix+1).padStart(2,'0')}</span><h2>เรียนรู้เรื่อง${esc(x.title)}</h2><p>${esc(x.short)}</p></header><div class="knowledge-rail" aria-hidden="true"></div>
 ${meaning}${system}${benefits}${connection}${royal}
 <footer class="knowledge-end"><span class="eyebrow">องค์ความรู้เพื่อการเรียนรู้ร่วมกัน</span><h2>เรียนรู้ สืบสาน ต่อยอด</h2><p>ผู้รับผิดชอบข้อมูล: ${esc(x.group)} · ${x.updatedAt?'ปรับปรุงล่าสุด '+esc(x.updatedAt):'เนื้อหาเพื่อการเรียนรู้'}</p><div class="knowledge-end-actions"><a class="btn btn-dark" href="#/stations">ดูฐานองค์ความรู้อื่น</a><a class="btn btn-lime" href="#/principles">หลักการทรงงาน 27 ข้อ</a></div></footer></div></main>`;
}
function principlesPage(){return `<main class="view">${banner('หลักการทรงงาน 27 ข้อ','อ่านความหมาย แนวคิด และตัวอย่างการประยุกต์ใช้ในศูนย์การเรียนรู้ครบทุกข้อ')}<section class="section"><div class="container"><div class="principle-controls"><label class="field"><span style="font-weight:800">ค้นหาหลักการทรงงาน</span><input id="principle-search" class="searchbar" placeholder="ค้นหาจากชื่อหลักการหรือหมายเลขข้อ เช่น 18 พึ่งตนเอง"></label></div><div class="principle-list" id="principle-results">${principleCards('')}</div><p style="margin-top:28px;font-size:13px">อ้างอิงหลักการทรงงานจาก <a class="source-link" href="https://www.rdpb.go.th/th/King" target="_blank" rel="noopener">สำนักงาน กปร.</a> และ <a class="source-link" href="https://alro.go.th/uploads/org/royal_ini/download/article/article_20200930164522.pdf" target="_blank" rel="noopener">เอกสารหลักการทรงงาน 27 ประการ (ส.ป.ก.)</a> • คำอธิบายและตัวอย่างในศูนย์เรียบเรียงเพื่อการเรียนรู้ ไม่ใช่ข้อความพระราชดำรัสโดยตรง</p></div></section></main>`}
function principleCards(q){const s=(q||'').trim().toLowerCase();const a=PRINCIPLES.map((title,i)=>({title,n:i+1,meaning:PRINCIPLE_DETAILS[i][0],example:PRINCIPLE_DETAILS[i][1]})).filter(x=>!s||[x.title,x.meaning,x.example,String(x.n)].some(t=>String(t).toLowerCase().includes(s)));return a.length?a.map(x=>`<article class="principle-item principle-expanded"><span class="pnumber">${String(x.n).padStart(2,'0')}</span><div class="principle-description"><h3>${esc(x.title)}</h3><p>${esc(x.meaning)}</p><div class="principle-example"><strong>ตัวอย่างในศูนย์การเรียนรู้</strong><span>${esc(x.example)}</span></div></div></article>`).join(''):`<div class="empty">ไม่พบหลักการทรงงานที่ตรงกับคำค้น</div>`}
function editorPage(){return `<main class="view"><div class="editor-top-banner"><div class="container"><span class="eyebrow" style="color:var(--signal)">พื้นที่สำหรับสมาชิกกลุ่ม</span><h1>แก้ไขหน้าองค์ความรู้</h1><p style="margin:3px 0;color:#b1c4c6">กดแก้ไขข้อความและรูปภาพบนหน้าเว็บจริง เพิ่มส่วนใหม่ด้วยปุ่ม ＋ โดยไม่ต้องเขียนโค้ด</p></div></div><div class="container">${!GAS?`<div class="notice warning" style="margin-top:25px"><b>โหมดทดลอง:</b> การบันทึกข้อมูลจะอยู่เฉพาะเบราว์เซอร์เครื่องนี้ ยังไม่ได้เชื่อม Google Sheets หรือบังคับสิทธิ์จริง</div>`:''}${loggedGroup?`<div style="margin:22px 0"><button type="button" class="visual-button primary" onclick="enterVisualEditor(loggedGroup)">✎ เปิดหน้าแก้ไขแบบเห็นผลจริง</button></div>`+editorForm():loginForm()}</div></main>`}
function loginForm(){return `<div class="login-box"><span class="eyebrow accent">เข้าสู่หน้าแก้ไขหน้าเว็บ</span><h2>เลือกฐานที่กลุ่มของคุณรับผิดชอบ</h2><p>สมาชิกแต่ละกลุ่มแก้ไขได้เฉพาะเนื้อหาฐานของตนเอง เมื่อเชื่อม Google Sheets ระบบจะตรวจรหัสกลุ่มจากฝั่งเซิร์ฟเวอร์</p><form id="login-form"><div class="field"><label for="login-group">กลุ่มผู้รับผิดชอบ</label><select id="login-group" required>${activities.map(x=>`<option value="${x.id}">${esc(x.group)} — ${esc(x.title)}</option>`).join('')}</select></div><div class="field"><label for="login-pin">รหัสประจำกลุ่ม</label><input id="login-pin" type="password" autocomplete="off" placeholder="${GAS?'กรอกรหัสที่ผู้ดูแลมอบให้':'ในตัวอย่างไม่ต้องใช้รหัส'}" ${GAS?'required minlength="5"':''}></div><button class="btn btn-dark" type="submit">${icon('shield',true)} ${GAS?'ยืนยันสิทธิ์และเข้าสู่ระบบ':'เข้าสู่หน้าทดลองแก้ไขข้อมูล'}</button></form></div>`}
function editorForm(){const x=activities.find(z=>z.id===loggedGroup);if(!x)return loginForm();return `<div class="editor-layout"><aside class="editor-sidebar"><div><h3>แผงจัดการข้อมูล</h3><p>${esc(x.group)} · ${esc(x.title)}</p></div><button class="editor-tab selected" type="button">${icon('edit',true)} แก้ไขข้อมูลฐาน</button><a class="editor-tab" href="#/station/${x.id}">${icon('book',true)} ดูหน้าสำหรับผู้เข้าชม</a><button class="editor-tab" id="logout-btn" type="button">${icon('back',true)} เปลี่ยนกลุ่ม</button></aside><div class="editor-pane"><div class="admin-head"><div><span class="eyebrow accent">${esc(x.group)}</span><h2>${esc(x.title)}</h2></div><a href="#/station/${x.id}" class="btn btn-outline btn-sm">เปิดหน้าฐาน ${icon('arrow',true)}</a></div><div class="content-card"><form id="editor-form" class="editor-form"><div class="field"><label>ชื่อฐานกิจกรรม</label><input name="title" required maxlength="125" value="${esc(x.title)}"></div><div class="field"><label>ข้อความสั้นบนภาพ</label><input name="kicker" maxlength="100" value="${esc(x.kicker)}"></div><div class="field span2"><label>คำอธิบายสั้นของฐาน</label><textarea name="short" rows="2" required>${esc(x.short)}</textarea></div><div class="field span2"><label>เนื้อหาแนะนำฐานกิจกรรม</label><textarea name="intro" rows="5">${esc(x.intro)}</textarea></div><div class="field"><label>ประโยชน์และประเด็นที่ควรรู้ (ขึ้นบรรทัดใหม่เพื่อแยกข้อ)</label><textarea name="objective" rows="5">${esc(x.objective)}</textarea></div><div class="field"><label>องค์ประกอบหรือทรัพยากรสำคัญ (ขึ้นบรรทัดใหม่เพื่อแยกข้อ)</label><textarea name="equipment" rows="5">${esc(x.equipment)}</textarea></div><div class="field span2"><label>ลำดับขั้นของกระบวนการทำงาน (ขึ้นบรรทัดใหม่เพื่อแยกขั้น)</label><textarea name="steps" rows="6">${esc(x.steps)}</textarea></div><div class="field span2"><label>ความสำคัญและคุณค่าขององค์ความรู้</label><textarea name="takeaway" rows="3">${esc(x.takeaway)}</textarea></div><div class="field span2"><label>หลักการทรงงานที่เกี่ยวข้อง (เลือกได้หลายข้อ)</label><div class="chip-list" style="max-height:240px;overflow:auto;border:1px solid var(--line);border-radius:14px;padding:15px;gap:7px">${PRINCIPLES.map((p,i)=>`<label class="chip" style="cursor:pointer;background:${(x.principles||[]).includes(i+1)?'#d8f4df':'#f3f5f1'}"><input type="checkbox" name="principles" value="${i+1}" ${(x.principles||[]).includes(i+1)?'checked':''} style="margin-right:6px">ข้อ ${i+1} ${esc(p)}</label>`).join('')}</div></div><div class="field span2"><label>อธิบายการประยุกต์หลักการทรงงานกับฐานกิจกรรม</label><textarea name="interpretation" rows="4">${esc(x.interpretation)}</textarea><small>อธิบายด้วยภาษาของกลุ่มเอง โดยอ้างอิงชื่อหลักการตามแหล่งข้อมูลกลาง</small></div><div class="field span2"><label>รูปภาพประกอบบทความ (ใช้ภาพจริงของฐานได้)</label><img class="preview-img" id="editor-image-preview" src="${imgUrl(x.image)}" alt="ภาพประกอบฐานกิจกรรม"><input name="image" id="image-url" placeholder="วางลิงก์รูปภาพ HTTPS" value="${esc(x.image)}"><div class="editor-photo-row"><input id="image-file" type="file" accept="image/png,image/jpeg,image/webp"><small>อัปโหลดภาพไม่เกิน 4 MB (ระบบจะบีบอัดภาพก่อนอัปโหลด)</small></div><div class="notice" style="margin-top:5px">${icon('camera',true)} ภาพที่อัปโหลดจากเครื่อง: โหมดทดลองจัดเก็บในเบราว์เซอร์ ส่วนเมื่อใช้งาน Google Apps Script จะบันทึกลง Google Drive ของเจ้าของระบบ</div></div><div class="span2" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px"><span class="muted" style="font-size:12px">${esc(editorStatus||'ระบบจะแสดงข้อมูลล่าสุดหลังบันทึก')}</span><button class="btn btn-dark" id="save-button" type="submit">${icon('check',true)} บันทึกข้อมูลของกลุ่ม</button></div></form></div></div></div>`}
function render(){
  const r=route();
  let body=r[0]==='station'?detail(r[1]):r[0]==='stations'?stationList():r[0]==='principles'?principlesPage():r[0]==='editor'&&IS_EDITOR?editorPage():r[0]==='home-edit'&&IS_EDITOR?homeEditPage():home();
  $('#app').innerHTML=header()+body+footer()+mobile();
  document.title=(r[0]==='station'?(activities.find(x=>x.id===r[1])?.title||'ฐานการเรียนรู้')+' | ':'')+'ศูนย์การเรียนรู้ตามศาสตร์พระราชา';
  if(r[0]==='principles')$('#principle-search')?.addEventListener('input',e=>{$('#principle-results').innerHTML=principleCards(e.target.value)});
  if(r[0]==='station')setTimeout(visualBindVideos,0);
  if(['home','home-edit'].includes(r[0]))homeMount();
}
function formPayload(f){const names=['title','kicker','short','intro','objective','equipment','steps','takeaway','interpretation','image'];const p={};for(const n of names)p[n]=String(f.elements[n]?.value||'').trim();p.principles=[...f.querySelectorAll('input[name="principles"]:checked')].map(z=>Number(z.value));return p}
function updateGroup(id,p){const i=activities.findIndex(x=>x.id===id);if(i<0)return;activities[i]={...activities[i],...p,updatedAt:new Date().toLocaleString('th-TH',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})}}

async function saveGroup(f){if(isLoading||!loggedGroup)return;const b=$('#save-button');const p=formPayload(f);if(!p.title||!p.short){toast('กรุณากรอกชื่อฐานและคำอธิบายสั้น');return}if(!imgUrl(p.image)){toast('โปรดใช้ลิงก์รูปภาพ HTTPS หรืออัปโหลดภาพ');return}isLoading=true;b.disabled=true;b.innerHTML=`<span class="spinner"></span> กำลังบันทึกข้อมูล`;try{if(GAS){const r=await gsCall('saveGroup',loggedGroup,loginCode,p);if(!r||!r.ok)throw Error(r?.message||'บันทึกไม่สำเร็จ');}updateGroup(loggedGroup,p);if(!GAS&&!saveLocal())return;editorStatus='บันทึกข้อมูลล่าสุดเรียบร้อยแล้ว';toast('บันทึกข้อมูลเรียบร้อย');render()}catch(e){toast('บันทึกไม่สำเร็จ: '+e.message)}finally{isLoading=false;const save=$('#save-button');if(save)save.disabled=false}}
async function processImage(file){if(!file)return;if(!/^image\/(jpeg|png|webp)$/.test(file.type)){toast('รองรับเฉพาะ JPG PNG WEBP');return}if(file.size>10*1024*1024){toast('ไฟล์ภาพใหญ่เกิน 10 MB');return}const out=await new Promise((resolve,reject)=>{const im=new Image;im.onload=()=>{const max=1500,scale=Math.min(1,max/Math.max(im.width,im.height));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*scale));c.height=Math.max(1,Math.round(im.height*scale));const cx=c.getContext('2d');cx.drawImage(im,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.8))};im.onerror=()=>reject(Error('ไม่สามารถอ่านรูปภาพ'));im.src=URL.createObjectURL(file)});if(GAS){toast('กำลังอัปโหลดภาพไป Google Drive');try{const r=await gsCall('uploadGroupImage',loggedGroup,loginCode,out.split(',')[1],'image/jpeg');if(!r?.ok)throw Error(r?.message||'ไม่สำเร็จ');$('#image-url').value=r.url;$('#editor-image-preview').src=r.url;toast('อัปโหลดภาพเรียบร้อย บันทึกข้อมูลอีกครั้งเพื่อเผยแพร่')}catch(e){toast('อัปโหลดภาพไม่สำเร็จ: '+e.message)}}else{$('#image-url').value=out;$('#editor-image-preview').src=out;toast('เตรียมภาพเรียบร้อย กดบันทึกข้อมูลเพื่อยืนยัน')}}

// ============== DIRECT VISUAL PAGE EDITOR ==============
let visualMode=false, visualPreview=false, visualDraft=null, visualDirty=false;
let visualAddMenu=null, visualUploadTarget='', visualBusy=false;
const VISUAL_STORE='royal-knowledge-visual-pages-v2';
const visualId=()=> 'part-'+Math.random().toString(36).slice(2,10);
const visualClone=v=>JSON.parse(JSON.stringify(v));
function makeSeedPage(x){
  const k=LEARNING_GUIDE[x.id];
  const attached=(x.principles||[]).filter(n=>PRINCIPLES[n-1]).map(n=>'ข้อ '+n+' · '+PRINCIPLES[n-1]).join('\n');
  return {
    title:x.title,short:x.short,
    sections:[
      {id:'meaning',tag:'ทำความรู้จัก',title:x.title+' คืออะไร?',text:k.meaning+'\n\n'+(x.intro||''),kind:'image',imageKey:'scene',image:'',side:'left',size:'normal'},
      {id:'system',tag:'องค์ประกอบสำคัญ',title:'หลักการและกระบวนการทำงาน',text:k.system+'\n\nองค์ประกอบสำคัญ\n'+nl(x.equipment).map(a=>'• '+a).join('\n')+'\n\nลำดับกระบวนการ\n'+nl(x.steps).map((a,i)=>(i+1)+'. '+a).join('\n'),kind:'image',imageKey:'context',image:'',side:'right',size:'normal'},
      {id:'benefits',tag:'คุณค่าและประโยชน์',title:'ประโยชน์และความสำคัญ',text:(x.takeaway||'')+'\n\n'+nl(x.objective).map(a=>'• '+a).join('\n'),kind:'image',imageKey:'detail',image:'',side:'left',size:'normal'},
      {id:'connection',tag:'ศาสตร์พระราชา',title:'ความเชื่อมโยงกับหลักการทรงงาน',text:'หลักการทรงงานที่เกี่ยวข้อง\n'+attached+'\n\n'+k.connection+'\n\n'+(x.interpretation||'')+'\n\nหมายเหตุ: เป็นการประยุกต์ใช้แนวคิด ไม่ได้หมายความว่าฐานนี้เป็นโครงการพระราชดำริโดยตรง',kind:'image',imageKey:'scene',image:'',side:'right',size:'normal'},
      {id:'royal',tag:'พระราชดำรัส',title:'พระราชดำรัสที่นำมาเชื่อมโยง',text:k.quote+'\n\n'+k.attribution+'\n\nแนวทางการประยุกต์: '+k.note+'\n\nแหล่งอ้างอิง: '+k.url,kind:'quote',imageKey:'context',image:'',side:'left',size:'normal'}
    ]
  }
}
function validVisualPage(page){return page&&Array.isArray(page.sections)&&page.sections.length>0}
function ensureVisualPage(x){return validVisualPage(x.visualPage)?x.visualPage:makeSeedPage(x)}
function loadVisualLocal(){
  if(GAS)return;
  try{
    const saved=JSON.parse(localStorage.getItem(VISUAL_STORE)||'{}');
    for(const a of activities){const p=saved[a.id];if(validVisualPage(p)){
      a.visualPage=p; if(p.title)a.title=p.title;if(p.short)a.short=p.short;
    }}
  }catch(e){/* private mode / blocked storage */}
}
function persistVisualLocal(){
  const p={};for(const a of activities)if(validVisualPage(a.visualPage))p[a.id]=a.visualPage;
  try{localStorage.setItem(VISUAL_STORE,JSON.stringify(p));return true}
  catch(e){toast('พื้นที่บันทึกในเบราว์เซอร์ไม่เพียงพอ กรุณาใช้ภาพขนาดเล็กลงหรือเผยแพร่ผ่าน Google Apps Script');return false}
}
function enterVisualEditor(id){
  if(!IS_EDITOR)return;
  if(loggedGroup!==id){location.hash='#/editor';toast('โปรดเข้าสู่ระบบกลุ่มของท่านก่อน');return}
  const x=activities.find(a=>a.id===id);if(!x)return;
  visualDraft=visualClone(ensureVisualPage(x));visualMode=true;visualPreview=false;visualDirty=false;visualAddMenu=null;
  if(location.hash!=='#/station/'+id){location.hash='#/station/'+id}else render();
  window.scrollTo({top:0,behavior:'auto'});
}
function visualCurrentPage(id,x){return visualMode&&loggedGroup===id&&visualDraft?visualDraft:ensureVisualPage(x)}
function visualText(s){return esc(String(s??''));}
function visualDisplayText(s){return visualText(s).replace(/\n/g,'<br>')}
function visualField(block,field,content,cssClass='',placeholder='กดเพื่อแก้ไขข้อความ'){
  const editable=visualMode&&!visualPreview;
  const element=field==='title'?'h2':field==='tag'?'span':'div';
  return `<${element} class="${cssClass} ${editable?'visual-editable':''}" ${editable?`contenteditable="true" spellcheck="true" role="textbox" aria-label="แก้ไข${esc(field)}" data-block-id="${esc(block.id)}" data-block-field="${field}" data-placeholder="${esc(placeholder)}"`:''}>${visualDisplayText(content)}</${element}>`;
}
function visualPageField(field,content,tag='h2'){
  const editable=visualMode&&!visualPreview;
  return `<${tag} class="${editable?'visual-editable':''}" ${editable?`contenteditable="true" role="textbox" spellcheck="true" data-visual-page-field="${field}" data-placeholder="แตะเพื่อแก้ไข"`:''}>${visualDisplayText(content)}</${tag}>`;
}

// ============== VIDEO BLOCK SUPPORT ==============
const VISUAL_VIDEO_DB='royal-knowledge-videos-v1';
const visualVideoUrls=new Map();
let visualVideoObserver=null;
function videoParse(input){
  const raw=String(input||'').trim();if(!raw)return null;
  if(raw.startsWith('localvideo:'))return {type:'local',key:raw.slice(11)};
  let url;try{url=new URL(raw)}catch(_){return null}
  if(url.protocol!=='https:')return null;
  const host=url.hostname.toLowerCase();
  const isYT=['youtube.com','www.youtube.com','m.youtube.com','youtube-nocookie.com','www.youtube-nocookie.com','youtu.be','www.youtu.be'].includes(host);
  if(isYT){
    let v='';const parts=url.pathname.split('/').filter(Boolean);
    if(host.endsWith('youtu.be'))v=parts[0]||'';
    else if(parts[0]==='watch')v=url.searchParams.get('v')||'';
    else if(['shorts','live','embed'].includes(parts[0]))v=parts[1]||'';
    if(!/^[a-zA-Z0-9_-]{11}$/.test(v))return null;
    return {type:'youtube',id:v};
  }
  if(host==='drive.google.com'){
    const m=url.pathname.match(/^\/file\/d\/([a-zA-Z0-9_-]+)/);
    const id=(m&&m[1])||url.searchParams.get('id');
    if(id&&/^[a-zA-Z0-9_-]+$/.test(id))return {type:'file',url:'https://drive.google.com/uc?export=download&id='+encodeURIComponent(id)};
  }
  return {type:'file',url:url.href};
}
function videoDb(){return new Promise((resolve,reject)=>{
  if(typeof indexedDB==='undefined')return reject(Error('เบราว์เซอร์ไม่รองรับการเก็บวิดีโอในเครื่อง'));
  let req;try{req=indexedDB.open(VISUAL_VIDEO_DB,1)}catch(e){return reject(e)}
  req.onupgradeneeded=()=>req.result.createObjectStore('clips');
  req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error||Error('ไม่สามารถเปิดที่เก็บวิดีโอ'));
})}
async function videoDbPut(key,file){const db=await videoDb();return new Promise((resolve,reject)=>{
  const tx=db.transaction('clips','readwrite');tx.objectStore('clips').put(file,key);
  tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error||Error('บันทึกวิดีโอไม่ได้'))};
})}
async function videoDbGet(key){const db=await videoDb();return new Promise((resolve,reject)=>{
  const tx=db.transaction('clips','readonly');const req=tx.objectStore('clips').get(key);
  req.onsuccess=()=>{const v=req.result;db.close();resolve(v)};req.onerror=()=>{db.close();reject(req.error)};
})}
function visualVideoMedia(b){
 const parsed=videoParse(b.videoUrl);const loop=b.videoLoop!==false;
 const title=esc(b.title||'วิดีโอประกอบฐานองค์ความรู้');
 if(parsed?.type==='youtube'){
   const link='https://www.youtube.com/watch?v='+parsed.id;
   const embed='https://www.youtube-nocookie.com/embed/'+parsed.id+'?autoplay=1&mute=1&playsinline=1&controls=1&rel=0'+(loop?'&loop=1&playlist='+parsed.id:'');
   return `<div class="visual-video-stage"><iframe data-autoplay-embed="${esc(embed)}" loading="lazy" title="${title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><a class="visual-video-link" target="_blank" rel="noopener noreferrer" href="${link}">เปิดวิดีโอบน YouTube</a>`;
 }
 if(parsed?.type==='file'||parsed?.type==='local'){
   const src=parsed.type==='file'?`src="${esc(parsed.url)}"`:`data-local-video="${esc(parsed.key)}"`;
   return `<div class="visual-video-stage"><video ${src} data-auto-video muted playsinline autoplay ${loop?'loop':''} controls preload="metadata" aria-label="${title}">อุปกรณ์นี้ไม่รองรับการเล่นวิดีโอ</video></div>${parsed.type==='file'?`<a class="visual-video-link" target="_blank" rel="noopener noreferrer" href="${esc(parsed.url)}">เปิดวิดีโอในแท็บใหม่ หากเล่นในหน้าเว็บไม่ได้</a>`:''}`;
 }
 return `<div class="visual-video-stage"><div class="visual-video-placeholder"><div><span class="play-symbol" aria-hidden="true">▶</span><p>เพิ่มวิดีโอประกอบองค์ความรู้</p><small>รองรับลิงก์ YouTube, ไฟล์ MP4/WebM ผ่าน HTTPS และวิดีโอที่อัปโหลด</small></div></div></div>`;
}
function visualVideoEditor(b){
 if(!visualMode||visualPreview)return '';
 const local=String(b.videoUrl||'').startsWith('localvideo:');
 return `<div class="visual-video-edit"><label for="video-url-${esc(b.id)}">ลิงก์วิดีโอ (YouTube หรือ MP4/WebM แบบ HTTPS)</label>
 <div class="visual-video-actions"><input class="visual-video-url" id="video-url-${esc(b.id)}" data-visual-video-url="${esc(b.id)}" type="url" inputmode="url" placeholder="https://www.youtube.com/watch?v=..." value="${local?'':esc(b.videoUrl||'')}" />
 <button type="button" class="visual-button" data-visual-video-file="${esc(b.id)}">📹 เลือกวิดีโอจากเครื่อง</button></div>
 <label class="visual-video-loop"><input type="checkbox" data-visual-video-loop="${esc(b.id)}" ${b.videoLoop!==false?'checked':''}>เล่นวนซ้ำ</label>
 <span class="visual-video-hint">เล่นอัตโนมัติแบบปิดเสียงเมื่อเลื่อนมาถึงวิดีโอ กดตัวควบคุมวิดีโอเพื่อเปิดเสียงได้ · ${GAS?'อัปโหลดจากเครื่องได้ไม่เกิน 8 MB หรือใช้ลิงก์วิดีโอสาธารณะ':'ไฟล์ที่เลือกจะเก็บในเบราว์เซอร์เครื่องนี้ ไม่เผยแพร่ข้ามเครื่อง'}${local?' · กำลังใช้วิดีโอในเครื่อง':''}</span></div>`;
}
function visualVideo(id,b){
 return `<div class="knowledge-photo visual-video-shell">${visualVideoMedia(b)}${visualVideoEditor(b)}<div class="knowledge-cloud"></div></div>`;
}
async function visualLoadLocalVideo(key){
 if(visualVideoUrls.has(key))return visualVideoUrls.get(key);
 const blob=await videoDbGet(key);
 if(!blob)throw Error('ไม่พบวิดีโอในเครื่องนี้ กรุณาเลือกไฟล์อีกครั้ง');
 const url=URL.createObjectURL(blob);visualVideoUrls.set(key,url);return url;
}
function visualBindVideos(){
 if(visualVideoObserver){visualVideoObserver.disconnect();visualVideoObserver=null;}
 const vids=[...document.querySelectorAll('video[data-auto-video]')],frames=[...document.querySelectorAll('iframe[data-autoplay-embed]')];
 for(const vid of vids){
   vid.muted=true;vid.defaultMuted=true;vid.playsInline=true;
   vid.addEventListener('error',()=>{const note=vid.closest('.visual-video-shell')?.querySelector('.visual-video-link');if(note)note.textContent='วิดีโอไม่สามารถเล่นจากแหล่งนี้ได้ — เปิดวิดีโอในแท็บใหม่';},{once:true});
   if(vid.dataset.localVideo){const key=vid.dataset.localVideo;visualLoadLocalVideo(key).then(url=>{if(!vid.isConnected)return;vid.src=url;vid.load();if(!('IntersectionObserver' in window)||(()=>{const r=vid.getBoundingClientRect();return r.bottom>0&&r.top<window.innerHeight})())vid.play().catch(()=>{})}).catch(()=>{if(vid.isConnected){vid.insertAdjacentHTML('afterend','<p class="visual-video-error">ไม่พบวิดีโอในเบราว์เซอร์นี้ กรุณาแก้ไขและอัปโหลดใหม่</p>')}})}
 }
 if('IntersectionObserver' in window){
   visualVideoObserver=new IntersectionObserver(entries=>{
     for(const entry of entries){const el=entry.target;
       if(el.tagName==='VIDEO'){
         if(entry.isIntersecting){if(el.readyState>=2||el.src)el.play().catch(()=>{});}
         else el.pause();
       }else if(el.tagName==='IFRAME'){
         const desired=el.dataset.autoplayEmbed||'';
         if(entry.isIntersecting){if(!el.getAttribute('src'))el.src=desired}
         else if(el.getAttribute('src'))el.removeAttribute('src');
       }
     }
   },{rootMargin:'0px 0px 100px 0px',threshold:0.1});
   vids.concat(frames).forEach(v=>visualVideoObserver.observe(v));
 }else{
   frames.forEach(f=>{f.src=f.dataset.autoplayEmbed});
   vids.forEach(v=>{if(v.src)v.play().catch(()=>{})});
 }
}
async function visualReadVideo(file,id){
 if(!file||!visualDraft||!loggedGroup)return;
 if(!['video/mp4','video/webm'].includes(file.type)){toast('รองรับไฟล์ MP4 หรือ WebM เท่านั้น');return}
 const limit=GAS?2.8*1024*1024:80*1024*1024;
 if(file.size>limit){toast(GAS?'วิดีโอสำหรับอัปโหลดต้องไม่เกิน 2.8 MB กรุณาใช้ลิงก์ YouTube/MP4 สำหรับไฟล์ขนาดใหญ่':'ไฟล์วิดีโอใหญ่เกิน 80 MB');return}
 const block=visualDraft.sections.find(s=>s.id===id);if(!block)return;
 try{
   visualBusy=true;toast('กำลังเตรียมวิดีโอ...');let value='';
   if(GAS){
     const b64=await new Promise((resolve,reject)=>{const r=new FileReader();r.onerror=()=>reject(Error('อ่านไฟล์วิดีโอไม่ได้'));r.onload=()=>resolve(String(r.result).split(',')[1]);r.readAsDataURL(file)});
     const result=await gsCall('uploadGroupVideo',loggedGroup,loginCode,b64,file.type);
     if(!result?.ok)throw Error(result?.message||'อัปโหลดวิดีโอไม่สำเร็จ');value=result.url;
   }else{
     const key=loggedGroup+'-'+visualId();await videoDbPut(key,file);value='localvideo:'+key;
     visualVideoUrls.set(key,URL.createObjectURL(file));
   }
   block.videoUrl=value;block.videoLoop=true;visualDirty=true;visualRerender(id);
   toast('เพิ่มวิดีโอเรียบร้อย กรุณากดบันทึกหน้าเว็บ');
 }catch(e){toast('เพิ่มวิดีโอไม่สำเร็จ: '+e.message)}finally{visualBusy=false}
}

function visualSectionTools(b,i,all){
  if(!visualMode||visualPreview)return '';
  return `<div class="visual-tools" role="group" aria-label="เครื่องมือจัดการส่วน${esc(b.title)}">
    <button type="button" title="ย้ายส่วนขึ้น" data-visual-move="up" data-bid="${b.id}" ${i===0?'disabled':''}>↑ ขึ้น</button>
    <button type="button" title="ย้ายส่วนลง" data-visual-move="down" data-bid="${b.id}" ${i===all.length-1?'disabled':''}>↓ ลง</button>
    <button type="button" title="สลับตำแหน่งภาพ" data-visual-flip="${b.id}" ${b.kind==='text'||b.side==='center'?'disabled':''}>⇄ สลับภาพ</button>
    <select data-visual-layout="${esc(b.id)}" aria-label="การจัดวางส่วนเนื้อหา">
      <option value="left" ${!b.side||b.side==='left'?'selected':''}>ภาพซ้าย</option>
      <option value="right" ${b.side==='right'?'selected':''}>ภาพขวา</option>
      <option value="center" ${b.side==='center'?'selected':''}>กึ่งกลาง</option>
    </select>
    <select data-visual-size="${b.id}" aria-label="ขนาดข้อความ">
      <option value="small" ${b.size==='small'?'selected':''}>ตัวเล็ก</option>
      <option value="normal" ${!b.size||b.size==='normal'?'selected':''}>ตัวปกติ</option>
      <option value="big" ${b.size==='big'?'selected':''}>ตัวใหญ่</option>
    </select>
    <button type="button" data-visual-delete="${b.id}" title="ลบส่วนนี้">ลบ</button>
  </div>`;
}
function visualAddAfter(id){
  if(!visualMode||visualPreview)return '';
  return `<div class="visual-insert"><button type="button" data-visual-add-menu="${id}" aria-expanded="${visualAddMenu===id?'true':'false'}">＋ เพิ่มส่วนเนื้อหาตรงนี้</button>
    ${visualAddMenu===id?`<div class="visual-insert-menu">
       <button type="button" data-visual-add-kind="image" data-after="${id}">ภาพ + ข้อความ</button>
       <button type="button" data-visual-add-kind="text" data-after="${id}">ข้อความอย่างเดียว</button>
       <button type="button" data-visual-add-kind="quote" data-after="${id}">คำกล่าว / แหล่งอ้างอิง</button>
       <button type="button" data-visual-add-kind="video" data-after="${id}">▶ วิดีโอ + คำอธิบาย (เล่นอัตโนมัติ)</button>
    </div>`:''}</div>`;
}

function visualBlockLinkSettings(b){
 if(!visualMode||visualPreview)return '';
 const mode=contentLinkMode(b);
 return `<div class="visual-link-editor" data-settings-for="${esc(b.id)}">
   <div class="visual-link-heading">${icon('link',true)} ลิงก์สำหรับส่วนนี้ <small>เว้นว่างถ้าไม่ต้องการลิงก์</small></div>
   <label>เว็บไซต์ปลายทาง (https://) หรือหน้าในเว็บ (#/station/herbs)
     <input type="url" inputmode="url" data-visual-link-url="${esc(b.id)}" value="${esc(b.linkUrl||'')}" placeholder="https://example.com">
   </label>
   <div class="visual-link-two">
     <label>รูปแบบลิงก์
       <select data-visual-link-mode="${esc(b.id)}">
         <option value="both" ${mode==='both'?'selected':''}>คลิกภาพและมีปุ่ม</option>
         <option value="image" ${mode==='image'?'selected':''}>คลิกที่ภาพเท่านั้น</option>
         <option value="button" ${mode==='button'?'selected':''}>แสดงปุ่มลิงก์เท่านั้น</option>
       </select>
     </label>
     <label>ข้อความบนปุ่ม
       <input type="text" maxlength="100" data-visual-link-label="${esc(b.id)}" value="${esc(b.linkLabel||'')}" placeholder="อ่านรายละเอียดเพิ่มเติม">
     </label>
   </div>
   <small>ผู้ชมคลิกลิงก์แล้วเปิดหน้าใหม่ ส่วนในโหมดแก้ไขยังคลิกภาพเพื่อเปลี่ยนรูปได้</small>
 </div>`;
}
function visualImage(id,b){
  if(b.kind==='text')return '';
  if(b.kind==='video')return visualVideo(id,b);
  const src=imgUrl(b.image)||(KNOWLEDGE_IMAGES[id]&&KNOWLEDGE_IMAGES[id][b.imageKey||'scene'])||imgUrl(PHOTO[id]);
  const edit=visualMode&&!visualPreview;
  const url=safeContentUrl(b.linkUrl), linked=!edit&&url&&['image','both'].includes(contentLinkMode(b));
  return `<div class="knowledge-photo">${edit?`<button type="button" class="visual-photo-button" data-visual-image="${b.id}" title="กดเปลี่ยนรูป">`:linked?`<a class="knowledge-photo-link" ${contentLinkAttrs(url)} aria-label="เปิดลิงก์ภาพ ${esc(b.title)}">`:''}
    <img src="${src}" alt="ภาพประกอบ: ${esc(b.title)}" loading="lazy">${edit?`<span class="visual-photo-label">📷 กดเพื่อเปลี่ยนรูป</span></button>`:linked?'</a>':''}
    <div class="knowledge-cloud"></div></div>`;
}
function visualRow(id,b,i,all){
  const reverse=b.side==='right'&&b.kind!=='text';
  const centered=b.side==='center';
  const number=String(i+1).padStart(2,'0');
  return `<section class="knowledge-row visual-row ${reverse?'reverse':''} ${centered?'centered':''} ${b.kind==='text'?'no-image':''} ${b.kind==='video'?'video-block':''}" id="${b.id}" aria-label="${esc(b.title)}">
    ${visualSectionTools(b,i,all)}
    ${visualImage(id,b)}
    <div class="knowledge-copy"><span class="knowledge-step"><b>${number}</b> ${visualMode&&!visualPreview?visualField(b,'tag',b.tag,'visual-step-tag','หัวข้อย่อย'):visualText(b.tag)}</span>
      ${visualMode&&!visualPreview?visualField(b,'title',b.title,'visual-row-title','ชื่อหัวข้อ'):`<h2>${esc(b.title)}</h2>`}
      ${visualField(b,'text',b.text,`visual-copy ${b.size||'normal'} ${b.kind==='quote'?'quote':''}`,'เขียนเนื้อหาของฐานองค์ความรู้ที่นี่...')}
      ${contentLinkButton(b)}
      ${visualBlockLinkSettings(b)}
      ${b.id==='royal'?'<p class="visual-mini">ควรตรวจข้อความพระราชดำรัสและลิงก์ต้นฉบับให้ถูกต้องก่อนเผยแพร่</p>':''}
    </div>
  </section>${visualAddAfter(b.id)}`;
}
function visualToolbar(id){
  if(!visualMode||loggedGroup!==id)return '';
  return `<div class="visual-toolbar"><div class="container visual-toolbar-inner">
    <div class="visual-toolbar-label">✎ กำลังแก้ไขหน้าเว็บจริง · ${esc(activities.find(x=>x.id===id)?.group||'กลุ่ม')}
      <small>${GAS?'บันทึกผ่าน Google Sheets เมื่อเปิดใช้งาน Apps Script':'เชื่อมต่อข้อมูลผ่าน Google Sheets'} ${visualDirty?'· มีการแก้ไขที่ยังไม่บันทึก':''}</small>
    </div><div class="visual-buttons">
      <button type="button" class="visual-button" data-visual-preview>${visualPreview?'✎ กลับไปแก้ไข':'◉ ดูตัวอย่าง'}</button>
      <button type="button" class="visual-button primary" data-visual-save ${visualBusy?'disabled':''}>${visualBusy?'กำลังบันทึก...':'✓ บันทึกการเปลี่ยนแปลง'}</button>
      <button type="button" class="visual-button" data-visual-exit>ออกจากการแก้ไข</button>
    </div>
  </div></div>`;
}
/* Image banner is part of each group's VisualPages record (no schema migration). */
function stationHero(id,x,ix,p,canEdit){
  const editable=canEdit&&!visualPreview;
  const fallback=KNOWLEDGE_IMAGES[id]?.scene||PHOTO[id]||x.image;
  const src=imgUrl(p.bannerImage)||imgUrl(fallback);
  return `<section class="station-hero" id="station-hero" aria-label="แบนเนอร์ฐาน${esc(x.title)}">
    <img class="station-hero-photo" src="${src}" alt="ภาพแบนเนอร์ฐาน${esc(x.title)}" fetchpriority="high" decoding="async">
    <div class="station-hero-shade" aria-hidden="true"></div>
    <div class="container station-hero-content">
      <nav class="station-hero-crumbs" aria-label="เส้นทางนำทาง"><a href="#/home">หน้าแรก</a><span aria-hidden="true">›</span><a href="#/stations">4 ฐานองค์ความรู้</a><span aria-hidden="true">›</span><span>ฐานที่ ${ix+1}</span></nav>
      <span class="station-hero-eyebrow">ฐานองค์ความรู้ที่ ${String(ix+1).padStart(2,'0')} · ${esc(x.kicker||'เรียนรู้เพื่อความพอเพียง')}</span>
      ${visualPageField('title',p.title,'h1')}
      <p class="station-hero-subtitle">เรียนรู้จากภูมิปัญญาและการลงมือปฏิบัติจริง</p>
      ${editable?`<button type="button" class="station-hero-change" data-visual-image="station-header" aria-label="อัปโหลดภาพแบนเนอร์ของฐานนี้">📷 เปลี่ยนภาพแบนเนอร์</button><span class="station-hero-image-hint">แนะนำภาพแนวนอน 1600 × 650 พิกเซล · กดบันทึกหลังเปลี่ยนภาพ</span>`:''}
    </div>
    <div class="station-hero-mist" aria-hidden="true"></div>
  </section>`;
}
function detail(id){
 const x=activities.find(z=>z.id===id);if(!x)return stationList();
 const ix=activities.indexOf(x),p=visualCurrentPage(id,x),canEdit=visualMode&&loggedGroup===id;
 return `<main class="view knowledge-page">
   ${stationHero(id,x,ix,p,canEdit)}
   ${visualToolbar(id)}
   <div class="container knowledge-wrap">
     <header class="knowledge-intro">
       <span class="eyebrow">ฐานองค์ความรู้ที่ ${String(ix+1).padStart(2,'0')}</span>
       <h2>เรียนรู้จากฐานนี้</h2>
       ${visualPageField('short',p.short,'p')}
       ${canEdit&&!visualPreview?`<p class="visual-soft-note">คลิกข้อความเพื่อแก้ไข · คลิกภาพเพื่อเปลี่ยนภาพ · กด ＋ เพื่อเพิ่มส่วนได้ทันที</p>`:''}
     </header>
     <div class="knowledge-rail" aria-hidden="true"></div>
     ${canEdit&&!visualPreview?`<input type="file" id="visual-upload" accept="image/png,image/jpeg,image/webp" hidden><input type="file" id="visual-video-upload" accept="video/mp4,video/webm" hidden>${visualAddAfter('start')}`:''}
     ${(p.sections||[]).map((b,i)=>visualRow(id,b,i,p.sections)).join('')}
     <footer class="knowledge-end"><span class="eyebrow">องค์ความรู้เพื่อการเรียนรู้ร่วมกัน</span>
       <h2>เรียนรู้ สืบสาน ต่อยอด</h2>
       <p>ผู้รับผิดชอบข้อมูล: ${esc(x.group)} · ${x.updatedAt?'ปรับปรุงล่าสุด '+esc(x.updatedAt):'เนื้อหาเพื่อการเรียนรู้'}</p>
       <div class="knowledge-end-actions"><a class="btn btn-dark" href="#/stations">ดูฐานองค์ความรู้อื่น</a><a class="btn btn-lime" href="#/principles">หลักการทรงงาน 27 ข้อ</a></div>
     </footer>
   </div>
 </main>`;
}
function visualSyncDom(){
 if(!visualDraft)return;
 document.querySelectorAll('[data-visual-page-field]').forEach(el=>{
   let s=el.innerText.replace(/\r/g,'').trim();if(s.length>1200)s=s.slice(0,1200);
   visualDraft[el.dataset.visualPageField]=s;
 });
 document.querySelectorAll('[data-block-id][data-block-field]').forEach(el=>{
   const b=visualDraft.sections.find(v=>v.id===el.dataset.blockId);if(!b)return;
   let s=el.innerText.replace(/\r/g,'').trim();if(s.length>12000)s=s.slice(0,12000);
   b[el.dataset.blockField]=s;
 });
 for(const el of document.querySelectorAll('[data-visual-link-url]')){
   const b=visualDraft.sections.find(v=>v.id===el.dataset.visualLinkUrl);if(b)b.linkUrl=el.value.trim().slice(0,1600);
 }
 for(const el of document.querySelectorAll('[data-visual-link-label]')){
   const b=visualDraft.sections.find(v=>v.id===el.dataset.visualLinkLabel);if(b)b.linkLabel=el.value.trim().slice(0,100);
 }
 for(const el of document.querySelectorAll('[data-visual-link-mode]')){
   const b=visualDraft.sections.find(v=>v.id===el.dataset.visualLinkMode);if(b)b.linkMode=el.value;
 }
}
function visualMutation(){visualSyncDom();visualDirty=true}
function visualRerender(scrollId){const scroll=window.scrollY;render();if(scrollId){const v=document.getElementById(scrollId);if(v)v.scrollIntoView({block:'center',behavior:'auto'})}else window.scrollTo({top:scroll,behavior:'auto'});}
async function visualSave(){
 if(!visualMode||!loggedGroup||visualBusy)return;
 visualSyncDom();
 if(!visualDraft.title.trim()||!visualDraft.short.trim()){toast('กรุณาระบุชื่อฐานและคำอธิบาย');return}
 if(!visualDraft.sections.length){toast('ต้องมีเนื้อหาอย่างน้อย 1 ส่วน');return}
 if(visualDraft.sections.length>30){toast('ไม่ควรมีมากกว่า 30 ส่วน');return}
 if(visualDraft.sections.some(b=>b.linkUrl&&!safeContentUrl(b.linkUrl))){toast('ลิงก์ต้องเป็น HTTPS หรือหน้าในเว็บที่ขึ้นต้นด้วย #/');return}
 visualBusy=true;render();
 try{
   const data=visualClone(visualDraft);
   if(GAS){const r=await gsCall('saveVisualPage',loggedGroup,loginCode,data);if(!r||!r.ok)throw Error(r?.message||'บันทึกไม่สำเร็จ')}
   const x=activities.find(a=>a.id===loggedGroup);
   const backup=visualClone(x.visualPage||null),oldTitle=x.title,oldShort=x.short;
   x.visualPage=data;x.title=data.title;x.short=data.short;
   x.updatedAt=new Date().toLocaleString('th-TH',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
   if(!GAS&&!persistVisualLocal()){
     x.visualPage=backup;x.title=oldTitle;x.short=oldShort;throw Error('ไม่สามารถเก็บข้อมูลในเบราว์เซอร์ได้')
   }
   visualDirty=false;toast(GAS?'บันทึกไปยัง Google Sheets เรียบร้อย':'บันทึกตัวอย่างลงในเบราว์เซอร์แล้ว');
 }catch(e){toast('บันทึกไม่สำเร็จ: '+e.message)}
 finally{visualBusy=false;render()}
}
async function visualReadFile(file,id){
 if(!file||!visualDraft||!loggedGroup)return;
 if(!/^image\/(jpeg|png|webp)$/.test(file.type)){toast('รองรับภาพ JPEG, PNG และ WebP');return}
 if(file.size>12*1024*1024){toast('รูปภาพขนาดเกิน 12 MB');return}
 try{
   const url=URL.createObjectURL(file);
   const data=await new Promise((resolve,reject)=>{
     const image=new Image();image.onload=()=>{
       const max=1100,ratio=Math.min(1,max/Math.max(image.width,image.height));
       const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.width*ratio));canvas.height=Math.max(1,Math.round(image.height*ratio));
       canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);
       URL.revokeObjectURL(url);resolve(canvas.toDataURL('image/jpeg',0.70));
     };image.onerror=()=>{URL.revokeObjectURL(url);reject(Error('ไม่สามารถอ่านไฟล์ภาพ'))};image.src=url;
   });
   let imageValue=data;
   if(GAS){toast('กำลังอัปโหลดภาพไปยัง Google Drive');const r=await gsCall('uploadGroupImage',loggedGroup,loginCode,data.split(',')[1],'image/jpeg');if(!r||!r.ok)throw Error(r?.message||'อัปโหลดไม่สำเร็จ');imageValue=r.url;}
   if(id==='station-header'){
     visualDraft.bannerImage=imageValue;visualDirty=true;visualRerender('station-hero');
     toast('เปลี่ยนภาพแบนเนอร์แล้ว กรุณากดบันทึก');return;
   }
   const b=visualDraft.sections.find(a=>a.id===id);if(!b)return;
   b.image=imageValue;visualDirty=true;visualRerender(id);toast('เปลี่ยนภาพแล้ว กรุณากดบันทึก');
 }catch(e){toast('เปลี่ยนภาพไม่สำเร็จ: '+e.message)}
}
function visualAddBlock(after,kind){
 visualSyncDom();const blocks=visualDraft.sections;
 if(blocks.length>=30){toast('เพิ่มได้สูงสุด 30 ส่วน');return}
 const i=after==='start'?-1:blocks.findIndex(b=>b.id===after);
 const b={id:visualId(),tag:'หัวข้อองค์ความรู้ใหม่',title:kind==='quote'?'คำกล่าวและแหล่งอ้างอิง':kind==='video'?'วิดีโอประกอบฐานองค์ความรู้':'หัวข้อใหม่',text:'แตะข้อความนี้เพื่อเขียนเนื้อหาและคำอธิบายของฐานองค์ความรู้',kind:kind==='text'?'text':kind==='quote'?'quote':kind==='video'?'video':'image',imageKey:'scene',image:'',videoUrl:'',videoLoop:true,linkUrl:'',linkLabel:'',linkMode:kind==='image'?'both':'button',side:blocks.length%2?'right':'left',size:'normal'};
 blocks.splice(i+1,0,b);visualAddMenu=null;visualDirty=true;visualRerender(b.id);
 const el=document.querySelector('[data-block-id="'+b.id+'"][data-block-field="title"]');el?.focus();
}
function visualButtonClick(e){
 const t=e.target.closest('button');if(!t)return;
 if(t.hasAttribute('data-visual-save')){e.preventDefault();visualSave();return}
 if(t.hasAttribute('data-visual-preview')){e.preventDefault();visualSyncDom();visualPreview=!visualPreview;render();return}
 if(t.hasAttribute('data-visual-exit')){
   e.preventDefault();if(visualDirty&&!confirm('มีการเปลี่ยนแปลงที่ยังไม่บันทึก ต้องการออกโดยไม่บันทึกหรือไม่?'))return;
   visualMode=false;visualPreview=false;visualDraft=null;visualDirty=false;loggedGroup=null;loginCode='';render();return;
 }
 if(t.hasAttribute('data-visual-add-menu')){e.preventDefault();visualSyncDom();const key=t.dataset.visualAddMenu;visualAddMenu=visualAddMenu===key?null:key;visualRerender();return}
 if(t.hasAttribute('data-visual-add-kind')){e.preventDefault();visualAddBlock(t.dataset.after,t.dataset.visualAddKind);return}
 if(t.hasAttribute('data-visual-image')){e.preventDefault();visualSyncDom();visualUploadTarget=t.dataset.visualImage;document.getElementById('visual-upload')?.click();return}
 if(t.hasAttribute('data-visual-video-file')){e.preventDefault();visualSyncDom();visualUploadTarget=t.dataset.visualVideoFile;document.getElementById('visual-video-upload')?.click();return}
 if(t.hasAttribute('data-visual-move')){
   e.preventDefault();visualSyncDom();const id=t.dataset.bid,arr=visualDraft.sections;const i=arr.findIndex(b=>b.id===id),j=t.dataset.visualMove==='up'?i-1:i+1;
   if(i<0||j<0||j>=arr.length)return;[arr[i],arr[j]]=[arr[j],arr[i]];visualDirty=true;visualRerender(id);return;
 }
 if(t.hasAttribute('data-visual-flip')){
   e.preventDefault();visualSyncDom();const b=visualDraft.sections.find(b=>b.id===t.dataset.visualFlip);if(!b)return;b.side=b.side==='right'?'left':'right';visualDirty=true;visualRerender(b.id);return;
 }
 if(t.hasAttribute('data-visual-delete')){
   e.preventDefault();visualSyncDom();if(visualDraft.sections.length===1){toast('ต้องเหลือเนื้อหาอย่างน้อยหนึ่งส่วน');return}
   const id=t.dataset.visualDelete;if(!confirm('ต้องการลบส่วนนี้ออกจากหน้าเว็บหรือไม่?'))return;
   visualDraft.sections=visualDraft.sections.filter(b=>b.id!==id);visualDirty=true;visualRerender();return;
 }
}
document.addEventListener('click',visualButtonClick);
document.addEventListener('input',e=>{if(e.target.closest('[data-block-id][contenteditable], [data-visual-page-field][contenteditable], [data-visual-link-url], [data-visual-link-label]'))visualDirty=true});
document.addEventListener('paste',e=>{if(!e.target.closest('[contenteditable][data-block-id], [contenteditable][data-visual-page-field]'))return;e.preventDefault();const text=e.clipboardData.getData('text/plain');document.execCommand('insertText',false,text)});
document.addEventListener('change',e=>{
 if(e.target.id==='visual-upload'&&e.target.files[0]){visualReadFile(e.target.files[0],visualUploadTarget);e.target.value=''}
 if(e.target.id==='visual-video-upload'&&e.target.files[0]){visualReadVideo(e.target.files[0],visualUploadTarget);e.target.value=''}
 if(e.target.matches('input[data-visual-video-url]')){
   const input=e.target;const raw=input.value.trim();
   if(raw&&!videoParse(raw)){toast('โปรดใช้ลิงก์ HTTPS ของไฟล์วิดีโอ หรือ YouTube ที่ถูกต้อง');return}
   visualSyncDom();const b=visualDraft?.sections.find(b=>b.id===input.dataset.visualVideoUrl);
   if(!b)return;if(!raw&&String(b.videoUrl||'').startsWith('localvideo:'))return;
   b.videoUrl=raw;visualDirty=true;visualRerender(b.id);toast('เปลี่ยนลิงก์วิดีโอแล้ว กรุณากดบันทึก');return;
 }
 if(e.target.matches('input[data-visual-video-loop]')){
   visualSyncDom();const b=visualDraft?.sections.find(b=>b.id===e.target.dataset.visualVideoLoop);
   if(!b)return;b.videoLoop=e.target.checked;visualDirty=true;visualRerender(b.id);return;
 }
 if(e.target.matches('select[data-visual-layout]')){visualSyncDom();const b=visualDraft?.sections.find(b=>b.id===e.target.dataset.visualLayout);if(!b)return;b.side=e.target.value;visualDirty=true;visualRerender(b.id);return}
 if(e.target.matches('select[data-visual-link-mode]')){visualSyncDom();visualDirty=true;return}
 if(e.target.matches('input[data-visual-link-url]')&&e.target.value.trim()&&!safeContentUrl(e.target.value)){toast('ใช้ลิงก์ https:// หรือ #/ ของเว็บไซต์เท่านั้น');return}
 if(e.target.matches('select[data-visual-size]')){visualSyncDom();const b=visualDraft?.sections.find(b=>b.id===e.target.dataset.visualSize);if(!b)return;b.size=e.target.value;visualDirty=true;visualRerender(b.id)}
});

document.addEventListener('submit',async e=>{if(e.target.id==='login-form'){e.preventDefault();const id=$('#login-group').value,pin=$('#login-pin').value;if(GAS){if(!pin.trim()){toast('กรุณากรอกรหัสประจำกลุ่ม');return}try{const r=await gsCall('verifyGroup',id,pin);if(!r?.ok)throw Error(r?.message||'รหัสไม่ถูกต้อง');loggedGroup=id;loginCode=pin;editorStatus='';enterVisualEditor(id);toast('เข้าสู่โหมดแก้ไขหน้าเว็บจริงแล้ว')}catch(err){toast('เข้าสู่ระบบไม่ได้: '+err.message)}}}if(e.target.id==='editor-form'){e.preventDefault();await saveGroup(e.target)}});
document.addEventListener('click',e=>{if(e.target.closest('#logout-btn')){loggedGroup=null;loginCode='';editorStatus='';render()}});
document.addEventListener('change',e=>{if(e.target.id==='image-file'&&e.target.files[0])processImage(e.target.files[0]);if(e.target.id==='image-url'){$('#editor-image-preview').src=imgUrl(e.target.value)}});

/* Homepage visual editor — accessible only under /edit/ after group home PIN. */
const HOME_DEFAULTS={
 title:'เรียนรู้ศาสตร์พระราชา\nผ่านการลงมือทำจริง',
 intro:'สำรวจ 4 ฐานองค์ความรู้ เชื่อมโยงหลักการทรงงาน 27 ข้อ พร้อมบทความให้ผู้เยี่ยมชมศึกษารายละเอียดของแต่ละฐานได้ทันที',
 storyTitle:'ไม่ใช่แค่การปลูกพืช\nแต่คือการปลูกวิธีคิด',
 storyText:'ศูนย์การเรียนรู้เชื่อมกิจกรรมทั้ง 4 ฐานเข้าด้วยกัน ตั้งแต่การปลูกพืช การผลิตปุ๋ยอินทรีย์ ไปจนถึงการจัดการน้ำและสัตว์น้ำ เพื่อให้ผู้เยี่ยมชมมองเห็นความสัมพันธ์ของทรัพยากรในระบบเดียวกัน',
 banner:'/assets/photo-05-e392f0ad13.png',storyImage:PHOTO.vegetables,bannerLink:'',storyImageLink:'',sections:[]
};
let homeData=structuredClone(HOME_DEFAULTS);
const homeEditable=()=>IS_EDITOR&&route()[0]==='home-edit'&&loggedGroup==='home';
function mediaUrl(value,fallback){const s=String(value||fallback||'');return imgUrl(s)||imgUrl(fallback)||''}
function homeSectionsHtml(){
 const editing=homeEditable();
 const rows=(Array.isArray(homeData.sections)?homeData.sections:[]).map((s,i)=>{
  const fields=`data-home-id="${esc(s.id)}"`;
  const layout=['left','right','center'].includes(s.layout)?s.layout:(i%2?'right':'left');
  const reverse=layout==='right'?' reverse':layout==='center'?' centered':'';
  let visual='';
  if(s.kind==='video'){
    const parsed=videoParse(s.media||'');
    if(parsed?.type==='youtube')visual=`<iframe src="https://www.youtube-nocookie.com/embed/${parsed.id}?autoplay=1&mute=1&loop=1&playlist=${parsed.id}&playsinline=1" title="${esc(s.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    else if(parsed?.type==='file')visual=`<video src="${esc(parsed.url)}" muted autoplay loop playsinline controls preload="metadata"></video>`;
  } else if(s.kind==='image'){
    const im=`<img src="${mediaUrl(s.media,PHOTO.herbs)}" alt="${esc(s.title)}" loading="lazy">`;
    const url=safeContentUrl(s.linkUrl);
    visual=!editing&&url&&['image','both'].includes(contentLinkMode(s))?`<a class="home-custom-image-link" ${contentLinkAttrs(url)} aria-label="เปิดลิงก์ภาพ ${esc(s.title)}">${im}</a>`:im;
  }
  return `<section class="home-custom-row${reverse}" ${fields}>
    ${editing?`<div class="home-row-controls">
       <button type="button" data-home-move="up" ${i===0?'disabled':''}>↑ ขึ้น</button>
       <button type="button" data-home-move="down" ${i===(homeData.sections.length-1)?'disabled':''}>↓ ลง</button>
       <label class="home-control-layout">จัดวาง
         <select data-home-layout aria-label="จัดวางส่วนเนื้อหา">
           <option value="left" ${layout==='left'?'selected':''}>ภาพซ้าย</option>
           <option value="right" ${layout==='right'?'selected':''}>ภาพขวา</option>
           <option value="center" ${layout==='center'?'selected':''}>กึ่งกลาง</option>
         </select>
       </label>
       <button type="button" data-home-remove>ลบส่วน</button>
       <button type="button" data-home-media>เปลี่ยนภาพ/วิดีโอ</button>
     </div>`:''}
    ${visual?`<div class="home-custom-media">${visual}</div>`:''}
    <div class="home-custom-copy"><span class="eyebrow accent">องค์ความรู้ของเรา</span><h2 ${editing?'contenteditable="true" data-home-section-field="title"':''}>${esc(s.title||'')}</h2><p ${editing?'contenteditable="true" data-home-section-field="text"':''}>${esc(s.text||'').replace(/\n/g,'<br>')}</p>
       ${contentLinkButton(s,'home-link-button')}
       ${editing?`<div class="home-link-settings">
         <strong>🔗 ลิงก์สำหรับส่วนนี้</strong>
         <label>URL เว็บไซต์ปลายทาง (https://) หรือหน้าในเว็บ (#/station/herbs)
           <input data-home-link-url type="url" inputmode="url" value="${esc(s.linkUrl||'')}" placeholder="https://example.com">
         </label>
         <div class="home-link-two">
           <label>รูปแบบลิงก์ <select data-home-link-mode>
             <option value="both" ${contentLinkMode(s)==='both'?'selected':''}>ภาพและปุ่ม</option>
             <option value="image" ${contentLinkMode(s)==='image'?'selected':''}>เฉพาะภาพ</option>
             <option value="button" ${contentLinkMode(s)==='button'?'selected':''}>เฉพาะปุ่ม</option>
           </select></label>
           <label>ข้อความบนปุ่ม
             <input data-home-link-label type="text" maxlength="100" value="${esc(s.linkLabel||'')}" placeholder="อ่านรายละเอียดเพิ่มเติม">
           </label>
         </div>
       </div>`:''}</div>
   </section>`;
 }).join('');
 return rows?`<section class="home-custom-sections"><div class="container">${rows}</div></section>`:'';
}
function home(){
 let h=legacyHome();
 const fields=[
 ['<h1>เรียนรู้ศาสตร์พระราชา<br>ผ่านการลงมือทำจริง</h1>','h1','title'],
 ['<p>สำรวจ 4 ฐานองค์ความรู้ เชื่อมโยงหลักการทรงงาน 27 ข้อ พร้อมบทความให้ผู้เยี่ยมชมศึกษารายละเอียดของแต่ละฐานได้ทันที</p>','p','intro'],
 ['<h2 class="story-heading">ไม่ใช่แค่การปลูกพืช<br>แต่คือการปลูกวิธีคิด</h2>','h2','storyTitle',' class="story-heading"'],
 ['<p class="story-p">ศูนย์การเรียนรู้เชื่อมกิจกรรมทั้ง 4 ฐานเข้าด้วยกัน ตั้งแต่การปลูกพืช การผลิตปุ๋ยอินทรีย์ ไปจนถึงการจัดการน้ำและสัตว์น้ำ เพื่อให้ผู้เยี่ยมชมมองเห็นความสัมพันธ์ของทรัพยากรในระบบเดียวกัน</p>','p','storyText',' class="story-p"']
 ];
 for(const [find,tag,key,cls=''] of fields){
  const content=esc(String(homeData[key]||HOME_DEFAULTS[key])).replace(/\n/g,'<br>');
  const attr=homeEditable()?` contenteditable="true" data-home-field="${key}" spellcheck="true" title="คลิกเพื่อแก้ไขข้อความ"`:'';
  h=h.replace(find,`<${tag}${cls}${attr}>${content}</${tag}>`);
 }
 h=h.replace('class="banner-picture" src="/assets/photo-05-e392f0ad13.png"',`class="banner-picture" src="${mediaUrl(homeData.banner,HOME_DEFAULTS.banner)}"`);
 h=h.replace(`class="story-photo" src="${imgUrl(PHOTO.vegetables)}"`,`class="story-photo" src="${mediaUrl(homeData.storyImage,PHOTO.vegetables)}"`);
 // Existing landing banner and story image can also open a configured website.
 if(!homeEditable()){
  for(const [cls,key] of [['banner-picture','bannerLink'],['story-photo','storyImageLink']]){
    const dest=safeContentUrl(homeData[key]);
    if(dest){
      const pattern=new RegExp('<img class="'+cls+'"[^>]*>');
      h=h.replace(pattern,match=>`<a class="home-main-image-link" ${contentLinkAttrs(dest)} aria-label="เปิดลิงก์ภาพศูนย์การเรียนรู้">${match}</a>`);
    }
  }
 }
 return h.replace('</main>',homeSectionsHtml()+'</main>');
}
function homeEditPage(){
 if(loggedGroup!=='home')return `<main class="view"><section class="section"><div class="container home-login"><h1>เข้าสู่ระบบแก้ไขหน้าแรก</h1><p>ใช้รหัสผ่านผู้ดูแลหน้าแรก ข้อมูลที่บันทึกจะปรากฏบนเว็บไซต์จริงเมื่อเชื่อม Google Sheets แล้ว</p><form id="home-login-form"><label>รหัสผ่านผู้ดูแลหน้าแรก <input id="home-pin" type="password" required minlength="5" autocomplete="current-password"></label><button class="btn btn-dark" type="submit">เข้าสู่ระบบ</button></form><p><a href="#/editor">ไปหน้าแก้ไขข้อมูล 4 ฐาน</a></p></div></section></main>`;
 return `<div class="home-admin-bar"><span>กำลังแก้ไขหน้าแรก · กดข้อความเพื่อแก้ไข / กดภาพเพื่อเปลี่ยน</span><button class="btn btn-lime btn-sm" id="home-add-image">＋ ภาพและข้อความ</button><button class="btn btn-lime btn-sm" id="home-add-video">＋ วิดีโอ</button><button class="btn btn-outline btn-sm" id="home-banner-link">🔗 ลิงก์แบนเนอร์</button><button class="btn btn-outline btn-sm" id="home-story-link">🔗 ลิงก์ภาพหลัก</button><button class="btn btn-dark btn-sm" id="home-save">✓ บันทึกหน้าแรก</button><button class="btn btn-outline btn-sm" id="home-logout">ออกจากระบบ</button><input type="file" id="home-media-file" accept="image/jpeg,image/png,image/webp" hidden></div>`+home();
}
function homeMount(){if(!homeEditable())return;
 document.querySelectorAll('[data-home-field],[data-home-section-field]').forEach(e=>e.classList.add('home-content-editable'));
 for(const el of document.querySelectorAll('.banner-picture,.story-photo')){el.title='คลิกเพื่อเปลี่ยนภาพ';el.classList.add('home-edit-image')}
}
function homeSync(){
 for(const e of document.querySelectorAll('[data-home-field]'))homeData[e.dataset.homeField]=String(e.innerText||'').slice(0,5000);
 for(const e of document.querySelectorAll('[data-home-section-field]')){const parent=e.closest('[data-home-id]');const item=homeData.sections.find(v=>v.id===parent?.dataset.homeId);if(item)item[e.dataset.homeSectionField]=String(e.innerText||'').slice(0,10000)}
 for(const field of ['linkUrl','linkLabel','linkMode','layout']){
  const selector={'linkUrl':'data-home-link-url','linkLabel':'data-home-link-label','linkMode':'data-home-link-mode','layout':'data-home-layout'}[field];
  for(const el of document.querySelectorAll('['+selector+']')){
   const item=homeData.sections.find(v=>v.id===el.closest('[data-home-id]')?.dataset.homeId);
   if(item)item[field]=String(el.value||'').trim().slice(0,field==='linkUrl'?1600:field==='linkLabel'?100:16);
  }
 }
}
async function homeSave(){
 if(!homeEditable())return;homeSync();
 const urls=[homeData.bannerLink,homeData.storyImageLink,...(homeData.sections||[]).map(s=>s.linkUrl)];
 if(urls.some(u=>u&&!safeContentUrl(u))){toast('ลิงก์ต้องเป็น HTTPS หรือหน้าในเว็บที่ขึ้นต้นด้วย #/');return}
 const b=$('#home-save');if(b)b.disabled=true;
 try{await gsCall('saveHomePage','home',loginCode,homeData);toast('บันทึกหน้าแรกแล้ว ข้อมูลใหม่พร้อมแสดงบนเว็บสาธารณะ')}catch(e){toast('บันทึกหน้าแรกไม่สำเร็จ: '+e.message)}finally{if(b)b.disabled=false}
}
let homeImageTarget='banner';
async function homeUpload(file){
 if(!homeEditable()||!file)return;
 if(!/^image\/(jpeg|png|webp)$/.test(file.type)){toast('รองรับ JPG PNG WEBP');return}
 if(file.size>10*1024*1024){toast('ภาพต้องไม่เกิน 10 MB');return}
 try{
  const im=await createImageBitmap(file),max=1350,scale=Math.min(1,max/Math.max(im.width,im.height));
  const cv=document.createElement('canvas');cv.width=Math.round(im.width*scale);cv.height=Math.round(im.height*scale);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);im.close?.();
  const data=cv.toDataURL('image/jpeg',.76).split(',')[1];
  const r=await gsCall('uploadGroupImage','home',loginCode,data,'image/jpeg');
  if(homeImageTarget==='banner'||homeImageTarget==='storyImage')homeData[homeImageTarget]=r.url;
  else{const item=homeData.sections.find(v=>v.id===homeImageTarget);if(item){item.media=r.url;item.kind='image'}}
  toast('เปลี่ยนภาพสำเร็จ กดบันทึกหน้าแรกเพื่อเผยแพร่');render();
 }catch(e){toast('อัปโหลดไม่สำเร็จ: '+e.message)}
}
document.addEventListener('submit',async e=>{
 if(e.target.id!=='home-login-form')return;
 e.preventDefault();const pin=$('#home-pin')?.value||'';
 try{await gsCall('verifyGroup','home',pin);loggedGroup='home';loginCode=pin;render()}catch(err){toast('เข้าระบบไม่ได้: '+err.message)}
});
document.addEventListener('click',async e=>{
 if(!homeEditable())return;
 const t=e.target,sec=t.closest('[data-home-id]');
 if(t.closest('#home-save'))return homeSave();
 if(t.closest('#home-logout')){loggedGroup=null;loginCode='';render();return}
 if(t.closest('#home-banner-link')||t.closest('#home-story-link')){
  homeSync();const key=t.closest('#home-banner-link')?'bannerLink':'storyImageLink';
  const url=prompt('ใส่ลิงก์ HTTPS ของภาพนี้ (เว้นว่างเพื่อลบลิงก์)',homeData[key]||'');
  if(url!==null){if(url.trim()&&!safeContentUrl(url)){toast('กรุณาใช้ลิงก์ HTTPS หรือ #/ ของเว็บไซต์');return}
    homeData[key]=url.trim();toast('แก้ลิงก์แล้ว กรุณากดบันทึกหน้าแรก');}
  return;
 }
 if(t.closest('#home-add-image')||t.closest('#home-add-video')){
  homeSync();const video=!!t.closest('#home-add-video');
  homeData.sections.push({id:'home-'+Date.now().toString(36),kind:video?'video':'image',title:video?'วิดีโอการเรียนรู้':'หัวข้อใหม่',text:'คลิกที่นี่เพื่อใส่รายละเอียด',media:video?'':PHOTO.herbs,linkUrl:'',linkLabel:'',linkMode:video?'button':'both',layout:homeData.sections.length%2?'right':'left'});
  render();return;
 }
 if(t.closest('[data-home-remove]')&&sec){homeSync();homeData.sections=homeData.sections.filter(x=>x.id!==sec.dataset.homeId);render();return}
 if(t.closest('[data-home-move]')&&sec){
  homeSync();const i=homeData.sections.findIndex(x=>x.id===sec.dataset.homeId),j=i+(t.closest('[data-home-move]').dataset.homeMove==='up'?-1:1);
  if(i>=0&&j>=0&&j<homeData.sections.length){[homeData.sections[i],homeData.sections[j]]=[homeData.sections[j],homeData.sections[i]];render()}return;
 }
 if(t.closest('[data-home-media]')&&sec){
  homeSync();const item=homeData.sections.find(x=>x.id===sec.dataset.homeId);
  if(item?.kind==='video'){const url=prompt('กรอกลิงก์ HTTPS ของวิดีโอ (YouTube หรือ MP4)',item.media||'');if(url!==null){if(url&&!videoParse(url)){toast('ลิงก์ไม่ถูกต้อง');return}item.media=url;render()}}
  else{homeImageTarget=sec.dataset.homeId;$('#home-media-file')?.click()}return;
 }
 if(t.matches('.banner-picture,.story-photo')){homeSync();homeImageTarget=t.matches('.banner-picture')?'banner':'storyImage';$('#home-media-file')?.click();return}
});
document.addEventListener('change',e=>{
 if(e.target.id==='home-media-file'&&e.target.files?.[0]){homeUpload(e.target.files[0]);e.target.value='';return}
 if(e.target.matches('[data-home-layout]')&&homeEditable()){homeSync();render();return}
 if(e.target.matches('[data-home-link-url]')&&e.target.value.trim()&&!safeContentUrl(e.target.value))toast('กรุณาใช้ HTTPS หรือ #/ ของเว็บไซต์');
});
window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'})});
if(IS_EDITOR&&!location.hash)location.hash="#/editor";render();hydrateServer();

