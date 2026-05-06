export type Lang = "en" | "fr";

const en = {
  /* ── Nav ── */
  "nav.email": "Email Aya",
  "nav.about": "About",
  "nav.capabilities": "Capabilities",
  "nav.work": "Work",
  "nav.certifications": "Certifications",
  "nav.contact": "Contact",

  /* ── Profile strings ── */
  "profile.role": "Computer Engineering Student",
  "profile.stackLine":
    "Building practical systems across full-stack development, data, and applied AI.",
  "profile.headline":
    "I build usable software systems — from responsive web applications and backend services to automation workflows, data dashboards, and applied AI tools.",
  "profile.summary":
    "Computer engineering student at ENSA Fès with practical experience in full-stack development, automation, data-oriented systems, and generative AI applications.",
  "profile.availability": "Available for PFE · 2026",
  "profile.availabilityBadge": "Open to Internship · PFE 2026",

  /* ── Hero ── */
  "hero.cta_work": "View Projects",
  "hero.cta_cv": "Download CV",
  "hero.proof_ensa": "ENSA Fès",
  "hero.proof_onda": "ONDA internship",
  "hero.proof_hackathons": "AI hackathons",
  "hero.proof_projects": "Full-stack projects",
  "hero.highlight_onda_desc": "SNMP monitoring",
  "hero.highlight_ai_desc": "CNSS & insurance validation",
  "hero.highlight_tech_desc": "Full-stack · Data · AI",

  /* ── About ── */
  "about.eyebrow": "About",
  "about.heading": "Building practical software, end to end.",
  "about.focus_eyebrow": "Current Focus",
  "about.education_eyebrow": "Education",
  "about.languages_eyebrow": "Languages",
  "about.focus_1_label": "Full-stack systems",
  "about.focus_1_desc": "React, Laravel, Spring Boot, and REST API architectures.",
  "about.focus_2_label": "Data dashboards",
  "about.focus_2_desc":
    "Turning structured datasets and ETL workflows into actionable UI.",
  "about.focus_3_label": "Applied AI workflows",
  "about.focus_3_desc":
    "Document validation, extraction logic, and automation for real products.",
  "about.native": "Native",
  "about.advanced": "Advanced",

  /* ── Capabilities ── */
  "cap.eyebrow": "Capabilities",
  "cap.heading": "Practical skills, grouped by what they build.",
  "cap.desc":
    "A clearer view of the technical areas behind the portfolio work, without repeating every tool in every section.",
  "cap.hover_hint": "Hover to reveal stack",
  "cap.tap_reveal": "Tap to reveal stack",
  "cap.tap_close": "Close stack",
  "cap.1.title": "Full-stack web apps",
  "cap.1.desc":
    "End-to-end applications with responsive interfaces, backend services, API flows, and role-based user journeys.",
  "cap.2.title": "Data & BI dashboards",
  "cap.2.desc":
    "Structured datasets, ETL workflows, database modeling, and business dashboards for operational visibility.",
  "cap.3.title": "Automation & DevOps",
  "cap.3.desc":
    "Deployment workflows, containerized environments, infrastructure automation, and reliable delivery pipelines.",
  "cap.4.title": "Applied AI workflows",
  "cap.4.desc":
    "Document validation, extraction logic, anomaly detection, and scripting workflows for practical AI systems.",

  /* ── Work ── */
  "work.eyebrow": "Selected Work",
  "work.heading": "One timeline of internships, hackathons, and projects.",
  "work.desc":
    "Each item appears once, with its context shown as a label instead of being repeated in separate sections.",
  "work.filter_all": "All Work",
  "work.filter_internship": "Internships",
  "work.filter_hackathon": "Hackathons",
  "work.filter_project": "Projects",
  "work.explore": "Explore Timeline",
  "work.archive": "View Full Project Archive",
  "work.problem": "The Problem",
  "work.built": "What I Built",
  "work.view_details": "View Details",
  "work.view_repo": "View Repository",
  "work.view_demo": "View Live Demo",
  "work.private": "Code available on request",
  "work.empty": "No projects found for this category.",
  "work.swipe_hint": "Swipe to explore",

  /* ── Certifications ── */
  "certs.eyebrow": "Certifications",
  "certs.heading": "Recognized learning and credentials.",
  "certs.desc":
    "Grouped by issuer to highlight continuous, focused learning paths in databases, AI, and foundations.",
  "certs.records": "{{count}} records found",
  "certs.stack_hint": "Hover stack to expand",
  "certs.community_eyebrow": "Community",
  "certs.community_heading": "Community involvement.",
  "certs.community_desc":
    "Volunteering and student community work outside the main technical portfolio.",
  "community.ieee.context":
    "Organized technical workshops and mentored junior engineering students.",
  "community.jcmp.context":
    "Participated in local community outreach and student initiatives.",
  "community.debate.context":
    "Developed public speaking, critical thinking, and structured argumentation.",
  "community.english.context":
    "Volunteered to teach basic English to local youth at the library.",
  "community.iklyl.context":
    "Supported cultural events and organizational logistics for gatherings.",

  /* ── Contact ── */
  "contact.cta_heading": "Let's connect.",
  "contact.cta_desc":
    "Open to end-of-studies (PFE) internship opportunities, project collaborations, and technical conversations.",
  "contact.cta_btn": "Start a Conversation",
  "contact.close": "Close Form",
  "contact.form_eyebrow": "Direct Message",
  "contact.form_heading": "Reach out.",
  "contact.name_label": "Your Name",
  "contact.email_label": "Email Address",
  "contact.message_label": "Tell me about your project or opportunity...",
  "contact.send": "Send Message",
  "contact.sending": "Sending...",
  "contact.sent": "Message Sent!",
  "contact.details_heading": "Contact Details",
  "contact.email_section": "Email",
  "contact.meeting_section": "Meeting",
  "contact.schedule": "Schedule a call",
  "contact.location_section": "Location",
  "contact.socials_heading": "Socials",
  "contact.copy_email": "Copy Email",
  "contact.copied": "Copied!",
  "contact.links_pending": "Links pending confirmation.",
  "contact.err_not_configured": "The contact form is not configured yet.",
  "contact.err_generic": "Message could not be sent. Please try again.",
  "contact.err_network":
    "Network error. Please try again or email me directly.",

  /* ── Footer ── */
  "footer.skills": "Software Engineering, Data, and Applied AI",
  "footer.download_cv": "Download CV",
  "footer.local_time": "Local Time",
  "footer.built": "Built with React & Tailwind.",
};

