import { cv } from "@/lib/cv";
import { CvToolbar } from "@/components/CvToolbar";

export const metadata = { title: "Karin Barak Ironmonger, CV" };

type Search = { v?: string };

export default async function CvPage({ searchParams }: { searchParams: Promise<Search> }) {
  const { v } = await searchParams;
  const { subtitle, summary, roles, skills } = cv(v ?? "general");

  return (
    <div className="cv-desk">
      <CvToolbar active={v ?? "general"} />
        <article className="cv-sheet">
          <header style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px 28px", "alignItems": "flex-end", "justifyContent": "space-between", "paddingBottom": "18px", "borderBottom": "2px solid #123A2E" }}>
            <div>
              <h1 style={{ "fontFamily": "'Fraunces',Georgia,serif", "fontVariationSettings": "'SOFT' 40,'WONK' 1,'opsz' 144", "fontWeight": 300, "fontSize": "42pt", "lineHeight": ".94", "letterSpacing": "-.035em", "color": "#123A2E", "margin": 0 }}>Karin <span style={{ "fontWeight": 600 }}>Ironmonger</span></h1>
              <p style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8.5pt", "fontWeight": 500, "letterSpacing": ".16em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "12px 0 0" }}>{subtitle}</p>
            </div>
            <p style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "9.5pt", "lineHeight": "1.7", "color": "#4A6A5E", "margin": 0, "textAlign": "right" }}>
              <a href="mailto:Karinironmonger@gmail.com" style={{ "color": "#123A2E", "textDecoration": "none", "borderBottom": "1px solid #B9A3D9" }}>Karinironmonger@gmail.com</a><br />
              <a href="https://www.linkedin.com/in/karinironmonger" style={{ "color": "#123A2E", "textDecoration": "none", "borderBottom": "1px solid #B9A3D9" }}>linkedin.com/in/karinironmonger</a><br />
              <a href="tel:+972523533421" style={{ "color": "#123A2E", "textDecoration": "none", "borderBottom": "1px solid #B9A3D9" }}>052-3533421</a>
            </p>
          </header>
        
          <p style={{ "fontFamily": "'Fraunces',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 400, "fontSize": "12.5pt", "lineHeight": "1.42", "letterSpacing": "-.012em", "color": "#123A2E", "margin": "22px 0 0", "orphans": 3, "widows": 3 }}>{summary}</p>
        
          <h2 style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8pt", "fontWeight": 500, "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "30px 0 0", "paddingBottom": "8px", "borderBottom": "1px solid #DDD8D0" }}>Experience</h2>
        
          {roles.map((r, _i) => (
            <section key={_i} style={{ "marginTop": "20px", "breakInside": "auto" }}>
              <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "4px 20px", "alignItems": "baseline", "justifyContent": "space-between" }}>
                <h3 style={{ "fontFamily": "'Fraunces',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 600, "fontSize": "14pt", "letterSpacing": "-.02em", "color": "#123A2E", "margin": 0, "lineHeight": "1.2" }}>{r.org}</h3>
                <p style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8pt", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#4A6A5E", "margin": 0 }}>{r.when}</p>
              </div>
              <p style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "10.5pt", "fontWeight": 600, "color": "#6E56A6", "margin": "3px 0 0" }}>{r.role}</p>
              <ul style={{ "listStyle": "none", "margin": "10px 0 0", "padding": 0 }}>
                {r.points.map((p, _i) => (
                  <li key={_i} style={{ "position": "relative", "paddingLeft": "16px", "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "10pt", "lineHeight": "1.5", "color": "#33443E", "marginBottom": "6px", "orphans": 3, "widows": 3 }}>
                    <span aria-hidden="true" style={{ "position": "absolute", "left": 0, "top": "8px", "width": "7px", "height": "1px", "background": "#B9A3D9" }}></span>{p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        
          <h2 style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8pt", "fontWeight": 500, "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "30px 0 0", "paddingBottom": "8px", "borderBottom": "1px solid #DDD8D0" }}>Earlier experience</h2>
          <p style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "10pt", "lineHeight": "1.5", "color": "#33443E", "margin": "14px 0 0" }}><span style={{ "fontWeight": 600, "color": "#123A2E" }}>EL AL Israel Airlines</span>, Customer &amp; Operations, 2012 to 2017</p>
        
          <h2 style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8pt", "fontWeight": 500, "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "30px 0 0", "paddingBottom": "8px", "borderBottom": "1px solid #DDD8D0" }}>Skills</h2>
          <ul style={{ "listStyle": "none", "display": "flex", "flexWrap": "wrap", "gap": "7px", "margin": "16px 0 0", "padding": 0 }}>
            {skills.map((s, _i) => (
              <li key={_i} style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "9pt", "lineHeight": "1.3", "color": "#123A2E", "border": "1px solid #B9A3D9", "background": "#F4F0FA", "borderRadius": "999px", "padding": "6px 12px", "breakInside": "avoid" }}>{s}</li>
            ))}
          </ul>
        
          <h2 style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8pt", "fontWeight": 500, "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "30px 0 0", "paddingBottom": "8px", "borderBottom": "1px solid #DDD8D0" }}>Education</h2>
          <div style={{ "marginTop": "14px", "breakInside": "avoid" }}>
            <p style={{ "fontFamily": "'Fraunces',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 600, "fontSize": "11.5pt", "letterSpacing": "-.018em", "color": "#123A2E", "margin": 0 }}>B.A, Government &amp; Political Science, International Relations and Communication</p>
            <p style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "9.5pt", "color": "#4A6A5E", "margin": "3px 0 0" }}>Open University, 2013 to 2017</p>
          </div>
          <div style={{ "marginTop": "12px", "breakInside": "avoid" }}>
            <p style={{ "fontFamily": "'Fraunces',Georgia,serif", "fontVariationSettings": "'SOFT' 30,'WONK' 1", "fontWeight": 600, "fontSize": "11.5pt", "letterSpacing": "-.018em", "color": "#123A2E", "margin": 0 }}>Certificate, Product &amp; Product Marketing Management</p>
            <p style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "9.5pt", "color": "#4A6A5E", "margin": "3px 0 0" }}>Technion, Israel Institute of Technology, 2024</p>
          </div>
        
          <h2 style={{ "fontFamily": "'Martian Mono',ui-monospace,monospace", "fontSize": "8pt", "fontWeight": 500, "letterSpacing": ".2em", "textTransform": "uppercase", "color": "#6E56A6", "margin": "30px 0 0", "paddingBottom": "8px", "borderBottom": "1px solid #DDD8D0" }}>Languages</h2>
          <p style={{ "fontFamily": "'Instrument Sans',sans-serif", "fontSize": "10pt", "lineHeight": "1.5", "color": "#33443E", "margin": "14px 0 0" }}>Hebrew, native &nbsp;·&nbsp; English, full professional proficiency &nbsp;·&nbsp; Spanish, conversational</p>
        </article>
    </div>
  );
}
