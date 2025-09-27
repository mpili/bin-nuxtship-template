<script setup>
defineProps(["tags"]);
</script>
<template>
	<span>
        <span v-if="tags['addr:postcode']" itemprop="postalCode">{{
          tags["addr:postcode"]
        }}</span>
        <span v-else-if="tags['contact:postcode']" itemprop="postalCode">{{
          tags["contact:postcode"]
        }}</span>
        &nbsp;
        <span class="text-primary font-bold">
          <span v-if="tags['addr:city']" itemprop="addressLocality">
            <OsnTaglink tag="addr:city" :valore="tags['addr:city']">
              <template v-slot:testo>{{ tags["addr:city"] }}</template>
            </OsnTaglink>
          </span>
          <span v-else-if="tags['contact:city']" itemprop="addressLocality">
            <OsnTaglink tag="contact:city" :valore="tags['contact:city']">
              <template v-slot:testo>{{ tags["contact:city"] }}</template>
            </OsnTaglink>
          </span>
        </span>
        <span v-if="tags['addr:province']" itemprop="addressRegion"
          > ({{ tags["addr:province"] }})</span
        >

	</span>
</template>