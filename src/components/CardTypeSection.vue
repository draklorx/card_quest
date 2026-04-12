<template>
  <section :class="['card-type-section', { 'card-section--break': pageBreak }]">
    <div class="card-grid">
      <component
        :is="cardComponent"
        v-for="item in items.slice(0, 9)"
        :key="item.name"
        :item="item"
        :type="type"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
type CardTypeSectionProps = {
  title: string
  items: Array<Record<string, any>>
  type: string
  cardComponent: any
  pageBreak?: boolean
}

const props = defineProps<CardTypeSectionProps>()
</script>
