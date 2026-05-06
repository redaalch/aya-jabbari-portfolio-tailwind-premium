# Latest UI/UX Specification — Aya Jabbari Portfolio

**Version:** Final merged UI/UX specification
**Owner:** Aya Jabbari
**Stack target:** React + Tailwind CSS
**Format:** Single-page portfolio with anchored navigation
**Direction:** Engineering-elegant, warm, recruiter-first, editorial cream/plum identity

## 1. Final Homepage Narrative

The homepage should tell a clear recruiter-first story:

Aya Jabbari is a 4th-year Computer Engineering student at ENSA Fès. She builds practical software systems across full-stack development, backend/API engineering, applied AI, data/BI, automation, and deployment foundations. Her strongest proof is her ONDA internship, two applied-AI hackathons, and concrete projects involving SNMP monitoring, AI document validation, REST APIs, BI dashboards, DevOps automation, and generative AI workflows.

The user journey should be:

**Understand who Aya is → see her technical direction → trust her through ONDA and hackathons → inspect projects → confirm skills → download CV or contact her.**

The site should feel elegant, warm, structured, technical, and credible. It should not feel like a generic developer template, fashion portfolio, or SaaS landing page.

## 2. Design Principles

**Recruiter-first hierarchy.** Every viewport should answer one of these questions: who is she, what can she build, why should I trust her, or how do I contact her?

**Proof over polish.** ONDA, Ramadan AI, Capgemini, and concrete projects should sit higher than decoration.

**Quiet confidence.** Use editorial whitespace, serif headings, restrained motion, and precise copy. Avoid hype.

**Honest UI.** No fake links, fake demos, fake screenshots, fake metrics, or unverified logos. Missing repository links should say **Code available on request** or be hidden.

**One dominant CTA per viewport.** Email Aya is the main conversion action.

**Mobile-first.** Recruiters may open the portfolio from LinkedIn or email, so the path from landing to contact should take less than 90 seconds.

**Two-test rule.** Every element must pass the recruiter test and the interview test: it should help a recruiter decide faster, and Aya should be able to defend the claim in an interview.

## 3. Recommended Section Order

Use this final order:

1. Sticky Navbar
2. Hero
3. About
4. Skills
5. Experience — ONDA
6. Hackathons
7. Featured Projects
8. More Projects
9. Education
10. Certifications
11. Languages + Volunteering / Community
12. Contact
13. Footer

Navigation anchors:

**About · Skills · Experience · Hackathons · Projects · Education · Contact**

## 4. Visual System

Use the final design-system direction:

**Cream / blush / dusty rose / deep plum.**

Primary colors:

`cream-50 #FBF7F1` — page background
`cream-100 #F4ECDF` — alternate surfaces
`blush-200 #F2D8D2` — soft fills and chips
`rose-400 #C9849B` — dusty rose accent
`rose-600 #A35C72` — active accent and link underline
`plum-700 #5B2A45` — brand color, headings, primary buttons
`plum-900 #36172A` — body emphasis and footer background
`ink-900 #1F1A1D` — body text
`ink-600 #5A5258` — captions and muted text
`success-600 #3F7A5A` — copied/success states
`warn-600 #B6863B` — internal “needs confirmation” markers
`error-600 #A8424A` — form errors

Typography:

Display: **Fraunces** or Cormorant Garamond fallback
Body/UI: **Inter**
Mono/chips: **JetBrains Mono**

Type scale:

Hero H1: 64/68 desktop, 40/44 mobile
Section H2: 40/48 desktop, 30/36 mobile
Card H3: 22/28
Body: 16/26
Caption: 13/20
Chip: 13/20 mono

Layout:

Container max width: 1200px
Mobile gutters: 24px
Desktop gutters: 64px
Desktop grid: 12 columns
Tablet grid: 8 columns
Mobile grid: 4 columns / single-column content

Spacing:

Section gap: 96px desktop, 64px mobile
Subsection gap: 56px desktop, 40px mobile
Card padding: 24–32px
Project grid gap: 24px

Radii:

Small: 8px
Medium: 12px
Large: 20px
Pill: 999px

Shadows:

Use subtle plum-tinted shadows only. No heavy black shadows.

## 5. Component Library

