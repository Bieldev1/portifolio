<script setup lang="ts">
import { useReveal } from "../composables/useReveal";
import StackTag from "./StackTag.vue";

const sectionRef = useReveal();
const tags = ["C# .NET", "Vue.js", "Clean Architecture", "RabbitMQ", "Git Flow"];
</script>

<template>
  <section ref="sectionRef" class="intro reveal" id="sobre">
    <div class="top-row">
      <img class="photo" src="/assets/gabriel.png" alt="Foto de Gabriel Rocha Santos" width="112" height="112" />
      <div>
        <p class="eyebrow">Gabriel Rocha Santos · Viktech</p>
        <h1>Desenvolvedor <span>Full Stack .NET</span>.</h1>
      </div>
    </div>
    <div class="body-grid">
      <p>
        Full stack .NET com <strong>mais de 4 anos de experiência</strong>. Desde <strong>novembro de 2025</strong>
        sou o único responsável pela área técnica da empresa onde trabalho — backend, frontend, integrações e
        infraestrutura de 4 projetos, sem ninguém revisando atrás de mim. Antes disso, subi de júnior a pleno
        construindo a mesma plataforma que hoje mantenho sozinho.
      </p>
      <p>
        No back-end é <strong>C#</strong> com Clean Architecture, CQRS e DDD. No front, <strong>Vue.js</strong>. No
        meio, filas e integrações de alto volume — WhatsApp, Messenger, Google Maps, Correios, OpenAI e C6 Bank —
        que não podem cair.
      </p>
    </div>
    <div class="tag-row">
      <StackTag v-for="tag in tags" :key="tag" :name="tag" />
    </div>
    <a class="resume-link" href="/assets/Gabriel_Rocha_Santos_Curriculo.pdf" target="_blank" rel="noopener noreferrer">
      Baixar currículo (PDF) ↗
    </a>
  </section>
</template>

<style scoped>
.intro {
  padding: 96px 0 84px;
}
.top-row {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 44px;
}
.photo {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--surface-raised);
  box-shadow: 0 0 0 2px var(--line);
  flex-shrink: 0;
}
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal-2);
  margin: 0 0 18px;
}
h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(32px, 4.6vw, 54px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  text-wrap: balance;
}
h1 span {
  color: var(--signal);
}
.body-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 68rem;
}
.body-grid p {
  font-size: 18px;
  margin: 0;
  color: var(--ink-soft);
}
.body-grid strong {
  color: var(--ink);
  font-weight: 600;
}
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 36px;
}
.resume-link {
  display: inline-block;
  margin-top: 24px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1.5px solid var(--signal);
  padding-bottom: 2px;
}
.resume-link:hover {
  color: var(--signal-2);
}

@media (max-width: 760px) {
  .body-grid {
    grid-template-columns: 1fr;
  }
  .top-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
