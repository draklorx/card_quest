<template>
  <div 
    class="card-section-details"
  >
    <span class="card-section-header">{{ sectionTitle }}:</span> {{ sectionDetails }}
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { CardSection } from '../models/cards'
  const props = defineProps<{
    section: CardSection
  }>()

  const sectionTitle = computed(() => props.section.header ?? props.section.name ?? '')
  const sectionDetails = computed(() => props.section.details ?? props.section.description ?? '')
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
