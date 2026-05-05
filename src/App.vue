<template>
  <div id="app">
    <CardPages
      :cards="forestCards"
    />

  </div>
</template>

<script setup lang="ts">
import CardPages from './components/CardPages.vue'
import type {
  CategoryCardData,
  QuestCardData,
  EntityCardData,
} from './types/cards'
import forestCardData from './data/forest_cards.json'

const forestCards = forestCardData as (EntityCardData | QuestCardData | CategoryCardData)[]
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1c2e30;
}
</style>
