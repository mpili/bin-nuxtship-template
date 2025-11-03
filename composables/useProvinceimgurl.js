import provinceimg from "~/assets/data/province-img.json";

export function useProvinceimgurl(nomeprovincia) {
	if (nomeprovincia in provinceimg) {
		return provinceimg[nomeprovincia];
	}
	return 'https://unsplash.it/640/400?'+nomeprovincia;
}
