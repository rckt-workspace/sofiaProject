# Voz Estratégica — Master en Ventas: De Clientes a Fans
### Design System

A commercial-authority brand system for **Master en Ventas: De Clientes a Fans**, the B2B sales
masterclass by **Carlos Laguna** (speaker, author of *De clientes a fans*), operated by
**Voz Estratégica**.

It powers long-form sales landing pages, Meta Ads creatives, Instagram carousels & reels,
LinkedIn anchor posts and email. Audience: entrepreneurs, sales teams, commercial leaders and
customer-experience managers across **LATAM**. Tone: commercial authority — direct,
results-driven, transformational; professional and aspirational, never casual or "cheap infoproduct".

---

## Sources

This system was derived from materials supplied by the client (stored in `uploads/`):

- **`Propuesta-identidad ventas.pdf`** — the brand identity proposal. Primary source for the
  palette (Negro / Verde / Blanco), typography (Montserrat), the speech-bubble logo, the green
  audio-waveform motif, pill labels, before/after and numbered-process layouts, and stationery mockups.
- **Photography** — `DSC01298.jpg` (studio portrait, black bg → `assets/photos/carlos-portrait.jpg`),
  `DSC06095 (1).jpg` & `DSC06137 (1).jpg` (Mercedes-Benz showroom → `carlos-mercedes-*.jpg`),
  plus Crehana/kitchen shots (not used — off-tone for the sales brand).
- **`LAGU - Firma vectorizada - ver negro.png`** — Carlos Laguna's handwritten signature
  (→ `assets/logos/firma-laguna.png`).

Logos were extracted from the PDF and cleaned (transparent background) into `assets/logos/`.
Rendered PDF pages used during exploration live in `scraps/` (safe to ignore/delete).

---

## CONTENT FUNDAMENTALS — how the brand writes

**Language:** Spanish (LATAM neutral). Voice of *commercial authority without stiffness*.

- **Address the reader as "tú"** — direct and personal. ("Aprende a conectar con **tu** cliente",
  "Deja de improvisar **tus** ventas", "¡Asegura **tu** cupo!").
- **Imperative + benefit.** Headlines command an action or name a transformation:
  "Vende más. Negocia mejor.", "Diagnostica antes de proponer."
- **Antes → Después framing** is the core narrative device: *de improvisar → a vender con sistema*;
  *el vendedor común → el vendedor estratégico*. Always contrast the old way with the strategic way.
- **Short, declarative sentences.** Often a punchy claim then a reframe:
  "El mejor vendedor no convence. Ayuda al cliente a tomar la decisión que ya quería tomar."
  "La venta real empieza en la conversación, no en el cierre."
- **Numbered method.** Process is sold as a system: "5 pasos del vendedor estratégico",
  "El proceso de venta consultiva" with 01–05 steps.
- **Social proof by named brands**: Mercedes-Benz, Nespresso, Bancolombia, Kimberly-Clark, Pepsi —
  cited plainly as where teams were trained. Stats get the oversized green treatment
  ("78% de las decisiones…").
- **Casing:** Sentence case for headlines and body; **UPPERCASE only for short eyebrows/labels**
  ("MASTERCLASS B2B", "EVENTO", "BOLD", "SEMI-BOLD"). Never all-caps paragraphs.
