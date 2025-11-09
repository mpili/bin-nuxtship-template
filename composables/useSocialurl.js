export function useSocialurl(v, social) {
	if (v) {
		if (v.startsWith("http")) {
			return v;
		} else {
			const account = v.startsWith("@") ? v.substring(1) : v;
			switch (social.toLowerCase()) {
				case "instagram":
					return `https://www.instagram.com/${account}`;
				case "facebook":
					return `https://www.facebook.com/${account}`;
				case "twitter":
					return `https://twitter.com/${account}`;
				case "linkedin":
					return `https://www.linkedin.com/in/${account}`;
				case "youtube":
					return `https://www.youtube.com/@${account}`;
				case "x":
					return `https://www.x.com/@${account}`;
				case "pinterest":
					return `https://www.pinterest.com/${account}`;
				default:
					return v;
			}
		}
	}
	return v;
}
