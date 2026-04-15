<template>
  <Card
    :type="type"
    :backgroundImage="cardBackground"
    :backgroundPositionY="artOffset"
  >
    <AIBadge/>
    <BottomOverlay>
      <CardTitle>{{ card.name }}</CardTitle>
      <Abilities :abilities="card.abilities"/>
    </BottomOverlay>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EntityCard as EntityCardData } from '../types/cards'
import Card from './Card.vue'
import CardTitle from './CardTitle.vue'
import AIBadge from './AIBadge.vue'
import BottomOverlay from './BottomOverlay.vue'
import Abilities from './Abilities.vue'

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
