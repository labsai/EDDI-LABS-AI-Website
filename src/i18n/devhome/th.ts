import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'รัน EDDI บนเครื่อง',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'คัดลอก',
		copied: 'คัดลอกแล้ว',
		other: 'วิธีติดตั้งแบบอื่น →',
	},
	sbs: {
		title: 'คอนฟิกและ UI เทียบกันให้เห็น',
		subtitle: 'สิ่งที่เอเจนต์ทำคือเอกสาร JSON ที่คุณอ่าน เทียบความต่าง และทำเวอร์ชันได้ Manager แก้ไขเอกสารชุดเดียวกัน',
		tabsLabel: 'ตัวอย่างการตั้งค่า',
		tabs: { rule: 'Behavior rule', llm: 'LLM task', approval: 'การอนุมัติโดยมนุษย์' },
		captions: {
			rule: 'Behavior Rule คือ JSON ธรรมดา: เมื่ออินพุตที่แยกวิเคราะห์แล้วตรงกับ trigger(current_weather) จะส่งแอ็กชัน ask_for_city task และ output รอรับแอ็กชันนั้น Manager แสดงเอเจนต์และ workflow ที่รันกฎของมัน',
			llm: 'LLM task ก็เป็น JSON เช่นกัน: ชนิดผู้ให้บริการ การอ้างอิง vault แทนคีย์ API แบบตรง ๆ โมเดล และข้อความระบบ Manager แก้ไขเอกสารเดียวกัน',
			approval: 'เพื่อหยุดรอมนุษย์ กฎจะส่ง PAUSE_CONVERSATION การสนทนาจะรออยู่ในสถานะ AWAITING_HUMAN จนกว่าเจ้าของ eddi-admin หรือ eddi-approver จะตัดสินใจใน Manager หรือใน Slack การเรียกเครื่องมือและเฟสของกลุ่มก็ควบคุมได้แบบเดียวกัน',
		},
		shotLabel: 'ภาพหน้าจอ Manager',
		shotAlts: {
			rule: 'EDDI Manager: หน้ารายละเอียดของเอเจนต์ พร้อมสภาพแวดล้อมและ workflow',
			llm: 'EDDI Manager: ตัวแก้ไข LLM task พร้อมผู้ให้บริการ แอ็กชันทริกเกอร์ และ system prompt',
		},
		example: 'ตัวอย่างเพื่อประกอบคำอธิบาย',
		card: {
			title: 'ต้องการการอนุมัติ',
			pausedBy: 'การสนทนาถูกหยุดโดยกฎ',
			state: 'AWAITING_HUMAN',
			approve: 'อนุมัติ',
			reject: 'ปฏิเสธ',
			foot: 'ทุกการตัดสินใจถูกบันทึกลง audit ledger เป็นรายการ hitl.approval',
		},
	},
};

export default copy;