### Buttons

Primary button: plum fill, cream text. Use for **Email Aya**.

Secondary button: transparent background, plum border. Use for **View Projects** and **Download CV**.

Tertiary button: text-only with rose underline on hover. Use for **View details** and footer links.

Disabled state: 40% opacity, no hover, no pointer.

Loading state: replace label with spinner + text, such as **Sending…**

### Chips

Tier 1 skills: filled blush/plum treatment.
Tier 2 skills: outlined.
Tier 3 skills: ghost text under **Also familiar with**.

All chips must wrap. Never force horizontal scroll.

### Cards

Use cards for projects, hackathons, experience, skills, education, certifications, and contact.

Shared card style:

Cream or white surface
20px radius
Subtle border
Soft plum-tinted shadow
24–32px padding

### Section Header

Each section should use:

Eyebrow label
Large serif H2
Optional one-line lede
Optional short hairline divider

## 6. Sticky Navbar

Goal: give persistent navigation and contact access.

Desktop layout:

Left: **Aya Jabbari** wordmark
Center: section links
Right: GitHub/LinkedIn if confirmed + **Email Aya** button

Mobile layout:

Logo left
Email Aya icon/button visible
Hamburger right
Menu opens as a cream side sheet or dropdown

CTA behavior:

Email uses `mailto:ayajabbari81@gmail.com`.

Social links render only when confirmed.

CV link appears only when the PDF exists.

Accessibility:

Use `<header>` and `<nav>`.
Include skip-to-content link.
Mobile menu traps focus.
Icon-only buttons need `aria-label`.
Active section can be handled with `IntersectionObserver`.

Avoid hiding Email Aya only inside the mobile menu.

## 7. Hero Section

Goal: explain who Aya is in under 5 seconds.

Suggested hero copy:

Status pill:
**Open to internship / PFA opportunities — 2026**
Exact availability needs confirmation.

H1:
**Aya Jabbari**

Role:
**Computer Engineering Student**

Specialization:
**Full-Stack Development · Applied AI · Data · Automation**

Hero paragraph:
**4th-year Computer Engineering student at ENSA Fès, building practical software systems across full-stack development, automation, data, and applied AI.**

Location:
**Fès, Morocco**

Trust row:
**ENSA Fès · ONDA · Ramadan AI · Capgemini**

CTAs:

Primary: **Email Aya**
Secondary: **View Projects**
Tertiary: **Download CV** — only if confirmed

Layout:

Desktop: 7/5 grid, copy left and portrait/visual card right.
Mobile: stacked, with CTAs full-width.

Visual:

Use a real portrait if Aya provides one. Otherwise use an editorial monogram card with “AJ.” Do not use stock developer photos or fake AI-generated UI screenshots.

Avoid:

“AI expert”
“Senior engineer”
Typewriter effects
Hero video
Parallax
Fake awards

## 8. About Section

Goal: translate the CV into a human, credible narrative.

Heading:

**Building practical software, end to end.**

Recommended copy:

**Aya Jabbari is a 4th-year Computer Engineering student at ENSA Fès with practical experience in full-stack development, automation, data-oriented systems, and generative AI applications. She works with Java, Spring Boot, PHP/Laravel, React, Python, SQL and NoSQL databases, and applied AI tools.**

**Her projects focus on useful technical systems: AI-assisted document validation, real-time network monitoring, peer-to-peer learning platforms, BI dashboards, DevOps automation, and recommendation systems. She is interested in intelligent software that solves concrete operational problems.**

Optional quick facts:

Location: Fès, Morocco
Studies: Computer Engineering, ENSA Fès
Languages: Arabic, French, English

Layout:

Desktop: two columns, heading left and text right.
Mobile: stacked.

Avoid long biography, inspirational quotes, and generic “passionate about technology” phrasing.

## 9. Skills Section

Goal: help recruiters confirm stack match quickly.

Heading:

**Technical stack with project-backed experience.**

Intro:

**A practical mix of full-stack development, databases, data/BI, applied AI, and deployment foundations.**

Groups:

Languages
Web & Backend
Databases
AI & Generative Tools
Data & BI
DevOps & Systems
Mobile & Desktop
Concepts

