<script setup>
const props = defineProps(["tags"]);
const city = props.tags["contact:city"];
const comuneid = useComuneid(city);
</script>
<template>
  <OnwDove titolo="Contatto">
    <span v-if="tags['contact:street']">{{ tags["contact:street"] }}</span>
    <span v-if="tags['contact:housenumber']"
      ><span class="text-info">,</span> {{ tags["contact:housenumber"] }}</span
    >

    <p v-if="tags['contact:postcode']">
      <span class="text-info">CAP</span> {{ tags["contact:postcode"] }}
    </p>
    <!-- <p v-if="tags['contact:city']">{{ tags["contact:city"] }}</p> -->
    <OnwCittalink :citta="tags['contact:city']" />

    <p v-if="tags['contact:province']">
      <span class="text-info">(</span>{{ tags["contact:province"]
      }}<span class="text-info">)</span>
    </p>
    <p v-if="tags['contact:state']">{{ tags["contact:state"] }}</p>
    <p v-if="tags['contact:country']">{{ tags["contact:country"] }}</p>
  </OnwDove>
</template>