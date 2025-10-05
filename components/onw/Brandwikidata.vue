<script setup>
const props = defineProps(["brandwikidata"]);
const url_api_vouchers = `https://bin-dev.pockethost.io/api/collections/vouchers/records?filter=(value='${props.brandwikidata}')`;
const {
  pending: pending_voucher,
  data: dbdata_voucher,
  error: error_voucher,
} = await useLazyFetch(url_api_vouchers, {
  lazy: true,
  server: false,
});
</script>

// https://www.wikidata.org/entity/${brandwikidata}?uselang=it

<template>
	<NuxtLink
		v-if="brandwikidata"
		:to="`/oswd/${brandwikidata}`"
		target="_blank"
		rel="noopener"
		class="text-primary font-bold hover:underline"
	>
		<OnwTag
			v-if="brandwikidata"
			icona="tabler:brand-pagekit"
			etichetta="Brand wikidata"
			:testo="brandwikidata"
		/>
	</NuxtLink>
  <OsnVouchers :pending="pending_voucher" :dbdata="dbdata_voucher" />
</template>
