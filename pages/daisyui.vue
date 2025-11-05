<script setup>
const isDev = process.dev

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
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

const monthName = computed(() => {
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(
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

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
</script>

<template>
  <LandingContainer>
    <p>isDev: {{isDev}}</p>
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

      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span class="badge badge-ghost badge-sm"
                  >Desktop Support Technician</span
                >
              </td>
              <td>Purple</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Brice Swyre</div>
                    <div class="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Marjy Ferencz</div>
                    <div class="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span class="badge badge-ghost badge-sm"
                  >Office Assistant I</span
                >
              </td>
              <td>Crimson</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <!-- row 4 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Yancy Tear</div>
                    <div class="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span class="badge badge-ghost badge-sm"
                  >Community Outreach Specialist</span
                >
              </td>
              <td>Indigo</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <!-- foot -->
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </LandingContainer>
</template>
