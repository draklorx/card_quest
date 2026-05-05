<template>
  <template v-for="(cardChunk, chunkIndex) in cardChunks" :key="chunkIndex">
    <section class="card-type-section card-section-break">
      <div class="card-grid">
        <component
          v-for="(card, index) in cardChunk"
          :is="getCardComponent(card.card_type)"
          :key="index"
          :card="card"
          :type="card.card_type"
        />
      </div>
    </section>
    <section class="card-type-section card-section-break">
      <div class="card-grid">
        <Card
          v-for="(card, index) in cardChunk"
          :key="index"
          :type="card.card_type"
          :background-image="backImages[card.card_type as keyof typeof backImages]"
          background-size="cover"
          background-position="center"
        />
      </div>
    </section>
  </template>
</template>

<script setup lang="ts">
import EntityCard from "./EntityCard.vue";
import QuestCard from "./QuestCard.vue";
import CategoryCard from "./CategoryCard.vue";
import { computed, type Component } from "vue";
import Card from "./Card.vue";
import {
  CategoryCardData,
  QuestCardData,
  EntityCardData
} from "../types/cards";

const props = defineProps<{
  cards: (EntityCardData | QuestCardData | CategoryCardData)[];
}>();

const backImages = {
  ally: new URL("../assets/cards/card_back_ally.png", import.meta.url).href,
  beast: new URL("../assets/cards/card_back_beast.png", import.meta.url).href,
  enemy: new URL("../assets/cards/card_back_enemy.png", import.meta.url).href,
  quest: new URL("../assets/cards/card_back_quest.png", import.meta.url).href,
  location: new URL("../assets/cards/card_back_location.png", import.meta.url)
    .href,
  race: new URL("../assets/cards/card_back_race.png", import.meta.url).href,
  class: new URL("../assets/cards/card_back_class.png", import.meta.url).href,
  treasure: new URL("../assets/cards/card_back_treasure.png", import.meta.url)
    .href,
  villain: new URL("../assets/cards/card_back_villain.png", import.meta.url).href,
  objective: new URL("../assets/cards/card_back_objective.png", import.meta.url)
    .href,
  finding: new URL("../assets/cards/card_back_finding.png", import.meta.url)
    .href,
};

const getCardComponent = (cardType: string): Component => {
  switch (cardType) {
    case "ally":
    case "beast":
    case "enemy":
    case "location":
    case "race":
    case "class":
    case "treasure":
    case "biome":
    case "villain":
      return EntityCard;
    case "quest":
    case "objective":
      return QuestCard;
    case "finding":
      return CategoryCard;
    default:
      throw new Error(`Unknown card type: ${cardType}`);
  }
};

const CARDS_PER_PAGE = 9;

const cardChunks = computed(() => {
  const chunks: (EntityCardData | QuestCardData | CategoryCardData)[][] = [];

  for (let index = 0; index < props.cards.length; index += CARDS_PER_PAGE) {
    chunks.push(props.cards.slice(index, index + CARDS_PER_PAGE));
  }

  return chunks;
});
</script>

<style scoped>
.card-type-section {
  margin-bottom: 0;
}

.card-section-break {
  page-break-before: always;
  break-before: page;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 2.5in);
  gap: 0in;
  justify-content: start;
}
</style>
