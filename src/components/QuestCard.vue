<template>
  <Card :type="type">
    <div
      class="quest-wrapper" 
      :style="parchmentStyle"
    >
      <CardTitle>{{ card.name }}</CardTitle>
      <div class="quest-description">
        {{ card.public_description }}
      </div>
      <CardSection :section="gm_notes" />
      <CardSection
        v-for="(step, index) in card.flow"
        :key="index"
        :section="step"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import CardTitle from './CardTitle.vue'
import type { QuestCardData } from '../types/cards'
import CardSection from './CardSection.vue';

const props = defineProps<{
  card: QuestCardData
  type: string
}>()

const gm_notes = {
  header: "GM Notes",
  details: props.card.gm_notes
}

const parchmentBackground = new URL('../assets/parchment_full_bg.png', import.meta.url).href
const parchmentStyle = computed(() => ({
  backgroundImage: `url("${parchmentBackground}")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}))

</script>

<style scoped>

.quest-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.3in;
  padding-top:.375in;
  box-sizing: border-box;
}

.quest-description {
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

</style>
