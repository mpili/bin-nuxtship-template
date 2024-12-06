<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  script: [
    {
      src: "https://elevenlabs.io/convai-widget/index.js",
      async: true,
      type: "text/javascript" 
    }
  ]
})
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>elevenlabs</template>
      <template v-slot:desc>Benvenuto nella pagina di test di ConversationalAI</template>
    </LandingSectionhead>
    <elevenlabs-convai agent-id="JD2D4fpALjU6ZxWUTAe1"></elevenlabs-convai>
	<p>In basso a destra trovi il widget di ConversationalAI</p>
  </LandingContainer>
</template>