const fr: typeof en = {
  /* ── Nav ── */
  "nav.email": "Contacter Aya",
  "nav.about": "À propos",
  "nav.capabilities": "Compétences",
  "nav.work": "Travaux",
  "nav.certifications": "Certifications",
  "nav.contact": "Contact",

  /* ── Profile strings ── */
  "profile.role": "Étudiante en Génie Informatique",
  "profile.stackLine":
    "Développement de systèmes pratiques : full-stack, données et IA appliquée.",
  "profile.headline":
    "Je développe des systèmes logiciels utilisables — des applications web réactives et services backend aux workflows d'automatisation, tableaux de bord data et outils d'IA appliquée.",
  "profile.summary":
    "Étudiante en génie informatique à l'ENSA Fès, avec une expérience pratique en développement full-stack, automatisation, systèmes orientés données et applications d'IA générative.",
  "profile.availability": "Disponible pour PFE · 2026",
  "profile.availabilityBadge": "Ouverte au stage · PFE 2026",

  /* ── Hero ── */
  "hero.cta_work": "Voir les projets",
  "hero.cta_cv": "Télécharger le CV",
  "hero.proof_ensa": "ENSA Fès",
  "hero.proof_onda": "Stage ONDA",
  "hero.proof_hackathons": "Hackathons IA",
  "hero.proof_projects": "Projets full-stack",
  "hero.highlight_onda_desc": "Supervision SNMP",
  "hero.highlight_ai_desc": "Validation CNSS & assurance",
  "hero.highlight_tech_desc": "Full-stack · Data · IA",

  /* ── About ── */
  "about.eyebrow": "À propos",
  "about.heading": "Développer des logiciels pratiques, de bout en bout.",
  "about.focus_eyebrow": "Domaines actuels",
  "about.education_eyebrow": "Formation",
  "about.languages_eyebrow": "Langues",
  "about.focus_1_label": "Systèmes full-stack",
  "about.focus_1_desc": "React, Laravel, Spring Boot et architectures d'API REST.",
  "about.focus_2_label": "Tableaux de bord data",
  "about.focus_2_desc":
    "Transformer des datasets structurés et des workflows ETL en interfaces actionnables.",
  "about.focus_3_label": "Workflows d'IA appliquée",
  "about.focus_3_desc":
    "Validation de documents, logique d'extraction et automatisation pour des produits réels.",
  "about.native": "Maternelle",
  "about.advanced": "Avancé",

  /* ── Capabilities ── */
  "cap.eyebrow": "Compétences",
  "cap.heading":
    "Compétences pratiques, regroupées par ce qu'elles permettent de construire.",
  "cap.desc":
    "Une vue plus claire des domaines techniques derrière les travaux du portfolio, sans répéter chaque outil dans chaque section.",
  "cap.hover_hint": "Survoler pour voir les outils",
  "cap.tap_reveal": "Appuyer pour voir les outils",
  "cap.tap_close": "Fermer",
  "cap.1.title": "Applications web full-stack",
  "cap.1.desc":
    "Applications de bout en bout avec interfaces réactives, services backend, flux API et parcours utilisateurs basés sur les rôles.",
  "cap.2.title": "Tableaux de bord Data & BI",
  "cap.2.desc":
    "Datasets structurés, workflows ETL, modélisation de bases de données et tableaux de bord métier pour la visibilité opérationnelle.",
  "cap.3.title": "Automatisation & DevOps",
  "cap.3.desc":
    "Workflows de déploiement, environnements conteneurisés, automatisation d'infrastructure et pipelines de livraison fiables.",
  "cap.4.title": "Workflows d'IA appliquée",
  "cap.4.desc":
    "Validation de documents, logique d'extraction, détection d'anomalies et scripts pour des systèmes d'IA pratiques.",

  /* ── Work ── */
  "work.eyebrow": "Travaux sélectionnés",
  "work.heading": "Une chronologie de stages, hackathons et projets.",
  "work.desc":
    "Chaque élément apparaît une fois, avec son contexte indiqué en étiquette au lieu d'être répété dans des sections séparées.",
  "work.filter_all": "Tout",
  "work.filter_internship": "Stages",
  "work.filter_hackathon": "Hackathons",
  "work.filter_project": "Projets",
  "work.explore": "Explorer",
  "work.archive": "Voir l'archive complète",
  "work.problem": "Le Problème",
  "work.built": "Ce que j'ai développé",
  "work.view_details": "Voir les détails",
  "work.view_repo": "Voir le dépôt",
  "work.view_demo": "Voir la démo",
  "work.private": "Code disponible sur demande",
  "work.empty": "Aucun projet trouvé pour cette catégorie.",
  "work.swipe_hint": "Glisser pour explorer",

  /* ── Certifications ── */
  "certs.eyebrow": "Certifications",
  "certs.heading": "Formations reconnues et certifications.",
  "certs.desc":
    "Regroupées par organisme pour mettre en avant des parcours d'apprentissage continus et ciblés en bases de données, IA et fondamentaux.",
  "certs.records": "{{count}} certifications",
  "certs.stack_hint": "Survoler pour développer",
  "certs.community_eyebrow": "Communauté",
  "certs.community_heading": "Engagement communautaire.",
  "certs.community_desc":
    "Bénévolat et engagement étudiant en dehors du portfolio technique.",
  "community.ieee.context":
    "Organisé des ateliers techniques et encadré des étudiants en ingénierie juniors.",
  "community.jcmp.context":
    "Participé à des actions de terrain locales et des initiatives étudiantes.",
  "community.debate.context":
    "Développé l'éloquence, la pensée critique et l'argumentation structurée.",
  "community.english.context":
    "Bénévolat pour enseigner l'anglais de base aux jeunes locaux à la bibliothèque.",
  "community.iklyl.context":
    "Soutenu des événements culturels et la logistique organisationnelle des rassemblements.",

  /* ── Contact ── */
  "contact.cta_heading": "Connectons-nous.",
  "contact.cta_desc":
    "Ouverte aux opportunités de stage de fin d'études (PFE), collaborations sur des projets et conversations techniques.",
  "contact.cta_btn": "Démarrer une conversation",
  "contact.close": "Fermer",
  "contact.form_eyebrow": "Message Direct",
  "contact.form_heading": "Contactez-moi.",
  "contact.name_label": "Votre Nom",
  "contact.email_label": "Adresse Email",
  "contact.message_label": "Parlez-moi de votre projet ou opportunité...",
  "contact.send": "Envoyer le message",
  "contact.sending": "Envoi en cours...",
  "contact.sent": "Message envoyé !",
  "contact.details_heading": "Coordonnées",
  "contact.email_section": "Email",
  "contact.meeting_section": "Réunion",
  "contact.schedule": "Planifier un appel",
  "contact.location_section": "Localisation",
  "contact.socials_heading": "Réseaux",
  "contact.copy_email": "Copier l'email",
  "contact.copied": "Copié !",
  "contact.links_pending": "Liens en cours de confirmation.",
  "contact.err_not_configured":
    "Le formulaire de contact n'est pas encore configuré.",
  "contact.err_generic":
    "Le message n'a pas pu être envoyé. Veuillez réessayer.",
  "contact.err_network":
    "Erreur réseau. Réessayez ou écrivez-moi directement.",

  /* ── Footer ── */
  "footer.skills": "Génie Logiciel, Données et IA Appliquée",
  "footer.download_cv": "Télécharger le CV",
  "footer.local_time": "Heure Locale",
  "footer.built": "Développé avec React & Tailwind.",
};

export const translations: Record<Lang, typeof en> = { en, fr };
