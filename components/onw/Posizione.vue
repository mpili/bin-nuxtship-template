<script setup>
const props = defineProps(["address", "tags"]);
</script>
<template>
  <OnwDove v-if="address" titolo="Posizione">
    <p
      v-if="
        address.postcode &&
        address.postcode !== tags['contact:postcode'] &&
        address.postcode !== tags['addr:postcode']
      "
    >
      <OnwLabelslot label="CAP">{{ address.postcode }}</OnwLabelslot>
    </p>
    <p
      v-if="
        address.road &&
        address.road !== tags['contact:street'] &&
        address.road !== tags['addr:street']
      "
    >
      {{ address.road }}
    </p>
    <p v-if="address.hamlet">
      <OnwLabelslot label="Borgo">{{ address.hamlet }}</OnwLabelslot>
    </p>
    <p v-if="address.village">
      <OnwLabelslot label="Paese/Villaggio">
        <OnwCittalink :citta="address.village" />
      </OnwLabelslot>
    </p>
    <p
      v-if="
        address.house_number &&
        address.house_number !== tags['contact:housenumber'] &&
        address.house_number !== tags['addr:housenumber']
      "
    >
      {{ address.house_number }}
    </p>
    <p v-if="address.suburb">
      <OnwLabelslot label="Quartiere">{{ address.suburb }}</OnwLabelslot>
    </p>

    <p
      v-if="
        address.city &&
        address.city !== tags['contact:city'] &&
        address.city !== tags['addr:city']
      "
    >
      <OnwLabelslot label="Città">
        <OnwCittalink :citta="address.city" />
      </OnwLabelslot>
    </p>

    <p
      v-if="
        address.town &&
        address.town !== tags['contact:city'] &&
        address.town !== tags['addr:city']
      "
    >
      <OnwLabelslot label="Paese">
        <OnwCittalink :citta="address.town" />
      </OnwLabelslot>
    </p>

    <p v-if="address.neighbourhood">
      <OnwLabelslot label="Vicinato">{{ address.neighbourhood }}</OnwLabelslot>
    </p>

    <div v-if="address.country === 'Italia'">
      <p v-if="address.county">
        <OnwLabelslot label="Provincia">
          <NuxtLink
            :to="'/provincia/' + useSlugify(address.county)"
            class="text-primary font-bold"
          >
            {{ address.county }}
          </NuxtLink>
        </OnwLabelslot>
      </p>
      <p v-if="address.state">
        <OnwLabelslot label="Regione">
          <NuxtLink
            :to="'/regione/' + useSlugify(address.state)"
            class="text-primary font-bold"
          >
            {{ address.state }}
          </NuxtLink>
        </OnwLabelslot>
      </p>
    </div>
    <div v-else>
      <p v-if="address.county">
        <OnwLabelslot label="Provincia">{{ address.county }}</OnwLabelslot>
      </p>
      <p v-if="address.state">
        <OnwLabelslot label="Regione">{{ address.state }}</OnwLabelslot>
      </p>
      <p v-if="address.country">
        <OnwLabelslot label="Nazione">{{ address.country }}</OnwLabelslot>
      </p>
    </div>

    <!-- <p v-if="address.country_code">Codice nazione: {{ address.country_code }}</p> -->
  </OnwDove>
</template>