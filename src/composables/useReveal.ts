import { onMounted, onUnmounted, ref, type Ref } from "vue";

/**
 * Marca o elemento como visível (classe .visible) quando ele entra na
 * viewport, disparando a transição de fade/slide definida em style.css.
 */
export function useReveal(): Ref<HTMLElement | null> {
  const target = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value) return;
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(target.value);
  });

  onUnmounted(() => observer?.disconnect());

  return target;
}
