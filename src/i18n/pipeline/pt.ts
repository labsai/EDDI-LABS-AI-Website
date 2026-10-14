import type { PipelineCopy } from './en';

const copy: PipelineCopy = {
	ui: {
		svgLabel: 'Pipeline de um turno de conversa: Input, Parser, Behavior Rules, Tasks e Output em sequência, com uma Tool boundary controlada acima de Tasks e a Conversation memory por baixo. Cada etapa é um botão que mostra os seus detalhes abaixo.',
		hint: 'Selecione uma etapa para ver o que ela faz, a sua configuração e o que escreve.',
		what: 'O que acontece aqui',
		config: 'Configuração',
		memory: 'Conversation memory',
		audit: 'Exemplo de entrada de auditoria',
		auditNote: 'Cada task do pipeline escreve uma entrada: assinada com HMAC, apenas de acréscimo e com verificação de sequência.',
		example: 'Valores de exemplo ilustrativos',
	},
	stages: {
		input: 'Uma mensagem chega do chat, do Slack, da API ou de um cliente MCP. O texto original passa a ser a primeira entrada de um novo passo na Conversation memory. Nenhum task correu ainda, por isso esta etapa mostra o passo de memória e não uma entrada de auditoria.',
		parser: 'O parser normaliza o texto e procura-o nos dicionários do agente, transformando palavras e frases em expressões semânticas como trigger(current_weather). É uma consulta, não uma chamada a um modelo: o mesmo texto dá sempre as mesmas expressões.',
		rules: 'As Behavior Rules são condições SE-ENTÃO sobre as expressões e a Conversation memory. Cada regra que corresponde emite ações. O encaminhamento é configuração e não código, por isso a mesma entrada segue sempre o mesmo caminho.',
		tasks: 'Os tasks escutam ações: uma chamada a um LLM, uma chamada HTTP, uma ferramenta MCP ou uma consulta a uma base de conhecimento. Cada task escreve uma entrada de auditoria assinada com o que leu, o que produziu e os detalhes do modelo e das ferramentas.',
		tools: 'Toda a chamada a uma ferramenta, seja qual for a origem, atravessa a mesma fronteira. As chamadas que correspondem a um padrão de toolApprovals ficam em pausa até uma pessoa decidir, e a decisão é escrita no ledger como uma entrada hitl.approval. As credenciais vêm do vault como referências ${vault:keyName}.',
		output: 'Os modelos de Output transformam as ações emitidas na resposta: texto e quick replies. A resposta é guardada na memória e devolvida ao canal de onde veio a mensagem.',
		memory: 'A Conversation memory guarda cada passo (input, expressions, actions, output) e propriedades com âmbito de passo, conversa ou utilizador (longTerm). O estado da conversa (READY, IN_PROGRESS, ENDED, AWAITING_HUMAN ou ERROR) é guardado com ela.',
	},
};

export default copy;
