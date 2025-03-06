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
          Benvenuti su Bitcoin Italia Network, la piattaforma che connette e
          valorizza le realtà italiane legate a Bitcoin. Bitcoin non è
          un'azienda, ma una risorsa donata all’umanità. Lo riconosciamo per ciò
          che è: una moneta digitale, distribuita e libera, e ne divulghiamo le
          caratteristiche con questo spirito. Sosteniamo chi lo diffonde
          nell’interesse dell’umanità, presente e futura.
        </p>
        <NuxtLink href="/comunita" rel="noopener">
          <button class="btn btn-primary">Comunità</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
