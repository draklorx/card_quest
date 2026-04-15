<template>
  <Card
    :type="type"
    :backgroundImage="cardBackground"
    :backgroundPositionY="artOffset"
  >
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
            <div
              v-if="ability.difficulty"
              class="difficulty-text"
              :aria-label="`Difficulty modifier ${ability.difficulty}`"
            >
              {{ ability.difficulty }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from './Card.vue'

const abilityIcons = {
  fight: new URL('../assets/icons/icon_ability_fight.png', import.meta.url).href,
  search: new URL('../assets/icons/icon_ability_search.png', import.meta.url).href,
  sneak: new URL('../assets/icons/icon_ability_sneak.png', import.meta.url).href,
  talk: new URL('../assets/icons/icon_ability_talk.png', import.meta.url).href,
  think: new URL('../assets/icons/icon_ability_think.png', import.meta.url).href,
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
    offset?: string
    abilities: Ability[]
    options?: Option[]
  }
  type: string
}>()

const cardBackground = computed(() => {
  if (!props.item.image) return ''
  return new URL(`../assets/${props.item.image}`, import.meta.url).href
})

const artOffset = computed(() => props.item.offset)

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
.ability-icon {
  width: 0.3in;
  height: 0.3in;
  object-fit: contain;
}
.difficulty-text {
  width: 0.3in;
  height: 0.3in;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Almendra SC", serif;
  color: rgb(28 46 48 / 90%);
  font-size: 14pt;
  font-weight: 700;
  line-height: 1;
}

.bottom-overlay {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 0.25in;
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
  font-weight: bold;
  line-height: 1;
  padding-bottom: .01in;
  text-transform: uppercase;
  pointer-events: none;
}

.card-title {
  font-size: 11pt;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 0.05in;
}
</style>
