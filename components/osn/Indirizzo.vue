<script setup>
defineProps(["data"]);
</script>

<template>
    <div class="p-2">
      <p v-if="data.tags['addr:place']">
        <span>
          {{ data.tags["addr:place"]
          }}<span v-if="data.tags['addr:housenumber']"
            >, {{ data.tags["addr:housenumber"] }}</span
          >
        </span>
      </p>
      <p v-if="data.tags['addr:district']">
        <span>
          {{ data.tags["addr:district"] }}
        </span>
      </p>
      <p>
        <span v-if="data.tags['addr:street']">
          {{ data.tags["addr:street"]
          }}<span v-if="data.tags['addr:housenumber']"
            >, {{ data.tags["addr:housenumber"] }}</span
          >
        </span>
        <span v-else-if="data.tags['contact:street']">
          {{ data.tags["contact:street"]
          }}<span v-if="data.tags['contact:housenumber']"
            >, {{ data.tags["contact:housenumber"] }}</span
          >
        </span>
      </p>
      <p v-if="data.tags['addr:suburb']">
        {{ data.tags["addr:suburb"] }}
      </p>
      <p>
        <span v-if="data.tags['addr:postcode']">{{
          data.tags["addr:postcode"]
        }}</span>
        <span v-else-if="data.tags['contact:postcode']">{{
          data.tags["contact:postcode"]
        }}</span>
        &nbsp;
        <span v-if="data.tags['addr:city']" class="font-bold">{{ data.tags["addr:city"] }}</span>
        <span v-else-if="data.tags['contact:city']" class="font-bold">{{
          data.tags["contact:city"]
        }}</span>
        <span v-if="data.tags['addr:province']" class="font-bold"> ({{
          data.tags["addr:province"]
        }})</span>

        </p>
    </div>

</template>