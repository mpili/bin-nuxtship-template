<script setup>
import { ref, computed, watch } from "vue";

const currentDate = ref(new Date());
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

// API call to fetch events
const { pending, data: events, error, refresh } = await useLazyFetch(getApiUrl, {
  lazy: true,
  server: false,
});

function getApiUrl() {
  const month = currentMonth.value + 1;
  const year = currentYear.value;
  const firstDay = `${year}-${String(month).padStart(2, '0')}-01`;
  const lastDay = new Date(year, month, 0);
  const lastMonthDay = lastDay.getDate();
  const lastDayStr = `${year}-${String(month).padStart(2, '0')}-${String(lastMonthDay).padStart(2, '0')}`;
  
  // Use exact encoding seen in Heventi.vue
  return `https://bin-dev.pockethost.io/api/collections/eventi/records?filter=(data%3E=%22${firstDay}%22%20%26%26%20data%3C=%22${lastDayStr}%2023:59:59%22)`;
}

watch([currentMonth, currentYear], () => {
  refresh();
});

const eventsByDay = computed(() => {
  const grouped = {};
  if (events.value?.items) {
    for (const event of events.value.items) {
      // event.data is like "2026-03-12 18:00:00"
      // we take only the day part safely
      const day = parseInt(event.data.split(' ')[0].split('-')[2]);
      if (!grouped[day]) {
        grouped[day] = [];
      }
      grouped[day].push(event);
    }
  }
  return grouped;
});

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

// Modal logic
const selectedDay = ref(null);
const selectedDayEvents = ref([]);
const isModalOpen = ref(false);

function handleDayClick(day) {
  const dayEvents = eventsByDay.value[day];
  if (!dayEvents) return;

  if (dayEvents.length > 1) {
    selectedDay.value = day;
    // Sort events by date string (e.g. "2026-03-12 18:00:00")
    selectedDayEvents.value = [...dayEvents].sort((a, b) => a.data.localeCompare(b.data));
    isModalOpen.value = true;
  } else if (dayEvents.length === 1) {
    navigateTo(`/evento/${dayEvents[0].id}`);
  }
}

function closeModal() {
  isModalOpen.value = false;
  selectedDay.value = null;
  selectedDayEvents.value = [];
}
</script>

<template>
  <LandingContainer>
    <div class="divide-y divide-gray-300/50">
      <!-- Calendar Section -->
      <div class="mb-8">
        <div class="flex justify-center">
          <div class="card bg-base-100 shadow-xl w-full max-w-2xl">
            <div class="card-body p-4 sm:p-8">
              <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                <select v-model.number="currentMonth" class="select select-bordered w-full sm:w-auto">
                  <template v-for="(_, i) in months" :key="i">
                    <option :value="i">
                      {{ new Intl.DateTimeFormat("it-IT", { month: "long" }).format(new Date(currentYear, i)) }}
                    </option>
                  </template>
                </select>
                <h2 class="card-title"> {{ currentYear }}</h2>
              </div>
              <div class="grid grid-cols-7 text-center gap-1 sm:gap-2 my-4 text-xs sm:text-base">
                <template v-for="(d, i) in weekDays" :key="i">
                  <div class="font-bold uppercase opacity-50">{{ d }}</div>
                </template>
                <template v-for="(day, index) in calendarDays" :key="index">
                  <div
                    v-if="day"
                    @click="handleDayClick(day)"
                    :class="[
                      'p-1 sm:p-2 rounded-lg flex items-center justify-center min-h-[40px] sm:min-h-[50px] relative',
                      {
                        'bg-primary text-white': isToday(day),
                        'hover:bg-base-200': !isToday(day),
                        'cursor-pointer ring-1 sm:ring-2 ring-primary bg-primary-content': eventsByDay[day],
                      },
                    ]"
                    :aria-current="isToday(day) ? 'date' : null"
                  >
                    <div class="font-bold">{{ day }}</div>
                    <div v-if="eventsByDay[day]?.length > 1" class="absolute top-0 right-0 p-1">
                      <span class="badge badge-xs badge-primary">{{ eventsByDay[day].length }}</span>
                    </div>
                  </div>
                  <div v-else class="p-1 sm:p-2"></div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for multiple events -->
      <dialog :class="['modal modal-bottom sm:modal-middle', { 'modal-open': isModalOpen }]">
        <div class="modal-box p-0 overflow-hidden border border-base-300">
          <div class="bg-primary p-4 text-primary-content flex justify-between items-center">
            <h3 class="font-bold text-lg flex items-center gap-2">
              <Icon name="ph:calendar-bold" class="w-6 h-6" />
              {{ selectedDay }} {{ monthName }} {{ currentYear }}
            </h3>
            <button class="btn btn-sm btn-circle btn-ghost" @click="closeModal">✕</button>
          </div>
          
          <div class="p-4 sm:p-6 space-y-4 max-h-[60vh] overflow-y-auto">
            <p class="text-sm opacity-60 font-medium uppercase tracking-wider">Eventi in programma</p>
            
            <div v-for="event in selectedDayEvents" :key="event.id" class="group">
              <NuxtLink 
                :to="`/evento/${event.id}`" 
                class="block p-4 border rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 shadow-sm hover:shadow-md"
                @click="closeModal"
              >
                <div class="flex flex-col gap-3">
                  <div class="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                    {{ event.titolo }}
                  </div>
                  
                  <div class="flex flex-wrap gap-x-4 gap-y-2 text-sm opacity-70">
                    <div class="flex items-center gap-1.5">
                      <Icon name="ph:clock" class="w-4 h-4 text-primary" />
                      <span>{{ new Date(event.data).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) }}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <Icon name="ph:map-pin" class="w-4 h-4 text-primary" />
                      <span>{{ event.city }}</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
          
          <div class="p-4 bg-base-200/50 flex justify-end">
            <button class="btn btn-ghost btn-sm" @click="closeModal">Chiudi</button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop bg-black/40 backdrop-blur-sm" @submit.prevent="closeModal">
          <button @click="closeModal">close</button>
        </form>
      </dialog>
    </div>
  </LandingContainer>
</template>
