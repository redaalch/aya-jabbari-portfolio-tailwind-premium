export type RepositoryDetail = {
  name: string;
  url: string;
  language: string;
  source: string;
  updated: string;
};

export type ProjectDetailContent = {
  overview: string;
  repository?: RepositoryDetail;
  highlights: string[];
  workflow: string[];
  decisions: string[];
  outcomes: string[];
  nextSteps: string[];
};

const githubSource = "https://github.com/aya-jabbari?tab=repositories";

export const projectDetails: Record<string, ProjectDetailContent> = {
  "onda-snmp-dashboard": {
    overview:
      "A browser-based supervision dashboard built during the ONDA internship to make switch health, port state, alerts, and report generation easier to inspect from one interface.",
    repository: {
      name: "snmp-supervision",
      url: "https://github.com/aya-jabbari/snmp-supervision",
      language: "PHP",
      source: githubSource,
      updated: "2025-08-04",
    },
    highlights: [
      "SNMP collection endpoints for infrastructure monitoring data.",
      "Switch management views for operational visibility.",
      "Port state screens for faster status checks.",
      "Alert and history views for tracking incidents over time.",
      "Report generation flow for exporting monitoring summaries.",
    ],
    workflow: [
      "Register and configure monitored switches.",
      "Collect SNMP values from network devices.",
      "Persist monitoring history for later review.",
      "Surface port state, alerts, and health information in dashboard views.",
      "Generate reports when infrastructure status needs to be shared.",
    ],
    decisions: [
      "Kept the stack simple with PHP pages and focused dashboard screens.",
      "Separated collection, configuration, alert, history, and reporting flows.",
      "Prioritized operational readability over decorative UI patterns.",
    ],
    outcomes: [
      "Reduced manual switch checking effort.",
      "Created a practical monitoring reference for network supervision.",
      "Strengthened full-stack work around real infrastructure data.",
    ],
    nextSteps: [
      "Add authentication hardening and role-based permissions.",
      "Introduce charts for trend analysis.",
      "Add automated threshold notifications.",
    ],
  },
  "smart-assurance-validator": {
    overview:
      "An AI-assisted document validation workflow for life savings insurance succession files. It analyzes claim documents, extracts key data, checks cross-document consistency, and routes uncertain cases to human review.",
    repository: {
      name: "insurance-doc",
      url: "https://github.com/aya-jabbari/insurance-doc",
      language: "Python",
      source: githubSource,
      updated: "2026-05-04",
    },
    highlights: [
      "Document type detection for PDF and image files.",
      "OCR and structured data extraction for names, IDs, dates, contracts, and bank information.",
      "Consistency checks across identity, death, contract, beneficiary, and payment documents.",
      "Decision outcomes for accept, review, or rejection-style escalation.",
      "Privacy-aware handling for sensitive IDs and financial fields.",
    ],
    workflow: [
      "Upload a succession insurance case file.",
      "Detect each document type and extract text.",
      "Normalize important fields into structured data.",
      "Compare identities, dates, beneficiaries, and bank records.",
      "Validate clean cases or send risky cases to a human reviewer.",
    ],
    decisions: [
      "Kept humans in the loop for legal or ambiguous cases.",
      "Designed validation around document consistency, not only text extraction.",
      "Separated risk detection from final business approval.",
    ],
    outcomes: [
      "Demonstrated a realistic AI workflow for insurance document review.",
      "Reduced manual triage for complete and consistent files.",
      "Made uncertainty explicit through review routing.",
    ],
    nextSteps: [
      "Add stronger audit trails for every decision.",
      "Improve OCR confidence scoring.",
      "Add encrypted storage and production-grade access controls.",
    ],
  },
  "cnss-ai-file-analysis": {
    overview:
      "A hackathon document-processing system focused on CNSS file analysis across structured, unstructured, scanned, and handwritten inputs.",
    highlights: [
      "OCR flow for scanned and handwritten documents.",
      "Document extraction logic for administrative file fields.",
      "Validation rules for dates and required information.",
      "Anomaly detection to flag suspicious or inconsistent records.",
      "Review path for files that should not be auto-accepted.",
    ],
    workflow: [
      "Receive a CNSS file or document set.",
      "Detect document content and extract relevant fields.",
      "Validate dates and required administrative information.",
      "Run anomaly checks against extracted values.",
      "Return a validation result or route the file for review.",
    ],
    decisions: [
      "Focused on reliability and traceability under hackathon time constraints.",
      "Used rule-based validation where predictable checks were enough.",
      "Reserved AI extraction for messy or unstructured document inputs.",
    ],
    outcomes: [
      "Built a complete applied-AI workflow under time pressure.",
      "Clarified the difference between extraction, validation, and decisioning.",
      "Created a reusable pattern for administrative document review.",
    ],
    nextSteps: [
      "Add a larger test set of file variants.",
      "Build an operator dashboard for review cases.",
      "Track extraction confidence per field.",
    ],
  },
  "swapify-learning-platform": {
    overview:
      "A full-stack peer learning platform where users list what they can teach, what they want to learn, and then get matched with complementary profiles.",
    repository: {
      name: "swappify-learning-matcher",
      url: "https://github.com/aya-jabbari/swappify-learning-matcher",
      language: "JavaScript",
      source: githubSource,
      updated: "2026-05-04",
    },
    highlights: [
      "User registration and profile management.",
      "Skill-based matching between learners and peer educators.",
      "REST API flow between Laravel backend and React frontend.",
      "Messaging path for matched users.",
      "Rating system to support trust after learning exchanges.",
    ],
    workflow: [
      "A user creates an account and profile.",
      "The user adds teachable skills and desired learning skills.",
      "The system compares complementary profiles.",
      "Matched users communicate and organize learning exchanges.",
      "Users rate the learning experience after interaction.",
    ],
    decisions: [
      "Modeled matching around mutual benefit, not a static directory.",
      "Kept profile data central to recommendation quality.",
      "Designed ratings as a lightweight credibility signal.",
    ],
    outcomes: [
      "Built an end-to-end full-stack product flow.",
      "Practiced matching logic and user journey design.",
      "Created a base for stronger learning validation features.",
    ],
    nextSteps: [
      "Add skill validation tests before teaching.",
      "Generate certificates after assessments.",
      "Improve recommendations with rating history and learning preferences.",
    ],
  },
  "intelligent-chatbot": {
    overview:
      "A Spring Boot technical support chatbot that uses JSON-based decision flows to classify user issues and guide troubleshooting responses.",
    repository: {
      name: "technical-support-chatbot",
      url: "https://github.com/aya-jabbari/technical-support-chatbot",
      language: "Java",
      source: githubSource,
      updated: "2026-05-04",
    },
    highlights: [
      "Issue classification for technical support cases.",
      "Guided troubleshooting flows backed by JSON decision data.",
      "Spring Boot backend for processing support logic.",
      "Extensible scenarios for future helpdesk use cases.",
      "Frontend layer using HTML, CSS, and JavaScript.",
    ],
    workflow: [
      "The user starts a support interaction.",
      "The system identifies the issue category.",
      "The backend selects the relevant JSON decision flow.",
      "The user is guided through troubleshooting steps.",
      "The system returns a structured support response.",
    ],
    decisions: [
      "Used JSON flows so support logic can be extended without rewriting every interaction.",
      "Kept backend logic separate from the UI.",
      "Built the project as a practical backend architecture exercise.",
    ],
    outcomes: [
      "Strengthened Spring Boot backend organization.",
      "Practiced structured support flow design.",
      "Created a reusable base for helpdesk automation.",
    ],
    nextSteps: [
      "Add authentication and session history.",
      "Generate tickets for unresolved issues.",
      "Add analytics for repeated support patterns.",
    ],
  },
  "cicd-pipeline": {
    overview:
      "A small API and delivery reference used to practice repeatable build, test, containerization, and deployment automation concepts.",
    repository: {
      name: "mini-cicd-api",
      url: "https://github.com/aya-jabbari/mini-cicd-api",
      language: "Python",
      source: githubSource,
      updated: "2026-03-21",
    },
    highlights: [
      "Minimal Python API suitable for automated build checks.",
      "Dockerfile for containerizing the service.",
      "Docker Compose configuration for local service execution.",
      "Test folder to support CI validation.",
      "GitHub Actions directory for automation workflows.",
    ],
    workflow: [
      "Develop the API locally.",
      "Run automated tests against the service.",
      "Build a Docker image.",
      "Run the service with Docker Compose.",
      "Use CI automation to keep delivery steps repeatable.",
    ],
    decisions: [
      "Kept the API intentionally small so the delivery workflow stayed visible.",
      "Used containerization to make local and CI environments closer.",
      "Separated application code from automation configuration.",
    ],
    outcomes: [
      "Created a compact CI/CD reference project.",
      "Practiced Docker, tests, and GitHub Actions structure.",
      "Improved understanding of reliable delivery workflows.",
    ],
    nextSteps: [
      "Add deployment to a staging target.",
      "Add infrastructure provisioning examples.",
      "Expand tests and health checks.",
    ],
  },
  "kubeflask-local": {
    overview:
      "A local Kubernetes deployment reference for running containerized Flask services with Minikube and YAML resource definitions.",
    highlights: [
      "Flask service containerization.",
      "Docker image workflow for local testing.",
      "Kubernetes manifests for deployment and service exposure.",
      "Minikube setup for local cluster execution.",
      "Repeatable reference for multi-step container deployment.",
    ],
    workflow: [
      "Build the Flask service image.",
      "Start a local Minikube cluster.",
      "Apply Kubernetes YAML resources.",
      "Expose the service locally.",
      "Verify the deployed service and iterate on manifests.",
    ],
    decisions: [
      "Used local Kubernetes to learn deployment concepts without cloud cost.",
      "Kept manifests explicit so each resource remained understandable.",
      "Focused on repeatability over platform-specific automation.",
    ],
    outcomes: [
      "Practiced container orchestration fundamentals.",
      "Built confidence with Kubernetes deployment structure.",
      "Created a reusable local deployment reference.",
    ],
    nextSteps: [
      "Add readiness and liveness probes.",
      "Introduce config maps and secrets.",
      "Add a CI step that validates manifests.",
    ],
  },
  "sncf-data-analysis-bi": {
    overview:
      "A data and BI workflow for transforming raw transit data into modeled datasets and dashboard-ready reporting views.",
    highlights: [
      "ETL process for cleaning operational data.",
      "Data modeling for reporting consistency.",
      "Power BI dashboard preparation.",
      "Business intelligence views for faster insight.",
      "Repeatable transformation logic for raw datasets.",
    ],
    workflow: [
      "Collect raw transit data.",
      "Clean and normalize the dataset.",
      "Model entities and metrics for reporting.",
      "Prepare visual dashboard layers.",
      "Review outputs for operational decision support.",
    ],
    decisions: [
      "Focused on dashboard clarity rather than raw table exposure.",
      "Separated transformation from visualization.",
      "Kept the reporting model understandable for non-technical review.",
    ],
    outcomes: [
      "Practiced ETL and BI dashboard thinking.",
      "Converted raw data into usable reporting structures.",
      "Improved data modeling and visualization skills.",
    ],
    nextSteps: [
      "Add automated refresh logic.",
      "Document metric definitions.",
      "Introduce data quality checks before dashboard publication.",
    ],
  },
  "movie-recommendation": {
    overview:
      "A recommendation script exploring how user interaction data can be transformed into personalized movie suggestions.",
    highlights: [
      "Collaborative filtering approach.",
      "User-rating based prediction logic.",
      "Python implementation for recommendation experiments.",
      "Modeling of user preferences from historical interactions.",
      "Evaluation path for comparing predicted and actual ratings.",
    ],
    workflow: [
      "Load user and movie interaction data.",
      "Prepare ratings for modeling.",
      "Train or run collaborative filtering logic.",
      "Predict likely ratings or recommendations.",
      "Inspect recommendation quality.",
    ],
    decisions: [
      "Used a focused Python script rather than a full web application.",
      "Kept the scope centered on recommendation logic.",
      "Prioritized learning model behavior over UI polish.",
    ],
    outcomes: [
      "Practiced recommendation system fundamentals.",
      "Improved Python data workflow experience.",
      "Built a base for future recommender experiments.",
    ],
    nextSteps: [
      "Add richer evaluation metrics.",
      "Try content-based filtering.",
      "Wrap recommendations in a small API.",
    ],
  },
  "ai-image-generation": {
    overview:
      "A generative image workflow exploring prompt-based asset creation with pre-trained diffusion models and Python inference scripts.",
    highlights: [
      "Prompt-based generation experiments.",
      "Python inference scripting.",
      "Use of pre-trained diffusion model workflows.",
      "Asset generation for creative exploration.",
      "Experiment tracking through generated outputs.",
    ],
    workflow: [
      "Define a generation prompt.",
      "Load the selected model pipeline.",
      "Run inference with configured parameters.",
      "Review generated assets.",
      "Iterate on prompt and settings.",
    ],
    decisions: [
      "Used pre-trained models to focus on workflow and prompt behavior.",
      "Kept the project script-first for fast experimentation.",
      "Separated model usage from downstream asset selection.",
    ],
    outcomes: [
      "Practiced applied generative AI workflows.",
      "Learned how prompt changes affect outputs.",
      "Built a base for future asset generation tools.",
    ],
    nextSteps: [
      "Add prompt preset management.",
      "Track generation metadata.",
      "Build a small UI for non-technical usage.",
    ],
  },
  "cafe-management": {
    overview:
      "A WinForms desktop application for small cafe order, table, billing, and receipt tracking workflows.",
    highlights: [
      "Active table tracking.",
      "Menu and order management.",
      "Receipt generation flow.",
      "SQL Server data storage.",
      "Desktop interface built for repeated cashier use.",
    ],
    workflow: [
      "Create or select an active table.",
      "Add ordered menu items.",
      "Track billing state.",
      "Generate receipt information.",
      "Close the order when payment is complete.",
    ],
    decisions: [
      "Used a desktop app model for small-shop operational use.",
      "Kept workflows close to cashier tasks.",
      "Used SQL Server for structured persistence.",
    ],
    outcomes: [
      "Practiced desktop application development in C#.",
      "Modeled simple business operations.",
      "Built a practical alternative to paper order tracking.",
    ],
    nextSteps: [
      "Add user roles for managers and cashiers.",
      "Add inventory tracking.",
      "Improve receipt templates and reporting.",
    ],
  },
};
