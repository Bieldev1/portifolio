<script setup lang="ts">
import MarginRail from "./components/MarginRail.vue";
import IntroSection from "./components/IntroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <div class="page">
    <MarginRail />
    <main>
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  </div>
</template>

<style scoped>
.page {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 0 56px;
}
main {
  min-width: 0;
}

@media (max-width: 960px) {
  .page {
    grid-template-columns: 1fr;
    padding: 0;
  }
  main {
    padding: 0 24px;
  }
}
</style>
