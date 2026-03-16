import { useState, useEffect } from "react";

interface FadeStyle {
  opacity: number;
  transform: string;
  transition: string;
}

export function useEntranceAnimation() {
  const [triggered, setTriggered] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const visible = prefersReducedMotion || triggered;

  const fadeUp = (delay: number): FadeStyle => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(22px)",
    transition: prefersReducedMotion
      ? "none"
      : `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return { visible, prefersReducedMotion, fadeUp };
}
