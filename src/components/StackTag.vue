<script setup lang="ts">
import { computed } from "vue";
import { techColor } from "../data/techColors";

const props = defineProps<{ name: string }>();
const color = computed(() => techColor(props.name));
</script>

<template>
  <span class="tag" :style="{ '--dot': color }">{{ name }}</span>
</template>

<style scoped>
.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid var(--line);
  padding: 6px 10px 6px 22px;
  color: var(--ink-soft);
  background: var(--surface);
  position: relative;
  transition:
    border-color 0.2s,
    color 0.2s,
    transform 0.2s;
  display: inline-block;
}
.tag::before {
  content: "";
  position: absolute;
  left: 9px;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dot);
}
.tag:hover {
  border-color: var(--dot);
  color: var(--ink);
  transform: translateY(-2px);
}
</style>
