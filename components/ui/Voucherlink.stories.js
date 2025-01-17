import Voucherlink from "./Voucherlink.vue";

export default {
	title: "UI/Voucherlink",
	component: Voucherlink,
	argTypes: {
		url: { control: "text" },
		platform: { control: "text" },
	},
};

const Template = (args) => ({
	components: { Voucherlink },
	setup() {
		return { args };
	},
	template: '<Voucherlink v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
	url: "https://www.bitrefill.com/it/it/gift-cards/trony-italy/",
	platform: "bitrefill",
};

export const Coinsbee = Template.bind({});
Coinsbee.args = {
	url: "https://www.coinsbee.com/it/gift-cards/electronics/trony/",
	platform: "coinsbee",
};

export const Coincards = Template.bind({});
Coincards.args = {
	url: "https://coincards.com/product/trony-gift-card/",
	platform: "coincards",
};
