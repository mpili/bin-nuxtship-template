<template>
  <div class="hero">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/a06-w.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
      <div>
        <h1 class="text-5xl font-bold">Bitcoin Italia Network</h1>
        <p class="py-6">
          Benvenuti nella piattaforma che connette e valorizza tutte le realtà italiane
          legate a Bitcoin.
        </p>
        <NuxtLink href="/comunita" rel="noopener" >
          <button class="btn btn-primary">Comunità</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
