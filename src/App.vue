<template>
  <div id="app">
    <CardTypeSection
      title="Allies"
      :items="allies"
      type="ally"
      :cardComponent="EntityCard"
    />

    <CardTypeSection
      title="Beasts"
      :items="beasts"
      type="beast"
      :cardComponent="EntityCard"
      pageBreak
    />

    <CardTypeSection
      title="Enemies"
      :items="enemies"
      type="enemy"
      :cardComponent="EntityCard"
      pageBreak
    />

    <CardTypeSection
      title="Locations"
      :items="locations"
      type="location"
      :cardComponent="EntityCard"
      pageBreak
    />

    <CardTypeSection
      title="Encounters"
      :items="encounters"
      type="encounter"
      :cardComponent="EncounterCard"
      pageBreak
    />
  </div>
</template>

<script setup lang="ts">
import CardTypeSection from './components/CardTypeSection.vue'
import EntityCard from './components/EntityCard.vue'
import EncounterCard from './components/EncounterCard.vue'
import type { EncounterCardData, EntityCard as EntityCardData } from './types/cards'
import alliesData from './data/allies.json'
import beastsData from './data/beasts.json'
import enemiesData from './data/enemies.json'
import encountersData from './data/encounters.json'
import locationsData from './data/locations.json'

const allies = alliesData as EntityCardData[]
const beasts = beastsData as EntityCardData[]
const enemies = enemiesData as EntityCardData[]
const encounters = encountersData as EncounterCardData[]
const locations = locationsData as EntityCardData[]
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1c2e30;
}
</style>
