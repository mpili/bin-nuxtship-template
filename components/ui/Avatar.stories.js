import Avatar from "./Avatar.vue";

export default {
  title: "daisyUI/Avatar",
  component: Avatar,
  argTypes: {
    url: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  url: "https://via.placeholder.com/150", // Placeholder image URL
};
