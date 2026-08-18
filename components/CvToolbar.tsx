"use client";

import Link from "next/link";

const VERSIONS = [
  { key: "general", label: "Global EX" },
  { key: "operations", label: "Operations" },
  { key: "branding", label: "Employer branding" },
  { key: "events", label: "Events" },
];

const MONO = "'Martian Mono',ui-monospace,monospace";

export function CvToolbar({ active }: { active: string }) {
  return (
    <div
      className="no-print"
      style={{
        maxWidth: "8.5in",
        margin: "0 auto 18px",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {VERSIONS.map((v) => {
        const on = v.key === active;
        return (
          <Link
            key={v.key}
            href={`/cv?v=${v.key}`}
            style={{
              textDecoration: "none",
              fontFamily: MONO,
              fontSize: "9.5px",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              padding: "10px 16px",
              borderRadius: "999px",
              border: `1px solid ${on ? "#123A2E" : "#C6C2BA"}`,
              background: on ? "#123A2E" : "transparent",
              color: on ? "#F6F4F0" : "#4A6A5E",
            }}
          >
            {v.label}
          </Link>
        );
      })}
      <button
        type="button"
        onClick={() => window.print()}
        style={{
          marginLeft: "auto",
          appearance: "none",
          cursor: "pointer",
          fontFamily: MONO,
          fontSize: "9.5px",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          padding: "10px 18px",
          borderRadius: "999px",
          border: "1px solid #6E56A6",
          background: "#B9A3D9",
          color: "#0B2A21",
        }}
      >
        Save as PDF
      </button>
    </div>
  );
}
