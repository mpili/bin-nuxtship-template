import amenity from "~/assets/data/tagsicon/amenity.json";
import shop from "~/assets/data/tagsicon/shop.json";
import leisure from "~/assets/data/tagsicon/leisure.json";
import tourism from "~/assets/data/tagsicon/tourism.json";
import office from "~/assets/data/tagsicon/office.json";
import cuisine from "~/assets/data/tagsicon/cuisine.json";
import guesthouse from "~/assets/data/tagsicon/guesthouse.json";
import craft from "~/assets/data/tagsicon/craft.json";
import healthcare from "~/assets/data/tagsicon/healthcare.json";
import sport from "~/assets/data/tagsicon/sport.json";

const tagsicon = {
	"cuisine": { "icon": "solar:chef-hat-broken", "icons": cuisine },
	"shop": { "icon": "mdi:store", "icons": shop },
	"amenity": { "icon": "material-symbols:add-shopping-cart", "icons": amenity },
	"leisure": { "icon": "material-symbols:park", "icons": leisure },
	"guest_house": 	{ "icon": "hugeicons:guest-house", "icons": guesthouse },
	"tourism": 	{ "icon": "icon-park-outline:vacation", "icons": tourism },
	"office": { "icon": "mdi:office-building", "icons": office },
	"healthcare": { "icon": "mdi:hospital-building", "icons": healthcare },
	"craft": { "icon": "mdi:hammer-wrench", "icons": craft },
	"industrial": { "icon": "mdi:factory" },
	"club": { "icon": "mdi:soccer" },
	"sport": { "icon": "mdi:basketball", "icons": sport },
};

export function useIconavenue(tags) {
	for (const key in tagsicon) {
		if (tags[key]) {
			if (tagsicon[key].icons && tagsicon[key].icons[tags[key]]) {
				return tagsicon[key].icons[tags[key]].icon;
			}
			return tagsicon[key].icon;
		}
	}	
	return 'simple-icons:shopee';
}

