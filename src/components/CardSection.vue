<template>
  <div 
    class="card-section-details"
  >
    <span class="card-section-header">{{ section.header }}:</span> {{ section.details }}
  </div>
</template>

<script setup lang="ts">
  import type { CardSection } from '../types/cards'
  defineProps<{
    section: CardSection
  }>()
</script>

<style scoped>
  .card-section-header {
    font-size: 9pt;
    color: #1c2e30;
    display: inline;
    font-weight:700;
    font-family: "Almendra SC", serif;
    font-style: normal;
  }

  .card-section-details {
    font-size: 8pt;
    margin-bottom:.08in;
  }
</style>