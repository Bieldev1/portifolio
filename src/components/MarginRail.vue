<script setup lang="ts">
import { useActiveSection } from "../composables/useActiveSection";

const sections = [
  { id: "sobre", label: "Intro", note: "quem sou e o que eu realmente faço" },
  { id: "experiencia", label: "Trajetória", note: "júnior → pleno → único dev" },
  { id: "projetos", label: "Projetos", note: "o que está em produção — e como é construído" },
  { id: "habilidades", label: "Stack", note: "as ferramentas que uso todo dia" },
  { id: "contato", label: "Contato", note: "e-mail, whatsapp ou linkedin" },
];

const activeId = useActiveSection(sections.map((s) => s.id));
</script>

<template>
  <nav class="rail" aria-label="Seções da página">
    <a href="#sobre" class="mark">GR<span>·</span>SANTOS</a>
    <ol>
      <li v-for="s in sections" :key="s.id" :class="{ active: activeId === s.id }">
        <a :href="`#${s.id}`">
          <span class="label">{{ s.label }}</span>
          <span class="note">{{ s.note }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.rail {
  position: sticky;
  top: 48px;
  align-self: start;
  height: fit-content;
  padding: 8px 0 40px;
}
.mark {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px;
  color: var(--ink);
  text-decoration: none;
  margin-bottom: 48px;
}
.mark span {
  color: var(--signal);
}
ol {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
}
li a {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  border-left: 2px solid var(--line);
  padding-left: 14px;
  transition: border-color 0.25s ease;
}
.label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-soft);
  transition: color 0.25s ease;
}
.note {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 13px;
  color: var(--ink-soft);
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition:
    opacity 0.25s ease,
    max-height 0.25s ease;
}
li.active a {
  border-color: var(--signal);
}
li.active .label {
  color: var(--signal-2);
}
li.active .note {
  opacity: 1;
  max-height: 40px;
}
li a:hover .label {
  color: var(--ink);
}

@media (max-width: 960px) {
  .rail {
    position: sticky;
    top: 0;
    padding: 12px 20px;
    background: color-mix(in srgb, var(--paper) 92%, transparent);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--line);
    z-index: 30;
  }
  .mark {
    display: inline-block;
    margin: 0 20px 0 0;
    font-size: 15px;
  }
  ol {
    display: inline-flex;
    flex-direction: row;
    gap: 18px;
    vertical-align: middle;
  }
  li a {
    border-left: none;
    border-bottom: 2px solid transparent;
    padding-left: 0;
    padding-bottom: 2px;
  }
  li.active a {
    border-bottom-color: var(--signal);
  }
  .note {
    display: none;
  }
}
</style>
