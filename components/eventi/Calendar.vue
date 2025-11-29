<script setup>
import { ref, computed } from "vue";
const isDev = process.dev;

useHead({
  title: "Bitcoin Italia Network - Calendario",
});

definePageMeta({
  layout: "main",
});

const currentDate = ref(new Date());
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
  const d = new Date(currentYear.value, currentMonth.value, 1).getDay();
  return (d + 6) % 7;
});

const monthName = computed(() => {
  return new Intl.DateTimeFormat("it-IT", { month: "long" }).format(
    new Date(currentYear.value, currentMonth.value)
  );
});

const calendarDays = computed(() => {
  const days = [];
  for (let i = 0; i < firstDayOfMonth.value; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push(i);
  }
  return days;
});

const weekDays = ["lu", "ma", "me", "gi", "ve", "sa", "do"];
const months = Array.from({ length: 12 }, (_, i) => i);

// GIORNO CORRENTE
const today = ref(new Date());
const todayDate = computed(() => today.value.getDate());
const todayMonth = computed(() => today.value.getMonth());
const todayYear = computed(() => today.value.getFullYear());

function isToday(day) {
  return (
    day &&
    currentYear.value === todayYear.value &&
    currentMonth.value === todayMonth.value &&
    day === todayDate.value
  );
}
</script>

<template>
  <LandingContainer>
    <div class="divide-y divide-gray-300/50">
      <!-- Calendar Section -->
      <div class="mb-8">
        <div class="flex justify-center">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="flex items-center justify-between mb-4">
                <select v-model.number="currentMonth" class="select select-bordered">
                  <template v-for="(_, i) in months" :key="i">
                    <option :value="i">
                      {{ new Intl.DateTimeFormat("it-IT", { month: "long" }).format(new Date(currentYear, i)) }}
                    </option>
                  </template>
                </select>
                <h2 class="card-title ml-4"> {{ currentYear }}</h2>
              </div>
              <div class="grid grid-cols-7 text-center gap-2 my-4">
                <template v-for="(d, i) in weekDays" :key="i">
                  <div class="font-bold">{{ d }}</div>
                </template>
                <template v-for="(day, index) in calendarDays" :key="index">
                  <div
                    v-if="day"
                    :class="[
                      'p-2 rounded-lg cursor-pointer',
                      isToday(day) ? 'bg-primary text-white' : 'hover:bg-base-200'
                    ]"
                    :aria-current="isToday(day) ? 'date' : null"
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
