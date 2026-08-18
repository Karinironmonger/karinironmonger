"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(.22,1,.36,1)";
const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Quiet motion, ported from the original site: scroll reveal, gentle image
 * parallax and a scroll-progress hairline.
 */
export function useSiteMotion() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* reveal */
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (items.length && !reduced() && "IntersectionObserver" in window) {
      items.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const d = Number(el.dataset.reveal) || 0;
            el.style.transition = `opacity .9s ${EASE} ${d}ms, transform .9s ${EASE} ${d}ms`;
            el.style.opacity = "1";
            el.style.transform = "none";
            io.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
      );
      items.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* parallax */
    const pxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (pxEls.length && !reduced()) {
      let raf: number | null = null;
      const tick = () => {
        raf = null;
        const vh = window.innerHeight;
        pxEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const amt = parseFloat(el.dataset.parallax || "0.06");
          const mid = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0,${(-mid * amt).toFixed(2)}px,0)`;
        });
      };
      const onScroll = () => {
        if (raf === null) raf = requestAnimationFrame(tick);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      tick();
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });
    }

    /* scroll progress */
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    if (bar) {
      bar.style.transformOrigin = "left center";
      const tick = () => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        bar.style.transform = `scaleX(${p.toFixed(4)})`;
      };
      window.addEventListener("scroll", tick, { passive: true });
      window.addEventListener("resize", tick);
      tick();
      cleanups.push(() => {
        window.removeEventListener("scroll", tick);
        window.removeEventListener("resize", tick);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
