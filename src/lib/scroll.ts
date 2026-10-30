import { DEFAULT_HEADER_OFFSET } from "@/constants/portfolio";

export interface LenisScrollInstance {
  scrollTo: (
    target: number | string | HTMLElement,
    options?: { offset?: number; immediate?: boolean }
  ) => void;
  raf: (time: number) => void;
  destroy: () => void;
}

let activeLenisInstance: LenisScrollInstance | null = null;

export function setLenisInstance(instance: LenisScrollInstance | null): void {
  activeLenisInstance = instance;
}

export function scrollToSection(targetId: string, offset: number = DEFAULT_HEADER_OFFSET): void {
  if (typeof window === "undefined") return;

  if (activeLenisInstance) {
    activeLenisInstance.scrollTo(`#${targetId}`, { offset: -offset });
    return;
  }

  const element = document.getElementById(targetId);
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export function scrollToTop(): void {
  if (typeof window === "undefined") return;

  if (activeLenisInstance) {
    activeLenisInstance.scrollTo(0);
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

