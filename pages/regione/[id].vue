<script setup>
const { id } = useRoute().params;

const url_api = useOverpass(useOverpassadminloc(id, "6"));

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
	<LandingContainer>
		<LandingBreadcrumb :voci="breadcrumb" />
		
		<div v-if="pending">
			<UiSkeleton />
		</div>
		<div v-else>
			<ul class="list bg-base-100 rounded-box shadow-md">
				<li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Province</li>
				
				<li  v-for="provincia in data?.elements" :key="provincia.id" class="list-row">
					<div><img class="size-10 rounded-box" src="https://placehold.co/94"/></div>
					<div>
						<NuxtLink :to="`/provincia/${provincia.id}`">
							{{useTagsnameit(provincia.tags)}}
						</NuxtLink>		
					</div>
				</li>
			</ul>
		</div>
		<div v-if="error">
			{{error}}
		</div>
	</LandingContainer>
</template>
