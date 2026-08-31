import { onMounted, onUnmounted, ref, type Ref } from "vue";

/**
 * Observa uma lista de seções (por id) e devolve qual delas está "em foco"
 * no momento — usado pela margem lateral para saber o que anotar.
 */
export function useActiveSection(ids: string[]): Ref<string> {
  const activeId = ref(ids[0] ?? "");
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id;
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
  });

  onUnmounted(() => observer?.disconnect());

  return activeId;
}
