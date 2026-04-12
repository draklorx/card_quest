<template>
  <Card :type="type">
    <div class="encounter-wrapper" :style="parchmentStyle">
      <div class="card-title">{{ item.name }}</div>
      <div class="card-description">{{ item.description }}</div>
      <div class="card-flow">
        <div v-for="(step, index) in item.flow" :key="index" class="card-flow-step">
          <div class="card-flow-type">{{ step.type }}</div>
          <ul class="card-list">
            <Option
              v-for="option in step.options"
              :key="option.description"
              :ability="option.ability"
              :difficulty="option.difficulty"
              :description="option.description"
            />
          </ul>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'
import Option from './Option.vue'

const abilityIcons = {
  fight: new URL('../assets/icon_ability_fight.png', import.meta.url).href,
  search: new URL('../assets/icon_ability_search.png', import.meta.url).href,
  sneak: new URL('../assets/icon_ability_sneak.png', import.meta.url).href,
  talk: new URL('../assets/icon_ability_talk.png', import.meta.url).href,
  think: new URL('../assets/icon_think.png', import.meta.url).href,
}

const difficultyIcons = {
  auto: new URL('../assets/icon_difficulty_auto.png', import.meta.url).href,
  easy: new URL('../assets/icon_difficulty_easy.png', import.meta.url).href,
  medium: new URL('../assets/icon_difficulty_medium.png', import.meta.url).href,
  hard: new URL('../assets/icon_difficulty_hard.png', import.meta.url).href,
}

type Option = {
  ability?: string
  difficulty?: string
  description: string
}

const props = defineProps<{
  item: {
    name: string
    description: string
    flow: Array<{ type: string; options: Option[] }>
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

const abilityIcon = (ability?: string) => {
  if (!ability) return ''
  const key = ability.toLowerCase() as keyof typeof abilityIcons
  return abilityIcons[key] ?? abilityIcons.think
}

const difficultyIcon = (difficulty?: string) => {
  if (!difficulty) return ''
  const key = difficulty.toLowerCase() as keyof typeof difficultyIcons
  return difficultyIcons[key] ?? difficultyIcons.medium
}
</script>

<style scoped>
.card-flow-type {
  font-weight:700;
  font-family: "Almendra SC", serif;
}
.encounter-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.2in;
  box-sizing: border-box;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
