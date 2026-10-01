/**
 * Model catalog copy, Thai. Keys match ./en.ts and src/data/models.ts.
 */
import type { ModelsCopy } from './en';

const copy: ModelsCopy = {
	models: {
		'claude-fable-5-1': {
			summary: 'โมเดลที่ทรงพลังที่สุดของ Anthropic ที่เปิดให้ใช้งานทั่วไป สร้างมาเพื่อการใช้เหตุผลที่ซับซ้อนและงานเอเจนต์ที่ทำงานต่อเนื่องยาวนาน',
			strengths: ['เซสชันเอเจนต์ที่ทำงานได้หลายชั่วโมง', 'การค้นคว้าหลายขั้นตอน', 'งานเอกสาร สเปรดชีต และสไลด์', 'context 1M โทเค็น พร้อมเอาต์พุต 128K'],
			bestFor: ['เอเจนต์ที่ทำงานระยะยาว', 'การค้นคว้าเชิงลึก', 'การวิเคราะห์จนได้เอกสารฉบับสมบูรณ์'],
		},
		'claude-opus-5-5': {
			summary: 'ค่าเริ่มต้นที่ Anthropic แนะนำสำหรับงานที่ต้องการความสามารถสูง: การเขียนโค้ดแบบเอเจนต์ที่ทำงานยาวนานและงานด้านความรู้ โดยเปิด adaptive thinking ไว้เสมอ',
			strengths: ['เอเจนต์เขียนโค้ดอัตโนมัติที่ทำงานได้หลายชั่วโมง', 'การ refactor ขนาดใหญ่', 'เวิร์กโฟลว์ที่พึ่งพาการมองเห็นและการใช้คอมพิวเตอร์', 'context 1M โทเค็น พร้อมเอาต์พุต 128K'],
			bestFor: ['การเขียนโค้ดแบบเอเจนต์ที่ซับซ้อน', 'งานด้านความรู้ระดับองค์กร', 'วิศวกรรมระบบ'],
		},
		'claude-sonnet-5-5': {
			summary: 'สมดุลระหว่างความเร็วและความฉลาดของ Anthropic สำหรับงานเขียนโค้ด งานเอเจนต์ และงานองค์กรในชีวิตประจำวัน โดยเปิด adaptive thinking เป็นค่าเริ่มต้น',
			strengths: ['ตอบสนองรวดเร็ว', 'context 1M โทเค็น พร้อมเอาต์พุต 128K', 'จำกัดการคิดไว้เฉพาะระหว่างการเรียกเครื่องมือได้', 'ใช้เครื่องมือได้อย่างน่าเชื่อถือ'],
			bestFor: ['การสร้างโค้ด', 'การวิเคราะห์ข้อมูล', 'การสร้างเนื้อหา', 'เอเจนต์ที่ใช้เครื่องมือ'],
		},
		'claude-haiku-4-5': {
			summary: 'โมเดลปัจจุบันที่เร็วที่สุดและต้นทุนต่ำที่สุดของ Anthropic มี context window 200K และ extended thinking ให้เลือกใช้',
			strengths: ['latency ต่ำที่สุดในกลุ่ม Claude', 'extended thinking พร้อมงบโทเค็น', 'อินพุตข้อความและรูปภาพ', 'เหมาะอย่างยิ่งกับงานของ sub-agent'],
			bestFor: ['แอปพลิเคชันแบบเรียลไทม์', 'การประมวลผลปริมาณมาก', 'ชั้นแรกของ cascade'],
		},
		'gpt-6': {
			summary: 'ตระกูลโมเดลการใช้เหตุผลปัจจุบันของ OpenAI มีสามระดับ: Astra สำหรับงานที่ยากที่สุด, Sol ให้ผลใกล้ Astra ด้วยต้นทุนต่ำกว่า และ Luna สำหรับงานปริมาณมาก',
			strengths: ['context 1.05M โทเค็นและเอาต์พุต 128K ทุกระดับ', 'function calling และ structured outputs', 'reasoning effort สูงสุดถึง max', 'อินพุตข้อความและรูปภาพ'],
			bestFor: ['Astra: การใช้เหตุผลและการค้นคว้าที่ซับซ้อน', 'Sol: การเขียนโค้ดที่ซับซ้อนและงานมืออาชีพ', 'Luna: งานเฉพาะด้านปริมาณมาก'],
		},
		'gpt-5-6': {
			summary: 'รุ่นก่อนหน้าของ OpenAI ที่เปิดตัวระดับ Sol, Terra และ Luna: รุ่นเรือธง รุ่นสมดุล และรุ่นต้นทุนต่ำที่สุด',
			strengths: ['context 1.05M โทเค็นและเอาต์พุต 128K', 'reasoning effort ตั้งแต่ none ถึง max', 'อินพุตข้อความและรูปภาพ'],
			bestFor: ['Sol: งานมืออาชีพที่ซับซ้อน', 'Terra: สมดุลระหว่างความสามารถและต้นทุน', 'Luna: งานปริมาณมากที่อ่อนไหวต่อต้นทุน'],
		},
		'gpt-oss': {
			summary: 'โมเดลการใช้เหตุผลแบบ mixture-of-experts แบบ open-weight ของ OpenAI ภายใต้ Apache 2.0: รุ่น 120b ใส่ได้ใน GPU 80 GB ตัวเดียว รุ่น 20b รันบนอุปกรณ์ 16 GB',
			strengths: ['สัญญาอนุญาต Apache 2.0', 'function calling และ structured outputs', 'ปรับ reasoning effort ได้', 'fine-tune ได้'],
			bestFor: ['การติดตั้งแบบโฮสต์เองและ on-premises', 'inference ที่รวดเร็วบน Groq', 'เอเจนต์ที่ใช้เครื่องมือ'],
		},
		'gemini-3-8-flash': {
			summary: 'โมเดล Flash ปัจจุบันของ Google ที่เปิดให้ใช้งานทั่วไป มุ่งเน้นงานวิศวกรรมระยะยาว เอเจนต์อัตโนมัติ และเวิร์กโฟลว์องค์กร ด้วยความเร็วและต้นทุนระดับ Flash',
			strengths: ['อินพุตข้อความ รูปภาพ วิดีโอ เสียง และ PDF', 'function calling และ structured outputs', 'ระดับการคิด low, medium และ high', 'context 1M โทเค็น'],
			bestFor: ['เอเจนต์อัตโนมัติ', 'เวิร์กโฟลว์องค์กร', 'เอกสารหลายรูปแบบ'],
		},
		'gemini-3-1-pro': {
			summary: 'โมเดล Pro ปัจจุบันของ Google ในสถานะ preview บน Gemini API ปรับแต่งสำหรับการใช้เหตุผลที่ซับซ้อน วิศวกรรมซอฟต์แวร์ และการใช้เครื่องมือหลายขั้นตอนอย่างแม่นยำ',
			strengths: ['อินพุตข้อความ รูปภาพ วิดีโอ เสียง และ PDF', 'การคิดที่มีประสิทธิภาพ', 'เรียกใช้เครื่องมือหลายขั้นตอนได้อย่างน่าเชื่อถือ', 'context 1M โทเค็น'],
			bestFor: ['การแก้ปัญหาที่ซับซ้อน', 'การเขียนโค้ดแบบเอเจนต์', 'ความเข้าใจหลายรูปแบบ'],
		},
		'gemini-3-5-flash-lite': {
			summary: 'โมเดล 3.5 ของ Google ที่ต้นทุนและ latency ต่ำที่สุด สร้างมาเพื่องาน sub-agent ปริมาณสูง การแยกวิเคราะห์เอกสาร และการดึงข้อมูลแบบง่าย',
			strengths: ['latency และต้นทุนต่ำ', 'อินพุตข้อความ รูปภาพ วิดีโอ เสียง และ PDF', 'function calling และการคิด', 'context 1M โทเค็น'],
			bestFor: ['sub-agent ปริมาณมาก', 'การแยกวิเคราะห์และดึงข้อมูลจากเอกสาร', 'การแปลภาษา'],
		},
		gemma: {
			summary: 'ตระกูลโมเดล open-weight ของ Google ตั้งแต่โมเดลขนาดสำหรับ edge ไปจนถึงโมเดล dense 31B และโมเดล mixture-of-experts 26B ใน Gemma 4',
			strengths: ['open weights โดย Gemma 4 อยู่ภายใต้ Apache 2.0', 'function calling สำหรับเอเจนต์', 'อินพุตรูปภาพในทุกขนาด', 'รันบนฮาร์ดแวร์ทั่วไปได้'],
			bestFor: ['การติดตั้งบนอุปกรณ์และ edge', 'เอเจนต์แบบโฮสต์เอง', 'การตอบคำถามและการสรุป'],
		},
		'grok-4-7': {
			summary: 'โมเดลระดับแนวหน้าของ xAI สำหรับการเขียนโค้ด งานแบบเอเจนต์ และงานด้านความรู้ รองรับอินพุตข้อความและรูปภาพ พร้อมเลือก reasoning effort ได้',
			strengths: ['context 500K โทเค็น', 'function calling และ structured outputs', 'reasoning effort ตั้งแต่ low ถึง xhigh', 'endpoint สำหรับเก็บข้อมูลในสหรัฐอเมริกา'],
			bestFor: ['วิศวกรรมซอฟต์แวร์', 'งานแบบเอเจนต์ที่ยาวนาน', 'งานด้านความรู้ระดับมืออาชีพ'],
		},
		'deepseek-flash': {
			summary: 'โมเดล Flash ปัจจุบันของ DeepSeek ที่เข้าใจรูปภาพได้ในตัว มี context 1M โทเค็น และเปิดการคิดเป็นค่าเริ่มต้น โดย weights อยู่ภายใต้สัญญาอนุญาต MIT',
			strengths: ['context 1M โทเค็น เอาต์พุตสูงสุด 384K', 'การเรียกเครื่องมือและเอาต์พุต JSON', 'อินพุตรูปภาพและข้อความ', 'open weights ภายใต้ MIT'],
			bestFor: ['เอเจนต์ที่คุ้มค่าต้นทุน', 'เอเจนต์เขียนโค้ด', 'เวิร์กโหลดยาวที่มีอินพุตมาก'],
		},
		'deepseek-v4-pro': {
			summary: 'โมเดล V4 Pro ขนาดใหญ่ของ DeepSeek: รองรับเฉพาะข้อความผ่าน API มี context 1M โทเค็น การเรียกเครื่องมือ และเลือกระดับการคิดได้ โดย weights อยู่ภายใต้สัญญาอนุญาต MIT',
			strengths: ['context 1M โทเค็น เอาต์พุตสูงสุด 384K', 'ระดับการคิด low, high หรือ max', 'การเรียกเครื่องมือและเอาต์พุต JSON', 'open weights ภายใต้ MIT'],
			bestFor: ['เอเจนต์เขียนโค้ด', 'การใช้เครื่องมือและระบบอัตโนมัติของงาน'],
		},
		'deepseek-r1-distill': {
			summary: 'โมเดลการใช้เหตุผลแบบเปิดขนาดเล็ก: Qwen3-8B ที่ฝึกด้วย chain of thought ของ DeepSeek-R1 สำหรับใช้งานในเครื่อง',
			strengths: ['การใช้เหตุผลทีละขั้นตอน', 'เก่งคณิตศาสตร์เมื่อเทียบกับขนาด', 'weights ภายใต้สัญญาอนุญาต MIT'],
			bestFor: ['งานใช้เหตุผลในเครื่อง', 'คณิตศาสตร์และตรรกะ', 'การทดลองแบบออฟไลน์'],
		},
		'kimi-k3': {
			summary: 'โมเดลเรือธงของ Moonshot AI มี context 1M โทเค็น เข้าใจรูปภาพและวิดีโอได้ในตัว และเปิดการคิดไว้เสมอ โดยเผยแพร่ weights แล้ว',
			strengths: ['context 1M โทเค็น', 'อินพุตข้อความ รูปภาพ และวิดีโอ', 'การเรียกใช้เครื่องมือ', 'เผยแพร่ weights แล้ว'],
			bestFor: ['การเขียนโค้ดระยะยาว', 'งานด้านความรู้', 'การใช้เหตุผลเชิงลึกและเวิร์กโฟลว์เอเจนต์'],
		},
		'kimi-k2-7-code': {
			summary: 'โมเดลเขียนโค้ดเฉพาะทางของ Moonshot AI มี context 256K เปิดการคิดไว้เสมอ รองรับการเรียกใช้เครื่องมือ และมีรุ่นความเร็วสูงแยกต่างหาก',
			strengths: ['context 256K โทเค็น', 'อินพุตข้อความ รูปภาพ และวิดีโอ', 'การเรียกใช้เครื่องมือหลายขั้นตอน', 'รุ่นความเร็วสูงราว 180 โทเค็นต่อวินาที'],
			bestFor: ['งานเขียนโค้ดที่ยาวนาน', 'การเขียนโค้ดแบบเอเจนต์', 'คณิตศาสตร์และการใช้เหตุผล'],
		},
		'qwen-3-8': {
			summary: 'สาย Qwen 3.8 ของ Alibaba: Max คือรุ่นเรือธง และทั้ง Max และ Flash มี context 1M โทเค็น อินพุตรูปภาพและวิดีโอ และการคิดแบบไฮบริด',
			strengths: ['context 1M โทเค็น เอาต์พุต 131K', 'อินพุตข้อความ รูปภาพ และวิดีโอ', 'function calling และ structured outputs', 'มี region ในแฟรงก์เฟิร์ตและเวอร์จิเนีย'],
			bestFor: ['การเขียนโค้ดระยะยาว', 'งานมืออาชีพด้านกฎหมาย การเงิน และการออกแบบ', 'เอเจนต์หลายรูปแบบ'],
		},
		'qwen-3-7-plus': {
			summary: 'Qwen 3.7 Plus และ Flash มี context 1M โทเค็น อินพุตรูปภาพและวิดีโอ การคิดแบบไฮบริด และ function calling สำหรับงานเอเจนต์หลายรูปแบบ',
			strengths: ['context 1M โทเค็น เอาต์พุต 131K', 'อินพุตข้อความ รูปภาพ และวิดีโอ', 'function calling', 'เข้าใจหน้าจอและ GUI (Plus)'],
			bestFor: ['เอเจนต์หลายรูปแบบ', 'การสร้างโค้ดจากภาพ', 'เอเจนต์ค้นหา (Flash)'],
		},
		'glm-5-3': {
			summary: 'โมเดลเรือธงของ Z.ai สำหรับวิศวกรรมซอฟต์แวร์และงานเอเจนต์ มี context 1M โทเค็น เอาต์พุตสูงสุด 128K และเผยแพร่ weights แล้ว โดยรุ่น Flash เพิ่มอินพุตรูปภาพและวิดีโอ',
			strengths: ['context 1M โทเค็น เอาต์พุต 128K', 'function calling พร้อม tool streaming', 'ระดับการคิด low, high หรือ max', 'เผยแพร่ weights แล้ว'],
			bestFor: ['เอเจนต์เขียนโค้ด', 'งานแบบเอเจนต์ที่ยาวนาน', 'การตรวจสอบความปลอดภัยของโค้ด'],
		},
		'minimax-m3': {
			summary: 'โมเดลเขียนโค้ดและเอเจนต์แบบหลายรูปแบบในตัวของ MiniMax มี context สูงสุด 1M โทเค็น และการคิดสลับระหว่างการเรียกเครื่องมือ โดยเผยแพร่ weights แล้ว',
			strengths: ['context สูงสุด 1M โทเค็น (รับประกัน 512K)', 'การคิดระหว่างการเรียกเครื่องมือ', 'อินพุตข้อความ รูปภาพ และวิดีโอ', 'เผยแพร่ weights แล้ว'],
			bestFor: ['ผู้ช่วยเขียนโค้ด', 'งานเอเจนต์ยาวนานและระบบอัตโนมัติของเวิร์กโฟลว์', 'การวิเคราะห์วิดีโอขนาดยาว'],
		},
		'mistral-large': {
			summary: 'โมเดลเรือธงแบบ open-weight และ mixture-of-experts ของ Mistral (พารามิเตอร์ทำงาน 41B จากทั้งหมด 675B) เข้าใจรูปภาพได้ ภายใต้ Apache 2.0',
			strengths: ['สัญญาอนุญาต Apache 2.0', 'เข้าใจรูปภาพ', 'มากกว่า 40 ภาษา', 'function calling และ structured outputs'],
			bestFor: ['ผู้ช่วยหลายภาษา', 'การวิเคราะห์เอกสาร', 'เวิร์กโฟลว์ที่ใช้เครื่องมือ'],
		},
		'mistral-medium': {
			summary: 'โมเดล dense หลายรูปแบบขนาด 128B ที่รวมการทำตามคำสั่ง การใช้เหตุผล และการเขียนโค้ดไว้ด้วยกัน โดยกำหนด reasoning effort ได้ต่อคำขอ',
			strengths: ['reasoning effort ต่อคำขอ', 'สร้างมาเพื่อเอเจนต์และการเขียนโค้ด', 'function calling และเอาต์พุต JSON', 'โฮสต์เองได้บน GPU สี่ตัว'],
			bestFor: ['เวิร์กโฟลว์แบบเอเจนต์', 'เอเจนต์เขียนโค้ด', 'เอกสารขนาดยาว'],
		},
		'mistral-small': {
			summary: 'โมเดล open-weight แบบ mixture-of-experts (พารามิเตอร์ทำงานราว 6B) ที่รวม instruct, การใช้เหตุผล และการเขียนโค้ด พร้อมอินพุตรูปภาพ',
			strengths: ['instruct, การใช้เหตุผล และการเขียนโค้ดในโมเดลเดียว', 'การใช้เหตุผลที่เปิดใช้ได้', 'อินพุตรูปภาพ', 'สัญญาอนุญาต Apache 2.0'],
			bestFor: ['เอเจนต์ที่อ่อนไหวต่อต้นทุน', 'แชททั่วไปพร้อมการใช้เหตุผลแบบเลือกได้', 'การเข้าใจรูปภาพ'],
		},
		ministral: {
			summary: 'โมเดล open-weight ขนาดเล็กสามขนาด แต่ละขนาดมีรุ่น base, instruct และ reasoning พร้อมเข้าใจรูปภาพ สำหรับใช้งานในเครื่องและบน edge',
			strengths: ['สร้างมาเพื่อติดตั้งในเครื่อง', 'มีรุ่น reasoning ทุกขนาด', 'เข้าใจรูปภาพ', 'สัญญาอนุญาต Apache 2.0'],
			bestFor: ['การติดตั้งบน edge และ on-premises', 'งานต้นทุนต่ำปริมาณมาก', 'เอเจนต์ในเครื่อง'],
		},
		codestral: {
			summary: 'โมเดลเขียนโค้ดของ Mistral สำหรับงาน latency ต่ำที่เกิดขึ้นถี่ เช่น fill-in-the-middle และการสร้างโค้ด',
			strengths: ['Fill-in-the-middle', 'การเติมโค้ดแบบ latency ต่ำ', 'function calling', 'structured outputs'],
			bestFor: ['การเติมโค้ด', 'การสร้างโค้ด'],
		},
		'llama-4': {
			summary: 'โมเดล mixture-of-experts แบบหลายรูปแบบในตัวของ Meta ที่มีพารามิเตอร์ทำงาน 17B: Scout (รวม 109B) และ Maverick (รวม 400B)',
			strengths: ['อินพุตข้อความและรูปภาพ', 'ประสิทธิภาพแบบ mixture-of-experts', '12 ภาษา', 'context ยาว (1M สำหรับ Maverick บน Bedrock)'],
			bestFor: ['ผู้ช่วยหลายรูปแบบ', 'การใช้เหตุผลเชิงภาพ', 'เอกสารขนาดยาว'],
		},
		'llama-3-3-70b': {
			summary: 'โมเดลข้อความ 70B ของ Meta สำหรับบทสนทนาหลายภาษาในแปดภาษา พร้อมการใช้เครื่องมือ',
			strengths: ['แปดภาษา', 'การใช้เครื่องมือ', 'context 128K'],
			bestFor: ['แชททั่วไปแบบโฮสต์เอง', 'ผู้ช่วยหลายภาษา', 'การสร้างข้อมูลสังเคราะห์'],
		},
		'llama-3-2-1b': {
			summary: 'โมเดลหลายภาษาขนาด 1.2B พารามิเตอร์ สำหรับสภาพแวดล้อมที่มีทรัพยากรจำกัดและบนอุปกรณ์ มีขนาดเล็กพอที่จะรันภายใน JVM ของ EDDI',
			strengths: ['รันบน CPU ได้', 'context 128K', 'แปดภาษา'],
			bestFor: ['inference ภายในโปรเซสแบบออฟไลน์', 'การเขียนคำค้นและ prompt ใหม่', 'สรุปสั้นๆ'],
		},
		'amazon-nova': {
			summary: 'โมเดลหลายรูปแบบของ Amazon บน Bedrock ที่รับข้อความ รูปภาพ และวิดีโอ: Pro คือระดับสมดุล ส่วน Lite คือระดับต้นทุนต่ำ',
			strengths: ['อินพุตข้อความ รูปภาพ และวิดีโอ', 'context 300K โทเค็น', 'การใช้เครื่องมือ', 'prompt caching'],
			bestFor: ['ถามตอบจากเอกสารและภาพ', 'การเข้าใจวิดีโอ', 'เอเจนต์ที่อยู่ภายใน AWS'],
		},
		'cohere-command-a': {
			summary: 'โมเดลองค์กรขนาด 111B ของ Cohere ที่เน้นการใช้เครื่องมือ การดึงข้อมูล และ 23 ภาษา โดย Oracle มีรุ่น reasoning และ vision ด้วย',
			strengths: ['การใช้เครื่องมือหลายขั้นตอน', 'Retrieval-augmented generation', '23 ภาษา', 'context 256K โทเค็น'],
			bestFor: ['RAG ระดับองค์กร', 'เอเจนต์หลายภาษา', 'การติดตั้งบน Oracle Cloud'],
		},
		'phi-4-mini': {
			summary: 'โมเดลแบบเปิดขนาด 3.8B ของ Microsoft สำหรับงานที่หน่วยความจำจำกัดและอ่อนไหวต่อ latency รวมถึงการใช้เหตุผลด้านคณิตศาสตร์และตรรกะ',
			strengths: ['รันได้ในสภาพแวดล้อมที่มีทรัพยากรจำกัด', 'คณิตศาสตร์และตรรกะ', 'function calling', 'สัญญาอนุญาต MIT'],
			bestFor: ['inference ในเครื่องและบน edge', 'แอปที่อ่อนไหวต่อ latency', 'การเรียกเครื่องมือแบบเบา'],
		},
	},
	hosts: {
		bedrock: { name: 'Amazon Bedrock', summary: 'การเข้าถึงแบบจัดการบน AWS ไปยังโมเดลจาก Anthropic, Meta, Amazon, OpenAI, Mistral และอื่นๆ', why: ['ผู้ให้บริการไม่เห็น prompt หรือคำตอบของลูกค้า', 'เครือข่ายส่วนตัวผ่าน VPC และ PrivateLink', 'inference ภายใน region และข้าม region เพื่อการเก็บข้อมูลตามพื้นที่'] },
		vertex: { name: 'Google Vertex AI', summary: 'แพลตฟอร์ม AI ของ Google Cloud ซึ่งปัจจุบันเรียกอีกชื่อว่า Gemini Enterprise Agent Platform ให้บริการโมเดล Gemini และ Model Garden', why: ['endpoint ระดับภูมิภาคทำให้การประมวลผลอยู่ในเขตอำนาจเดียว', 'VPC Service Controls สำหรับแยกเครือข่าย', 'ยืนยันตัวตนผ่าน credential ของ Google Cloud'] },
		azure: { name: 'Azure OpenAI', summary: 'โมเดล OpenAI ที่โฮสต์ใน subscription Azure ของคุณ ปัจจุบันเป็นส่วนหนึ่งของ Microsoft Foundry และเรียกใช้ด้วยชื่อ deployment', why: ['deployment แบบ Data Zone ทำให้การประมวลผลอยู่ใน EU, US หรือ APAC', 'private endpoint บนเครือข่ายหลักของ Azure', 'provisioned throughput สำหรับความจุที่จองไว้'] },
		oracle: { name: 'Oracle OCI Generative AI', summary: 'บริการแบบจัดการบน Oracle Cloud สำหรับโมเดล Cohere, Meta Llama และอื่นๆ ทั้งแบบตามความต้องการหรือบนคลัสเตอร์เฉพาะ', why: ['คลัสเตอร์ AI เฉพาะ', 'private endpoint และการแยกข้อมูล', 'กำกับดูแลด้วยนโยบาย OCI IAM'] },
		groq: { name: 'Groq', summary: 'คลาวด์สำหรับ inference ที่รันโมเดลแบบเปิดบนชิป LPU ของ Groq เอง ผ่าน API ที่เข้ากันได้กับ OpenAI', why: ['latency ต่ำมาก', 'โมเดลแบบเปิดอย่าง gpt-oss และ Qwen', 'คีย์เดียว ไม่ต้องมีโครงสร้างพื้นฐาน'] },
		openrouter: { name: 'OpenRouter', summary: 'API เดียวสู่โมเดลหลายร้อยตัวจากผู้ให้บริการจำนวนมาก พร้อม auto router ที่เลือกโมเดลให้ในแต่ละคำขอ', why: ['คีย์เดียวสำหรับผู้ผลิตหลายราย', 'สลับไปยังผู้ให้บริการอื่นอัตโนมัติเมื่อเกิดปัญหา', 'openrouter/auto เลือกโมเดลให้แต่ละงาน'] },
		ollama: { name: 'Ollama', summary: 'รันโมเดลแบบเปิดบนฮาร์ดแวร์ของคุณเองผ่าน API ในเครื่อง และจะให้อยู่บนเครือข่าย Docker เดียวกับ EDDI ก็ได้', why: ['ไม่ต้องเชื่อมต่อคลาวด์', 'ข้อมูลไม่ออกจากเครื่องของคุณเลย', 'ดึงโมเดลได้ด้วยคำสั่งเดียว'] },
		huggingface: { name: 'Hugging Face', summary: 'inference แบบโฮสต์สำหรับโมเดลแบบเปิดตาม repository id กระจายไปยังผู้ให้บริการพันธมิตรภายใต้ token เดียว', why: ['โมเดลแบบเปิดตาม repository id', 'token เดียวใช้ได้กับทุกผู้ให้บริการ', 'ไม่มีโครงสร้างพื้นฐานให้ดูแล'] },
		jlama: { name: 'Jlama', summary: 'เอนจิน inference ที่เขียนด้วย Java ล้วน รันโมเดลขนาดเล็กภายใน JVM ของ EDDI โดยไม่ต้องมี model server เลย', why: ['ไม่ต้องติดตั้งอะไรเพิ่ม', 'โมเดลแบบ quantized เพื่อใช้ทรัพยากรน้อย', 'ทำงานแบบ air-gapped ได้เมื่อแคช weights แล้ว'] },
	},
	tips: {
		anthropicNoTemperature: 'อย่าตั้งค่า <code>temperature</code> โมเดล Claude ปัจจุบันปฏิเสธค่า temperature ที่ไม่ใช่ค่าเริ่มต้น และเครื่องมือตั้งค่าของ EDDI ก็ไม่ใส่ค่านี้อยู่แล้ว',
		openaiResponsesTools: 'OpenAI ระบุให้ใช้ Responses API สำหรับการเรียกเครื่องมือบน Astra และ 6.1 Sol ขณะที่ type <code>openai</code> ของ EDDI ใช้ Chat Completions ควรทดสอบเอเจนต์ที่ใช้เครื่องมือบนโมเดลเหล่านี้ก่อนนำขึ้นโปรดักชัน',
		geminiSignature: 'Gemini 3 ต้องได้รับ thought signature ของตัวเองกลับมาระหว่างการเรียกเครื่องมือ EDDI ทำให้เป็นค่าเริ่มต้น (<code>returnThinking</code> และ <code>sendThinking</code> เปิดอยู่สำหรับ type <code>gemini</code>) ให้คงไว้เช่นนั้น',
		geminiVertexTools: 'สำหรับ Gemini 3 ที่ใช้เครื่องมือ ให้ใช้ <code>type: gemini</code> ไม่ใช่ <code>gemini-vertex</code>: เส้นทาง Vertex ส่ง thought signature ไม่ได้ ส่วน <code>gemini-vertex</code> ใช้ได้ดีเมื่อไม่มีเครื่องมือ',
		xaiUsRegion: 'ตั้ง <code>"region": "us"</code> สำหรับ endpoint ของ xAI ที่เก็บข้อมูลในสหรัฐอเมริกา ซึ่งให้บริการเฉพาะ grok-4.7 และ grok-4.6',
		thinkingEcho: 'ผู้ให้บริการรายนี้กำหนดให้ส่งการใช้เหตุผลของโมเดลกลับไประหว่างลูปเครื่องมือ preset ของ EDDI ทำให้คุณแล้ว: คง <code>returnThinking</code> และ <code>sendThinking</code> ไว้ที่ค่าเริ่มต้น',
		kimiTemperature: 'Moonshot กำหนด temperature ตายตัวบน kimi-k2.7-code และ kimi-k2.6 จึงไม่ควรตั้ง <code>temperature</code> สำหรับโมเดลเหล่านี้',
		qwenRegions: 'เลือก region ด้วย <code>"region": "intl"</code>, <code>"cn"</code> หรือ <code>"us"</code> หากใช้โฮสต์ Alibaba เฉพาะ workspace ให้ตั้ง <code>baseUrl</code> แทน',
		minimaxNoJson: 'EDDI ไม่ส่ง JSON response format ไปยัง MiniMax เลย เมื่อต้องการ JSON ให้ตั้ง <code>convertToObject</code> และอธิบายโครงสร้างไว้ใน prompt',
		groqPreview: 'Groq ระบุบางโมเดล รวมถึง qwen3.8-27b ว่าเป็น Preview: ใช้เพื่อการประเมิน และอาจถูกถอนออกโดยแจ้งล่วงหน้าไม่นาน',
		bedrockGeo: 'โมเดลบางตัวบน Bedrock รวมถึง Llama 4 Maverick เข้าถึงได้ผ่าน cross-region inference profile เท่านั้น เช่น <code>us.meta.llama4-maverick-17b-instruct-v1:0</code>',
		ollamaThink: 'โมเดลการใช้เหตุผลจะคิดก่อนตอบ ซึ่งในแชทแบบสตรีมอาจดูเหมือนค้าง ตั้ง <code>"think": "false"</code> เพื่อให้ตอบทันที และกำหนด <code>timeout</code> ให้งานอย่างเผื่อเวลา',
		jlamaCache: 'Jlama รันภายใน JVM ของ EDDI ชี้ <code>modelCachePath</code> ไปที่ volume ที่ mount ไว้เพื่อให้ weights คงอยู่หลังรีสตาร์ท และกำหนดขนาด pod ให้พอสำหรับโมเดลรวมกับ heap ของ EDDI',
		localAirGap: 'รันแบบออฟไลน์ได้ทั้งหมดเมื่อดาวน์โหลดโมเดลแล้ว จึงเหมาะกับการติดตั้งแบบ air-gapped',
		cascadeTier: 'ชั้นแรกที่ดีใน <a href="/features/model-cascading/">model cascade</a>: เร็วและราคาไม่แพง และยกระดับไปยังโมเดลที่ใหญ่กว่าเฉพาะเมื่อความเชื่อมั่นต่ำ',
		cascadeTop: 'ชั้นสุดท้ายที่แข็งแกร่งสำหรับ <a href="/features/model-cascading/">model cascade</a> ซึ่งรับเฉพาะคำขอที่โมเดลราคาถูกกว่าไม่มั่นใจ',
		azureDeployment: 'บน Azure OpenAI ค่า <code>deploymentName</code> คือชื่อที่คุณตั้งให้ deployment ใน Azure resource ของคุณ ไม่ใช่ชื่อโมเดล',
	},
};

export default copy;
