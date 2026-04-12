<template>
  <li class="option-row">
    <div class="option-icons">
      <img
        v-if="ability"
        class="option-icon"
        :src="abilityIcon(ability)"
        :alt="ability"
      />
      <div v-else class="option-icon spacer" />
      <img
        v-if="difficulty"
        class="option-icon"
        :src="difficultyIcon(difficulty)"
        :alt="difficulty"
      />
      <div v-else class="option-icon spacer" />
    </div>
    <div class="option-description">{{ description }}</div>
  </li>
</template>

<script setup lang="ts">
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

type Props = {
  ability?: string
  difficulty?: string
  description: string
}

const props = defineProps<Props>()

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
.option-row {
  display: flex;
  align-items: center;
  margin-bottom:0.02in;
  margin-left:-0.08in;
  margin-right:-0.08in;
  padding:0.02in;
  background-color: rgba(0, 0, 0, 0.1);
}
.option-icons {
  display: flex;
  align-items: center;
}
.option-icon {
  width: 0.2in;
  height: 0.2in;
  object-fit: contain;
}
.spacer {
  background-color: transparent;
}
.card--enemy .spacer,
.card--ally .spacer,
.card--beast .spacer {
    width: 0;
}
.option-description {
  flex: 1;
  line-height: 1.2;
  font-size:.9em;
  white-space: pre-wrap; 
}
</style>