Tier 1 skills to emphasize:

Java / Spring Boot
PHP / Laravel
React
Python
SQL and NoSQL databases
REST APIs
Applied AI for document validation
SNMP
Talend
Power BI

Tier 2:

Docker
Kubernetes / Minikube
GitHub Actions
Terraform
Ansible
Linux
Stable Diffusion
Neo4j
MongoDB
Cassandra

Tier 3:

C
C++
C#
.NET
.NET MAUI
Android Studio
UML
WinForms

Optional advanced interaction:

A **Show projects per skill** toggle can reveal project connections. For example: Spring Boot → Intelligent Chatbot.

Avoid progress bars, percentages, star ratings, “expert,” and “mastered.”

## 10. Experience — ONDA

Goal: anchor credibility with real organizational experience.

Heading:

**Professional experience**

Card title:

**IT Intern — Office National Des Aéroports, ONDA**

Date:

**July 2025**

Summary:

**Built a web-based SNMP network monitoring dashboard for real-time visibility into network switch health and alerts.**

Bullets:

Built a web-based SNMP network monitoring dashboard using PHP, SNMP, HTML, CSS, and JavaScript.

Designed an interactive interface for real-time monitoring of network switches.

Implemented monitoring features for CPU load, RAM usage, network interfaces, and alerts.

Stack chips:

PHP
SNMP
HTML
CSS
JavaScript

Scope tag:

**Built and demonstrated**

Use this unless Aya confirms deployment scope.

Avoid:

Do not say “deployed in production.”
Do not use the ONDA logo unless usage is confirmed.
Do not inflate the internship duration or scope.

## 11. Hackathons Section

Goal: showcase recent applied-AI delivery under time pressure.

Heading:

**Applied AI hackathons**

Intro:

**Recent AI-focused projects applying document processing, validation workflows, anomaly detection, and intelligent extraction to administrative and insurance use cases.**

Card 1:

**Ramadan AI Hackathon**
**Ministry of Digital Transition · March 2026**
**CNSS File Analysis & Validation**

Copy:

**Designed and developed an AI-based system to automate CNSS file analysis and validation, including structured, unstructured, scanned, and handwritten documents. Implemented date validation, anomaly detection, and intelligent data extraction.**

Card 2:

**Capgemini Hackathon**
**Capgemini · January 2026**
**Smart Assurance Validator**

Copy:

**Developed an intelligent insurance file validation system using PDF and image document analysis, data extraction, cross-document consistency checking, anomaly detection, and escalation to a human expert when needed.**

Layout:

Two equal cards on desktop, stacked on mobile.

Avoid:

No trophy icons.
No “winner,” “finalist,” or ranking unless confirmed.
No company logos as endorsements.

## 12. Featured Projects Section

Goal: prove Aya can build concrete technical systems.

Heading:

**Selected technical projects**

Intro:

**A mix of full-stack platforms, applied-AI workflows, backend systems, BI dashboards, and deployment automation projects.**

Filters:

All · Full-Stack · AI · Data/BI · DevOps · Backend · Desktop · Databases

Featured order:

1. ONDA SNMP Network Monitoring Dashboard
2. Smart Assurance Validator
3. CNSS AI File Analysis System
4. Swapify Learning Platform
5. Intelligent Chatbot
6. CI/CD Pipeline
7. KubeFlask Local
8. SNCF Data Analysis / BI

Each featured card should include:

Category
Project title
One-sentence problem
Contribution line
Stack chips, maximum 5 visible
View details link
GitHub/demo only if real
Fallback: **Code available on request**

Suggested project copy:

**ONDA SNMP Network Monitoring Dashboard**
Category: Web / Monitoring / Professional Experience
Stack: PHP, SNMP, HTML, CSS, JavaScript
Problem: Network health data needs to be visible quickly for operational monitoring.
Contribution: Built a web-based SNMP dashboard for switch monitoring, CPU/RAM visibility, network interfaces, and alerts.

**Smart Assurance Validator**
Category: Applied AI / Document Automation
Stack: PDF/Image Analysis, Data Extraction, Consistency Checking, Anomaly Detection
Problem: Insurance files require validation across multiple document formats.
Contribution: Developed a validation workflow that extracts data, checks cross-document consistency, detects anomalies, and escalates uncertain cases.

