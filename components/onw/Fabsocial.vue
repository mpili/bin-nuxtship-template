<script setup>
const props = defineProps(["oppending", "opdata"]);

const socials = [
  { social: "facebook", icon: "logos:facebook" },
  { social: "instagram", icon: "skill-icons:instagram" },
  { social: "linkedin", icon: "logos:linkedin-icon" },
  { social: "youtube", icon: "logos:youtube-icon" },
  { social: "twitter", icon: "line-md:twitter-x" },
  { social: "pinterest", icon: "logos:pinterest" },
  { social: "tiktok", icon: "logos:tiktok-icon" },
];

function socialUrl(data, social) {
	if (data) {
		if (data.elements) {
			if (data.elements.length > 0) {
				return useSocialurl(data.elements[0].tags['contact:' + social], social);
				// return data.elements[0].tags['contact:' + social];
			}
		} 
	}
	return null;
}

</script>
<template>
	<!-- v-if="!oppending && opdata?.elements[0]?.tags['contact:' + s.social]" -->

  <OnwFabutton
    v-for="s in socials"
    :key="s.social"
    :url="socialUrl(opdata, s.social)"
    :icon="s.icon"
    :tooltip="s.social"
  />
</template>
