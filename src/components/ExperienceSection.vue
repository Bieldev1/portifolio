<script setup lang="ts">
import { timeline } from "../data/content";
import StackTag from "./StackTag.vue";
import { useReveal } from "../composables/useReveal";

const sectionRef = useReveal();
</script>

<template>
  <section ref="sectionRef" class="experience reveal" id="experiencia">
    <h2>Como cheguei aqui</h2>
    <div class="rows">
      <div v-for="item in timeline" :key="item.period" class="row">
        <div class="period">
          <span>{{ item.period }}</span>
          <span v-if="item.current" class="current-dot" aria-hidden="true"></span>
        </div>
        <div class="content">
          <h3>{{ item.role }}</h3>
          <p>{{ item.description }}</p>
          <div class="stack-row">
            <StackTag v-for="tag in item.stack" :key="tag" :name="tag" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 84px 0;
  border-top: 1px solid var(--line);
}
h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(24px, 2.6vw, 32px);
  margin: 0 0 48px;
}
.rows {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
  padding: 28px 24px;
  background: var(--surface-raised);
  border: 1px solid var(--line);
  box-shadow: 5px 5px 0 var(--paper-2);
}
.period {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink-soft);
  display: flex;
  align-items: baseline;
  gap: 8px;
  white-space: nowrap;
}
.current-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--signal);
}
.content h3 {
  font-family: var(--font-display);
  font-size: 19px;
  margin: 0 0 8px;
}
.content p {
  margin: 0 0 14px;
  color: var(--ink-soft);
  font-size: 15px;
  max-width: 62ch;
}
.stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 760px) {
  .row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
