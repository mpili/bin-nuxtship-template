import Test from './Test.vue';

export default {
  title: 'Ui/Test',
  component: Test,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    icona: '',
    etichetta: '',
    contenuto: '',
  },
};

const Template = (args) => ({
  components: { Test },
  setup() {
    return { args };
  },
  template: `
      <Test v-bind="args">
      </Test>
    `,
});

export const Default = Template.bind({});

export const Etichetta = {
  args: {
    etichetta: 'Etichetta',
  },
};

export const Normale = {
  args: {
    etichetta: 'Etichetta normale',
    contenuto: 'Questo è il contenuto normale',
  },
};

export const Grosso = {
  args: {
    icona: '(*)',
    etichetta: 'Etichetta grossa',
    contenuto: `<span class="font-bold">Contenuto grosso</span>`,
    html: true,
  },
};

export const Lungo = {
  args: {
    icona: '[X]',
    etichetta: 'Etichetta molto molto molto lunga',
    contenuto: 'Anche il contenuto diciamo che è abbastanza lungo',
  },
};
