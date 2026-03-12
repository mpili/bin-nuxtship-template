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
	<div class="">
		<NuxtLink :to="`https://nostr.com/${nostr_id}`" target="_blank">
			<button class="btn btn-primary pt-4 pb-10 flex items-center gap-3">
				<Icon name="game-icons:ostrich" size="28" />
				<span>Chatta con altri utenti su questo evento tramite Nostr</span>
			</button>
		</NuxtLink>
	</div>
</template>
