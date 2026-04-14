<template>
  <Card :type="type">
    <div class="encounter-wrapper" :style="parchmentStyle">
      <div class="card-title">{{ item.name }}</div>
      <div class="card-description">{{ item.public_description }}</div>
      <div class="card-gm-notes">
        <span class="card-section-header">GM Notes:</span>
        {{ item.gm_notes }}
      </div>
      <div class="card-flow">
        <div v-for="(step, index) in item.flow" :key="index" class="card-flow-step">
          <span class="card-section-header">{{ step.type }}:</span> {{ step.details }}
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'

const props = defineProps<{
  item: {
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

.card-gm-notes {
  margin-bottom: 0.06in;
  font-size: 8pt;
  line-height: 1.3;
  font-style: italic;
}

.card-gm-label {
  font-weight: 700;
  font-style: normal;
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
