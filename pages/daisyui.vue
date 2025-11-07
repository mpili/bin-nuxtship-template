<script setup>
import { ref, computed } from "vue";
const isDev = process.dev;

useHead({
  title: "Bitcoin Italia Network - pagina di test",
});

definePageMeta({
  layout: "main",
});

const currentDate = ref(new Date());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
  // Date.getDay(): 0 = Domenica, 1 = Lunedì, ...
  // shift so che Lunedì sia indice 0
  const d = new Date(currentYear.value, currentMonth.value, 1).getDay();
  return (d + 6) % 7;
});

const monthName = computed(() => {
  return new Intl.DateTimeFormat("it-IT", { month: "long" }).format(
    currentDate.value
  );
});

const calendarDays = computed(() => {
  const days = [];
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth.value; i++) {
    days.push(null);
  }
  // Add the days of the month
  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push(i);
  }
  return days;
});

const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
</script>

<template>
  <LandingContainer>
    
    
    <div class="fab fab-flower">
      <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
      <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-success">
        F
      </div>

      <!-- Main Action button replaces the original button when FAB is open -->
      <button class="fab-main-action btn btn-circle btn-lg">M</button>

      <!-- buttons that show up when FAB is open -->
      <button class="btn btn-lg btn-circle">A</button>
      <button class="btn btn-lg btn-circle">B</button>
      <button class="btn btn-lg btn-circle">C</button>
      <button class="btn btn-lg btn-circle">D</button>
    </div>

    <p>isDev: {{ isDev }}</p>
    <div class="divide-y divide-gray-300/50">
      <!-- Calendar Section -->
      <div class="mb-8">
        <div class="flex justify-center">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{{ monthName }} {{ currentYear }}</h2>
              <div class="grid grid-cols-7 text-center gap-2 my-4">
                <template v-for="(d, i) in weekDays" :key="i">
                  <div class="font-bold">{{ d }}</div>
                </template>
                <template v-for="(day, index) in calendarDays" :key="index">
                  <div
                    v-if="day"
                    class="p-2 hover:bg-base-200 rounded-lg cursor-pointer"
                  >
                    <div class="border p-2">{{ day }}</div>
                  </div>
                  <div v-else class="p-2"></div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
