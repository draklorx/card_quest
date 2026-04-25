<template>
  <Card
    :type="type"
    :background-image="cardBackground"
    :background-position-y="artOffset"
  >
    <AIBadge />
    <BottomOverlay>
      <CardTitle>{{ card.name }}</CardTitle>
      <div
        v-if="card.categories?.length"
        class="card-keywords"
      >
        <span
          v-for="category in card.categories"
          :key="category"
          class="card-keyword"
        >
          {{ category }}
        </span>
      </div>
      <CardSection
        v-if="card.ability"
        :section="card.ability"
      />
      <Stats :stats="card.stats" />
    </BottomOverlay>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EntityCardData } from '../models/cards'
import Card from './Card.vue'
import CardTitle from './CardTitle.vue'
import AIBadge from './AIBadge.vue'
import BottomOverlay from './BottomOverlay.vue'
import Stats from './Stats.vue'
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

.card-keywords {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.025in;
  margin-top: -0.025in;
  margin-bottom: 0.055in;
}

.card-keyword {
  color: #1c2e30;
  font-family: "Almendra SC", serif;
  font-size: 7.5pt;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}

.card-keyword:not(:last-child)::after {
  content: ",";
}

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
