import Button from "./Button.vue";

export default {
  title: "Ui/Button",
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["md", "lg"],
    },
    block: {
      control: { type: "boolean" },
    },
    styleName: {
      control: { type: "select" },
      options: ["outline", "primary", "inverted"],
    },
    className: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Click Me</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  size: "md",
  styleName: "primary",
  block: false,
};

export const Outline = Template.bind({});
Outline.args = {
  size: "md",
  styleName: "outline",
  block: false,
};

export const Inverted = Template.bind({});
Inverted.args = {
  size: "lg",
  styleName: "inverted",
  block: false,
};

export const Block = Template.bind({});
Block.args = {
  size: "md",
  styleName: "primary",
  block: true,
};
