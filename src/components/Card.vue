<template>
  <div 
    :class="cardClasses" 
    :style="cardStyle"
  >
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: string
  backgroundImage?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundPositionY?: string
}>()
const cardClasses = computed(() => [
  'card',
  props.type ? `card--${props.type}` : undefined,
])
const borderImages = {
  ally: new URL('../assets/cards/card_border_ally.png', import.meta.url).href,
  beast: new URL('../assets/cards/card_border_beast.png', import.meta.url).href,
  enemy: new URL('../assets/cards/card_border_enemy.png', import.meta.url).href,
  quest: new URL('../assets/cards/card_border_quest.png', import.meta.url).href,
  location: new URL('../assets/cards/card_border_location.png', import.meta.url).href,
  race: new URL('../assets/cards/card_border_race.png', import.meta.url).href,
  class: new URL('../assets/cards/card_border_class.png', import.meta.url).href,
  treasure: new URL('../assets/cards/card_border_treasure.png', import.meta.url).href,
  villain: new URL('../assets/cards/card_border_villain.png', import.meta.url).href,
  objective: new URL('../assets/cards/card_border_objective.png', import.meta.url).href,
  finding: new URL('../assets/cards/card_border_finding.png', import.meta.url).href,
}
const cardBorder = borderImages[props.type as keyof typeof borderImages]

const cardStyle = computed(() => {
  const style: Record<string, string> = {
    '--card-border': `url("${cardBorder}")`,
  }
  if (props.backgroundImage) {
    style.backgroundImage = `url("${props.backgroundImage}")`
    style.backgroundSize = props.backgroundSize ?? 'contain'
    style.backgroundPosition = props.backgroundPosition ?? 'top'
    if (props.backgroundPositionY) {
      style.backgroundPositionY = props.backgroundPositionY
    }
    style.backgroundRepeat = 'no-repeat'
  }
  return style
})
</script>

<style scoped>
.card {
  width: 2.5in;
  height: 3.5in;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
  color: #1c2e30;
  overflow: hidden;
  position: relative;
}
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--card-border);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  pointer-events: none;
  z-index: 2;
}


.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  z-index: 1;
}
</style>
