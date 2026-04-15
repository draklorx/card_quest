<template>
  <Card
    :type="type"
    :backgroundImage="cardBackground"
    :backgroundPositionY="artOffset"
  >
    <AIBadge/>
    <BottomOverlay>
      <CardTitle>{{ item.name }}</CardTitle>
      <Abilities :abilities="item.abilities"/>
    </BottomOverlay>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import CardTitle from './CardTitle.vue'
import AIBadge from './AIBadge.vue'
import BottomOverlay from './BottomOverlay.vue'
import Abilities from './Abilities.vue'

type Ability = {
  ability?: string
  difficulty?: string
}

const props = defineProps<{
  item: {
    name: string
    image?: string
    offset?: string
    abilities: Ability[]
  }
  type: string
}>()

const cardBackground = computed(() => {
  if (!props.item.image) return ''
  return new URL(`../assets/${props.item.image}`, import.meta.url).href
})

const artOffset = computed(() => props.item.offset)

</script>
