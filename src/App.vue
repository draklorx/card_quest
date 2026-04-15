<template>
  <div id="app">
    <CardTypeSection
      title="Allies"
      :items="allies"
      type="ally"
      :cardComponent="CreatureCard"
    />

    <CardTypeSection
      title="Beasts"
      :items="beasts"
      type="beast"
      :cardComponent="CreatureCard"
      pageBreak
    />

    <CardTypeSection
      title="Enemies"
      :items="enemies"
      type="enemy"
      :cardComponent="CreatureCard"
      pageBreak
    />

    <CardTypeSection
      title="Locations"
      :items="locations"
      type="location"
      :cardComponent="LocationCard"
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
import CardBackSection from './components/CardBackSection.vue'
import CreatureCard from './components/CreatureCard.vue'
import EncounterCard from './components/EncounterCard.vue'
import LocationCard from './components/LocationCard.vue'
import alliesData from './data/allies.json'
import beastsData from './data/beasts.json'
import enemiesData from './data/enemies.json'
import encountersData from './data/encounters.json'
import locationsData from './data/locations.json'

type CardAbility = {
  ability?: string
  difficulty?: string
  description?: string
}

type EntityCard = {
  image?: string
  offset?: string
  name: string
  abilities: CardAbility[]
}

type EncounterCard = {
  name: string
  public_description: string
  gm_notes: string
  flow: Array<{ type: string; details: string }>
}

const allies = alliesData as EntityCard[]
const beasts = beastsData as EntityCard[]
const enemies = enemiesData as EntityCard[]
const encounters = encountersData as EncounterCard[]
const locations = locationsData as EntityCard[]
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