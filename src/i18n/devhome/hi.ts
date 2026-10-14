import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'EDDI को लोकल चलाएँ',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'कॉपी करें',
		copied: 'कॉपी हो गया',
		other: 'इंस्टॉल करने के अन्य तरीके →',
	},
	sbs: {
		title: 'कॉन्फ़िग और UI, साथ-साथ',
		subtitle: 'एजेंट जो करता है वह JSON दस्तावेज़ों में होता है, जिन्हें आप पढ़ सकते हैं, तुलना कर सकते हैं और वर्ज़न कर सकते हैं। Manager उन्हीं दस्तावेज़ों को संपादित करता है।',
		tabsLabel: 'कॉन्फ़िगरेशन के उदाहरण',
		tabs: { rule: 'Behavior rule', llm: 'LLM task', approval: 'मानवीय अनुमोदन' },
		captions: {
			rule: 'Behavior Rule साधारण JSON है: जब पार्स किया गया इनपुट trigger(current_weather) से मेल खाता है, तो वह एक्शन ask_for_city जारी करता है। task और output उस एक्शन को सुनते हैं। Manager एक एजेंट और उसके नियम चलाने वाला workflow दिखाता है।',
			llm: 'LLM task भी JSON है: प्रदाता का प्रकार, सीधे API कुंजी की जगह vault रेफ़रेंस, मॉडल और सिस्टम संदेश। Manager उसी दस्तावेज़ को संपादित करता है।',
			approval: 'किसी इंसान के लिए रुकने हेतु नियम PAUSE_CONVERSATION जारी करता है। बातचीत AWAITING_HUMAN स्थिति में तब तक इंतज़ार करती है जब तक मालिक, कोई eddi-admin या eddi-approver Manager या Slack में निर्णय न ले। टूल कॉल और ग्रुप चरणों को भी इसी तरह नियंत्रित किया जा सकता है।',
		},
		shotLabel: 'Manager का स्क्रीनशॉट',
		shotAlts: {
			rule: 'EDDI Manager: एजेंट का विवरण पृष्ठ, उसके एनवायरनमेंट और workflow के साथ',
			llm: 'EDDI Manager: LLM task एडिटर, प्रदाता, ट्रिगर एक्शन और सिस्टम प्रॉम्प्ट के साथ',
		},
		example: 'समझाने के लिए उदाहरण',
		card: {
			title: 'अनुमोदन आवश्यक',
			pausedBy: 'बातचीत इस नियम से रोकी गई',
			state: 'AWAITING_HUMAN',
			approve: 'स्वीकृत करें',
			reject: 'अस्वीकार करें',
			foot: 'हर निर्णय ऑडिट ledger में hitl.approval एंट्री के रूप में लिखा जाता है।',
		},
	},
};

export default copy;
