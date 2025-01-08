import Tag from './Tag.vue';

export default {
  title: 'Ui/Tag',
  component: Tag,
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['label', 'content'], 
    },
  },
};

const Template = (args) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: `
    <Tag v-bind="args">
      <template #icona>
        <Icon name="heroicons-outline:mail" />
		icona
      </template>
      <template #content>
        contenuto
      </template>
    </Tag>
  `,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
};

export const WithLink = Template.bind({});
WithLink.args = {
  label: 'Sito web',
};
WithLink.decorators = [
  () => ({
    template: `
      <Tag v-bind="args">
        <template v-slot:icona>
          <Icon name="heroicons-outline:globe-alt" />
		  Icona
        </template>
        <template #content>
          <a href="https://www.example.com">www.example.com</a>
        </template>
      </Tag>
    `,
  }),
];

export const AlignContent = Template.bind({});
AlignContent.args = {
  label: 'Indirizzo',
  align: 'content',
};
AlignContent.decorators = [
  () => ({
    template: `
      <Tag v-bind="args">
        <template #icona>
          <Icon name="heroicons-outline:location-marker" /> 
        </template>
        <template #content>
          Via Roma 1, 20100 Milano
        </template>
      </Tag>
    `,
  }),
];
