"use client";

import { useEffect } from "react";

const EASE = "cubic-bezier(.22,1,.36,1)";
const reduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Quiet motion, ported from the original site: scroll reveal, gentle image
 * parallax, a scroll-progress hairline and a lilac cursor ring.
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

    /* cursor ring */
    if (window.matchMedia("(pointer: fine)").matches && !reduced()) {
      const ring = document.createElement("div");
      const dot = document.createElement("div");
      ring.setAttribute("aria-hidden", "true");
      dot.setAttribute("aria-hidden", "true");
      Object.assign(ring.style, {
        position: "fixed", top: "0", left: "0", width: "34px", height: "34px",
        marginLeft: "-17px", marginTop: "-17px", borderRadius: "50%",
        border: "1px solid rgba(185,163,217,.85)", pointerEvents: "none",
        zIndex: "9999", opacity: "0",
        transition: `opacity .3s ease, width .28s ${EASE}, height .28s ${EASE}, margin .28s ${EASE}, background-color .28s ease, border-color .28s ease`,
      } as CSSStyleDeclaration);
      Object.assign(dot.style, {
        position: "fixed", top: "0", left: "0", width: "4px", height: "4px",
        marginLeft: "-2px", marginTop: "-2px", borderRadius: "50%",
        background: "#6E56A6", pointerEvents: "none", zIndex: "9999", opacity: "0",
        transition: "opacity .3s ease",
      } as CSSStyleDeclaration);
      document.body.append(ring, dot);

      let tx = 0, ty = 0, rx = 0, ry = 0, on = false, alive = true;
      const move = (e: MouseEvent) => {
        tx = e.clientX; ty = e.clientY;
        dot.style.transform = `translate3d(${tx}px,${ty}px,0)`;
        if (!on) { on = true; rx = tx; ry = ty; ring.style.opacity = "1"; dot.style.opacity = "1"; }
      };
      const leave = () => { on = false; ring.style.opacity = "0"; dot.style.opacity = "0"; };
      const loop = () => {
        if (!alive) return;
        rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
        ring.style.transform = `translate3d(${rx.toFixed(2)}px,${ry.toFixed(2)}px,0)`;
        requestAnimationFrame(loop);
      };
      const hot = "a, button, input, textarea, select";
      const grow = (big: boolean) => {
        ring.style.width = ring.style.height = big ? "62px" : "34px";
        ring.style.marginLeft = ring.style.marginTop = big ? "-31px" : "-17px";
        ring.style.backgroundColor = big ? "rgba(185,163,217,.16)" : "transparent";
        ring.style.borderColor = big ? "rgba(185,163,217,.55)" : "rgba(185,163,217,.85)";
      };
      const over = (e: Event) => { if ((e.target as Element)?.closest?.(hot)) grow(true); };
      const out = (e: Event) => { if ((e.target as Element)?.closest?.(hot)) grow(false); };
      window.addEventListener("mousemove", move, { passive: true });
      document.addEventListener("mouseleave", leave);
      document.addEventListener("mouseover", over);
      document.addEventListener("mouseout", out);
      requestAnimationFrame(loop);
      cleanups.push(() => {
        alive = false;
        window.removeEventListener("mousemove", move);
        document.removeEventListener("mouseleave", leave);
        document.removeEventListener("mouseover", over);
        document.removeEventListener("mouseout", out);
        ring.remove(); dot.remove();
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
