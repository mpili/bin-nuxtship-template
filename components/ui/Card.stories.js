import Card from './Card.vue';

export default {
	title: 'daisyUI/Card',
	component: Card,
	argTypes: {
		imageSrc: { control: 'text' },
		imageAlt: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		buttonText: { control: 'text' },
	},
};

const Template = (args) => ({
	components: { Card },
	setup() {
		return { args };
	},
	template: '<Card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
	imageSrc: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
	imageAlt: 'Shoes',
	title: 'Shoes!',
	description: 'If a dog chews shoes whose shoes does he choose?',
	buttonText: 'Buy Now',
};

export const Customized = Template.bind({});
Customized.args = {
	imageSrc: 'https://picsum.photos/928/548',
	imageAlt: 'immagine da Picsum',
	title: 'Immagine a caso',
	description: 'Guarda questa immagine interessante presa da internet',
	buttonText: 'Scegli me',
};

export const Evento = Template.bind({});
Evento.args = {
	imageSrc: 'https://bin-dev.pockethost.io/api/files/eventi/aooonzdmiozundm/ss_mantova_S1TpjMB05U.webp',
	imageAlt: 'meetup a mantova',
	title: '16/12/2024',
	description: 'lun. 16.12.2024 meetup bitcoiner Mantova',
	// buttonText: 'Scegli me',
};
