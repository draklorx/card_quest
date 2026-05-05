<template>
  <div 
    class="ai-badge"
    aria-label="AI generated art disclaimer"
  >
    ai
  </div>
</template>

<style scoped>
.ai-badge {
  position: absolute;
  right: 0.2in;
  bottom: 1.36in;
  width: 0.15in;
  height: 0.15in;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(255 255 255 / 50%);
  color: rgb(28 46 48 / 90%);
  font-size: 0.1in;
  font-weight: 700;
  line-height: 1;
  padding-bottom: 0.01in;
  text-transform: uppercase;
  pointer-events: none;
}

.card--race .ai-badge,
.card--class .ai-badge {
  bottom: 1.6in;
}


.card--treasure .ai-badge{
  bottom: 1.8in;
}

.card--location .ai-badge {
  bottom: 1.2in;
}

.card--biome .ai-badge {
  bottom: .6in;
}
</style>