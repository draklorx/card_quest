<template>
  <div id="app">
    <CardTypeSection
      :cards="races"
      type="race"
      :card-component="EntityCard"
    />

    <CardTypeSection
      :cards="classes"
      type="class"
      :card-component="EntityCard"
    />

    <CardTypeSection
      :cards="allies"
      type="ally"
      :card-component="EntityCard"
    />

    <CardTypeSection
      :cards="beasts"
      type="beast"
      :card-component="EntityCard"
    />

    <CardTypeSection
      :cards="enemies"
      type="enemy"
      :card-component="EntityCard"
    />

    <CardTypeSection
      :cards="locations"
      type="location"
      :card-component="EntityCard"
    />

    <CardTypeSection
      :cards="encounters"
      type="encounter"
      :card-component="EncounterCard"
    />
  </div>
</template>

<script setup lang="ts">
import CardTypeSection from './components/CardTypeSection.vue'
import EntityCard from './components/EntityCard.vue'
import EncounterCard from './components/EncounterCard.vue'
import type {
  EncounterCardData,
  EntityCardData,
} from './models/cards'
import alliesData from './data/allies.json'
import beastsData from './data/beasts.json'
import enemiesData from './data/enemies.json'
import encountersData from './data/encounters.json'
import locationsData from './data/locations.json'
import raceData from './data/races.json'
import classData from './data/classes.json'

const allies = alliesData as EntityCardData[]
const beasts = beastsData as EntityCardData[]
const enemies = enemiesData as EntityCardData[]
const encounters = encountersData as EncounterCardData[]
const locations = locationsData as EntityCardData[]
const races = raceData as EntityCardData[]
const classes = classData as EntityCardData[]
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
