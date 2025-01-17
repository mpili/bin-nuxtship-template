<script setup>
defineProps(["dove"]);
</script>

<template>
  <div>
    <!-- <div
      		class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    	>
			<h4 class="text-lg font-medium text-gray-400">{{ dove.nome }}</h4>
			<div>
				<a :href="dove.url" target="_blank">
					<NuxtImg
						:src="dove.img"
						format="webp"
						alt="dove"
						class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
					/>
				</a>
			</div>
			<div class="flex mt-8">
				<LandingLink
					:href="dove.url"
					target="_blank"
					block
				>{{ dove.titololink }}</LandingLink>
			</div>
		</div> -->

    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img :src="dove.img" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ dove.nome }}</h2>
        <p>{{dove.descrizione}}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline" v-for="tag of dove.tags">{{tag}}</div>
        </div>
        <div class="card-actions items-center">
          <NuxtLink :href="dove.url" target="_blank" block>
            <button class="btn btn-primary">{{ dove.titololink }}</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
