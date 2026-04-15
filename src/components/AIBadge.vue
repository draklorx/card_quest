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
  bottom: 1.2in;
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
</style>