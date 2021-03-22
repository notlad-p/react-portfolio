import React from "react";

export default function Button({
  text,
  type,
  margin,
  icon,
  style,
  link,
  href,
}) {
  return (
    <div className="button-container">
      {link ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
          style={{
            textDecoration: "none",
          }}
        >
          {text}
          {icon}
        </a>
      ) : (
        <button
          className="button"
          type={type}
          style={{
            margin: margin,
            ...style,
          }}
        >
          {text}
          {icon}
        </button>
      )}
    </div>
  );
}