<template>
  <div>
    <select class="select select-xs" v-model="theme" @change="updateTheme">
      <option v-for="tema of temi" :value="tema">{{ tema }}</option>
    </select>
  </div>
</template>

<script>
const temi = [
  "light",
  "dark",
];

export default {
  data() {
    return {
      theme: "light", // Default theme
      temi: temi,
    };
  },
  mounted() {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    this.theme = savedTheme;
    document.documentElement.setAttribute("data-theme", this.theme);
  },
  methods: {
    updateTheme() {
      // Update theme and save to localStorage
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>
