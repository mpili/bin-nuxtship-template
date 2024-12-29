// non funziona perché non riesce a caricare il componente Voucherlink
import Voucherlink from "./Voucherlink.vue";
import Vouchers from "./Vouchers.vue";

export default {
	title: "UI/Vouchers",
	component: Vouchers,
	argTypes: {
		dbdata: { control: "object" },
	},
};

const Template = (args) => ({
	components: { Vouchers },
	setup() {
		return { args };
	},
	template: '<Vouchers v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
	dbdata: {
		"items": [
			{ "collectionId": "rvvq8feonj5thp9", "collectionName": "vouchers", "created": "2024-12-29 14:54:57.997Z", "id": "5te7jhy6funrr0a", "platform": "bitrefill", "tag": "operator", "updated": "2024-12-29 14:54:57.997Z", "url": "https://www.bitrefill.com/it/it/gift-cards/trony-italy/", "value": "Trony" },
			{ "collectionId": "rvvq8feonj5thp9", "collectionName": "vouchers", "created": "2024-12-29 14:55:23.930Z", "id": "el0fka1cx76xqiy", "platform": "coinsbee", "tag": "operator", "updated": "2024-12-29 14:55:23.930Z", "url": "https://www.coinsbee.com/it/gift-cards/electronics/trony/", "value": "Trony" }
		]
	},
};

