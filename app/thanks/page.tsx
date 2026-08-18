"use client";

import { Footer, TopBar } from "@/components/SiteChrome";
import { useSiteMotion } from "@/components/useSiteMotion";

export default function ThanksPage() {
  useSiteMotion();
  return (
    <>
      <TopBar active="contact" progress={false} />
      <section style={{ "position": "relative", "overflow": "hidden", "background": "#0B2A21", "color": "#F6F4F0", "minHeight": "78vh", "display": "flex", "alignItems": "center", "padding": "clamp(60px,9vw,120px) 0" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "inset": 0, "backgroundImage": "radial-gradient(rgba(246,244,240,.08) 1px, transparent 1px)", "backgroundSize": "26px 26px", "pointerEvents": "none" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "width": "56vw", "aspectRatio": 1, "top": "-24vw", "right": "-12vw", "background": "radial-gradient(closest-side, rgba(185,163,217,.18), rgba(185,163,217,0) 72%)", "animation": "kbiDrift 28s ease-in-out infinite", "pointerEvents": "none" }}></div>
      
        <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)", "width": "100%" }}>
          <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 22px" }}>Sent</p>
          <h1 data-reveal="70" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(42px,7.6vw,104px)", "lineHeight": ".94", "letterSpacing": "-.04em", "margin": 0, "maxWidth": "18ch" }}>Thank you. It landed.</h1>
          <p data-reveal="140" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "17px", "lineHeight": "1.6", "color": "rgba(246,244,240,.66)", "margin": "clamp(22px,3vw,30px) 0 0" }}>I’ll come back to you shortly.</p>
          <div data-reveal="200" style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px", "margin": "clamp(30px,4vw,44px) 0 0" }}>
            <a href="/" style={{ "display": "inline-flex", "alignItems": "center", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#0B2A21", "background": "#B9A3D9", "border": "1px solid #B9A3D9", "borderRadius": "999px", "padding": "14px 22px", "transition": "transform .2s ease,background-color .2s ease" }} className="hb-6">Back to the profile</a>
            <a href="/social" style={{ "display": "inline-flex", "alignItems": "center", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "border": "1px solid rgba(246,244,240,.24)", "borderRadius": "999px", "padding": "14px 22px", "transition": "border-color .2s ease" }} className="hb-8">See the work</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
