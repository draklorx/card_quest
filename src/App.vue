<template>
  <div id="app">
    <CardPage
      :cards="races"
      type="race"
      :card-component="EntityCard"
    />

    <CardPage
      :cards="classes"
      type="class"
      :card-component="EntityCard"
    />

    <CardPage
      :cards="allies"
      type="ally"
      :card-component="EntityCard"
    />

    <CardPage
      :cards="beasts"
      type="beast"
      :card-component="EntityCard"
    />

    <CardPage
      :cards="enemies"
      type="enemy"
      :card-component="EntityCard"
    />

    <CardPage
      :cards="locations"
      type="location"
      :card-component="EntityCard"
    />

    <CardPage
      :cards="encounters"
      type="encounter"
      :card-component="EncounterCard"
    />

    <CardPage
      :cards="treasure"
      type="treasure"
      :card-component="EntityCard"
    />
  </div>
</template>

<script setup lang="ts">
import CardPage from './components/CardPage.vue'
import EntityCard from './components/EntityCard.vue'
import EncounterCard from './components/EncounterCard.vue'
import type {
  EncounterCardData,
  EntityCardData,
} from './types/cards'
import alliesData from './data/allies.json'
import beastsData from './data/beasts.json'
import enemiesData from './data/enemies.json'
import encountersData from './data/encounters.json'
import locationsData from './data/locations.json'
import raceData from './data/races.json'
import classData from './data/classes.json'
import treasureData from './data/treasure.json'

const allies = alliesData as EntityCardData[]
const beasts = beastsData as EntityCardData[]
const enemies = enemiesData as EntityCardData[]
const encounters = encountersData as EncounterCardData[]
const locations = locationsData as EntityCardData[]
const races = raceData as EntityCardData[]
const classes = classData as EntityCardData[]
const treasure = treasureData as EntityCardData[]
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
