/* @ds-bundle: {"format":3,"namespace":"VozEstratGicaMasterEnVentasDesignSystem_25a70b","components":[{"name":"ComparePoint","sourcePath":"components/brand/ComparePoint.jsx"},{"name":"ProcessStep","sourcePath":"components/brand/ProcessStep.jsx"},{"name":"StatBig","sourcePath":"components/brand/StatBig.jsx"},{"name":"Waveform","sourcePath":"components/brand/Waveform.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/ComparePoint.jsx":"318f91ca1c8e","components/brand/ProcessStep.jsx":"17f252295e82","components/brand/StatBig.jsx":"e0453e0def76","components/brand/Waveform.jsx":"a36f124a442b","components/core/Badge.jsx":"a7eaed3d7a55","components/core/Button.jsx":"e14f40a98c6f","components/core/Card.jsx":"e1084e5588bf","components/core/Tag.jsx":"9a7a1ab4a9c0","components/forms/Checkbox.jsx":"6da4a7f82548","components/forms/Input.jsx":"62abea1ba5e4","ui_kits/landing/Hero.jsx":"1bb94b1ebf10","ui_kits/landing/SectionsA.jsx":"61eb561f26b1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VozEstratGicaMasterEnVentasDesignSystem_25a70b = window.VozEstratGicaMasterEnVentasDesignSystem_25a70b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ComparePoint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — ComparePoint
 * A single "antes vs después" line. Green ✕ for the old way,
 * black ✓ for the strategic way (matches the transformation slide).
 */
function ComparePoint({
  children,
  type = "do",
  theme = "light",
  style = {},
  ...rest
}) {
  const dark = theme === "dark";
  const isDo = type === "do";
  const iconColor = isDo ? dark ? "var(--vz-black)" : "var(--vz-black)" : "var(--accent)";
  // On accent (green) cards the check should be black; on neutral, the X is green.
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      display: "inline-flex",
      color: iconColor
    }
  }, isDo ? /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-lg)",
      fontWeight: "var(--fw-medium)",
      color: isDo ? theme === "accent" ? "var(--vz-black)" : dark ? "var(--text-on-dark)" : "var(--text-strong)" : dark ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }, children));
}
Object.assign(__ds_scope, { ComparePoint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ComparePoint.jsx", error: String((e && e.message) || e) }); }

// components/brand/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — ProcessStep
 * Numbered step from the "proceso de venta consultiva" lists.
 * Green number, bold title, regular description.
 */
function ProcessStep({
  number,
  title,
  description,
  variant = "plain",
  theme = "light",
  style = {},
  ...rest
}) {
  const dark = theme === "dark";
  const titleColor = dark ? "var(--text-on-dark)" : "var(--text-strong)";
  const descColor = dark ? "var(--text-on-dark-muted)" : "var(--text-muted)";
  const numEl = variant === "circle" ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "44px",
      height: "44px",
      borderRadius: "var(--radius-pill)",
      border: "2px solid var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h4)",
      color: titleColor
    }
  }, number) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "clamp(2rem, 1.4rem + 2vw, 3rem)",
      lineHeight: 0.9,
      letterSpacing: "var(--ls-tight)",
      color: "var(--accent)",
      minWidth: "1.6em"
    }
  }, number);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: "16px",
      alignItems: variant === "circle" ? "center" : "flex-start",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), numEl, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h4)",
      color: titleColor,
      letterSpacing: "var(--ls-snug)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "3px",
      fontSize: "var(--fs-body)",
      lineHeight: 1.45,
      color: descColor
    }
  }, description)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBig.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — StatBig
 * Oversized green stat with caption. Social-proof / data highlight.
 */
function StatBig({
  value,
  caption,
  source,
  theme = "dark",
  align = "left",
  style = {},
  ...rest
}) {
  const dark = theme === "dark";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-extrabold)",
      fontSize: "clamp(3rem, 2rem + 4vw, 5rem)",
      lineHeight: 0.95,
      letterSpacing: "var(--ls-tight)",
      color: "var(--accent)"
    }
  }, value), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "10px",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.3,
      color: dark ? "var(--text-on-dark)" : "var(--text-strong)",
      maxWidth: "26ch",
      marginLeft: align === "center" ? "auto" : 0,
      marginRight: align === "center" ? "auto" : 0
    }
  }, caption), source && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px",
      fontSize: "var(--fs-small)",
      color: dark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, source));
}
Object.assign(__ds_scope, { StatBig });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBig.jsx", error: String((e && e.message) || e) }); }

// components/brand/Waveform.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Waveform
 * The signature green audio-equalizer motif. Procedural bars,
 * optionally animated. Sits on dark surfaces or as a base accent.
 */