**CNSS AI File Analysis System**
Category: Applied AI / Public-Sector Automation
Stack: Document Processing, Intelligent Extraction, Anomaly Detection
Problem: CNSS file validation can involve structured, unstructured, scanned, and handwritten documents.
Contribution: Designed an AI-based workflow for document analysis, date validation, anomaly detection, and data extraction.

**Swapify Learning Platform**
Category: Full-Stack Web
Stack: PHP/Laravel, React, REST API
Problem: Learners need a way to find peers based on skills and availability.
Contribution: Built a peer-to-peer learning platform with Laravel REST API, authentication, matching logic, and a responsive React frontend.

**Intelligent Chatbot**
Category: Backend / Automation
Stack: Java, Spring Boot, JSON, REST API
Problem: Technical support workflows need structured guidance and automated checks.
Contribution: Built a dynamic chatbot based on JSON workflows with backend services for MAC verification, firmware logic, and ticket management.

**CI/CD Pipeline**
Category: DevOps / Automation
Stack: GitHub Actions, Terraform, Ansible
Problem: Build, test, and deployment tasks need automation and repeatability.
Contribution: Automated the build/test/deploy cycle with GitHub Actions, provisioned infrastructure with Terraform, and automated deployment with Ansible.

**KubeFlask Local**
Category: DevOps / Containers
Stack: Kubernetes, Docker, Flask, Minikube
Problem: Containerized applications need orchestration, configuration, storage, and network exposure.
Contribution: Orchestrated a Flask application on Minikube using YAML manifests for Pods, Services, ConfigMaps, Secrets, persistent storage, and networking.

**SNCF Data Analysis / BI**
Category: Data / BI
Stack: Talend, Power BI
Problem: Railway data needs to be cleaned, transformed, and visualized for decision support.
Contribution: Built an ETL pipeline with Talend and created Power BI dashboards for KPI visualization and analysis.

Project detail behavior:

Use a side drawer on desktop, full-screen sheet on mobile.

Drawer content:

Extended description
Contribution bullets
Architecture / approach notes
Screenshots if available
Confirmed dates
Repo/demo links if real

Accessibility:

Drawer traps focus, closes on Escape, returns focus to trigger.

Avoid:

No fake screenshots.
No fake metrics.
No “production-ready” labels.
No generic “View Project” links with no destination.

## 13. More Projects Section

Goal: show range without distracting from the strongest work.

Secondary projects:

**Movie Recommendation System — Neo4j**
Graph-based recommendation system modeling user-movie relationships and generating recommendations from similar preferences.

**AI Image Generation for E-commerce — Python, Stable Diffusion, PIL**
Pipeline for automatic product visual generation in 1:1 and 1200×400 formats, supporting marketing mockup creation.

**Café Management Application — .NET WinForms, C#, SQL Server**
Desktop application for café operations, including orders, products, users, billing, GUI, and relational database connection.

Layout:

Three compact cards on desktop, stacked on mobile.

No thumbnails required. Use title, category, two-line description, and stack chips.

## 14. Education Section

Goal: confirm academic status.

Heading:

**Education**

Items:

**Engineering Cycle in Computer Engineering**
ENSA Fès · 2024–present

**Integrated Preparatory Cycle**
ENSA Fès · 2022–2024

**Baccalaureate**
Institut Rabelais, Fès · June 2022

Layout:

Vertical timeline with dates and program details.

Avoid GPA, rankings, or school logos unless confirmed.

## 15. Certifications Section

Goal: support database, AI, and programming claims.

Heading:

**Certifications**

Groups:

**Oracle**
SQL Database Programming
Database Design

**365 DataScience**
Introduction to ChatGPT and Generative AI
Introduction to Artificial Intelligence

**Coding for All / W3Schools**
C and C++

Layout:

Grouped issuer cards.

Verification links only if Aya provides them.

Avoid logos in v1 to prevent implied endorsement.

## 16. Languages + Volunteering Section

Goal: show communication ability and initiative without distracting from technical proof.

Heading:

**Languages & community**

Languages:

Arabic — Native
French — Advanced
English — Advanced

Community:

