<template>
    <div class="bottom-overlay" :style="parchmentStyle"><slot /></div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const parchmentBackground = new URL('../assets/parchment_from_bottom_bg.png', import.meta.url).href
const parchmentStyle = computed(() => ({
  backgroundImage: `url("${parchmentBackground}")`,
}))
</script>
<style scoped>

.bottom-overlay {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 0.25in;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>