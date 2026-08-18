"use client";

import { Footer, TopBar } from "@/components/SiteChrome";
import { useSiteMotion } from "@/components/useSiteMotion";

export default function SocialPage() {
  useSiteMotion();
  return (
    <>
      <TopBar active="social" />
      <section style={{ "background": "#0B2A21", "color": "#F6F4F0", "position": "relative", "overflow": "hidden", "padding": "clamp(56px,9vw,120px) 0 clamp(48px,7vw,88px)" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "inset": 0, "backgroundImage": "radial-gradient(rgba(246,244,240,.08) 1px, transparent 1px)", "backgroundSize": "26px 26px", "pointerEvents": "none" }}></div>
        <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)" }}>
          <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 22px" }}>Social</p>
          <h1 data-reveal="70" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(42px,7.6vw,104px)", "lineHeight": ".94", "letterSpacing": "-.038em", "margin": 0 }}>Culture, out loud.</h1>
          <p data-reveal="140" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "17px", "lineHeight": "1.6", "color": "rgba(246,244,240,.66)", "maxWidth": "52ch", "margin": "clamp(22px,3vw,30px) 0 0" }}>Selected posts about the events, projects and everyday moments behind the work.</p>
      
          <div data-reveal="200" style={{ "display": "flex", "flexWrap": "wrap", "gap": "18px 26px", "alignItems": "center", "margin": "clamp(30px,4vw,44px) 0 0" }}>
            <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(246,244,240,.45)", "margin": 0 }}>Where to find me</p>
            <ul style={{ "listStyle": "none", "display": "flex", "flexWrap": "wrap", "gap": "8px", "margin": 0, "padding": 0 }}>
              <li><a href="https://www.linkedin.com/in/karinironmonge" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#F6F4F0", "border": "1px solid rgba(246,244,240,.22)", "borderRadius": "999px", "padding": "10px 16px", "transition": "background-color .25s ease,color .25s ease,border-color .25s ease" }} className="hv-3">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/primis_life" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#F6F4F0", "border": "1px solid rgba(246,244,240,.22)", "borderRadius": "999px", "padding": "10px 16px", "transition": "background-color .25s ease,color .25s ease,border-color .25s ease" }} className="hv-3">Instagram</a></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section style={{ "background": "#F6F4F0", "color": "#123A2E", "padding": "clamp(56px,8vw,110px) 0" }}>
        <div style={{ "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)", "display": "grid", "gap": "clamp(48px,7vw,110px)" }}>
      
          <article data-reveal="0" style={{ "border": "1px solid #DDD8D0", "borderRadius": "20px", "overflow": "hidden", "background": "#FFFFFF" }}>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "clamp(24px,4vw,56px)", "padding": "clamp(28px,4.5vw,56px)", "alignItems": "center" }}>
              <div style={{ "flex": "1 1 320px" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(46px,8vw,104px)", "lineHeight": ".88", "letterSpacing": "-.045em", "margin": 0, "color": "#123A2E" }}>1,869,083</p>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "fontWeight": 500, "letterSpacing": ".16em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "16px 0 0" }}>Impressions on one post</p>
              </div>
              <div style={{ "flex": "1 1 380px" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(20px,2.6vw,30px)", "lineHeight": "1.26", "letterSpacing": "-.022em", "margin": 0, "color": "#123A2E" }}>&ldquo;Who says the red carpet is only for Hollywood? For one day, our office got the full Oscar treatment.&rdquo;</p>
                <ul style={{ "display": "flex", "flexWrap": "wrap", "gap": "7px", "listStyle": "none", "margin": "22px 0 0", "padding": 0 }}>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".05em", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#employeeexperience</li>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".05em", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#workculture</li>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".05em", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#bringingpeopletogether</li>
                </ul>
                <a href="https://www.linkedin.com/posts/karinironmonger_employeeexperience-workculture-bringingpeopletogether-activity-7308843692524552192-gY3H" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "24px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "13px 20px", "transition": "transform .2s ease,background-color .2s ease" }} className="hv-4">Watch it on LinkedIn &nearr;</a>
              </div>
            </div>
      
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "14px 26px", "alignItems": "center", "padding": "16px clamp(28px,4.5vw,56px)", "borderTop": "1px solid #DDD8D0", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>
              <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>530</b> reactions</span>
              <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>15</b> comments</span>
              <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>6</b> reposts</span>
              <span>Red carpet day at the office</span>
            </div>
      
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "1px", "background": "#DDD8D0", "borderTop": "1px solid #DDD8D0" }}>
              <blockquote style={{ "margin": 0, "padding": "26px clamp(24px,3vw,30px)", "background": "#EFEAF6", "borderLeft": "2px solid #B9A3D9" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "19px", "lineHeight": "1.24", "letterSpacing": "-.018em", "margin": 0 }}>This is the office culture I desire</p>
                <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "13px", "fontWeight": 600, "margin": "12px 0 0" }}>Tayeb Hasan</p>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": "3px 0 0" }}>NYC OMB</p>
              </blockquote>
              <blockquote style={{ "margin": 0, "padding": "26px clamp(24px,3vw,30px)", "background": "#EFEAF6", "borderLeft": "2px solid #B9A3D9" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "19px", "lineHeight": "1.24", "letterSpacing": "-.018em", "margin": 0 }}>What a great way to get people hyped to be at work</p>
                <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "13px", "fontWeight": 600, "margin": "12px 0 0" }}>Julian Sookhoo</p>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": "3px 0 0" }}>Product Strategy &amp; Program Leadership</p>
              </blockquote>
              <blockquote style={{ "margin": 0, "padding": "26px clamp(24px,3vw,30px)", "background": "#EFEAF6", "borderLeft": "2px solid #B9A3D9" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "19px", "lineHeight": "1.24", "letterSpacing": "-.018em", "margin": 0 }}>This is such a unique and awesome idea for workplace culture!</p>
                <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "13px", "fontWeight": 600, "margin": "12px 0 0" }}>Cherise Taylor</p>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": "3px 0 0" }}>Employee Experience &amp; OD Leader</p>
              </blockquote>
            </div>
          </article>
      
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "flex-start" }}>
            <article data-reveal="0" style={{ "flex": "1 1 440px", "border": "1px solid #DDD8D0", "borderRadius": "16px", "overflow": "hidden", "background": "#FFFFFF" }}>
              <div style={{ "overflow": "hidden", "background": "#FFFFFF", "aspectRatio": "16/10", "borderBottom": "1px solid #DDD8D0", "borderRadius": "16px 16px 0 0" }}>
                <img src="/assets/img-02.jpg" alt="Oasis Security team at the Sales Kickoff" data-parallax="0.05" style={{ "width": "100%", "height": "112%", "objectFit": "cover", "objectPosition": "center", "willChange": "transform" }} />
              </div>
              <div style={{ "padding": "clamp(22px,3vw,32px)" }}>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".13em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 16px" }}>LinkedIn &middot; Sales Kickoff, Punta Cana</p>
                <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "17px", "lineHeight": "1.55", "margin": 0 }}>SKO stands for Sales Kickoff.<br />We turned it into Standard. Key Moments. Ownership.</p>
                <ul style={{ "display": "flex", "flexWrap": "wrap", "gap": "7px", "listStyle": "none", "margin": "20px 0 0", "padding": 0 }}>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#momentsthatmatter</li>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#peoplefirst</li>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#saleskickoff</li>
                </ul>
                <div style={{ "display": "flex", "gap": "18px", "flexWrap": "wrap", "margin": "20px 0 0", "paddingTop": "16px", "borderTop": "1px solid #DDD8D0", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>120</b> reactions</span>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>11</b> comments</span>
                </div>
                <a href="https://www.linkedin.com/posts/karinironmonger_momentsthatmatter-peoplefirst-saleskickoff-activity-7427689207357415424-BjAR" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "transform .2s ease" }} className="hv-5">View on LinkedIn &nearr;</a>
              </div>
            </article>
      
            <div style={{ "flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <blockquote data-reveal="60" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>Karin we&rsquo;re lucky to have you</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>AR</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Alon Ribak</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>VP of Operations, Oasis Security</p>
                  </div>
                </div>
              </blockquote>
              <blockquote data-reveal="120" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>great energy, strong commitment, and clear focus! SKO was awesome!</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>RL</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Roy Levy</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Closing the NHI Gap</p>
                  </div>
                </div>
              </blockquote>
              <blockquote data-reveal="180" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>That&rsquo;s a strong way to kick off the year!</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>OP</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Or Pinson</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Office Matchmaker for Tech Companies</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
      
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "flex-start" }}>
            <article data-reveal="0" style={{ "flex": "1 1 440px", "border": "1px solid #DDD8D0", "borderRadius": "16px", "overflow": "hidden", "background": "#FFFFFF" }}>
              <div style={{ "overflow": "hidden", "background": "#FFFFFF", "aspectRatio": "16/10", "borderBottom": "1px solid #DDD8D0", "borderRadius": "16px 16px 0 0" }}>
                <img src="/assets/img-03.jpg" alt="Oasis welcome wall at the first Oasis Israel overnight" data-parallax="0.05" style={{ "width": "100%", "height": "112%", "objectFit": "cover", "objectPosition": "center", "willChange": "transform" }} />
              </div>
              <div style={{ "padding": "clamp(22px,3vw,32px)" }}>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".13em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 16px" }}>LinkedIn &middot; First Oasis Israel overnight</p>
                <p dir="rtl" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16.5px", "lineHeight": "1.6", "margin": 0, "textAlign": "right" }}>חודשיים בתפקיד, אירוע אוברנייט ראשון של אואזיס ישראל ויום הולדת.<br />48 שעות של קסם במדבר.<br />תודה ענקית לכל מי שהיה חלק מהגשמת הוויז׳ן.</p>
                <div style={{ "display": "flex", "gap": "18px", "flexWrap": "wrap", "margin": "20px 0 0", "paddingTop": "16px", "borderTop": "1px solid #DDD8D0", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>78</b> reactions</span>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>11</b> comments</span>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>1</b> repost</span>
                </div>
                <a href="https://www.linkedin.com/posts/karinironmonger_%D7%97%D7%95%D7%93%D7%A9%D7%99%D7%99%D7%9D-%D7%91%D7%AA%D7%A4%D7%A7%D7%99%D7%93-%D7%90%D7%99%D7%A8%D7%95%D7%A2-%D7%90%D7%95%D7%91%D7%A8%D7%A0%D7%99%D7%99%D7%98-%D7%A8%D7%90%D7%A9%D7%95%D7%9F-%D7%A9%D7%9C-%D7%90%D7%95%D7%90%D7%96%D7%99%D7%A1-activity-7398465874203963392-ptce" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "transform .2s ease" }} className="hv-5">View on LinkedIn &nearr;</a>
              </div>
            </article>
      
            <div style={{ "flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <blockquote data-reveal="60" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>such a champion that it&rsquo;s the easiest thing to do! Thank you for this partnership</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>YA</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Yaeli Alev</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Head of HR, Oasis Security</p>
                  </div>
                </div>
              </blockquote>
              <blockquote data-reveal="120" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>Everything is perfect! Dream Team</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>AR</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Adar Riclis</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Creating Impactful Employee Experiences</p>
                  </div>
                </div>
              </blockquote>
              <blockquote data-reveal="180" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>It was perfect!</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>LG</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Lior Glam</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Engineering, Oasis Security</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
      
          <div data-reveal="0" style={{ "display": "flex", "flexWrap": "wrap", "border": "1px solid #B9A3D9", "borderRadius": "18px", "overflow": "hidden", "background": "#EFEAF6" }}>
            <div style={{ "flex": "1 1 340px", "overflow": "hidden", "background": "#EFEAF6", "minHeight": "280px", "borderRadius": "18px 0 0 18px" }}>
              <img src="/assets/img-04.jpg" alt="Custom 4th of July gift box built for the Oasis team" data-parallax="0.04" style={{ "width": "100%", "height": "112%", "objectFit": "cover", "willChange": "transform" }} />
            </div>
            <div style={{ "flex": "1 1 400px", "padding": "clamp(26px,3.6vw,44px)", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
              <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".16em", "textTransform": "uppercase", "color": "#6E56A6", "margin": 0 }}>Written about me</p>
              <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(23px,3vw,36px)", "lineHeight": "1.2", "letterSpacing": "-.024em", "margin": 0 }}>&ldquo;Thank you for trusting us, for your ideas, and for being such a wonderful partner.&rdquo;</p>
              <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "15.5px", "lineHeight": "1.6", "color": "#4A6A5E", "margin": 0 }}>Orit wrote this after we built a custom 4th of July gift box for the Oasis team, designed item by item over many conversations. 24 reactions on her post.</p>
              <a href="https://lnkd.in/p/d5dhYb-6" target="_blank" rel="noopener" style={{ "alignSelf": "flex-start", "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "transform .2s ease" }} className="hv-5">Read Orit&rsquo;s post &nearr;</a>
              <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "marginTop": "auto", "paddingTop": "6px" }}>
                <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>OH</span>
                <div>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Orit Hammer</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>CEO &amp; Co-founder, LinKit</p>
                </div>
              </div>
            </div>
          </div>
      
          <article data-reveal="0" style={{ "display": "flex", "flexWrap": "wrap", "border": "1px solid #DDD8D0", "borderRadius": "16px", "overflow": "hidden", "background": "#FFFFFF" }}>
            <div style={{ "flex": "1 1 340px", "overflow": "hidden", "background": "#FFFFFF", "minHeight": "300px", "borderRadius": "16px 0 0 16px" }}>
              <img src="/assets/img-05.jpg" alt="Family Day baskets prepared for the Oasis team" data-parallax="0.04" style={{ "width": "100%", "height": "112%", "objectFit": "cover", "willChange": "transform" }} />
            </div>
            <div style={{ "flex": "1 1 420px", "padding": "clamp(22px,3vw,34px)" }}>
              <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".13em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 16px" }}>LinkedIn &middot; Family Day</p>
              <p dir="rtl" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16.5px", "lineHeight": "1.6", "margin": 0, "textAlign": "right" }}>איך חוגגים יום משפחה בארגון שיש בו גם רווקים וגם הורים?</p>
              <ul style={{ "display": "flex", "flexWrap": "wrap", "gap": "7px", "listStyle": "none", "margin": "20px 0 0", "padding": 0 }}>
                <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#companyculture</li>
                <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#employeeexperience</li>
                <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#hr</li>
              </ul>
              <div style={{ "display": "flex", "gap": "18px", "flexWrap": "wrap", "margin": "20px 0 0", "paddingTop": "16px", "borderTop": "1px solid #DDD8D0", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>
                <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>96</b> reactions</span>
                <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>8</b> comments</span>
              </div>
              <a href="https://www.linkedin.com/posts/karinironmonger_companyculture-employeeexperience-hr-activity-7429478313036808193-aWqI" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "transform .2s ease" }} className="hv-5">View on LinkedIn &nearr;</a>
              <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "10px", "margin": "22px 0 0" }}>
                <blockquote style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "12px", "padding": "16px 18px", "background": "#EFEAF6" }}>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "18px", "lineHeight": "1.22", "letterSpacing": "-.018em", "margin": 0 }}>Wonderful idea</p>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": "10px 0 0", "fontSize": "12.5px", "fontWeight": 600 }}>Miri Kedem Kotzer</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Founder, Only Good Things</p>
                </blockquote>
                <blockquote style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "12px", "padding": "16px 18px", "background": "#EFEAF6" }}>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "18px", "lineHeight": "1.22", "letterSpacing": "-.018em", "margin": 0 }}>I liked it</p>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": "10px 0 0", "fontSize": "12.5px", "fontWeight": 600 }}>Gali Zorach Siluk</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Operations Manager</p>
                </blockquote>
                <blockquote style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "12px", "padding": "16px 18px", "background": "#EFEAF6" }}>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "18px", "lineHeight": "1.22", "letterSpacing": "-.018em", "margin": 0 }}>Lovely</p>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": "10px 0 0", "fontSize": "12.5px", "fontWeight": 600 }}>Lior Goldshtein</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>CEO, EXPOVIET</p>
                </blockquote>
              </div>
            </div>
          </article>
      
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "flex-start" }}>
            <article data-reveal="0" style={{ "flex": "1 1 440px", "border": "1px solid #DDD8D0", "borderRadius": "16px", "overflow": "hidden", "background": "#FFFFFF" }}>
              <div style={{ "overflow": "hidden", "background": "#FFFFFF", "aspectRatio": "16/10", "borderBottom": "1px solid #DDD8D0", "borderRadius": "16px 16px 0 0" }}>
                <img src="/assets/img-06.jpg" alt="Pride cookies made for the Agents of Pride event at Oasis" data-parallax="0.05" style={{ "width": "100%", "height": "112%", "objectFit": "cover", "willChange": "transform" }} />
              </div>
              <div style={{ "padding": "clamp(22px,3vw,32px)" }}>
                <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".13em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 16px" }}>LinkedIn &middot; Agents of Pride</p>
                <p dir="rtl" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16.5px", "lineHeight": "1.6", "margin": 0, "textAlign": "right" }}>אני יודעת מה אתם חושבים כשאתם מסתכלים על התמונות האלה, שוב...</p>
                <ul style={{ "display": "flex", "flexWrap": "wrap", "gap": "7px", "listStyle": "none", "margin": "20px 0 0", "padding": 0 }}>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#pridemonth</li>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#agentsofpride</li>
                  <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#employeeexperience</li>
                </ul>
                <div style={{ "display": "flex", "gap": "18px", "flexWrap": "wrap", "margin": "20px 0 0", "paddingTop": "16px", "borderTop": "1px solid #DDD8D0", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>81</b> reactions</span>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>11</b> comments</span>
                  <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>1</b> repost</span>
                </div>
                <a href="https://www.linkedin.com/posts/karinironmonger_pridemonth-agentsofpride-employeeexperience-activity-7470948359701196800-ZoWc" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "transform .2s ease" }} className="hv-5">View on LinkedIn &nearr;</a>
              </div>
            </article>
      
            <div style={{ "flex": "1 1 320px", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
              <blockquote data-reveal="60" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>You are a champion&hellip; They won you</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>TG</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Talya Geller</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Talent Acquisition Specialist, Nexxen</p>
                  </div>
                </div>
              </blockquote>
              <blockquote data-reveal="120" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>Both an important topic and a beautiful execution</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>LS</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Liron Siton</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Corporate Events for Tech Companies</p>
                  </div>
                </div>
              </blockquote>
              <blockquote data-reveal="180" style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "14px", "padding": "22px 24px", "background": "#EFEAF6" }}>
                <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(18px,2.2vw,23px)", "lineHeight": "1.3", "letterSpacing": "-.018em", "margin": 0 }}>Amazing as always</p>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "18px 0 0" }}>
                  <span style={{ "width": "34px", "height": "34px", "flex": "0 0 34px", "borderRadius": "50%", "display": "grid", "placeItems": "center", "background": "rgba(18,58,46,.12)", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "color": "#123A2E" }}>AR</span>
                  <div>
                    <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": 0, "fontSize": "14px", "fontWeight": 600, "lineHeight": "1.3" }}>Adar Riclis</p>
                    <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Creating Impactful Employee Experiences</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
      
          <article data-reveal="0" style={{ "display": "flex", "flexWrap": "wrap", "border": "1px solid #DDD8D0", "borderRadius": "16px", "overflow": "hidden", "background": "#FFFFFF" }}>
            <div style={{ "flex": "1 1 340px", "overflow": "hidden", "background": "#FFFFFF", "minHeight": "300px", "borderRadius": "16px 0 0 16px" }}>
              <img src="/assets/img-07.jpg" alt="Food spread at the Primis hackathon" data-parallax="0.04" style={{ "width": "100%", "height": "112%", "objectFit": "cover", "willChange": "transform" }} />
            </div>
            <div style={{ "flex": "1 1 420px", "padding": "clamp(22px,3vw,34px)" }}>
              <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".13em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 16px" }}>LinkedIn &middot; Hackathon</p>
              <p dir="rtl" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16.5px", "lineHeight": "1.6", "margin": 0, "textAlign": "right" }}>שלושה שבועות לפני זה:<br />&rdquo;קארין, מה את אומרת... נעשה האקתון?&ldquo;<br />&rdquo;אקסל...&ldquo;</p>
              <ul style={{ "display": "flex", "flexWrap": "wrap", "gap": "7px", "listStyle": "none", "margin": "20px 0 0", "padding": 0 }}>
                <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#hackathon</li>
                <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#employeeexperience</li>
                <li style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "color": "#6E56A6", "border": "1px solid #B9A3D9", "background": "rgba(185,163,217,.1)", "borderRadius": "999px", "padding": "7px 12px" }}>#pushformore</li>
              </ul>
              <div style={{ "display": "flex", "gap": "18px", "flexWrap": "wrap", "margin": "20px 0 0", "paddingTop": "16px", "borderTop": "1px solid #DDD8D0", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>
                <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>57</b> reactions</span>
                <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>15</b> comments</span>
                <span><b style={{ "color": "#123A2E", "fontWeight": 500 }}>3,056</b> impressions</span>
              </div>
              <a href="https://www.linkedin.com/posts/karinironmonger_hackathon-employeeexperience-pushformore-activity-7359942045248974848-uiUj" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#F6F4F0", "background": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "transform .2s ease" }} className="hv-5">View on LinkedIn &nearr;</a>
              <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "10px", "margin": "22px 0 0" }}>
                <blockquote style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "12px", "padding": "16px 18px", "background": "#EFEAF6" }}>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "18px", "lineHeight": "1.22", "letterSpacing": "-.018em", "margin": 0 }}>An event from the movies!</p>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": "10px 0 0", "fontSize": "12.5px", "fontWeight": 600 }}>Gal Sobol</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>VP Marketing, Primis</p>
                </blockquote>
                <blockquote style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "12px", "padding": "16px 18px", "background": "#EFEAF6" }}>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "18px", "lineHeight": "1.22", "letterSpacing": "-.018em", "margin": 0 }}>You are a real magic worker</p>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": "10px 0 0", "fontSize": "12.5px", "fontWeight": 600 }}>Yinon Sade</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Frontend Tech Lead</p>
                </blockquote>
                <blockquote style={{ "margin": 0, "border": "1px solid #B9A3D9", "borderRadius": "12px", "padding": "16px 18px", "background": "#EFEAF6" }}>
                  <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "18px", "lineHeight": "1.22", "letterSpacing": "-.018em", "margin": 0 }}>You&rsquo;re one of a kind!</p>
                  <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "margin": "10px 0 0", "fontSize": "12.5px", "fontWeight": 600 }}>Ofir Edri</p>
                  <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "margin": "3px 0 0", "fontSize": "8px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E" }}>Senior Agency Sales Manager, Primis</p>
                </blockquote>
              </div>
            </div>
          </article>
      
          <article data-reveal="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "flex-start", "border": "1px solid #DDD8D0", "borderRadius": "16px", "overflow": "hidden", "background": "#F6F4F0" }}>
            <img src="/assets/img-08.jpg" alt="A remembrance basket with the ingredients and the story card" style={{ "flex": "1 1 340px", "width": "100%", "objectFit": "contain", "background": "#F6F4F0", "borderRadius": "16px 0 0 16px" }} />
            <div style={{ "flex": "1 1 420px", "padding": "clamp(22px,3vw,34px)" }}>
              <p style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "fontWeight": 500, "letterSpacing": ".13em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 18px" }}>LinkedIn &middot; A project of remembrance</p>
              <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "clamp(19px,2.4vw,26px)", "lineHeight": "1.3", "letterSpacing": "-.02em", "margin": "0 0 18px" }}>&ldquo;Facing our new reality, we decided to proceed with the DIY basket concept, but use this opportunity to commemorate those we&rsquo;ve lost.&rdquo;</p>
              <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "16px", "lineHeight": "1.6", "color": "#4A6A5E", "margin": 0 }}>Four stories from October 7th, each remembered through the food the person was loved for, sent to every employee as part of the 2024 employee experience plan. The stories are told in full in the post.</p>
              <a href="https://www.linkedin.com/posts/karinironmonger_dandisabrcandies-thecocktailbox-activity-7164616897542406144-EDCL" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "marginTop": "22px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "background": "transparent", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "12px 18px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">Read the full post &nearr;</a>
            </div>
          </article>
      
          <p data-reveal="0" style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "borderLeft": "2px solid #B9A3D9", "paddingLeft": "18px", "maxWidth": "56ch", "margin": 0 }}>More posts go here as you send them.</p>
        </div>
      </section>
      
      <section id="instagram" style={{ "background": "#EFEAF6", "color": "#123A2E", "borderTop": "1px solid #DDD8D0", "padding": "clamp(56px,8vw,110px) 0" }}>
        <div style={{ "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)" }}>
          <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "0 0 clamp(30px,4vw,44px)" }}>Instagram</p>
      
          <div data-reveal="0" style={{ "marginBottom": "clamp(48px,6vw,80px)" }}>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px 20px", "alignItems": "baseline", "justifyContent": "space-between", "paddingBottom": "16px", "borderBottom": "1px solid #DDD8D0" }}>
              <h2 style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(22px,2.8vw,32px)", "letterSpacing": "-.024em", "margin": 0, "paddingBottom": "8px", "borderBottom": "2px solid #B9A3D9" }}>Primis Life</h2>
              <a href="https://www.instagram.com/primis_life" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "11px 17px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">Open the account &nearr;</a>
            </div>
            <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "15.5px", "lineHeight": "1.6", "color": "#4A6A5E", "maxWidth": "58ch", "margin": "16px 0 0" }}>Led employer-branding and hiring campaigns on social alongside the company Instagram.</p>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "14px", "marginTop": "24px" }}>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-09.jpg" alt="New Year gift boxes designed for the Primis team" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "lineHeight": "1.6", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Here&rsquo;s to a better year &middot; every purchase contributed to families of hostages</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-10.jpg" alt="The Primis team at a company party" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "lineHeight": "1.6", "borderTop": "1px solid rgba(185,163,217,.5)" }}>A great party isn&rsquo;t about what&rsquo;s in the room, it&rsquo;s about who&rsquo;s in it &middot; photo @menashc</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-11.jpg" alt="Branded Primis notebooks" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "lineHeight": "1.6", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Work. Discover. Push. Repeat. &middot; branded notebooks</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-12.jpg" alt="Primis hiring campaign creative" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "lineHeight": "1.6", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Hiring campaign creative for the company account</figcaption>
              </figure>
            </div>
          </div>
      
          <div data-reveal="0">
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px 20px", "alignItems": "baseline", "justifyContent": "space-between", "paddingBottom": "16px", "borderBottom": "1px solid #DDD8D0" }}>
              <h2 style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(22px,2.8vw,32px)", "letterSpacing": "-.024em", "margin": 0, "paddingBottom": "8px", "borderBottom": "2px solid #B9A3D9" }}>Zipper</h2>
              <a href="https://www.instagram.com/zippertlv" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "11px 17px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">Open the account &nearr;</a>
            </div>
            <p style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "15.5px", "lineHeight": "1.6", "color": "#4A6A5E", "maxWidth": "58ch", "margin": "16px 0 0" }}>Agency-side production of brand and corporate events, concept to the live moment.</p>
      
            <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(20px,2.4vw,26px)", "letterSpacing": "-.022em", "margin": "clamp(34px,4vw,52px) 0 0", "paddingBottom": "10px", "borderBottom": "2px solid #B9A3D9", "display": "inline-block" }}>Aqua Glam, Claroty Purim party</p>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "14px", "marginTop": "22px" }}>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-13.jpg" alt="The Aqua Glam room, jellyfish installation over the floor" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>The room on arrival</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-14.jpg" alt="A performer in costume with neon light ribbons" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Performance, in costume and light</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-15.jpg" alt="The cocktail bar under the jellyfish installation" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Cocktail bar under the canopy</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-16.jpg" alt="Illuminated jellyfish tanks used as table pieces" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Tanks built as table pieces</figcaption>
              </figure>
            </div>
            <ul style={{ "listStyle": "none", "margin": "20px 0 0", "padding": "18px 0 0", "borderTop": "1px solid #DDD8D0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "10px 36px" }}>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Role</b>Producer</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Client</b>Claroty</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Concept</b>Creatures of the deep ocean, Purim party</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Venue</b>Haoman 17, Tel Aviv</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Technical producer</b>Hila Broder</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Design</b>Shlomi Ilani &middot; Graphics, Studio Touch</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Stage</b>Omer Adam &middot; DJ Eli Matana &middot; Host, Yoav Zucker</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Photography</b>Tomer Foltyn</li>
            </ul>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px", "marginTop": "22px" }}>
              <a href="https://www.instagram.com/p/CbhQ0v3tya7/" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "11px 17px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">See the post &nearr;</a>
            </div>
      
            <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(20px,2.4vw,26px)", "letterSpacing": "-.022em", "margin": "clamp(34px,4vw,52px) 0 0", "paddingBottom": "10px", "borderBottom": "2px solid #B9A3D9", "display": "inline-block" }}>One Love, One Pod, Orca Security in Jamaica</p>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "14px", "marginTop": "22px" }}>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-17.jpg" alt="Printed Come to Jamaica posters for the Orca retreat" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Print set, poster series</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-18.jpg" alt="One Love One Pod cushions at the retreat" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>One Love, One Pod, on everything</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-19.jpg" alt="Stage and lighting rig at the final night" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Final night, stage and rig</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-20.jpg" alt="The resort in Jamaica from above" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>The site, Jamaica</figcaption>
              </figure>
            </div>
            <ul style={{ "listStyle": "none", "margin": "20px 0 0", "padding": "18px 0 0", "borderTop": "1px solid #DDD8D0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "10px 36px" }}>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Role</b>Producer, with Hila Broder</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Client</b>Orca Security</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Format</b>Global company retreat</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Location</b>Jamaica</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Graphic design</b>Yaara Agnon, Tom Kariv</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Design</b>Tzachi Zeev Luk</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Music</b>DJ Gil Logasi &middot; Vini Vici</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Photography</b>Rotem Lahav</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Dates</b>May 23 to 26, 2022</li>
            </ul>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px", "marginTop": "22px" }}>
              <a href="https://www.instagram.com/p/Cck-k9com74/" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "11px 17px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">See the post &nearr;</a>
            </div>
      
            <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(20px,2.4vw,26px)", "letterSpacing": "-.022em", "margin": "clamp(34px,4vw,52px) 0 0", "paddingBottom": "10px", "borderBottom": "2px solid #B9A3D9", "display": "inline-block" }}>Greek Chic, IBI in Crete</p>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "14px", "marginTop": "22px" }}>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-21.jpg" alt="Greek Chic save the date artwork" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Save the date, the campaign look</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-22.jpg" alt="Painted classical bust used as a table piece" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Busts as table pieces</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-23.jpg" alt="Dining setup from above with branded parasols" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Dinner layout from above</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-24.jpg" alt="Branded lounge seating by the sea" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Lounge, branded to the last cushion</figcaption>
              </figure>
            </div>
            <ul style={{ "listStyle": "none", "margin": "20px 0 0", "padding": "18px 0 0", "borderTop": "1px solid #DDD8D0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "10px 36px" }}>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Role</b>Producer, with Hila Broder</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Client</b>IBI Investment House</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Format</b>Company retreat</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Location</b>Crete, Greece</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Design</b>Shlomi Ilani &middot; Graphics, Studio Touch</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Dates</b>September 15 to 17, 2022</li>
            </ul>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px", "marginTop": "22px" }}>
              <a href="https://www.instagram.com/zippertlv" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "11px 17px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">See more on Instagram &nearr;</a>
            </div>
      
            <p style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 500, "fontSize": "clamp(20px,2.4vw,26px)", "letterSpacing": "-.022em", "margin": "clamp(34px,4vw,52px) 0 0", "paddingBottom": "10px", "borderBottom": "2px solid #B9A3D9", "display": "inline-block" }}>Origami Sun, Palo Alto Networks</p>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "gap": "14px", "marginTop": "22px" }}>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-25.jpg" alt="Origami Sun welcome wall" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Welcome wall, built from folded paper</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-26.jpg" alt="Giant origami cranes by the pool" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Origami at scale, poolside</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-27.jpg" alt="Branded deck chair" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>Every deck chair, printed to match</figcaption>
              </figure>
              <figure style={{ "margin": 0, "border": "1px solid #DDD8D0", "borderRadius": "12px", "overflow": "hidden", "background": "#F6F4F0" }}>
                <img src="/assets/img-28.jpg" alt="The bar dressed in origami" style={{ "width": "100%", "aspectRatio": 1, "objectFit": "cover", "borderRadius": "12px 12px 0 0" }} />
                <figcaption style={{ "padding": "13px 14px 15px", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".09em", "textTransform": "uppercase", "color": "#4A6A5E", "borderTop": "1px solid rgba(185,163,217,.5)" }}>The bar, dressed head to toe</figcaption>
              </figure>
            </div>
            <ul style={{ "listStyle": "none", "margin": "20px 0 0", "padding": "18px 0 0", "borderTop": "1px solid #DDD8D0", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "10px 36px" }}>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Role</b>Producer, with Hila Broder</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Client</b>Palo Alto Networks</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Format</b>Summer family event</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Location</b>Shunit, Atlit</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Design</b>Shlomi Ilani &middot; Graphics, Studio Touch</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Origami artist</b>Ilan Garibi</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Stage</b>Eden Ben Zaken</li>
              <li style={{ "fontFamily": "'Instrument Sans','Assistant',sans-serif", "fontSize": "14.5px", "color": "#4A6A5E", "lineHeight": "1.5" }}><b style={{ "color": "#6E56A6", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "8.5px", "letterSpacing": ".12em", "textTransform": "uppercase", "display": "block", "marginBottom": "3px", "fontWeight": 500 }}>Photography</b>Menash Cohen</li>
            </ul>
            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px", "marginTop": "22px" }}>
              <a href="https://www.facebook.com/zipper" target="_blank" rel="noopener" style={{ "display": "inline-flex", "alignItems": "center", "gap": "8px", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "10px", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#123A2E", "border": "1px solid #123A2E", "borderRadius": "999px", "padding": "11px 17px", "transition": "background-color .2s ease,color .2s ease" }} className="hv-6">See the album &nearr;</a>
            </div>
          </div>
        </div>
      </section>
      
      <section style={{ "background": "#0B2A21", "color": "#F6F4F0", "position": "relative", "overflow": "hidden", "padding": "clamp(64px,10vw,130px) 0" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "inset": 0, "backgroundImage": "radial-gradient(rgba(246,244,240,.07) 1px, transparent 1px)", "backgroundSize": "26px 26px", "pointerEvents": "none" }}></div>
        <div style={{ "position": "relative", "maxWidth": "1180px", "margin": "0 auto", "padding": "0 clamp(22px,5vw,72px)" }}>
          <p data-reveal="0" style={{ "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "#B9A3D9", "margin": "0 0 22px" }}>Next</p>
          <p data-reveal="60" style={{ "fontFamily": "'Fraunces','Frank Ruhl Libre',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "clamp(30px,5vw,66px)", "lineHeight": "1.04", "letterSpacing": "-.036em", "margin": 0, "maxWidth": "24ch" }}><span>There is a lot more to tell.</span> <em style={{ "fontStyle": "italic", "color": "#B9A3D9" }}>Let’s talk.</em></p>
          <a href="/contact" data-reveal="140" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "marginTop": "clamp(30px,4vw,44px)", "textDecoration": "none", "fontFamily": "'Martian Mono','Assistant',ui-monospace,monospace", "fontSize": "11px", "letterSpacing": ".1em", "textTransform": "uppercase", "background": "#B9A3D9", "color": "#0B2A21", "border": "1px solid #B9A3D9", "borderRadius": "999px", "padding": "17px 28px", "transition": "transform .22s ease,background-color .22s ease" }} className="hv-7">Contact me</a>
        </div>
      </section>
      <Footer />
    </>
  );
}
