<template>
  <Card :type="type" :backgroundImage="cardBackground">
    <div class="ai-badge" aria-label="AI generated art disclaimer">ai</div>
    <div class="bottom-overlay" :style="parchmentStyle">
      <div class="card-title">{{ item.name }}</div>

      <div class="abilities-footer">
        <ul class="ability-list">
          <li
            v-for="ability in item.abilities"
            :key="ability.ability"
            class="ability-tile"
          >
            <img
              v-if="ability.ability"
              class="ability-icon"
              :src="abilityIcon(ability.ability)"
              :alt="ability.ability"
            />
            <img
              v-if="ability.difficulty"
              class="difficulty-icon"
              :src="difficultyIcon(ability.difficulty)"
              :alt="ability.difficulty"
            />
          </li>
        </ul>
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
  think: new URL('../assets/icon_ability_think.png', import.meta.url).href,
}

const difficultyIcons = {
  auto: new URL('../assets/icon_difficulty_auto.png', import.meta.url).href,
  easy: new URL('../assets/icon_difficulty_easy.png', import.meta.url).href,
  medium: new URL('../assets/icon_difficulty_medium.png', import.meta.url).href,
  hard: new URL('../assets/icon_difficulty_hard.png', import.meta.url).href,
  impossible: new URL('../assets/icon_difficulty_impossible.png', import.meta.url).href,
}

type Ability = {
  ability?: string
  difficulty?: string
}

type Option = {
  ability?: string
  description?: string
  option?: string
}

const props = defineProps<{
  item: {
    name: string
    image?: string
    abilities: Ability[]
    options?: Option[]
  }
  type: string
}>()

const cardBackground = computed(() => {
  if (!props.item.image) return ''
  return new URL(`../assets/${props.item.image}`, import.meta.url).href
})

const parchmentBackground = new URL('../assets/parchment_from_bottom_bg.png', import.meta.url).href
const parchmentStyle = computed(() => ({
  backgroundImage: `url("${parchmentBackground}")`,
  backgroundPosition: 'top center',
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
.card-list,
.ability-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.options-footer {
  margin-bottom: 0;
}
.ability-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.ability-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ability-icon,
.difficulty-icon {
  width: 0.33in;
  height: 0.33in;
  object-fit: contain;
}

.bottom-overlay {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 0.16in;
  padding-top: .25in;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

.ai-badge {
  position: absolute;
  right: 0.2in;
  bottom: 1.20in;
  width: 0.15in;
  height: 0.15in;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(255 255 255 / 50%);
  color: rgb(28 46 48 / 90%);
  font-size: 0.1in;
  font-weight:bold;
  line-height: 1;
  padding-bottom:.01in;
  text-transform: uppercase;
  pointer-events: none;
}

.card-title {
  font-size: 1.05em;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.05in;
}
</style>
