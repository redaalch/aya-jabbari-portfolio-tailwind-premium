Final Design System — Aya Jabbari Portfolio
Version: Final merged design system
Style direction: engineering-elegant, warm, recruiter-focused
Stack target: React + Tailwind CSS
Visual identity: cream / blush / dusty rose / deep plum, serif headings, modern rounded cards, subtle shadows

1. Brand Personality
Aya’s portfolio should feel like:
Elegant
Warm
Professional
Technical
Credible
Precise
Recruiter-friendly
Quietly confident
Feminine without losing authority
Premium personal portfolio, not a generic developer template
The brand statement:
Quietly confident engineering, presented with editorial warmth.
The site should communicate that Aya is a serious computer engineering student with practical project experience, applied AI exposure, and strong potential for internships, PFA opportunities, full-stack work, backend/API work, data/AI projects, and automation projects.
Avoid:
Glossy gradients
Neon colors
Childish illustrations
Animated mascots
Bouncing emojis
Generic stock developer images
Overly corporate SaaS visuals
Overly decorative fashion-portfolio styling
2. Visual Design Principles
The design should support recruiter scanning first and technical depth second.
Content should lead. The page exists to showcase Aya’s strongest proof: ONDA, Ramadan AI Hackathon, Capgemini Hackathon, and her strongest projects.
Whitespace should signal credibility. The layout should breathe, especially around the hero, featured projects, and experience sections.
Use one dominant accent per viewport. Plum is the authority color. Dusty rose is the accent. Cream and blush provide warmth.
Cards should carry proof. Projects, hackathons, experience, skills, education, and certifications should use consistent card systems.
Motion should support reading, never replace it. No scroll-jacking, no typewriter hero, no heavy parallax.
Honesty is part of the UI. Missing GitHub links should be hidden or replaced with “Code available on request.” Never show fake buttons or fake demos.
3. Color Palette
Use the following final palette.
colors: {  cream: {    50: "#FBF7F2",    100: "#F5EFE7",    200: "#EBE2D6",  },  blush: {    50: "#FBEEF1",    100: "#F4D9DC",  },  rose: {    300: "#D9A2AC",    500: "#B85F73",    600: "#9D4A5E",  },  plum: {    300: "#A595A8",    500: "#6B556D",    700: "#4A2F4D",    900: "#2A1B2D",  },  success: {    600: "#4A7C59",  },  warning: {    600: "#9C6B2D",  },  error: {    600: "#A8424A",  },  white: "#FFFFFF",}
4. Color Roles
Page background: cream-50
Alternate section background: cream-100
Card background: white
Primary text: plum-900
Body text: plum-700
Metadata / dates / captions: plum-500
Placeholder / disabled text: plum-300
Primary CTA background: plum-900
Primary CTA text: cream-50
Primary CTA hover: plum-700
Secondary CTA border: plum-900/80
Secondary CTA hover background: blush-50
Inline link: rose-500
Inline link hover: rose-600
Eyebrow labels: rose-500
Tier 1 skill chip: plum-900 background, cream-50 text
Default stack chip: blush-50 background, plum-900 text
Card border: rgba(42, 27, 45, 0.08)
Focus ring: rose-500
Success state: success-600
Error state: error-600
Warning / pending state: warning-600
Do not use bright pink. Do not use black as the main text color. Deep plum replaces black.
5. Typography System
Use three font families.
Display font: Fraunces
Body font: Inter
Monospace font: JetBrains Mono
Recommended production setup: self-host fonts using @fontsource-variable.
@import "@fontsource-variable/fraunces";@import "@fontsource-variable/inter";@import "@fontsource-variable/jetbrains-mono";
6. Type Scale
fontSize: {  "display-xl": [    "clamp(3.25rem, 6vw, 5.25rem)",    { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" }  ],  "display-lg": [    "clamp(2.5rem, 4.5vw, 3.75rem)",    { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "500" }  ],  "display-md": [    "clamp(1.75rem, 2.5vw, 2.25rem)",    { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" }  ],  "display-sm": [    "1.375rem",    { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" }  ],  "body-lg": ["1.125rem", { lineHeight: "1.6" }],  "body-md": ["1rem", { lineHeight: "1.6" }],  "body-sm": ["0.9375rem", { lineHeight: "1.55" }],  "body-xs": ["0.8125rem", { lineHeight: "1.5", fontWeight: "500" }],  "eyebrow": [    "0.75rem",    { lineHeight: "1.4", letterSpacing: "0.18em", fontWeight: "600" }  ],  "chip": ["0.8125rem", { lineHeight: "1.2", fontWeight: "500" }],}
Rules:
Use one <h1> only: Aya Jabbari.
Use <h2> for major sections.
Use <h3> for project, hackathon, certification, and card titles.
Maximum paragraph width: around 640px.
Do not use tiny text for important recruiter information such as availability, location, email, or stack.
7. Spacing System
Use a 4px base grid.
spacing: {  0.5: "2px",  1: "4px",  2: "8px",  3: "12px",  4: "16px",  5: "20px",  6: "24px",  8: "32px",  10: "40px",  12: "48px",  16: "64px",  20: "80px",  24: "96px",  32: "128px",  40: "160px",}
Section padding:
Mobile: py-16
Tablet: py-20
Desktop: py-24
Hero padding:
Mobile: pt-24 pb-16
Desktop: pt-32 pb-24
Card padding:
Compact card: p-6
Featured card: p-6 md:p-8
Large experience card: p-8 md:p-10
8. Layout Grid
Container widths:
maxWidth: {  narrow: "720px",  default: "1100px",  wide: "1280px",  prose: "640px",}
Container classes:

<div className="mx-auto w-full max-w-default px-6 lg:px-14">
Section composition:
Hero: 7 / 5 split on desktop, single column on mobile.
About: 5 / 7 split on desktop.
Skills: 2 columns on tablet, 4 columns on desktop, 1 column on mobile.
Experience: wide card, with metadata left and implementation details right.
Hackathons: 2 cards side by side on desktop, stacked on mobile.
Featured Projects: alternating large cards or 2-column grid.
More Projects: 3 columns desktop, 1 column mobile.
Education: timeline or compact list.
Certifications: 3 issuer columns desktop, stacked mobile.
Contact: form/details two columns desktop, stacked mobile.
9. Border Radius System
borderRadius: {  xs: "4px",  sm: "8px",  md: "12px",  lg: "16px",  xl: "20px",  "2xl": "28px",  full: "9999px",}
Usage:
Buttons: rounded-xl
Cards: rounded-xl or rounded-2xl
Featured cards: rounded-2xl
Inputs: rounded-md or rounded-lg
Chips: rounded-full
Avatar / social buttons: rounded-full
Do not mix too many radii in the same viewport. Use mostly sm, xl, and 2xl.
10. Shadow and Elevation
Use plum-tinted shadows, not neutral grey.
boxShadow: {  soft: "0 4px 16px -4px rgba(42,27,45,0.06)",  card: "0 12px 32px -12px rgba(42,27,45,0.10)",  "card-hover": "0 20px 48px -16px rgba(42,27,45,0.16)",  cta: "0 12px 28px -8px rgba(184,95,115,0.32)",  "cta-hover": "0 18px 40px -10px rgba(184,95,115,0.42)",}
Rules:
Default cards use shadow-soft or shadow-card.
Interactive cards can upgrade to shadow-card-hover.
Primary CTA uses shadow-cta.
Do not use heavy dark shadows.
Focus states should use rings, not shadow alone.
11. Button Styles
Primary Button
Use for Email Aya and the strongest conversion action.
<a  href="mailto:ayajabbari81@gmail.com"  className="    inline-flex h-12 min-w-[140px] items-center justify-center gap-2    rounded-xl bg-plum-900 px-7    text-[15px] font-semibold tracking-[-0.005em] text-cream-50    shadow-cta transition-all duration-200 ease-out    hover:-translate-y-0.5 hover:bg-plum-700 hover:shadow-cta-hover    active:translate-y-0 active:bg-rose-600    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500    focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50  ">  Email Aya</a>
Secondary Button
Use for View Projects, Download CV, or View Details when paired with the primary CTA.
<a  className="    inline-flex h-12 min-w-[140px] items-center justify-center gap-2    rounded-xl border border-plum-900/80 bg-transparent px-7    text-[15px] font-semibold text-plum-900    transition-all duration-200 ease-out    hover:border-plum-900 hover:bg-blush-50    active:bg-blush-100    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500    focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50  ">  View Projects</a>
Tertiary Button
Use for Copy Email, View Details, or small inline actions.
<button  className="    inline-flex h-10 items-center gap-1.5 rounded-md px-2    text-[14px] font-semibold text-plum-900    transition-colors duration-150    hover:text-rose-500    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500    focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50  ">  Copy Email</button>
Button rules:
Only one dominant CTA per viewport.
Minimum touch target on mobile: 48px.
Disable buttons properly when loading.
Never show Download CV unless the CV file exists.
Never show fake GitHub/demo buttons.
12. Link Styles
Inline links:
<a className="text-rose-500 underline-offset-4 hover:underline focus-visible:underline">  View certificate</a>
Standalone links:
<a  className="    inline-flex items-center gap-1 border-b border-plum-900/30 pb-0.5    text-[14px] font-semibold text-plum-900    transition-colors duration-150    hover:border-rose-500 hover:text-rose-500  ">  View on GitHub</a>
Rules:
External links should include an arrow icon.
Use target="_blank" and rel="noopener noreferrer" for external links.
Do not use vague text like “click here.”
Email links should use mailto: with copy fallback.
13. Navigation Styles
Desktop navigation:
Fixed top
Height: h-16
Background: cream-50/85
Backdrop blur: backdrop-blur-md
Border appears subtly on scroll
Left: Aya Jabbari wordmark
Center: section anchors
Right: GitHub / LinkedIn if confirmed + Email Aya CTA
Navigation anchors:
About
Skills
Experience
Hackathons
Projects
Education
Contact
Example:
<nav className="fixed inset-x-0 top-0 z-50 h-16 bg-cream-50/85 backdrop-blur-md">  <div className="mx-auto flex h-full max-w-wide items-center justify-between px-6 lg:px-14">    <a href="#top" className="font-display text-[20px] font-medium tracking-tight text-plum-900">      Aya Jabbari    </a>  </div></nav>
Mobile navigation:
Logo left
Email Aya visible in nav bar
Hamburger menu right
Menu opens as a cream side sheet
Links have 48px touch targets
Download CV appears only if confirmed
Active section detection:
Use IntersectionObserver and apply active state to nav anchors.
14. Hero Styles
Hero goal: explain Aya in under 5 seconds.
Desktop layout:
Left: text and CTAs
Right: portrait card or abstract technical card
Mobile layout:
Status pill
Portrait or visual card
Name
Role
Specialization
Profile line
CTAs
Hero content order:
Status pill
H1: Aya Jabbari
Role: Computer Engineering Student
Specialization: Full-Stack Development · Applied AI · Data · Automation
One-line profile
Location: Fès, Morocco
CTA row
Trust row: ENSA Fès · ONDA · Ramadan AI · Capgemini
Status pill:
<span className="inline-flex h-8 items-center gap-2 rounded-full border border-[rgba(42,27,45,0.08)] bg-cream-100 pl-2.5 pr-3.5 text-body-xs text-plum-700">  <span className="h-1.5 w-1.5 rounded-full bg-success-600" aria-hidden="true" />  Open to internship / PFA — 2026</span>
Hero background:
Cream base with one soft blush decorative blob. Avoid multiple competing gradients.
<section className="relative overflow-hidden bg-cream-50 pt-24 pb-16 md:pt-32 md:pb-24">  <div className="pointer-events-none absolute -right-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-blush-100/50 blur-[64px]" /></section>
Hero rules:
No video.
No typewriter effect.
No parallax.
No exaggerated floating animations.
CTA buttons stack on small mobile screens.
15. About Section Styles
About should be short and credible.
Layout:
Left: eyebrow + heading
Right: two compact paragraphs + optional meta rows
Recommended heading:
Building practical software, end to end.
Body should mention:
4th-year Computer Engineering student
ENSA Fès
Full-stack development
Automation
Data-oriented systems
Applied AI / generative AI
Concrete operational workflows
Do not use inspirational quotes or long bio text.
Optional meta rows:
Location: Fès, Morocco
Studies: Computer Engineering, ENSA Fès
Languages: Arabic, French, English
16. Project Card Styles
Projects are the core proof layer.
Featured Project Card
Use large cards for ONDA, Smart Assurance, CNSS, Swapify, Intelligent Chatbot, CI/CD, KubeFlask, and SNCF BI.
Card structure:
Category eyebrow
Project title
One-sentence problem
Contribution line
Implementation summary
Stack chips
Links or empty state
Container:
<article className="  group rounded-2xl border border-[rgba(42,27,45,0.04)]  bg-white p-6 shadow-card transition-all duration-300 ease-out  hover:-translate-y-0.5 hover:shadow-card-hover  md:p-8">
Stack chips: show max 5, then +N.
Empty state:
No repo: Code available on request
No demo: hide demo button
No screenshot: use branded gradient placeholder, not stock image
Featured Project Order

ONDA SNMP Network Monitoring Dashboard

Smart Assurance Validator

CNSS AI File Analysis System

Swapify Learning Platform

Intelligent Chatbot

CI/CD Pipeline

KubeFlask Local

SNCF Data Analysis / BI

Secondary Projects
Use smaller cards for:
Movie Recommendation System
AI Image Generation for E-commerce
Café Management Application
Secondary cards should not compete visually with the top projects.
17. Project Filter Styles
Filters:
All
Full-Stack
AI
Data/BI
DevOps
Backend
Desktop
Databases
Inactive filter:
className="rounded-full border border-[rgba(42,27,45,0.08)] px-3 py-1.5 text-chip text-plum-700 hover:bg-blush-50"
Active filter:
className="rounded-full bg-plum-900 px-3 py-1.5 text-chip text-cream-50"
Accessibility:
Use role="tablist" if filters behave like tabs.
Filters must be keyboard-operable.
On mobile, filters should wrap, not horizontally scroll.
18. Skill Card Styles
Skills should be grouped, not shown as a giant tag cloud.
Recommended groups:
Languages
Web & Backend
Databases
AI & Generative Tools
Data & BI
DevOps & Systems
Mobile & Desktop
Concepts
Skill card:
<div className="rounded-xl bg-white p-6 shadow-soft">  <h3 className="font-display text-display-sm text-plum-900">Web & Backend</h3></div>
Tier 1 chip:
<span className="rounded-full bg-plum-900 px-3 py-1.5 text-chip text-cream-50">  Spring Boot</span>
Tier 2 chip:
<span className="rounded-full border border-[rgba(42,27,45,0.08)] px-3 py-1.5 text-chip text-plum-700">  Docker</span>
Tier 3 skills:
Render as text under:
Also familiar with: C, C++, C#, .NET, MAUI, UML
Do not use progress bars, star ratings, percentages, or “expert” labels.
Optional progressive disclosure:
On hover/focus, Tier 1 skills can show accessible tooltip text such as:
Used in: Intelligent Chatbot
19. Hackathon and Experience Card Styles
ONDA Experience Card
ONDA should be visually prominent.
Card:
<article className="  rounded-2xl border border-[rgba(42,27,45,0.04)]  bg-cream-100 p-8 shadow-card md:p-10">
Desktop layout:
Left: role, organization, date
Right: description, bullets, stack chips
Bullets:
Use rose dot markers.
Keep to 3 bullets.
Do not claim deployment unless confirmed.
Recommended scope tag:
Built and demonstrated
Not: Deployed in production
Hackathon Cards
Use two equal cards on desktop, stacked on mobile.
Each card should include:
Hackathon label
Organizer
Date
Project name
Problem
Approach
Stack/method chips
Use icons like document, workflow, validation, scan, shield, or alert.
Do not use trophy icons unless an award is confirmed.
20. Education and Certification Styles
Education Timeline
Use a clean vertical timeline.
Content:
2024–present
Engineering Cycle in Computer Engineering — ENSA Fès
2022–2024
Integrated Preparatory Cycle — ENSA Fès
June 2022
Baccalaureate — Institut Rabelais, Fès
Timeline rules:
Dates use plum-500.
Institution/degree uses plum-900.
No GPA or rankings unless confirmed.
Certifications
Group by issuer:
Oracle
SQL Database Programming
Database Design
365 DataScience
Introduction to ChatGPT and Generative AI
Introduction to Artificial Intelligence
Coding for All / W3Schools
C and C++
Do not use logos in v1 unless Aya confirms usage rights.
Verification links only if provided.
21. Contact Form Styles
Contact section should feel direct and calm.
Layout:
Desktop: form left, direct contact list right
Mobile: single column
Contact content:
Email: ayajabbari81@gmail.com
Phone: +212 637 57 56 62
Location: Fès, Morocco
LinkedIn: needs confirmation
GitHub: needs confirmation
CV: needs confirmation
Input style:
<input  className="    block h-12 w-full rounded-md border border-plum-700/30    bg-white px-4 text-plum-900 placeholder:text-plum-300    transition-colors duration-150    focus:border-plum-900 focus:outline-none focus:ring-2 focus:ring-rose-500/30    aria-[invalid=true]:border-error-600 aria-[invalid=true]:ring-error-600/30  "/>
Form states:
Idle: default inputs
Submitting: button shows spinner + “Sending…”
Success: success card confirms message
Error: show fallback email
Copy email success:
Email copied
Error message:
Sending failed — you can also reach Aya directly at ayajabbari81@gmail.com.
If no contact form is used, make the email card visually dominant.
22. Badge, Chip, and Tag Styles
Chip variants:
Solid chip: Tier 1 skills / active filters
Tinted chip: default stack chips
Ghost chip: Tier 2 skills / inactive filters
Status chip: availability
Warning chip: internal pending confirmation only
Solid:
<span className="rounded-full bg-plum-900 px-3 py-1.5 text-chip text-cream-50">  React</span>
Tinted:
<span className="rounded-full bg-blush-50 px-3 py-1.5 text-chip text-plum-900">  Applied AI</span>
Ghost:
<span className="rounded-full border border-[rgba(42,27,45,0.08)] px-3 py-1.5 text-chip text-plum-700">  Docker</span>
Do not show “needs confirmation” badges on the public site. Use them only during development.
23. Icon Usage Rules
Use only one icon set:
Lucide React
Recommended icons:
Mail
Phone
MapPin
Github
Linkedin
ExternalLink
Download
Code2
Database
BrainCircuit
Server
Workflow
FileSearch
ShieldCheck
Monitor
GraduationCap
Languages
Users
Rules:
Icons should support meaning, not decorate randomly.
Use outline icons only.
No colorful tech logos for skill chips.
No emoji icons.
No flag icons for languages.
Icon-only links require aria-label.
Icon sizes:
Inline: 1em
CTA: 16px
Social: 20px
Section/card icon: 20–24px
24. Animation and Transition Rules
Allowed motion:
Hero text entrance, subtle and only on load
Card hover lift
Button hover lift
Image hover scale
Nav underline animation
Modal fade/slide
Forbidden motion:
Parallax
Scroll-jacking
Auto carousels
Typewriter effects
Bouncy animations
Animated skill bars
Pulse status dot
Hero video
Continuous decorative animations
Timing:
transitionDuration: {  fast: "150ms",  base: "200ms",  slow: "300ms",  page: "400ms",}
Easing:
transitionTimingFunction: {  standard: "cubic-bezier(0.2, 0, 0, 1)",  emphasis: "cubic-bezier(0.3, 0, 0, 1.2)",}
Reduced motion:
@media (prefers-reduced-motion: reduce) {  *, *::before, *::after {    animation-duration: 0.01ms !important;    animation-iteration-count: 1 !important;    transition-duration: 0.01ms !important;    scroll-behavior: auto !important;  }}
25. Accessibility Rules
Accessibility is mandatory.
Requirements:
WCAG AA minimum.
One <h1> only.
Sequential heading hierarchy.
Use <header>, <nav>, <main>, and <footer>.
Skip-to-content link is required.
All interactive elements keyboard accessible.
Focus states always visible.
Touch targets at least 48px on mobile.
Body text minimum 16px.
Line height minimum 1.6.
Do not render text as images.
All meaningful images need alt text.
Decorative graphics use alt="".
Icon-only buttons need aria-label.
Forms must use real labels.
Form errors use aria-invalid and aria-describedby.
Toast messages use role="status" or aria-live="polite".
Modals trap focus and return focus on close.
Project filters are keyboard-operable.
Never rely on color alone.
Respect reduced motion.
26. Mobile Design Rules
Breakpoints:
screens: {  sm: "480px",  md: "768px",  lg: "1024px",  xl: "1280px",  "2xl": "1440px",}
Mobile behavior:
Single column below md.
Hero CTAs stack full-width.
Project cards stack vertically.
Project filters wrap.
Skill chips wrap.
No horizontal scrolling.
Email CTA remains easy to access.
Navigation becomes hamburger sheet.
Touch targets are at least 48px.
Images use explicit dimensions.
No hero video.
No heavy animation.
Mobile performance targets:
LCP under 2 seconds on 4G.
CLS below 0.05.
INP below 200ms.
First-load page weight under 500KB if possible.
Lazy-load everything below the hero except critical text.
27. Tailwind Configuration
import type { Config } from "tailwindcss";export default {  content: ["./index.html", "./src/**/*.{ts,tsx}"],  theme: {    container: {      center: true,      padding: {        DEFAULT: "1.5rem",        lg: "3.5rem",      },    },    extend: {      colors: {        cream: {          50: "#FBF7F2",          100: "#F5EFE7",          200: "#EBE2D6",        },        blush: {          50: "#FBEEF1",          100: "#F4D9DC",        },        rose: {          300: "#D9A2AC",          500: "#B85F73",          600: "#9D4A5E",        },        plum: {          300: "#A595A8",          500: "#6B556D",          700: "#4A2F4D",          900: "#2A1B2D",        },        success: {          600: "#4A7C59",        },        warning: {          600: "#9C6B2D",        },        error: {          600: "#A8424A",        },      },      fontFamily: {        display: ['"Fraunces"', "Georgia", "serif"],        sans: ['"Inter"', "system-ui", "sans-serif"],        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],      },      fontSize: {        "display-xl": [          "clamp(3.25rem, 6vw, 5.25rem)",          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" },        ],        "display-lg": [          "clamp(2.5rem, 4.5vw, 3.75rem)",          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "500" },        ],        "display-md": [          "clamp(1.75rem, 2.5vw, 2.25rem)",          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" },        ],        "display-sm": [          "1.375rem",          { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" },        ],        "body-lg": ["1.125rem", { lineHeight: "1.6" }],        "body-md": ["1rem", { lineHeight: "1.6" }],        "body-sm": ["0.9375rem", { lineHeight: "1.55" }],        "body-xs": ["0.8125rem", { lineHeight: "1.5", fontWeight: "500" }],        eyebrow: [          "0.75rem",          { lineHeight: "1.4", letterSpacing: "0.18em", fontWeight: "600" },        ],        chip: ["0.8125rem", { lineHeight: "1.2", fontWeight: "500" }],      },      borderRadius: {        xs: "4px",        sm: "8px",        md: "12px",        lg: "16px",        xl: "20px",        "2xl": "28px",      },      boxShadow: {        soft: "0 4px 16px -4px rgba(42,27,45,0.06)",        card: "0 12px 32px -12px rgba(42,27,45,0.10)",        "card-hover": "0 20px 48px -16px rgba(42,27,45,0.16)",        cta: "0 12px 28px -8px rgba(184,95,115,0.32)",        "cta-hover": "0 18px 40px -10px rgba(184,95,115,0.42)",      },      transitionTimingFunction: {        standard: "cubic-bezier(0.2, 0, 0, 1)",        emphasis: "cubic-bezier(0.3, 0, 0, 1.2)",      },      transitionDuration: {        fast: "150ms",        base: "200ms",        slow: "300ms",        page: "400ms",      },      maxWidth: {        narrow: "720px",        default: "1100px",        wide: "1280px",        prose: "640px",      },    },  },  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],} satisfies Config;
28. Global CSS
@import "@fontsource-variable/fraunces";@import "@fontsource-variable/inter";@import "@fontsource-variable/jetbrains-mono";@tailwind base;@tailwind components;@tailwind utilities;@layer base {  html {    scroll-behavior: smooth;  }  body {    @apply bg-cream-50 font-sans text-plum-700 antialiased;  }  h1,  h2,  h3,  h4 {    @apply font-display text-plum-900;  }  ::selection {    background: theme(colors.blush.100);    color: theme(colors.plum.900);  }}@layer components {  .eyebrow {    @apply text-eyebrow uppercase font-semibold tracking-[0.18em] text-rose-500;  }  .container-default {    @apply mx-auto w-full max-w-default px-6 lg:px-14;  }  .container-narrow {    @apply mx-auto w-full max-w-narrow px-6 lg:px-14;  }  .container-wide {    @apply mx-auto w-full max-w-wide px-6 lg:px-14;  }}@media (prefers-reduced-motion: reduce) {  *,  *::before,  *::after {    animation-duration: 0.01ms !important;    animation-iteration-count: 1 !important;    transition-duration: 0.01ms !important;    scroll-behavior: auto !important;  }}
29. Recommended React File Structure
src/├── components/│   ├── primitives/│   │   ├── Button.tsx│   │   ├── Chip.tsx│   │   ├── Card.tsx│   │   ├── Input.tsx│   │   ├── Tooltip.tsx│   │   └── SectionHeader.tsx│   ├── nav/│   │   ├── Nav.tsx│   │   └── MobileSheet.tsx│   ├── project/│   │   ├── ProjectCard.tsx│   │   └── ProjectFilters.tsx│   └── sections/│       ├── Hero.tsx│       ├── About.tsx│       ├── Skills.tsx│       ├── Experience.tsx│       ├── Hackathons.tsx│       ├── FeaturedProjects.tsx│       ├── MoreProjects.tsx│       ├── Education.tsx│       ├── Certifications.tsx│       ├── LanguagesVolunteering.tsx│       ├── Contact.tsx│       └── Footer.tsx├── data/│   └── profile.ts├── lib/│   ├── motion.ts│   └── analytics.ts└── styles/    └── globals.css
30. Data Model Contract
export type Project = {  slug: string;  title: string;  category:    | "Full-Stack"    | "AI"    | "Data/BI"    | "DevOps"    | "Backend"    | "Desktop"    | "Databases";  problem: string;  contribution: string;  description: string;  stack: string[];  links?: {    repo?: string;    demo?: string;  };  date?: string;  tier: "featured" | "secondary";};
Important rule:
If links.repo and links.demo are both missing, render:
Code available on request
Never render a fake or broken button.
31. Implementation Order

Tailwind config

Global CSS and fonts

Design primitives: Button, Chip, Card, Input, SectionHeader

Navigation and MobileSheet

Hero

Project data model

ProjectCard and ProjectFilters

About

Skills

Experience

Hackathons

Featured Projects

More Projects

Education

Certifications

Languages + Volunteering

Contact

Footer

Reduced-motion audit

Accessibility audit

Lighthouse audit

Real-device test on mobile

Final Design Direction
The final portfolio should feel like:
Soft visual identity + strong technical proof + recruiter-first clarity.
It should not look like a generic developer template. It should not look like a fashion portfolio. It should look like a refined engineering portfolio for a serious early-career candidate.
The final impression should be:
Aya is polished, credible, technically capable, and ready for internship or PFA opportunities in full-stack development, applied AI, data, and automation.
