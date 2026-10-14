import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'Ejecute EDDI en local',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'Copiar',
		copied: 'Copiado',
		other: 'Otras formas de instalar →',
	},
	sbs: {
		title: 'Configuración e interfaz, lado a lado',
		subtitle: 'Lo que hace un agente son documentos JSON que puede leer, comparar y versionar. El Manager edita esos mismos documentos.',
		tabsLabel: 'Ejemplos de configuración',
		tabs: { rule: 'Behavior rule', llm: 'Task de LLM', approval: 'Aprobación humana' },
		captions: {
			rule: 'Una Behavior Rule es JSON sencillo: cuando la entrada analizada coincide con trigger(current_weather), emite la acción ask_for_city. Los tasks y el output escuchan esa acción. El Manager muestra un agente y el workflow que ejecuta sus reglas.',
			llm: 'Un task de LLM también es JSON: el tipo de proveedor, una referencia al vault en lugar de una clave de API en claro, el modelo y el mensaje de sistema. El Manager edita el mismo documento.',
			approval: 'Para pausar a la espera de una persona, una regla emite PAUSE_CONVERSATION. La conversación espera en el estado AWAITING_HUMAN hasta que el propietario, un eddi-admin o un eddi-approver decide, en el Manager o en Slack. Las llamadas a herramientas y las fases de grupo se pueden controlar igual.',
		},
		shotLabel: 'Captura del Manager',
		shotAlts: {
			rule: 'EDDI Manager: página de detalle de un agente con sus entornos y su workflow',
			llm: 'EDDI Manager: el editor de tasks de LLM con proveedor, acciones de activación y prompt de sistema',
		},
		example: 'Ejemplo ilustrativo',
		card: {
			title: 'Se necesita aprobación',
			pausedBy: 'Conversación en pausa por la regla',
			state: 'AWAITING_HUMAN',
			approve: 'Aprobar',
			reject: 'Rechazar',
			foot: 'Cada decisión se escribe en el ledger de auditoría como una entrada hitl.approval.',
		},
	},
};

export default copy;
