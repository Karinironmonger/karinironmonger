import Link from "next/link";

const MONO = "'Martian Mono',ui-monospace,monospace";
const DISPLAY = "'Fraunces',Georgia,serif";

const navBase: React.CSSProperties = {
  display: "inline-block",
  textDecoration: "none",
  fontFamily: MONO,
  fontSize: "10px",
  letterSpacing: ".11em",
  textTransform: "uppercase",
  padding: "9px 14px",
  borderRadius: "999px",
  border: "1px solid transparent",
  transition: "color .2s ease, border-color .2s ease",
};

const navOn: React.CSSProperties = {
  ...navBase,
  color: "#F6F4F0",
  background: "rgba(246,244,240,.1)",
  border: "1px solid rgba(246,244,240,.18)",
};

const navOff: React.CSSProperties = { ...navBase, color: "rgba(246,244,240,.62)" };

export type Page = "profile" | "social" | "contact";

export function TopBar({ active, progress = true }: { active: Page; progress?: boolean }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 80,
        background: "rgba(11,42,33,.9)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(246,244,240,.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "14px clamp(22px,5vw,72px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: DISPLAY,
            fontVariationSettings: "'SOFT' 30,'WONK' 1",
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "-.02em",
            textDecoration: "none",
            color: "#F6F4F0",
            whiteSpace: "nowrap",
          }}
        >
          Karin Barak Ironmonger
        </Link>
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link href="/" className={active === "profile" ? undefined : "hv-nav"} style={active === "profile" ? navOn : navOff}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/social" className={active === "social" ? undefined : "hv-nav"} style={active === "social" ? navOn : navOff}>
                Social
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hv-lift"
                style={{
                  ...navBase,
                  color: "#0B2A21",
                  background: "#B9A3D9",
                  border: "1px solid #B9A3D9",
                  padding: "9px 15px",
                  transition: "transform .2s ease",
                }}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {progress ? (
        <div data-progress style={{ height: "1px", background: "#B9A3D9", transform: "scaleX(0)" }} />
      ) : null}
    </header>
  );
}

export function Footer({ right }: { right?: React.ReactNode }) {
  return (
    <footer
      style={{
        background: "#0B2A21",
        color: "rgba(246,244,240,.5)",
        borderTop: "1px solid rgba(246,244,240,.1)",
        padding: "26px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 clamp(22px,5vw,72px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 24px",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: MONO,
          fontSize: "9.5px",
          letterSpacing: ".12em",
          textTransform: "uppercase",
        }}
      >
        <span>Karin Barak Ironmonger</span>
        {right ?? (
          <a
            href="mailto:Karinironmonger@gmail.com"
            className="hv-lilac"
            style={{ color: "rgba(246,244,240,.5)", textDecoration: "none", transition: "color .2s ease" }}
          >
            Karinironmonger@gmail.com
          </a>
        )}
      </div>
    </footer>
  );
}
