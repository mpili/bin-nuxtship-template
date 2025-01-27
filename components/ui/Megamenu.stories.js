import Megamenu from './Megamenu.vue';

export default {
  title: 'Ui/Megamenu',
  component: Megamenu,
  tags: ['autodocs'],

};

const Template = (args) => ({
  components: { Megamenu },
  setup() {
    return { args };
  },
  template: '<Megamenu v-bind="args" />',
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
