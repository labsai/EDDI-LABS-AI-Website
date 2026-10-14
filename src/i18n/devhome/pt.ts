import type { DevHomeCopy } from './en';

const copy: DevHomeCopy = {
	quickstart: {
		label: 'Execute o EDDI localmente',
		tabBash: 'macOS / Linux',
		tabPowershell: 'Windows PowerShell',
		copy: 'Copiar',
		copied: 'Copiado',
		other: 'Outras formas de instalar →',
	},
	sbs: {
		title: 'Configuração e interface, lado a lado',
		subtitle: 'O que um agente faz são documentos JSON que pode ler, comparar e versionar. O Manager edita esses mesmos documentos.',
		tabsLabel: 'Exemplos de configuração',
		tabs: { rule: 'Behavior rule', llm: 'Task de LLM', approval: 'Aprovação humana' },
		captions: {
			rule: 'Uma Behavior Rule é JSON simples: quando a entrada analisada corresponde a trigger(current_weather), emite a ação ask_for_city. Os tasks e o output escutam essa ação. O Manager mostra um agente e o workflow que executa as suas regras.',
			llm: 'Um task de LLM também é JSON: o tipo de fornecedor, uma referência ao vault em vez de uma chave de API em texto simples, o modelo e a mensagem de sistema. O Manager edita o mesmo documento.',
			approval: 'Para esperar por uma pessoa, uma regra emite PAUSE_CONVERSATION. A conversa aguarda no estado AWAITING_HUMAN até o proprietário, um eddi-admin ou um eddi-approver decidir, no Manager ou no Slack. As chamadas a ferramentas e as fases de grupo podem ser controladas da mesma forma.',
		},
		shotLabel: 'Captura de ecrã do Manager',
		shotAlts: {
			rule: 'EDDI Manager: página de detalhe de um agente com os seus ambientes e o seu workflow',
			llm: 'EDDI Manager: o editor de tasks de LLM com fornecedor, ações de disparo e prompt de sistema',
		},
		example: 'Exemplo ilustrativo',
		card: {
			title: 'Aprovação necessária',
			pausedBy: 'Conversa em pausa pela regra',
			state: 'AWAITING_HUMAN',
			approve: 'Aprovar',
			reject: 'Rejeitar',
			foot: 'Cada decisão é escrita no ledger de auditoria como uma entrada hitl.approval.',
		},
	},
};

export default copy;
