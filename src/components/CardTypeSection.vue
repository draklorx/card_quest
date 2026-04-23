<template>
  <section class="card-type-section card-section-break">
    <div class="card-grid">
      <component
        :is="cardComponent"
        v-for="card in cards"
        :key="card.id"
        :card="card"
        :type="type"
      />
    </div>
  </section>
  <section class="card-type-section card-section-break">
    <div class="card-grid">
      <Card
        v-for="card in cards"
        :key="card.id"
        :type="type"
        :background-image="backgroundImage"
        background-size="cover"
        background-position="center"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import Card from './Card.vue'
import { EncounterCardData, EntityCardData } from '../types/cards'

type EntitySectionProps = {
  cards: EntityCardData[]
  type: 'ally' | 'beast' | 'enemy' | 'location' | 'race' | 'class' | 'reward'
  cardComponent: Component
}

type EncounterSectionProps = {
  cards: EncounterCardData[]
  type: 'encounter'
  cardComponent: Component
}

type CardTypeSectionProps = EntitySectionProps | EncounterSectionProps

const backImages = {
  ally: new URL('../assets/cards/card_back_ally.png', import.meta.url).href,
  beast: new URL('../assets/cards/card_back_beast.png', import.meta.url).href,
  enemy: new URL('../assets/cards/card_back_enemy.png', import.meta.url).href,
  encounter: new URL('../assets/cards/card_back_encounter.png', import.meta.url).href,
  location: new URL('../assets/cards/card_back_location.png', import.meta.url).href,
  race: new URL('../assets/cards/card_back_race.png', import.meta.url).href,
}

const props = defineProps<CardTypeSectionProps>()
const backgroundImage = backImages[props.type as keyof typeof backImages]
</script>

<style scoped>

.card-type-section {
  margin-bottom: 0;
}

.card-section-break {
  page-break-before: always;
  break-before: page;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 2.5in);
  gap: 0in;
  justify-content: start;
}

</style>
