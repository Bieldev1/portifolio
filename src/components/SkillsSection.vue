<script setup lang="ts">
import { onMounted, ref } from "vue";
import { skillGroups } from "../data/content";
import { useReveal } from "../composables/useReveal";

const sectionRef = useReveal();
const animated = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animated.value = true;
          observer.disconnect();
        }
      }
    },
    { threshold: 0.3 },
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section ref="sectionRef" class="skills reveal" id="habilidades">
    <h2>O que uso todo dia</h2>
    <div class="skills-grid">
      <div v-for="group in skillGroups" :key="group.title" class="skill-group">
        <p class="group-title">{{ group.title }}</p>
        <div v-for="item in group.items" :key="item.name" class="skill-item">
          <div class="skill-info">
            <span>{{ item.name }}</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" :style="{ width: animated ? `${item.percent}%` : '0%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 84px 0;
  border-top: 1px solid var(--line);
}
h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(24px, 2.6vw, 32px);
  margin: 0 0 40px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.skill-group {
  background: var(--surface-raised);
  border: 1px solid var(--line);
  box-shadow: 4px 4px 0 var(--paper-2);
  padding: 22px;
}
.group-title {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--signal-2);
  margin: 0 0 16px;
}
.skill-item {
  margin-bottom: 12px;
}
.skill-info {
  font-size: 13px;
  margin-bottom: 5px;
  color: var(--ink);
}
.skill-bar {
  height: 3px;
  background: var(--paper-2);
}
.skill-fill {
  height: 100%;
  background: var(--signal);
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (max-width: 860px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
