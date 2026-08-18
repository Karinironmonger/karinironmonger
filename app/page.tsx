"use client";

import { useMemo, useState } from "react";
import { Footer, TopBar } from "@/components/SiteChrome";
import { useSiteMotion } from "@/components/useSiteMotion";
import { NUMBERS, ROLES, TRACKS, pointsFor } from "@/lib/content";

const tabStyle = (on: boolean): React.CSSProperties => ({
  appearance: "none",
  cursor: "pointer",
  borderRadius: "999px",
  padding: "11px 19px",
  fontFamily: "'Instrument Sans',sans-serif",
  fontSize: "14.5px",
  transition: "background-color .3s ease, color .3s ease, border-color .3s ease",
  background: on ? "#123A2E" : "transparent",
  border: `1px solid ${on ? "#123A2E" : "#CFC2E2"}`,
  color: on ? "#F6F4F0" : "#4A6A5E",
});

export default function ProfilePage() {
  useSiteMotion();
  const [track, setTrack] = useState(0);
  const [fading, setFading] = useState(false);

  const pick = (i: number) => {
    if (i === track) return;
    setFading(true);
    window.setTimeout(() => {
      setTrack(i);
      setFading(false);
    }, 210);
  };

  const active = TRACKS[track];
  const fadeOpacity = fading ? "0" : "1";
  const fadeShift = fading ? "8px" : "0px";
  const cvHref = `/cv/Karin-Barak-Ironmonger-${active.key}.pdf`;
  const showing = `Showing the ${active.tab[0]} version`;

  const tabs = useMemo(
    () =>
      TRACKS.map((t, i) => ({
        label: t.tab[0],
        style: tabStyle(i === track),
        onClick: () => pick(i),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [track]
  );

  const trackTitle = active.title[0];
  const trackLine = active.line[0];
  const trackText = active.text[0];
  const numbers = NUMBERS.map((n) => ({ fig: n.fig, txt: n.txt[0] }));
  const roles = ROLES.map((r) => ({
    when: r.when[0],
    role: r.role[0],
    org: r.org[0],
    points: pointsFor(r, active.key, 0),
  }));

  return (
    <>
      <TopBar active="profile" />
      <section style={{ "position": "relative", "overflow": "hidden", "background": "#0B2A21", "color": "#F6F4F0", "padding": "clamp(56px,8vw,104px) 0 clamp(56px,8vw,104px)" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "inset": 0, "backgroundImage": "radial-gradient(rgba(246,244,240,.09) 1px, transparent 1px)", "backgroundSize": "26px 26px", "opacity": ".7", "pointerEvents": "none" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "width": "62vw", "aspectRatio": 1, "top": "-24vw", "right": "-14vw", "background": "radial-gradient(closest-side, rgba(185,163,217,.2), rgba(185,163,217,0) 72%)", "animation": "kbiDrift 26s ease-in-out infinite", "pointerEvents": "none" }}></div>
      
        <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)", "width": "100%" }}>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "clamp(28px,4vw,56px)", "alignItems": "flex-end", "justifyContent": "space-between" }}>
            <div style={{ "flex": "1 1 400px" }}>
              <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "11px", "fontWeight": 500, "letterSpacing": ".24em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 clamp(24px,4vw,40px)" }}>Employee Experience</p>
              <h1 data-reveal="90" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(52px,10.5vw,146px)", "lineHeight": ".88", "letterSpacing": "-.04em", "margin": 0 }}>Karin Barak<br /><span style={{ "fontWeight": 600 }}>Ironmonger</span></h1>
              <div data-reveal="200" style={{ "display": "flex", "flexWrap": "wrap", "gap": "14px 26px", "alignItems": "center", "margin": "clamp(34px,5vw,54px) 0 0" }}>
                <a href="mailto:Karinironmonger@gmail.com" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#F6F4F0", "textDecoration": "none", "borderBottom": "1px solid rgba(185,163,217,.7)", "paddingBottom": "4px", "transition": "border-color .25s ease" }} className="hb-3">Karinironmonger@gmail.com</a>
                <a href="https://www.linkedin.com/in/karinironmonge" target="_blank" rel="noopener" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#F6F4F0", "textDecoration": "none", "borderBottom": "1px solid rgba(185,163,217,.7)", "paddingBottom": "4px", "transition": "border-color .25s ease" }} className="hb-3">LinkedIn</a>
                <a href="tel:+972523533421" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#F6F4F0", "textDecoration": "none", "borderBottom": "1px solid rgba(185,163,217,.7)", "paddingBottom": "4px", "transition": "border-color .25s ease" }} className="hb-3">052-3533421</a>
              </div>
            </div>
      
          </div>
      
          <div style={{ "margin": "clamp(44px,6vw,76px) 0 0", "paddingTop": "clamp(30px,4vw,44px)", "borderTop": "1px solid rgba(246,244,240,.14)", "display": "flex", "flexWrap": "wrap", "gap": "clamp(28px,4vw,56px)", "alignItems": "flex-start" }}>
            <div data-reveal="60" style={{ "flex": "1 1 380px", "maxWidth": "440px", "overflow": "hidden", "borderRadius": "20px" }}>
              <img src="/assets/img-01.jpg" alt="Karin Barak Ironmonger" data-parallax="0.03" style={{ "width": "100%", "filter": "grayscale(1) contrast(1.05)", "willChange": "transform" }} />
            </div>
            <div style={{ "flex": "1 1 460px", "maxWidth": "58ch" }}>
              <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 clamp(20px,2.6vw,28px)" }}>About</p>
              <p data-reveal="60" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(19px,2vw,25px)", "lineHeight": "1.34", "letterSpacing": "-.018em", "margin": 0 }}>Employee experience goes far beyond events and gifts. It requires a broad perspective that brings together operations, internal communication, employer branding and culture, all working together to create real value for both employees and the business.</p>
              <p data-reveal="120" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16.5px", "lineHeight": "1.62", "color": "rgba(246,244,240,.62)", "margin": "clamp(20px,2.6vw,28px) 0 0" }}>The best employee experiences combine creativity and innovation with a deep understanding of people’s needs. They evolve with the company, connect people to its story and turn everyday moments into something thoughtful, relevant and meaningful.</p>
              <a href="#fields" data-reveal="180" style={{ "display": "inline-flex", "alignItems": "center", "gap": "11px", "marginTop": "clamp(30px,4vw,44px)", "textDecoration": "none", "color": "rgba(246,244,240,.6)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".14em", "textTransform": "uppercase", "transition": "color .25s ease" }} className="hb-4">
                <span>Explore by field</span>
                <span style={{ "width": "28px", "height": "28px", "border": "1px solid rgba(246,244,240,.28)", "borderRadius": "50%", "display": "grid", "placeItems": "center", "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "13px", "animation": "kbiBob 2.6s ease-in-out infinite" }}>&darr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ "background": "#EFEAF6", "color": "#123A2E", "borderTop": "1px solid #DDD8D0", "padding": "clamp(64px,10vw,130px) 0" }}>
        <div style={{ "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)" }}>
          <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 clamp(24px,3.5vw,34px)" }}>01 / Choose a field</p>
      
          <ul data-reveal="60" style={{ "listStyle": "none", "margin": 0, "padding": 0, "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
            {tabs.map((t, _i0) => (
              <li key={_i0}><button type="button" onClick={t.onClick} style={t.style}>{t.label}</button></li>
            ))}
          </ul>
      
          <div data-reveal="120" style={{ "marginTop": "clamp(36px,5vw,56px)", "display": "grid", "gridTemplateColumns": "1fr", "gap": "clamp(24px,4vw,56px)", "maxWidth": "62ch" }}>
            <div style={{ "opacity": `${fadeOpacity}`, "transform": `translateY(${fadeShift})`, "transition": "opacity .3s ease, transform .5s cubic-bezier(.22,1,.36,1)" }}>
              <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".15em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": "0 0 16px" }}>{trackTitle}</p>
              <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(24px,3.2vw,38px)", "lineHeight": "1.16", "letterSpacing": "-.026em", "margin": "0 0 20px", "color": "#123A2E" }}>{trackLine}</p>
              <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16.5px", "lineHeight": "1.62", "color": "#4A6A5E", "margin": 0 }}>{trackText}</p>
              <a href={cvHref} download style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "marginTop": "clamp(26px,3.4vw,36px)", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "15px 24px", "transition": "transform .2s ease,background-color .2s ease" }} className="hb-5">
                <span>Download the CV</span>
                <span aria-hidden="true" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "13px" }}>&darr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ "background": "#F6F4F0", "color": "#123A2E", "padding": "clamp(64px,10vw,130px) 0" }}>
        <div style={{ "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)" }}>
          <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 clamp(24px,3.5vw,34px)" }}>02 / In numbers</p>
          <ul style={{ "listStyle": "none", "margin": 0, "padding": 0, "borderTop": "1px solid #DDD8D0", "maxWidth": "900px" }}>
            {numbers.map((n, _i1) => (
              <li key={_i1} data-reveal="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "clamp(8px,3vw,40px)", "padding": "clamp(22px,3vw,32px) 0", "borderBottom": "1px solid #DDD8D0", "alignItems": "baseline" }}>
                <p style={{ "flex": "0 1 240px", "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1,'opsz' 144", "fontWeight": 400, "fontSize": "clamp(30px,4vw,50px)", "lineHeight": 1, "letterSpacing": "-.035em", "margin": 0 }}>{n.fig}</p>
                <p style={{ "flex": "1 1 320px", "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16px", "lineHeight": "1.55", "color": "#4A6A5E", "margin": 0, "maxWidth": "48ch" }}>{n.txt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section style={{ "background": "#F6F4F0", "color": "#123A2E", "borderTop": "1px solid #DDD8D0", "padding": "clamp(64px,10vw,130px) 0" }}>
        <div style={{ "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)" }}>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px 20px", "alignItems": "baseline", "justifyContent": "space-between" }}>
            <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "#6E56A6", "margin": 0 }}>03 / Experience</p>
            <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".11em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": 0 }}>{showing}</p>
          </div>
      
          <ul style={{ "listStyle": "none", "margin": "clamp(26px,3.5vw,40px) 0 0", "padding": 0, "borderTop": "1px solid #DDD8D0" }}>
            {roles.map((r, _i2) => (
              <li key={_i2} data-reveal="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "clamp(10px,3vw,40px)", "padding": "clamp(26px,3.5vw,42px) 0", "borderBottom": "1px solid #DDD8D0", "alignItems": "flex-start" }}>
                <p style={{ "flex": "0 1 170px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".11em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": 0, "paddingTop": "8px" }}>{r.when}</p>
                <div style={{ "flex": "1 1 400px" }}>
                  <h3 style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(21px,2.5vw,28px)", "letterSpacing": "-.024em", "margin": 0, "lineHeight": "1.16" }}>{r.role}</h3>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(19px,2.1vw,24px)", "letterSpacing": "-.02em", "color": "#6E56A6", "margin": "10px 0 0", "lineHeight": "1.2" }}>{r.org}</p>
                  <ul style={{ "listStyle": "none", "margin": "20px 0 0", "padding": 0, "maxWidth": "64ch", "opacity": `${fadeOpacity}`, "transform": `translateY(${fadeShift})`, "transition": "opacity .3s ease, transform .5s cubic-bezier(.22,1,.36,1)" }}>
                    {r.points.map((p, _i3) => (
                      <li key={_i3} style={{ "position": "relative", "paddingLeft": "20px", "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "15.5px", "lineHeight": "1.6", "color": "#4A6A5E", "marginBottom": "11px" }}>
                        <span aria-hidden="true" style={{ "position": "absolute", "left": 0, "top": "11px", "width": "8px", "height": "1px", "background": "#B9A3D9" }}></span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
      
          <p data-reveal="0" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "margin": "clamp(24px,3vw,34px) 0 0" }}>Earlier: EL AL Israel Airlines, Customer &amp; Operations, 2012 to 2017.</p>
        </div>
      </section>
      
      <section style={{ "background": "#0B2A21", "color": "#F6F4F0", "position": "relative", "overflow": "hidden", "padding": "clamp(72px,11vw,150px) 0" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "inset": 0, "backgroundImage": "radial-gradient(rgba(246,244,240,.07) 1px, transparent 1px)", "backgroundSize": "26px 26px", "pointerEvents": "none" }}></div>
        <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)", "display": "grid", "gridTemplateColumns": "1fr", "gap": "clamp(30px,5vw,60px)", "alignItems": "end" }}>
          <div>
            <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 22px" }}>Next</p>
            <p data-reveal="60" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(32px,5.6vw,74px)", "lineHeight": "1.02", "letterSpacing": "-.036em", "margin": 0, "maxWidth": "24ch" }}><span>There is a lot more to tell.</span> <em style={{ "fontStyle": "italic", "color": "#B9A3D9" }}>Let’s talk.</em></p>
            <a href="/contact" data-reveal="140" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "marginTop": "clamp(32px,4vw,48px)", "textDecoration": "none", "whiteSpace": "nowrap", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "background": "#B9A3D9", "color": "#0B2A21", "border": "1px solid #B9A3D9", "borderRadius": "999px", "padding": "17px 28px", "transition": "transform .22s ease, background-color .22s ease" }} className="hb-6">Contact me</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
