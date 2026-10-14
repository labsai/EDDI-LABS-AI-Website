import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'شغّل EDDI محليًا',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'نسخ',
		copied: 'تم النسخ',
		other: 'طرق تثبيت أخرى ←',
	},
	sbs: {
		title: 'الإعداد والواجهة جنبًا إلى جنب',
		subtitle: 'ما يفعله الوكيل مجموعة من مستندات JSON يمكنك قراءتها ومقارنتها وإدارة إصداراتها. ويحرّر Manager المستندات نفسها.',
		tabsLabel: 'أمثلة على الإعداد',
		tabs: { rule: 'Behavior rule', llm: 'مهمة LLM', approval: 'موافقة بشرية' },
		captions: {
			rule: 'Behavior Rule ملف JSON بسيط: عندما يطابق المدخل المحلَّل trigger(current_weather) تُصدر الإجراء ask_for_city. تستمع المهام والمخرجات إلى هذا الإجراء. يعرض Manager وكيلًا وسير العمل الذي ينفّذ قواعده.',
			llm: 'مهمة LLM هي أيضًا JSON: نوع المزوّد ومرجع إلى الـ vault بدل مفتاح API صريح والنموذج ورسالة النظام. ويحرّر Manager المستند نفسه.',
			approval: 'للتوقف انتظارًا لإنسان تُصدر القاعدة PAUSE_CONVERSATION. تنتظر المحادثة في الحالة AWAITING_HUMAN حتى يقرر المالك أو eddi-admin أو eddi-approver، في Manager أو في Slack. ويمكن ضبط استدعاءات الأدوات ومراحل المجموعات بالطريقة نفسها.',
		},
		shotLabel: 'لقطة شاشة من Manager',
		shotAlts: {
			rule: 'EDDI Manager: صفحة تفاصيل وكيل مع بيئاته وسير عمله',
			llm: 'EDDI Manager: محرّر مهمة LLM مع المزوّد وإجراءات التشغيل ورسالة النظام',
		},
		example: 'مثال توضيحي',
		card: {
			title: 'مطلوب موافقة',
			pausedBy: 'تم إيقاف المحادثة مؤقتًا بواسطة القاعدة',
			state: 'AWAITING_HUMAN',
			approve: 'موافقة',
			reject: 'رفض',
			foot: 'يُكتب كل قرار في سجل التدقيق كإدخال hitl.approval.',
		},
	},
};

export default copy;
