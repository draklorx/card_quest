<template>
  <div class="stats-footer">
    <ul class="stat-list">
      <li
        v-for="stat in stats"
        :key="stat.stat"
        class="stat-tile"
      >
        <img
          v-if="stat.stat"
          class="stat-icon"
          :src="statIcon(stat.stat)"
          :alt="stat.stat"
        >
        <img
          v-if="stat.difficulty"
          class="difficulty-icon"
          :src="difficultyIcon(stat.difficulty)"
          :alt="stat.difficulty"
        >
        <div
          v-if="stat.modifier"
          class="difficulty-modifer"
          :aria-label="`Difficulty modifier ${stat.modifier}`"
        >
          {{ stat.modifier }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
    import type { StatName, CardStat, Difficulty } from '../types/cards'

    defineProps<{
        stats: CardStat[]
    }>()

    const statIcons: Record<StatName, string> = {
    fight: new URL('../assets/icons/icon_stat_fight.png', import.meta.url).href,
    search: new URL('../assets/icons/icon_stat_search.png', import.meta.url).href,
    sneak: new URL('../assets/icons/icon_stat_sneak.png', import.meta.url).href,
    talk: new URL('../assets/icons/icon_stat_talk.png', import.meta.url).href,
    think: new URL('../assets/icons/icon_stat_think.png', import.meta.url).href,
    health: new URL('../assets/icons/icon_stat_health.png', import.meta.url).href,
    focus: new URL('../assets/icons/icon_stat_focus.png', import.meta.url).href,
    }

    const difficultyIcons: Record<Difficulty, string> = {
    auto: new URL('../assets/icons/icon_difficulty_auto.png', import.meta.url).href,
    easy: new URL('../assets/icons/icon_difficulty_easy.png', import.meta.url).href,
    medium: new URL('../assets/icons/icon_difficulty_medium.png', import.meta.url).href,
    hard: new URL('../assets/icons/icon_difficulty_hard.png', import.meta.url).href,
    impossible: new URL('../assets/icons/icon_difficulty_impossible.png', import.meta.url).href,
    }
    

    const statIcon = (stat?: StatName) => {
    if (!stat) return ''
    return statIcons[stat] ?? statIcons.think
    }

    const difficultyIcon = (difficulty?: Difficulty) => {
    if (!difficulty) return ''
    return difficultyIcons[difficulty] ?? difficultyIcons.medium
    }
</script>

<style scoped>
    .stat-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }

    .stat-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .stat-icon,
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
