<template>
  <section :class="['card-type-section', 'card-section--break']">
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
  <section :class="['card-type-section', 'card-section--break']">
    <div class="card-grid">
      <Card
        v-for="card in cards"
        :key="card.id"
        :type="type"
        :backgroundImage="backgroundImage"
        backgroundSize="cover"
        backgroundPosition="center"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'

type CardTypeSectionProps = {
  cards: Array<Record<string, any>>
  type: 'ally' | 'beast' | 'enemy' | 'encounter' | 'location'
  cardComponent: any
}

const backImages = {
  ally: new URL('../assets/cards/card_back_ally.png', import.meta.url).href,
  beast: new URL('../assets/cards/card_back_beast.png', import.meta.url).href,
  enemy: new URL('../assets/cards/card_back_enemy.png', import.meta.url).href,
  encounter: new URL('../assets/cards/card_back_encounter.png', import.meta.url).href,
  location: new URL('../assets/cards/card_back_location.png', import.meta.url).href,
}

const backgroundImage = computed(() => backImages[props.type] || backImages.ally)
const props = defineProps<CardTypeSectionProps>()
</script>

<style scoped>

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

</style>