**Involved in student and community initiatives including JCMP Club, Community Service Club, IEEE Region 8, IEEE Junior, Star Debate, Iklyl Cultural Center, and children’s library English teaching.**

Layout:

Two compact cards: Languages and Community.

Avoid flags, long stories, and unrelated photos.

## 17. Contact Section

Goal: convert visitor interest into outreach.

Heading:

**Let’s connect.**

Suggested copy:

**I’m open to internship and PFA opportunities in full-stack development, backend/API engineering, data/BI, applied AI, automation, and software engineering.**

Direct contact:

Email: **[ayajabbari81@gmail.com](mailto:ayajabbari81@gmail.com)**
Phone: **+212 637 57 56 62**
Location: **Fès, Morocco**

CTAs:

**Email Aya**
**Copy Email**
**Download CV** — needs confirmation
**LinkedIn** — needs confirmation
**GitHub** — needs confirmation

Optional contact form:

Name
Email
Message

Form behavior:

If no backend is wired, hide the form entirely. Never show a non-functional form.

Success message:

**Message sent. Aya will receive it at [ayajabbari81@gmail.com](mailto:ayajabbari81@gmail.com).**

Error message:

**Sending failed — you can also reach Aya directly at [ayajabbari81@gmail.com](mailto:ayajabbari81@gmail.com).**

Copy toast:

**Email copied**

Accessibility:

Inputs need labels.
Errors use `aria-invalid` and `aria-describedby`.
Toast uses `role="status"`.
Do not hide email behind the form.

## 18. Footer

Goal: close with quick access to contact and navigation.

Footer copy:

**Aya Jabbari — Computer Engineering Student**
**Full-stack development · Applied AI · Data · Automation**
**Fès, Morocco**
**[ayajabbari81@gmail.com](mailto:ayajabbari81@gmail.com)**

Optional links:

GitHub
LinkedIn
Download CV
Back to top

Bottom row:

**© 2026 Aya Jabbari · Built with React & Tailwind**

Render optional links only if confirmed.

## 19. Interaction Patterns

Primary button:

Default: plum fill
Hover: lift 2px and stronger shadow
Active: darker fill, no lift
Focus: visible ring
Loading: spinner + text

Cards:

Default: subtle shadow
Hover: lift and border tint
Focus: visible ring if card is interactive

Filters:

Use buttons. If tab-like, use `role="tablist"`, `aria-selected`, and arrow-key navigation.

Toasts:

Bottom-center, cream fill, plum text, rose border, success dot. Auto-dismiss after 3 seconds. Use ARIA live region.

Empty states:

No GitHub: **Code available on request**
No demo: hide demo button
No CV: hide CTA
No screenshot: branded fallback panel
No verification link: omit Verify

Loading:

Hero text renders first.
Below-fold images lazy-load.
No full-page loader.
Use fixed aspect ratios to prevent layout shift.

Motion:

Allowed: subtle fade-up, card hover, button hover, drawer slide.
Forbidden: parallax, scroll-jacking, typewriter text, auto carousels, animated skill bars, pulse status dots.

## 20. Responsive Behavior

Desktop ≥1280px:

Full editorial layout, 12-column grid, 3-up project grid.

Tablet 768–1023px:

2-up project grid, stacked hero if needed.

Mobile <768px:

Single column.
Hero CTAs full-width.
Email CTA always accessible.
Project cards stack.
Filters wrap.
Skill chips wrap.
Drawer becomes full-screen sheet.
Touch targets at least 48×48px.

Extra small <480px:

H1 reduces to around 36px.
Buttons remain full-width.
Avoid dense text blocks.

## 21. Accessibility Requirements

Target WCAG 2.2 AA, AAA where feasible.

Requirements:

Single `<h1>`
Sequential heading structure
Semantic landmarks
Skip-to-content link
Visible focus rings
Keyboard navigation for nav, filters, drawers, form
Modal/drawer focus trap
Escape closes drawer
Focus returns to trigger
Form labels and error associations
Toast ARIA live region
No color-only communication
Reduced motion support
Alt text for content images
Empty alt for decorative images
Icon-only buttons need names
Touch targets ≥48px

## 22. Performance and SEO Targets

Lighthouse:

