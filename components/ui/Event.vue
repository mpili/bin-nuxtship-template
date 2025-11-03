<template>
  <div class="card w-full sm:w-96 bg-base-100 shadow-xl">
    <!-- Event Image -->
    <figure v-if="event.image" class="card-image">
      <img :src="event.image" :alt="event.title" class="w-full object-cover" />
    </figure>

    <div class="card-body">
      <!-- Event Title -->
      <h2 class="card-title text-xl font-bold">{{ event.title }}</h2>

      <!-- Date and Time -->
      <div class="flex items-center gap-2 text-sm mt-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {{ formatDate(event.date) }}
        </div>
        <div v-if="formatTime(event.date)" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {{ formatTime(event.date) }}
        </div>
      </div>

      <!-- Location -->
      <div
        v-if="event.location"
        class="flex items-center gap-1 text-sm mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span v-html="event.location"></span>
      </div>
      
      <!-- City -->
      <div
        v-if="event.city"
        class="flex items-center gap-1 text-sm mt-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
        <OnwCittalink :citta="event.city" />
        <!-- <span>{{ event.city }}</span> -->
      </div>

      <!-- Description -->
      <p
        v-if="event.description"
        class="mt-3"
        v-html="event.description"
      ></p>

    </div>
  </div>
</template>
  
<script>
export default {
  name: "Event",
  props: {
    event: {
      type: Object,
      required: true,
      validator: (obj) => {
        return ["date", "title", "image", "description", "location"].every(
          (prop) => prop in obj
        );
      },
    },
  },
  methods: {
    formatDate(date) {
      const eventDate = new Date(date);
      const formattedDate = eventDate.toLocaleDateString("it-IT", {
        weekday: 'long',
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      return `${formattedDate}`;
    },
    formatTime(date) {
      const eventDate = new Date(date);
      // Controlla se la data è il 1 gennaio 1970 00:00:00 (timestamp 0)
      if (eventDate.getTime() === 0) {
        return "";
      }
      // Controlla se la data non è valida
      if (isNaN(eventDate.getTime())) {
        return "";
      }
      // Controlla se ore e minuti sono entrambi 0
      if (eventDate.getHours() === 0 && eventDate.getMinutes() === 0) {
        return "";
      }
      const formattedTime = eventDate.toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return formattedTime;
    },
  },
};
</script>
