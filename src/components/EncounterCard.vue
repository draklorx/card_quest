<template>
  <Card :type="type">
    <div class="encounter-wrapper" :style="parchmentStyle">
      <CardTitle>{{ card.name }}</CardTitle>
      <div class="encounter-description">{{ card.public_description }}</div>
      <div class="card-gm-notes">
        <span class="card-section-header">GM Notes:</span>
        {{ card.gm_notes }}
      </div>
      <div class="card-flow">
        <div v-for="(step, index) in card.flow" :key="index" class="card-flow-step">
          <span class="card-section-header">{{ step.type }}:</span> {{ step.details }}
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import CardTitle from './CardTitle.vue'

const props = defineProps<{
  card: {
    name: string
    public_description: string
    gm_notes: string
    flow: Array<{ type: string; details: string }>
  }
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

.encounter-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.3in;
  padding-top:.375in;
  box-sizing: border-box;
}

.encounter-description {
  margin-bottom: 0.05in;
  font-size: 9pt;
  line-height: 1.3;
}

.card-gm-notes {
  margin-bottom: 0.06in;
  font-size: 8pt;
  line-height: 1.3;
  font-style: italic;
}

.card-flow {
  display: grid;
  gap: 0in;
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
