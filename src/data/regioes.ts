export type RegiaoId =
	| 'agua-de-meninos'
	| 'bonfim'
	| 'rampa-do-mercado'
	| 'barroquinha'
	| 'porto-e-calcada'
	| 'pelourinho'
	| 'vitoria';

export interface Regiao {
	id: RegiaoId;
	nome: string;
	cena: string;
}

// Ordem de prioridade de produção definida no briefing de arte (Imagem 06).
export const regioes: Regiao[] = [
	{
		id: 'rampa-do-mercado',
		nome: 'Rampa do Mercado',
		cena: 'Fim de tarde, multidão, quituteiras sentadas, fumaça de tacho, carregadores — densidade humana máxima.',
	},
	{
		id: 'vitoria',
		nome: 'Vitória',
		cena: 'Manhã, rua larga e vazia, sobrados caiados, sombra comprida — silêncio visual e desconforto.',
	},
	{
		id: 'barroquinha',
		nome: 'Barroquinha',
		cena: 'Noite, becos estreitos, luz de vela vazando por frestas de janela — indício de que há gente acordada.',
	},
	{
		id: 'pelourinho',
		nome: 'Pelourinho',
		cena: 'Meio-dia duro, a fachada da cadeia da Câmara, sombra de grade projetada no chão.',
	},
	{
		id: 'agua-de-meninos',
		nome: 'Água de Meninos',
		cena: 'Beira d’água, saveiros, cestos de peixe — movimento largo e sem vigilância aparente.',
	},
	{
		id: 'bonfim',
		nome: 'Bonfim',
		cena: 'Colina, fim de tarde, fitas e panos ao vento — ambiente de repouso.',
	},
	{
		id: 'porto-e-calcada',
		nome: 'Porto e Calçada',
		cena: 'Cais, carga sendo movida, presença de fardamento ao fundo.',
	},
];