Performance ≥90
Accessibility ≥95
Best Practices ≥95
SEO ≥95

Core Web Vitals:

LCP <2.0s
CLS <0.05
INP <200ms

Performance rules:

Self-host fonts.
Use `font-display: swap`.
Use AVIF with WebP fallback.
Explicit image width/height.
Lazy-load below-fold images.
No hero video.
No carousel.
No unnecessary third-party widgets.

SEO:

Descriptive title and meta description.
Open Graph image: 1200×630.
JSON-LD Person schema with name, jobTitle, alumniOf, address, and knowsLanguage.

## 23. Content Voice Rules

Use active, concrete language.

Use:

Built
Designed
Implemented
Worked with
Used in projects
Applied during hackathon
Code available on request

Avoid:

World-class
Expert
Senior
Revolutionary
Production-ready unless confirmed
Reduced X by Y% unless measured
Winner/finalist unless confirmed

Any unconfirmed claim should be marked internally as **needs confirmation** and removed or resolved before publishing.

## 24. CV Details to Emphasize

Emphasize:

ONDA internship
SNMP monitoring dashboard
Ramadan AI Hackathon
Capgemini Hackathon
Smart Assurance Validator
CNSS AI file analysis
Swapify Learning Platform
Intelligent Chatbot
Java / Spring Boot
PHP / Laravel / React
Python and applied AI
SQL and NoSQL databases
Talend and Power BI
CI/CD and Kubernetes exposure
ENSA Fès
Arabic / French / English
Clear recruiter contact path

## 25. CV Details to Minimize

Minimize or move lower:

Café Management Application
Tier 3 skills such as WinForms, Android Studio, UML, .NET MAUI
Long volunteering details
Generic programming-language lists
Certifications without verification links
Unconfirmed project outcomes

These can still appear, but they should not dominate the page.

## 26. Missing Information Before Publishing

Critical:

GitHub profile URL
LinkedIn profile URL
Final CV PDF
Exact internship / PFA availability dates
Project repository links
Project screenshots for top projects

Strongly recommended:

Live demos if available
Certificate verification links
Exact ONDA internship start and end dates
Whether ONDA dashboard was deployed, presented, or prototype-only
Aya’s exact role in each team project
Hackathon rankings or certificates, only if true
AI/OCR/document-processing tools used in hackathons
Whether SNCF dataset was public, academic, synthetic, or coursework-provided
Whether Stable Diffusion was local or API-based
Whether CI/CD deployment target was local, cloud, or academic server

Nice to have:

Professional photo
Open Graph image
Favicon
Privacy-friendly analytics
French CV version

## 27. Build Sequence

1. Lock Tailwind tokens
2. Build primitives: Button, Chip, Card, SectionHeader, Toast, Drawer, FilterTabs
3. Build Nav, Hero, and Footer
4. Build About, Skills, Experience, Hackathons
5. Build ProjectCard, ProjectDrawer, ProjectFilters, project data file
6. Build More Projects, Education, Certifications, Languages/Community
7. Build Contact section
8. Add responsive behavior
9. Add reduced-motion support
10. Run keyboard and screen reader audit
11. Run Lighthouse audit
12. Remove every unresolved **needs confirmation** item
13. Test on mobile devices

## 28. Final Acceptance Checklist

Recruiter on mobile can reach **Email Aya** in ≤90 seconds.

ONDA, Ramadan AI, and Capgemini are visible before deep scrolling.

Every project card shows a real stack, real role, and real description.

No fake links, fake screenshots, fake demos, or fake metrics.

No skill bars, percentages, stock photos, or unverified logos.

Only one dominant CTA appears per viewport.

Lighthouse Performance ≥90.

Lighthouse Accessibility ≥95.

Reduced motion path is tested.

Keyboard-only flow works for nav, filters, project drawer, and contact form.

Every visible claim passes the recruiter test and interview test.

# Final Latest Version Summary

Build this as a polished single-page React + Tailwind portfolio with a warm editorial visual identity and strict recruiter-focused hierarchy.

The final impression should be:

**Aya is polished, credible, technically capable, and ready for internship or PFA opportunities in full-stack development, backend/API engineering, applied AI, data/BI, automation, and software engineering.**
