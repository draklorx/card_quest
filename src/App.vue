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
      :cards="quests"
      type="quest"
      :card-component="QuestCard"
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
import QuestCard from './components/QuestCard.vue'
import type {
  QuestCardData,
  EntityCardData,
} from './types/cards'
import allyData from './data/allies.json'
import beastData from './data/beasts.json'
import enemyData from './data/enemies.json'
import questData from './data/quests.json'
import locationData from './data/locations.json'
import raceData from './data/races.json'
import classData from './data/classes.json'
import treasureData from './data/treasure.json'

const allies = allyData as EntityCardData[]
const beasts = beastData as EntityCardData[]
const enemies = enemyData as EntityCardData[]
const quests = questData as QuestCardData[]
const locations = locationData as EntityCardData[]
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
