import Carousel from "./Carousel.vue";

export default {
	title: "Ui/Carousel",
	component: Carousel,
	tags: ["autodocs"],
};

const Template = (args) => ({
	components: { Carousel },
	setup() {
		return { args };
	},
	template: '<Carousel v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
	slides: [
		{ image: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
	]
};


export const Tre = Template.bind({});
Tre.args = {
	slides: [
		{ image: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" },
	]
};

export const Landscape = Template.bind({});
Landscape.args = {
	slides: [
		{ image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" },
		{ image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" },
	]
};
