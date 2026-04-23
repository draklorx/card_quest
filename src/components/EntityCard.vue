<template>
  <Card
    :type="type"
    :background-image="cardBackground"
    :background-position-y="artOffset"
  >
    <AIBadge />
    <BottomOverlay>
      <CardTitle>{{ card.name }}</CardTitle>
      <CardSection
        v-if="card.feat"
        :section="card.feat"
      />
      <Abilities :abilities="card.abilities" />
    </BottomOverlay>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EntityCardData } from '../types/cards'
import Card from './Card.vue'
import CardTitle from './CardTitle.vue'
import AIBadge from './AIBadge.vue'
import BottomOverlay from './BottomOverlay.vue'
import Abilities from './Abilities.vue'
import CardSection from './CardSection.vue'

const props = defineProps<{
  card: EntityCardData
  type: string
}>()

const cardBackground = computed(() => {
  if (!props.card.image) return ''
  return new URL(`../assets/${props.card.image}`, import.meta.url).href
})

const artOffset = computed(() => props.card.offset)
</script>

<style scoped>

.card-flow-step {
  font-size: 8pt;
  margin-bottom:.08in;
}

.card-section-header {
  font-size: 9pt;
  color: #1c2e30;
  display: inline;
  font-weight:700;
  font-family: "Almendra SC", serif;
  font-style: normal;
}
</style>