function Waveform({
  bars = 48,
  height = 80,
  color = "var(--accent)",
  animated = false,
  align = "center",
  glow = true,
  style = {},
  ...rest
}) {
  // deterministic "audio" envelope: louder in the middle, jittered
  const heights = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < bars; i++) {
      const t = i / (bars - 1);
      const env = Math.sin(t * Math.PI); // 0..1..0
      const jitter = 0.35 + 0.65 * Math.abs(Math.sin(i * 12.9898) * 43758.5453 % 1);
      out.push(Math.max(0.08, env * jitter));
    }
    return out;
  }, [bars]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: align === "bottom" ? "flex-end" : "center",
      justifyContent: "center",
      gap: "max(2px, 0.4%)",
      height: typeof height === "number" ? `${height}px` : height,
      width: "100%",
      filter: glow ? "drop-shadow(0 0 14px rgba(64,237,81,0.45))" : "none",
      ...style
    }
  }, rest), heights.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      maxWidth: "8px",
      height: `${h * 100}%`,
      background: color,
      borderRadius: "var(--radius-pill)",
      transformOrigin: align === "bottom" ? "bottom" : "center",
      animation: animated ? `vzWave 1100ms ${i % 7 * 90}ms ease-in-out infinite alternate` : "none"
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes vzWave{from{transform:scaleY(0.45)}to{transform:scaleY(1)}}
        @media (prefers-reduced-motion: reduce){[style*="vzWave"]{animation:none!important}}`));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Waveform.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Badge
 * Small status / count indicator. Pill or dot.
 */
function Badge({
  children,
  tone = "accent",
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    accent: {
      background: "var(--accent)",
      color: "var(--accent-contrast)"
    },
    dark: {
      background: "var(--vz-black)",
      color: "var(--text-on-dark)"
    },
    neutral: {
      background: "var(--surface-muted)",
      color: "var(--text-strong)"
    },
    danger: {
      background: "var(--vz-danger)",
      color: "#fff"
    }
  };
  if (dot) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "var(--radius-pill)",
        ...tones[tone],
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "20px",
      height: "20px",
      padding: "0 7px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "12px",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Button
 * Pill-shaped, bold. Green is the primary commercial CTA.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconPosition = "left",
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  style = {},
  ...rest
}) {
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const pads = {
    sm: "0 16px",
    md: "0 22px",
    lg: "0 30px"
  };
  const fonts = {
    sm: "var(--fs-small)",
    md: "var(--fs-body)",
    lg: "var(--fs-body-lg)"
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      border: "2px solid var(--accent)"
    },
    dark: {
      background: "var(--vz-black)",
      color: "var(--text-on-dark)",
      border: "2px solid var(--vz-black)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid var(--vz-black)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid transparent"
    },
    "on-dark": {
      background: "var(--vz-white)",
      color: "var(--vz-black)",
      border: "2px solid var(--vz-white)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    height: heights[size],
    padding: pads[size],
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--fw-bold)",
    fontSize: fonts[size],
    lineHeight: 1,
    letterSpacing: "-0.005em",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (disabled) return;
    e.currentTarget.style.filter = "brightness(0.94)";
  };
  const onLeave = e => {
    e.currentTarget.style.filter = "none";
    e.currentTarget.style.transform = "none";
  };
  const onDown = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "scale(0.97)";
  };
  const onUp = e => {
    if (disabled) return;
    e.currentTarget.style.transform = "none";
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === "left" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon), children, icon && iconPosition === "right" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon));
  const handlers = {
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: base
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Card
 * Generously rounded surface. Light or dark theme.
 */
function Card({
  children,
  theme = "light",
  elevation = "md",
  padding = "lg",
  accentBorder = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: "0",
    sm: "16px",
    md: "22px",
    lg: "28px",
    xl: "36px"
  };
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    glow: "var(--glow-green-md)"
  };
  const themes = {
    light: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border)"
    },
    muted: {
      background: "var(--surface-muted)",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--surface-dark-card)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--border-dark)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      border: "1px solid var(--accent)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pads[padding],
      boxShadow: shadows[elevation],
      fontFamily: "var(--font-sans)",
      ...themes[theme],
      ...(accentBorder ? {
        border: "2px solid var(--accent)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Tag / Label
 * The signature pill label. Use for eyebrows, categories, statuses.
 */
function Tag({
  children,
  variant = "green",
  size = "md",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "4px 10px",
      fontSize: "11px"
    },
    md: {
      padding: "6px 14px",
      fontSize: "var(--fs-small)"
    },
    lg: {
      padding: "9px 20px",
      fontSize: "var(--fs-body)"
    }
  };
  const variants = {
    green: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      border: "2px solid var(--accent)"
    },
    black: {
      background: "var(--vz-black)",
      color: "var(--text-on-dark)",
      border: "2px solid var(--vz-black)"
    },
    "outline-green": {
      background: "transparent",
      color: "var(--text-accent)",
      border: "2px solid var(--accent)"
    },
    "outline-dark": {
      background: "transparent",
      color: "var(--text-strong)",
      border: "2px solid var(--vz-black)"
    },
    soft: {
      background: "var(--accent-soft)",
      color: "var(--vz-green-800)",
      border: "2px solid var(--accent-soft)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Checkbox
 * Square, bold check. Green when selected.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  theme = "light",
  style = {},
  ...rest
}) {
  const dark = theme === "dark";
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: "22px",
      height: "22px",
      flex: "0 0 auto",
      borderRadius: "7px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--accent)" : dark ? "var(--surface-dark-raised)" : "var(--surface-base)",
      border: `2px solid ${on ? "var(--accent)" : dark ? "var(--border-dark)" : "var(--vz-black)"}`,
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)"
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--vz-black)",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)",
      color: dark ? "var(--text-on-dark)" : "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voz Estratégica — Input (text field with optional label).
 * Rounded, bold label. Green focus ring.
 */
function Input({
  label,
  hint,
  error,
  theme = "light",
  type = "text",
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `vz-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const dark = theme === "dark";
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      fontFamily: "var(--font-sans)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-small)",
      color: dark ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      height: "var(--control-h-md)",
      padding: "0 16px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body)",
      fontWeight: "var(--fw-medium)",
      color: dark ? "var(--text-on-dark)" : "var(--text-strong)",
      background: dark ? "var(--surface-dark-raised)" : "var(--surface-base)",
      border: `2px solid ${error ? "var(--vz-danger)" : focused ? "var(--accent)" : dark ? "var(--border-dark)" : "var(--border)"}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focused && !error ? "var(--glow-green-sm)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-small)",
      color: error ? "var(--vz-danger)" : dark ? "var(--text-on-dark-muted)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
// Voz Estratégica — Landing: Nav + Hero
const VZ = window.VozEstratGicaMasterEnVentasDesignSystem_25a70b;
function ArrowR({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
}
function ArrowCircle() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 26,
      height: 26,
      borderRadius: 999,
      background: "var(--vz-black)",
      color: "var(--accent)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(ArrowR, null));
}
function Nav() {
  const links = ["El método", "Resultados", "Carlos Laguna", "Precio"];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(14,15,12,0.82)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "14px var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/voz-estrategica-ondark.png",
    alt: "Voz Estrat\xE9gica",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--text-on-dark-muted)",
      textDecoration: "none",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-semibold)"
    }
  }, l))), /*#__PURE__*/React.createElement(VZ.Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(ArrowCircle, null)
  }, "Inscr\xEDbete"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      background: "var(--vz-black)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.6,
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(VZ.Waveform, {
    bars: 90,
    height: 320,
    glow: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "clamp(48px,8vw,110px) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VZ.Tag, {
    variant: "green",
    size: "md",
    style: {
      marginBottom: 22
    }
  }, "Masterclass B2B \xB7 De clientes a fans"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: "var(--text-on-dark)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "clamp(2.6rem,1.5rem+4vw,4.6rem)",
      lineHeight: 0.98,
      letterSpacing: "var(--ls-tight)"
    }
  }, "El arte de vender", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "sin vender")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      maxWidth: "48ch",
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.55,
      fontWeight: "var(--fw-medium)"
    }
  }, "Aprende a conectar con tu cliente antes de hacer una propuesta. La venta real empieza en la conversaci\xF3n, no en el cierre."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(VZ.Button, {
    variant: "primary",
    size: "lg",
    icon: /*#__PURE__*/React.createElement(ArrowCircle, null)
  }, "\xA1Asegura tu cupo!"), /*#__PURE__*/React.createElement(VZ.Button, {
    variant: "on-dark",
    size: "lg"
  }, "Ver el temario")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginTop: 30,
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-semibold)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "+5.000 vendedores formados"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "\u25CF"), /*#__PURE__*/React.createElement("span", null, "4 semanas \xB7 en vivo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      background: "linear-gradient(180deg,#2a2d27,#0e0f0c)",
      aspectRatio: "4/5",
      boxShadow: "var(--glow-green-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/carlos-portrait.jpg",
    alt: "Carlos Laguna",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,transparent 55%,rgba(14,15,12,0.9))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      bottom: 16,
      right: 18
    }
  }, /*#__PURE__*/React.createElement(VZ.Tag, {
    variant: "black",
    size: "sm",
    style: {
      marginBottom: 8
    }
  }, "Voz Estrat\xE9gica"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-on-dark)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-h3)"
    }
  }, "Carlos Laguna"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--fs-small)"
    }
  }, "Estratega en ventas y comunicaci\xF3n"))))));
}
Object.assign(window, {
  Nav,
  Hero,
  ArrowR,
  ArrowCircle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SectionsA.jsx
try { (() => {
// Voz Estratégica — Landing: Trust strip, Transformation, Method
const VZa = window.VozEstratGicaMasterEnVentasDesignSystem_25a70b;
function TrustStrip() {
  const brands = ["Mercedes-Benz", "Nespresso", "Bancolombia", "Kimberly-Clark", "Pepsi"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--vz-black)",
      borderTop: "1px solid var(--border-dark)",
      padding: "28px var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--fs-small)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.04em"
    }
  }, "Formando equipos comerciales en"), brands.map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      color: "var(--text-on-dark)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "var(--fs-h4)",
      letterSpacing: "-0.01em",
      opacity: 0.85
    }
  }, b))));
}
function Transformation() {
  const dont = ["Habla más de lo que escucha", "Presenta el producto sin diagnóstico", "Baja el precio ante la primera objeción", "Persigue al cliente hasta el rechazo"];
  const doo = ["Diagnostica antes de proponer", "Conecta el producto con el dolor real", "Defiende el valor con argumentos sólidos", "Construye relaciones de largo plazo"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-base)",
      padding: "clamp(56px,8vw,104px) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(VZa.Tag, {
    variant: "soft",
    style: {
      marginBottom: 16
    }
  }, "La transformaci\xF3n del vendedor"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: "var(--fw-extrabold)",
      fontSize: "clamp(2rem,1.3rem+2.5vw,3.2rem)",
      letterSpacing: "var(--ls-snug)",
      color: "var(--text-strong)"
    }
  }, "De improvisar ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, "a vender con sistema"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(VZa.Card, {
    theme: "muted",
    padding: "xl",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-small)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Antes \u2014 el vendedor com\xFAn"), dont.map(t => /*#__PURE__*/React.createElement(VZa.ComparePoint, {
    key: t,
    type: "dont"
  }, t))), /*#__PURE__*/React.createElement(VZa.Card, {
    theme: "accent",
    padding: "xl",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-small)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--vz-black)",
      opacity: 0.7
    }
  }, "Despu\xE9s \u2014 el vendedor estrat\xE9gico"), doo.map(t => /*#__PURE__*/React.createElement(VZa.ComparePoint, {
    key: t,
    type: "do",
    theme: "accent"
  }, t))))));
}
function Method() {
  const steps = [["01", "Prospección inteligente", "Encuentra al cliente correcto antes de llamar."], ["02", "Apertura de confianza", "Crea conexión genuina desde el primer contacto."], ["03", "Diagnóstico profundo", "Pregunta más de lo que propones."], ["04", "Propuesta personalizada", "Diseña una solución para su problema específico."], ["05", "Cierre y seguimiento", "La venta termina cuando el cliente vuelve."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-dark)",
      padding: "clamp(56px,8vw,104px) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VZa.Tag, {
    variant: "green",
    style: {
      marginBottom: 18
    }
  }, "El m\xE9todo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: "var(--text-on-dark)",
      fontWeight: "var(--fw-extrabold)",
      fontSize: "clamp(2rem,1.3rem+2.5vw,3rem)",
      letterSpacing: "var(--ls-snug)",
      lineHeight: 1.02
    }
  }, "5 pasos del vendedor estrat\xE9gico"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      color: "var(--text-on-dark-muted)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.55
    }
  }, "El cliente no compra productos. Compra soluciones a sus problemas. Tu trabajo es entender cu\xE1les son antes de hablar de tu oferta."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(VZa.Waveform, {
    bars: 48,
    height: 56,
    align: "bottom"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "20px 0",
      borderBottom: i < steps.length - 1 ? "1px solid var(--border-dark)" : "none"
    }
  }, /*#__PURE__*/React.createElement(VZa.ProcessStep, {
    number: n,
    title: t,
    description: d,
    theme: "dark"
  }))))));
}
Object.assign(window, {
  TrustStrip,
  Transformation,
  Method
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SectionsA.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ComparePoint = __ds_scope.ComparePoint;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.StatBig = __ds_scope.StatBig;

__ds_ns.Waveform = __ds_scope.Waveform;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