- **Punctuation:** ellipses for the dramatic pause/reframe ("perdona un error…"); the ampersand and
  "·" as separators in metadata ("2h · virtual"). Question hooks are common ("¿Tu equipo comercial
  está estancado?").
- **No emoji.** The brand is emoji-free. Emphasis comes from weight, the green accent, and pills —
  not icons-as-decoration.
- **CTAs** are short, urgent, benefit-led: "¡Asegura tu cupo!", "Reserva tu cupo", "Inscríbete".

---

## VISUAL FOUNDATIONS

**Palette.** Three constants — **Negro `#0E0F0C`**, **Verde `#40ED51`**, **Blanco `#FFFFFF`** —
expanded into working scales (`tokens/colors.css`). High-contrast by design: black & white do the
heavy lifting, green is the single accent (CTAs, numbers, stats, the waveform, key words inside a
headline). Two modes coexist: a **light** marketing mode (white surfaces, black text) and a
**dark** mode (near-black `#0E0F0C`/`#191B18` surfaces) used for social, event and premium contexts.

**Typography.** One family — **Montserrat** — across the board. **Bold/Extrabold** for headlines
(tight tracking, `-0.03em`, line-height ~1.0), **Semi-bold** for subheads, **Regular** for body.
Display type is large and confident. (`tokens/typography.css`.)

**Backgrounds.** Solid flat fills — black, green, or white — never busy gradients. The one
permitted "texture" is the **green audio-waveform / equalizer** motif, used full-bleed-low on dark
surfaces or as a base flourish (a brand signature, see `components/brand/Waveform`). Photography is
used full-bleed inside rounded frames with a bottom black-protection gradient.

**Imagery vibe.** Warm, professional B2B portraits — Carlos against dark/neutral backdrops, or in
aspirational contexts (Mercedes-Benz showroom). Graded dark and contrasty; the figure emerges from
near-black, which lets the green accents and waveform glow read. Not casual, not stocky.

**Shape language.** Two signatures: the **pill / capsule** (full-round `--radius-pill`) for buttons,
tags, eyebrows and labels; and **generously rounded cards** (24–40px). The **speech bubble** is the
logo's defining form. Cards: soft neutral shadows on light (`--shadow-sm/md/lg`); on dark, depth
comes from the **green glow** (`--glow-green-md/lg`) rather than heavy shadow. Borders are either a
hairline (`--border`) or a confident **2px black** outline; accent outlines are 2px green.

**Spacing & layout.** 4px base grid (`tokens/spacing.css`). Generous padding, clear vertical rhythm.
Sticky translucent dark nav with blur on dark pages. Two-column hero (copy + framed portrait).

**Motion.** Restrained and purposeful. Hover = slight brightness drop (`brightness(0.94)`) +
optional translate; press = `scale(0.97)`. The waveform may pulse subtly; a scarcity dot can pulse.
Easing `--ease-out` (cubic-bezier(.22,1,.36,1)), durations 120–360ms. All decorative animation
respects `prefers-reduced-motion`. No bounces, no spin, no parallax.

**Transparency & blur.** Used sparingly — the sticky nav (`rgba(14,15,12,.82)` + `backdrop-filter`)
and protection gradients over photography. Otherwise surfaces are opaque.

---

## ICONOGRAPHY

The brand is **icon-light and emoji-free**. Meaning is carried by type weight, the green accent, and
pills — not by decorative icon sets.

- **Built-in marks.** The recurring functional glyphs are drawn as **inline stroke SVG**
  (`stroke-width` ~3.5, round caps/joins — a heavy, geometric, Lucide-adjacent style):
  the **check ✓** (the strategic "do", and the Checkbox tick), the **✕** (the "don't" in
  antes/después), and the **arrow →** used inside a circular "arrow button" on primary CTAs.
- **Numerals as icons.** Oversized green numbers (01–05) and circled numbers carry the
  process/step lists — see `components/brand/ProcessStep`.
- **The waveform** is the brand's iconic graphic device (green equalizer bars), built procedurally
  in `components/brand/Waveform` — not an image asset.
- **Recommended set for net-new icons:** if a UI needs a broader icon set (calendar, location pin,
  chat, lightbulb — as seen in the event creatives), use **Lucide** (https://lucide.dev) at
  `stroke-width: 2.5–3`, square-ish, to match the heavy geometric feel. **Flag any substitution** to
  the client. Keep icons monochrome (black on light, white/green on dark).
- **No emoji, no flat multicolor icon illustrations.**

---

## VISUAL ASSETS (`assets/`)

- `logos/voz-estrategica-primary.png` — black VOZ bubble + green Estratégica (light & green bgs)
- `logos/voz-estrategica-ondark.png` — white VOZ bubble + green Estratégica (dark bgs)
- `logos/voz-estrategica-mono-green.png` — mono green variant
- `logos/firma-laguna.png` — Carlos Laguna signature
- `photos/carlos-portrait.jpg` — studio portrait, black bg (hero / authority)
- `photos/carlos-mercedes-car.jpg`, `photos/carlos-mercedes-dealer.jpg` — aspirational B2B context

---

## INDEX / MANIFEST

**Foundations (CSS)**
- `styles.css` — entry point (consumers link this); `@import`s only.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/elevation.css` · `tokens/fonts.css`

**Components** (`components/`) — React primitives, namespaced on `window` after the bundle loads.
- `core/` — **Button**, **Tag**, **Badge**, **Card**
- `forms/` — **Input**, **Checkbox**
- `brand/` — **Waveform**, **StatBig**, **ProcessStep**, **ComparePoint**

**Design System tab cards** (`guidelines/*.card.html`, `components/**/ *.card.html`) — specimens for
Colors, Type, Spacing, Brand and Components.

**UI kits & deliverables** (`ui_kits/`)
- `social/meta-ads-masterclass.html` — 3 Meta Ads creatives (4:5, 1080×1350), one offer / three hooks.
- `landing/` — long-form sales landing page (in progress: `Hero.jsx`, `SectionsA.jsx`).

**Other**
- `SKILL.md` — Agent-Skill manifest for downloadable use.
- `scraps/` — exploration artifacts (PDF renders, logo crops); not part of the system.

---

## Caveats

- **Montserrat** is loaded via Google Fonts (it is the genuine brand font per the identity proposal,
  so no substitution) — self-hosted woff2 files can be dropped into `tokens/` later if offline use is needed.
- **Partner logos** (Mercedes-Benz, Nespresso, etc.) are rendered as text wordmarks in kits —
  replace with official logo assets before publishing.
- The `landing/` UI kit is partially built; complete `index.html` + remaining sections to finish it.
