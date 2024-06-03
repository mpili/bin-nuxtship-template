<script setup>
definePageMeta({
  layout: "landing",
});
const podcasts = [
  {
	nome: "Bitcoin Italia Podcast",
	url: "https://bitcoinitaliapodcast.it/podcast/stagione/6",
  },
  {
	nome: "Bitcoin Freedom",
	url: "https://fountain.fm/show/GeOiZ3OrPLYBueqcRP7n",
  },
    {
	nome: "Il priorato del Bitcoin",
	url: "https://priorato.org/",
  },
  {
	nome: "Arancione Podcast",
	url: "https://fountain.fm/show/412K3pgOYcSg6kPdaVKt",
  },
{
	nome: "Bitcoin d’Asporto",
	url: "https://fountain.fm/show/fvkvDKJntPAGaPSd49rB",
  },
  {
	nome: "The Bitcoin Theory",
	url: "https://open.spotify.com/show/0ag9gCPszHrvCShHkuKlHp",
  },
  {
	nome: "Cultura Bitcoin",
	url: "https://open.spotify.com/show/4WCmgP4KVYC4nmoqmqUY5D",
  },
  {
	nome: "Sicurezza Bitcoin",
	url: "https://fountain.fm/show/5HHVEWLX26FTlvpLr0s5",
  },

]
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Podcast</template>
			<template v-slot:desc>I podcast Bitcoin in Italia</template>
		</LandingSectionhead>
		<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
			<div class="mx-auto max-w-md">
				<ul class="space-y-4">
					<li v-for="podc of podcasts" class="flex items-center">
						<svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="11" />
							<path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
						</svg>
						<p class="ml-4">
							<a
							:href="podc.url"
							class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
							target="_blank"
							>
							{{ podc.nome }}
							</a>
						</p>
				</li>
				</ul>
			</div>
		</div>
	</LandingContainer>
</template>
