<script>
export default {
  props: {
    nostr_id: {
      required: true,
    },
  },
};
</script>
<template>
	<div class="p-2 m-2">
		<NuxtLink :to="`https://nostr.com/${nostr_id}`" target="_blank">
			<button class="btn btn-primary p-6">
				<Icon name="game-icons:ostrich" size="28" />
				Chatta con altri utenti su questo evento tramite Nostr
			</button>
		</NuxtLink>
	</div>
</template>
