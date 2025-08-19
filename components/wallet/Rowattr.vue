<script>
export default {
  props: {
    att: {
      required: false,
    },
    data: {
      required: true,
    },
  },
};
</script>

<template>
  <tr v-if="data[att.campo] == 's'" class="border-b border-gray-200">
    <td>
      <Icon :name="att.icona" size="16" :color="att.colore" />
    </td>
    <td>
      <span v-if="att.dizionario" class="text-blue-600">
        <a
          :href="
            'https://glossario.bitcoinitalianetwork.com/' +
            att.dizionario +
            '.html'
          "
          target="_blank"
        >
          {{ att.titolo }}
        </a>
      </span>
      <span v-else>{{ att.titolo }}</span>
    </td>
    <td>
      <span class="text-gray-500">{{ att.descrizione }}</span>
    </td>
  </tr>
  <tr
    v-if="att.campo == 'Android' && data['apk direct download']"
    class="border-b border-gray-200"
  >
    <td></td>
    <td>apk direct download</td>
    <td>
      <span class="text-blue-600 text-sm">
        <a :href="data['apk direct download']" target="_blank">
          {{ data["apk direct download"] }}
        </a>
      </span>
    </td>
  </tr>

  <tr
    v-if="att.campo == 'Android' && data['fdroid']"
    class="border-b border-gray-200"
  >
    <td></td>
    <td>fdroid</td>
    <td>
      <span class="text-blue-600 text-sm">
        <a :href="data['fdroid']" target="_blank">
          {{ data["fdroid"] }}
        </a>
      </span>
    </td>
  </tr>
</template>
