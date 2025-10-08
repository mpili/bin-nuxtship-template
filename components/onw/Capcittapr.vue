<script setup>
import { useTagsCitta } from '~/composables/useTagCitta';

const props = defineProps(["tags"]);

const citta = useTagsCitta(props.tags);
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
          <span v-if="citta" itemprop="addressLocality">
            <OsnTaglink tag="addr:city" :valore="citta">
              <template v-slot:testo>{{ citta }}</template>
            </OsnTaglink>
          </span>
        </span>
        <span v-if="tags['addr:province']" itemprop="addressRegion"
          > ({{ tags["addr:province"] }})</span
        >

	</span>
</template>