import Navbar from './Navbar.vue';

export default {
  title: 'UI/Navbar',
  component: Navbar,
};

const Template = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: '<Navbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
	voci: [
		{
		  title: 'Impara',
		  submenu: [
			{ title: 'Glossario', url:'https://glossario.bitcoinitalianetwork.com/' },
			{ title: 'Autoddidatta' },
			{ title: 'Formazione privata' },
			{ title: 'Strumenti formativi' },
		  ],
		},
		{ title: 'Calendario' },
		{
		  title: 'Spendere Bitcoin',
		  submenu: [
			{ title: 'Negozi' },
			{ title: 'Ristoranti' },
			{ title: 'Alloggi' },
			{ title: 'Servizi' },
			{ title: 'OnLine' },
		  ],
		},
		{ title: 'Articoli' },
		{ title: 'Chi Siamo' },
		{ title: 'Contattaci' },
		{ title: 'Shop' },
	  ],
};
