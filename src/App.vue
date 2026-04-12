<template>
  <div id="app">
    <CardTypeSection
      title="Allies"
      :items="allies"
      type="ally"
      :cardComponent="CreatureCard"
    />

    <CardBackSection
      title="Ally Backs"
      type="ally"
      pageBreak
    />

    <CardTypeSection
      title="Beasts"
      :items="beasts"
      type="beast"
      :cardComponent="CreatureCard"
      pageBreak
    />

    <CardBackSection
      title="Beast Backs"
      type="beast"
      pageBreak
    />

    <CardTypeSection
      title="Enemies"
      :items="enemies"
      type="enemy"
      :cardComponent="CreatureCard"
      pageBreak
    />

    <CardBackSection
      title="Enemy Backs"
      type="enemy"
      pageBreak
    />

    <CardTypeSection
      title="Encounters"
      :items="encounters"
      type="encounter"
      :cardComponent="EncounterCard"
      pageBreak
    />

    <CardBackSection
      title="Encounter Backs"
      type="encounter"
      pageBreak
    />
  </div>
</template>

<script setup lang="ts">
import CardTypeSection from './components/CardTypeSection.vue'
import CardBackSection from './components/CardBackSection.vue'
import CreatureCard from './components/CreatureCard.vue'
import EncounterCard from './components/EncounterCard.vue'
import alliesData from './data/allies.json'
import beastsData from './data/beasts.json'
import enemiesData from './data/enemies.json'
import encountersData from './data/encounters.json'

type CardAbility = {
  ability?: string
  difficulty?: string
  description?: string
}

type EntityCard = {
  image?: string
  name: string
  abilities: CardAbility[]
  options: CardAbility[]
}

type EncounterCard = {
  name: string
  description: string
  flow: Array<{ type: string; options: CardAbility[] }>
}

const allies = alliesData as EntityCard[]
const beasts = beastsData as EntityCard[]
const enemies = enemiesData as EntityCard[]
const encounters = encountersData as EncounterCard[]
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
.card-type-section {
  margin-bottom: 0;
}
.card-section--break {
  page-break-before: always;
  break-before: page;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 2.5in);
  gap: 0in;
  justify-content: start;
}
.card-title {
  font-weight: 700;
  margin-bottom: 0.12in;
  text-align: center;
  font-family: "Almendra SC", serif;
}
.card-subtitle {
  font-size: 0.12in;
  margin-bottom: 0.12in;
  opacity: 0.85;
}
.card-description {
  margin-bottom: 0.05in;
  font-size: 0.13in;
  line-height: 1.3;
}
.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.12in;
  line-height: 1.35;
}
.card-list li {
  margin-bottom: 0in;
}
.card-flow {
  display: grid;
  gap: 0in;
}
.card-flow-type {
  font-size: 0.11in;
  letter-spacing: 0.06em;
  margin-bottom: 0.05in;
  margin-top: 0.05in;
  color: #1c2e30;
}
.option-description {
  margin-left: 0.07in;
}
</style>
