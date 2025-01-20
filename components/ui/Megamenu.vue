<script>
export default {
  name: "Megamenu",
  props: {
    voci: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <ul class="menu lg:menu-horizontal bg-base-100">
    <li v-for="voce in voci" :key="voce.title">
      <template v-if="voce.submenu && voce.submenu.length">
        <details>
          <summary>{{ voce.title }}</summary>
          <ul>
            <li v-for="subvoce in voce.submenu" :key="subvoce.title">
              <template v-if="subvoce.submenu && subvoce.submenu.length">
                <details>
                  <summary>{{ subvoce.title }}</summary>
                  <ul>
                    <li v-for="subsubvoce in subvoce.submenu" :key="subsubvoce.title">
                      <a :href="subsubvoce?.url">{{ subsubvoce.title }}</a>
                    </li>
                  </ul>
                </details>
              </template>
              <template v-else>
                <a :href="subvoce?.url">{{ subvoce.title }}</a>
              </template>
            </li>
          </ul>
        </details>
      </template>
      <template v-else>
        <a>{{ voce.title }}</a>
      </template>
    </li>
  </ul>
</template>
