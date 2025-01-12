import Event from './Event.vue';

// Configurazione della storia principale
export default {
	title: 'Ui/Event',
	component: Event,
	tags: ['autodocs'],
	// Definizione degli argTypes per i controlli nel pannello di Storybook
	argTypes: {
		event: {
			control: 'object',
			description: 'Oggetto contenente i dettagli dell\'evento'
		}
	},
	// Parametri per la documentazione
	parameters: {
		docs: {
			description: {
				component: 'Componente card per la visualizzazione di un evento con immagine, data, ora, titolo, descrizione e luogo.'
			}
		}
	}
};

// Template di base per tutte le storie
const Template = (args) => ({
	components: { Event },
	setup() {
		return { args };
	},
	template: '<Event v-bind="args" />'
});

// Storia di default con un evento di esempio
export const Default = Template.bind({});
Default.args = {
	event: {
		title: "Concerto di Musica Classica",
		date: "2024-03-11T18:45:00", // Data e ora insieme
		location: "Teatro alla Scala, Milano",
		description: "Una serata magica con le più belle melodie di Mozart e Beethoven eseguite dall'orchestra sinfonica.",
		image: "https://placehold.co/600x600"
	}
};

// Storia con una descrizione molto lunga
export const LongDescription = Template.bind({});
LongDescription.args = {
	event: {
		title: "Festival Jazz",
		date: "2024-01-11T14:30:00Z", // Formato ISO 8601 con timezone, Z indica UTC
		location: "Blue Note, Milano",
		description: "Un'esperienza musicale unica che attraversa la storia del jazz, dal bebop al contemporary. La serata includerà performance di artisti internazionali, jam session e momenti di improvvisazione. Non perdere l'occasione di vivere una serata indimenticabile immerso nelle atmosfere del jazz più autentico.",
		image: "https://placehold.co/600x600"
	}
};

// Storia con un titolo molto lungo
export const LongTitle = Template.bind({});
LongTitle.args = {
	event: {
		title: "Grande Mostra Internazionale d'Arte Contemporanea: Retrospettiva degli Artisti del XXI Secolo",
		date: "2024-05-10T18:45:00",
		location: "Palazzo Reale, Milano",
		description: "Mostra d'arte contemporanea con opere provenienti da tutto il mondo.",
		image: "https://placehold.co/600x600"
	}
};

// Storia senza orario
export const NoTime = Template.bind({});
NoTime.args = {
	event: {
		title: "Festeggiamo tutto il giorno!",
		date: "2024-06-01T00:00:00",
		location: "Spazio Cultura, Roma",
		description: "Un evento del quale sappiamo la data ma non l'ora.",
		image: "https://placehold.co/600x600"
	}
};

// Storia senza location
export const NoLocation = Template.bind({});
NoLocation.args = {
	event: {
		title: "È festa dappertutto!",
		date: "2024-06-01T19:00:00",
		// location: "Spazio Cultura, Roma",
		description: "Un evento del quale non sappiamo la location.",
		image: "https://placehold.co/600x600"
	}
};


// Storia senza immagine
export const NoImage = Template.bind({});
NoImage.args = {
	event: {
		title: "Workshop di Fotografia",
		date: "2024-06-01T19:00:00",
		time: "15:00",
		location: "Spazio Cultura, Roma",
		description: "Workshop pratico sulle tecniche di fotografia digitale.",
		image: ""
	}
};

// Storia con evento passato
export const PastEvent = Template.bind({});
PastEvent.args = {
	event: {
		title: "Evento Passato",
		date: "2023-12-25T19:00:00",
		time: "18:00",
		location: "Centro Congressi, Firenze",
		description: "Questo è un evento già concluso.",
		image: "https://placehold.co/1024x1024"
	}
};

// Storia con descrizione html
export const HtmlEvent = Template.bind({});
HtmlEvent.args = {
	event: {
		title: "Evento con descrizione HTML",
		date: "2023-12-25T19:00:00",
		time: "18:00",
		location: "Centro Congressi, Firenze",
		description: "<div><p>ore 18:30</p><p><strong>RIUNIONE DI CONDOMINIO</strong></p><p><a href='https://t.me/giacomozucco'>@giacomozucco</a> ci introdurrà al tema dell'inserimento di <a href='tg://search_hashtag?hashtag=bitcoin'>#bitcoin</a> nella Costituzione svizzera 🇨🇭</p><p><span class='emoji emoji-native'>📍</span><a href='https://t.me/pow_space'>@pow_space</a> Contrada di Sassello 8</p><p>&nbsp;</p><p>⏭️&nbsp;Dalle 19:30 aperitivo al Punzo Bistrot (ex Vistalago)</p><p>&nbsp;</p><p>Ultimamente si parla molto di inserire bitcoin nella C<strong>ostituzione svizzera </strong>🇨🇭 e/o di usarlo come riserva frazionaria.</p><p>È un tema spinoso di cui sentiamo parlare sempre più frequentemente anche ai nostri meetup e che merita un pacato dibattito....<span class='emoji emoji-native'>🔪</span></p><p>&nbsp;</p><p>Dunque,&nbsp;<strong>Giacomo Zucco</strong> sarà l'amministratore di condominio di questa infuocata <strong>assemblea</strong>. Che siate a favore o contro, accorrete numerosi (verranno forniti all'ingresso bastoni, forconi ed elmetti) 🪖</p><p>&nbsp;</p><p>Vi aspettiamo! <span class='emoji emoji-native'>⚡️</span></p></div>",
		image: "https://placehold.co/1024x1024"
	}
};
