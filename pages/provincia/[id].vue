<script setup>
const { id } = useRoute().params;

const url_api = useOverpass(useOverpassadminloc(id, "8"));

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const breadcrumb = computed(() => [
  {
    label: "Regioni",
    path: "/regioni",
  },
]);

definePageMeta({
  layout: "main",
});

</script>
<template>
	<!--
	 <p>{{id}}</p>
	<p>{{url_api}}</p>
	 -->
	<LandingContainer>
		<LandingBreadcrumb :voci="breadcrumb" />
		<div v-if="pending">
				<UiSkeleton />
			</div>
		<div v-else>
			<ul class="list bg-base-100 rounded-box shadow-md">
				<li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Comuni</li>
		
				<li  v-for="comune in data?.elements" :key="comune.id" class="list-row">
					<div><img class="size-10 rounded-box" src="https://placehold.co/94"/></div>
					<div>
						<NuxtLink :to="`/comune/${comune.id}`">
							{{useTagsnameit(comune.tags)}}
						</NuxtLink>
					</div>
				</li>
			</ul>
			<!--
			<div v-for="comune in data?.elements" :key="comune.id">
				<NuxtLink :to="`/comune/${comune.id}`">
					comune: {{comune.tags['name']}}
				</NuxtLink>
			</div>
			-->
		  </div>
	</LandingContainer>
</template>
