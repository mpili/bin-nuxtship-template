<script setup>

useHead({
  title: 'Libri Bitcoin in Italiano da acquistare su Amazon | Bitcoin Italia Network',
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/libriamazon',
    },
  ],
});

const url_api  = `/data/amazon-libri.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Libri su Bitcoin in Italiano</template>
			<template v-slot:desc>Da acquistare su Amazon.it</template>
		</LandingSectionhead>

		<LandingMainimg urlimg="/img/sections/books.jpg" />

		<LibriAmazonbitcoin/>
		<div v-if="pending">
			Loading ...
		</div>
		<div v-else>
			<section class="grid min-h-screen p-8 place-items-center">
				<div  class="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
					<div v-for="item of data.titoli">
						<LibriScheda :data="item" />
					</div>
				</div>
			</section>
		</div>
		
	</LandingContainer>
</template>
