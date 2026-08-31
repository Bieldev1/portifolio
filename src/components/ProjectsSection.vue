<script setup lang="ts">
import { personalProjects, companyProjects, archLayers, archPatterns } from "../data/content";
import type { Project } from "../data/content";
import StackTag from "./StackTag.vue";
import { useReveal } from "../composables/useReveal";

const sectionRef = useReveal();

function isExternal(project: Project) {
  return project.href.startsWith("http");
}
</script>

<template>
  <section ref="sectionRef" class="projects reveal" id="projetos">
    <div class="head-row">
      <h2>O que está em produção</h2>

      <aside class="arch-note">
        <p class="note-label">como eu construo</p>
        <div class="layers">
          <span v-for="(layer, i) in archLayers" :key="layer.name" class="layer">
            {{ layer.name }}<span v-if="i < archLayers.length - 1" class="sep">→</span>
          </span>
        </div>
        <div class="patterns">
          <span v-for="p in archPatterns" :key="p" class="pattern">{{ p }}</span>
        </div>
      </aside>
    </div>

    <div class="group">
      <p class="group-label">Na empresa</p>
      <div class="project-list">
        <a
          v-for="project in companyProjects"
          :key="project.code"
          class="project-row"
          :href="project.href"
          :target="isExternal(project) ? '_blank' : undefined"
          :rel="isExternal(project) ? 'noopener noreferrer' : undefined"
        >
          <div class="project-idx">{{ project.code }}</div>
          <div class="project-main">
            <div class="title-row">
              <h3>{{ project.name }}</h3>
              <span class="badge">{{ project.badge }}</span>
            </div>
            <p>{{ project.description }}</p>
            <div class="stack-row">
              <StackTag v-for="tag in project.stack" :key="tag" :name="tag" />
            </div>
          </div>
          <span class="project-link">{{ project.linkLabel }} ↗</span>
        </a>
      </div>
    </div>

    <div class="group">
      <p class="group-label">Projetos pessoais</p>
      <div class="project-list">
        <a
          v-for="project in personalProjects"
          :key="project.code"
          class="project-row"
          :href="project.href"
          :target="isExternal(project) ? '_blank' : undefined"
          :rel="isExternal(project) ? 'noopener noreferrer' : undefined"
        >
          <div class="project-idx">{{ project.code }}</div>
          <div class="project-main">
            <div class="title-row">
              <h3>{{ project.name }}</h3>
              <span class="badge">{{ project.badge }}</span>
            </div>
            <p>{{ project.description }}</p>
            <div class="stack-row">
              <StackTag v-for="tag in project.stack" :key="tag" :name="tag" />
            </div>
          </div>
          <span class="project-link">{{ project.linkLabel }} ↗</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 84px 0;
  border-top: 1px solid var(--line);
}
.head-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
  margin-bottom: 48px;
}
h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(24px, 2.6vw, 32px);
  margin: 0;
}
.arch-note {
  border-left: 2px solid var(--signal);
  padding-left: 18px;
}
.note-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--signal-2);
  margin: 0 0 10px;
}
.layers {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--ink);
  margin-bottom: 10px;
}
.layers .sep {
  color: var(--ink-soft);
  margin: 0 6px;
}
.patterns {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.patterns span {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-soft);
}
.patterns span:not(:last-child)::after {
  content: "·";
  margin-left: 6px;
  color: var(--line);
}

.group {
  margin-top: 44px;
}
.group:first-of-type {
  margin-top: 0;
}
.group-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin: 0 0 4px;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.project-row {
  display: grid;
  grid-template-columns: 56px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 26px 24px;
  background: var(--surface-raised);
  border: 1px solid var(--line);
  box-shadow: 5px 5px 0 var(--paper-2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
}
.project-row:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--paper-2);
}
.project-idx {
  font-family: var(--font-mono);
  color: var(--signal);
  font-size: 12px;
  border: 1.5px solid var(--signal);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-6deg);
}
.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 6px;
}
.project-main h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 21px;
  margin: 0;
}
.badge {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid var(--line);
  color: var(--ink-soft);
  padding: 3px 8px;
}
.project-main p {
  margin: 0 0 10px;
  color: var(--ink-soft);
  font-size: 15px;
  max-width: 62ch;
}
.stack-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.project-link {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink);
  white-space: nowrap;
  border: 1.5px solid var(--ink);
  padding: 10px 16px;
}
.project-row:hover .project-link {
  border-color: var(--signal);
  color: var(--signal-2);
  background: color-mix(in srgb, var(--signal) 8%, transparent);
}

@media (max-width: 760px) {
  .head-row {
    grid-template-columns: 1fr;
  }
  .project-row {
    grid-template-columns: 1fr;
  }
}
</style>
