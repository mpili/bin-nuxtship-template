<script setup>
const props = defineProps(["data"]);
const url_api_vouchers = `https://bin-dev.pockethost.io/api/collections/vouchers/records?filter=(value='${props.data?.tags['brand:wikidata']}')`;
const {
  pending: pending_voucher,
  data: dbdata_voucher,
  error: error_voucher,
} = await useLazyFetch(url_api_vouchers, {
  lazy: true,
  server: false,
});
</script>

<template>
	<NuxtLink
		v-if="data?.tags['brand:wikidata']"
		:to="`https://www.wikidata.org/entity/${data?.tags['brand:wikidata']}?uselang=it`"
		target="_blank"
		rel="noopener"
		class="text-primary font-bold hover:underline"
	>
		<OnwTag
			v-if="data?.tags['brand:wikidata']"
			icona="tabler:brand-pagekit"
			etichetta="Brand wikidata"
			:testo="data?.tags['brand:wikidata']"
		/>
	</NuxtLink>
  <OsnVouchers :pending="pending_voucher" :dbdata="dbdata_voucher" />
</template>
