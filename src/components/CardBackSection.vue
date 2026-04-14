<template>
  <section :class="['card-type-section', { 'card-section--break': pageBreak }]">
    <div class="card-grid">
      <Card
        v-for="index in 9"
        :key="index"
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

const props = defineProps<{
  title: string
  type: 'ally' | 'beast' | 'enemy' | 'encounter' | 'location'
  pageBreak?: boolean
}>()

const backImages = {
  ally: new URL('../assets/card_back_ally.png', import.meta.url).href,
  beast: new URL('../assets/card_back_beast.png', import.meta.url).href,
  enemy: new URL('../assets/card_back_enemy.png', import.meta.url).href,
  encounter: new URL('../assets/card_back_encounter.png', import.meta.url).href,
  location: new URL('../assets/card_back_location.png', import.meta.url).href,
}

const backgroundImage = computed(() => backImages[props.type] || backImages.ally)
</script>
