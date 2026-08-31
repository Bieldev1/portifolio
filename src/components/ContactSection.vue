<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useReveal } from "../composables/useReveal";

const sectionRef = useReveal();

// E-mail e WhatsApp são montados em runtime (não como texto literal no HTML
// estático) para dificultar a coleta automática por scrapers de bots.
const emailHref = ref("");
const emailText = ref("");
const whatsappHref = ref("");
const whatsappText = ref("");

onMounted(() => {
  const user = "grochasantos67";
  const domain = "gmail.com";
  emailHref.value = `mailto:${user}@${domain}`;
  emailText.value = `${user}@${domain}`;

  const phone = "5511963854807";
  whatsappHref.value = `https://wa.me/${phone}`;
  whatsappText.value = "(11) 96385-4807";
});

const links = [
  { label: "GitHub", value: "github.com/Bieldev1", href: "https://github.com/Bieldev1" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bieldev1",
    href: "https://linkedin.com/in/bieldev1/",
  },
];
</script>

<template>
  <footer ref="sectionRef" class="contact reveal" id="contato">
    <h2>Fala comigo</h2>
    <p class="lede">E-mail, WhatsApp ou LinkedIn — o que for mais rápido pra você.</p>

    <div class="contact-list">
      <a class="contact-item" :href="emailHref">
        <span class="k">E-mail</span>
        <span class="v">{{ emailText || "carregando…" }}</span>
      </a>
      <a class="contact-item" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
        <span class="k">WhatsApp</span>
        <span class="v">{{ whatsappText || "carregando…" }}</span>
      </a>
      <a
        v-for="link in links"
        :key="link.label"
        class="contact-item"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="k">{{ link.label }}</span>
        <span class="v">{{ link.value }}</span>
      </a>
    </div>

    <div class="footer-bottom">
      <span>Gabriel Rocha Santos · Desenvolvedor Full Stack · {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  padding: 84px 0 96px;
  border-top: 1px solid var(--line);
}
h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(28px, 4vw, 44px);
  margin: 0 0 12px;
}
.lede {
  color: var(--ink-soft);
  font-size: 17px;
  margin: 0 0 40px;
}
.contact-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
}
.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 18px 0;
  border-top: 1px solid var(--line);
  text-decoration: none;
  color: var(--ink);
}
.contact-list a:last-child {
  border-bottom: 1px solid var(--line);
}
.contact-item .k {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
}
.contact-item .v {
  font-family: var(--font-display);
  font-size: 17px;
}
.contact-item:hover .v {
  color: var(--signal-2);
}
.footer-bottom {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
