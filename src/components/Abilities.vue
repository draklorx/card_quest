<template>
      <div class="abilities-footer">
        <ul class="ability-list">
          <li
            v-for="ability in abilities"
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
            <div
              v-if="ability.modifier"
              class="difficulty-modifer"
              :aria-label="`Difficulty modifier ${ability.modifier}`"
            >
              {{ ability.modifier }}
            </div>
          </li>
        </ul>
      </div>
</template>

<script setup lang="ts">

    type Ability = {
    ability?: string
    difficulty?: string
    modifier?: string
    }

    const props = defineProps<{
        abilities: Ability[]
    }>()

    const abilityIcons = {
    fight: new URL('../assets/icons/icon_ability_fight.png', import.meta.url).href,
    search: new URL('../assets/icons/icon_ability_search.png', import.meta.url).href,
    sneak: new URL('../assets/icons/icon_ability_sneak.png', import.meta.url).href,
    talk: new URL('../assets/icons/icon_ability_talk.png', import.meta.url).href,
    think: new URL('../assets/icons/icon_ability_think.png', import.meta.url).href,
    }

    const difficultyIcons = {
    auto: new URL('../assets/icons/icon_difficulty_auto.png', import.meta.url).href,
    easy: new URL('../assets/icons/icon_difficulty_easy.png', import.meta.url).href,
    medium: new URL('../assets/icons/icon_difficulty_medium.png', import.meta.url).href,
    hard: new URL('../assets/icons/icon_difficulty_hard.png', import.meta.url).href,
    impossible: new URL('../assets/icons/icon_difficulty_impossible.png', import.meta.url).href,
    }
    

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
    .ability-list {
    list-style: none;
    padding: 0;
    margin: 0;
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
    width: 0.3in;
    height: 0.3in;
    object-fit: contain;
    }

    
    .difficulty-modifer {
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
</style>