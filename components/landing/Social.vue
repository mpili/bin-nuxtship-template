<script>
export default {
  props: {
    social: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    icona: {
      type: String,
      required: true,
    },
  },
  methods: {
    urlSocial(v, social) {
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
    },
  },
};
</script>

<template>
  <a :href="urlSocial(value, social)" target="_blank" rel="noopener">
    <LandingBadge
      :icona="icona"
      :testo="social"
      coloreicona="white"
      coloretesto="white"
      colorebg="indigo-500"
    />
  </a>
</template>
