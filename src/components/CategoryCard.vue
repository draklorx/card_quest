<template>
  <Card :type="type">
    <div
      class="finding-wrapper" 
      :style="parchmentStyle"
    >
      <div class="card-category">{{ card.text }}</div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import type { CategoryCardData } from '../types/cards'

const props = defineProps<{
  card: CategoryCardData
  type: string
}>()

const parchmentBackground = new URL('../assets/parchment_full_bg.png', import.meta.url).href
const parchmentStyle = computed(() => ({
  backgroundImage: `url("${parchmentBackground}")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}))

</script>

<style scoped>

.finding-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.3in;
  padding-top:.375in;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
.card-category {
  font-size:36pt;
  font-family: 'Almendra SC', serif;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.05in;
  text-align: center;
  word-spacing: 0.02in;
  transform: rotate(60deg);
  text-transform: lowercase;

}
</style>
