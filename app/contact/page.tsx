"use client";

import { Footer, TopBar } from "@/components/SiteChrome";
import { useSiteMotion } from "@/components/useSiteMotion";

export default function ContactPage() {
  useSiteMotion();
  return (
    <>
      <TopBar active="contact" progress={false} />
      <section style={{ "position": "relative", "overflow": "hidden", "background": "#0B2A21", "color": "#F6F4F0", "minHeight": "80vh", "padding": "clamp(52px,8vw,110px) 0 clamp(64px,9vw,120px)" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "inset": 0, "backgroundImage": "radial-gradient(rgba(246,244,240,.08) 1px, transparent 1px)", "backgroundSize": "26px 26px", "pointerEvents": "none" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "width": "56vw", "aspectRatio": 1, "bottom": "-26vw", "left": "-12vw", "background": "radial-gradient(closest-side, rgba(185,163,217,.18), rgba(185,163,217,0) 72%)", "animation": "kbiDrift 28s ease-in-out infinite", "pointerEvents": "none" }}></div>
      
        <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)", "display": "flex", "flexWrap": "wrap", "gap": "clamp(36px,6vw,72px)", "alignItems": "flex-start" }}>
          <div style={{ "flex": "1 1 380px" }}>
            <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 22px" }}>Contact</p>
            <h1 data-reveal="70" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(46px,8.4vw,112px)", "lineHeight": ".94", "letterSpacing": "-.042em", "margin": 0 }}>Let’s talk.</h1>
            <p data-reveal="140" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "17px", "lineHeight": "1.6", "color": "rgba(246,244,240,.66)", "maxWidth": "42ch", "margin": "clamp(22px,3vw,30px) 0 0" }}>Reach me directly and I’ll come back to you.</p>
            <div data-reveal="200" style={{ "margin": "clamp(30px,4vw,44px) 0 0", "paddingTop": "24px", "borderTop": "1px solid rgba(246,244,240,.14)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px" }}>
              <a href="mailto:Karinironmonger@gmail.com" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#F6F4F0", "textDecoration": "none", "borderBottom": "1px solid rgba(185,163,217,.7)", "paddingBottom": "4px", "transition": "border-color .25s ease" }} className="hb-3">Karinironmonger@gmail.com</a>
              <a href="https://www.linkedin.com/in/karinironmonger" target="_blank" rel="noopener" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#F6F4F0", "textDecoration": "none", "borderBottom": "1px solid rgba(185,163,217,.7)", "paddingBottom": "4px", "transition": "border-color .25s ease" }} className="hb-3">linkedin.com/in/karinironmonger</a>
              <a href="tel:+972523533421" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#F6F4F0", "textDecoration": "none", "borderBottom": "1px solid rgba(185,163,217,.7)", "paddingBottom": "4px", "transition": "border-color .25s ease" }} className="hb-3">052-3533421</a>
            </div>
          </div>
      
        </div>
      </section>
      <Footer right={<a className="hv-lilac" href="/social" style={{ color: "rgba(246,244,240,.5)", textDecoration: "none", transition: "color .2s ease" }}>See the work</a>} />
    </>
  );
}
