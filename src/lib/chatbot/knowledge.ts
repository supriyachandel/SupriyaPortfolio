export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const SUPRIYA_INFO = {
  name: "Supriya",
  role: "Backend Developer",
  experienceYears: 5,
  location: "Delhi, India",
  email: "supriyachandel75@gmail.com",
  skills: {
    backend: ["PHP", "Laravel", "FastAPI", "Node.js", "CodeIgniter"],
    frontend: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "jQuery", "Bootstrap", "React.js (dashboard)"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis (basics)"],
    apis: ["REST APIs", "HubSpot CRM", "Salesforce", "Google APIs", "ChatGPT", "Gemini", "GrowthHub", "Webhooks"],
    infrastructure: ["AWS EC2", "AWS S3", "Railway", "Vercel", "Render", "Linux", "cPanel", "Docker basics"],
    tools: ["Git", "GitHub", "Postman", "Jira", "VS Code", "TablePlus"],
    concepts: ["MVC Pattern", "Middleware", "Events & Listeners", "Validation", "Queue Jobs", "Cron Jobs", "Error Handling"]
  },
  projects: [
    {
      name: "TeemSetu",
      type: "SaaS HRMS",
      desc: "Cloud HRMS SaaS simplifying employee profiles, biometric attendance, leaves, payroll, and workflows.",
      link: "https://www.teemsetu.in/",
      tech: ["Node.js", "React.js", "MySQL", "REST APIs", "JWT", "AWS EC2"]
    },
    {
      name: "Grateful Marketing",
      type: "AI Marketing Platform",
      desc: "Marketing platform automating campaign flows with HubSpot/Salesforce CRMs and ChatGPT/Gemini APIs.",
      link: "https://www.grateful-marketing.com/",
      tech: ["APIs", "ChatGPT API", "Gemini API", "HubSpot CRM", "Salesforce", "Webhooks"]
    },
    {
      name: "My Little Home",
      type: "E-Commerce Platform",
      desc: "High-volume Saudi Arabia e-commerce platform featuring backend order processing and inventory sync.",
      link: "https://mylittlehome.com.sa/",
      tech: ["E-commerce", "Order Processing", "Inventory Sync", "Payment Checkouts", "Admin Dashboards"]
    },
    {
      name: "LawSikho",
      type: "Enterprise EdTech",
      desc: "Streamlined EdTech platform managing automated revenue systems and onboarding pipelines.",
      tech: ["Revenue Management", "Onboarding Workflows", "Backend APIs"]
    }
  ],
  services: [
    "Backend Web Development",
    "RESTful API Design & Integration",
    "SaaS & Multi-tenant Platforms",
    "Bespoke Admin Panels & CRMs",
    "Third-Party / AI / CRM integrations",
    "Database Optimization & Performance Tuning",
    "Cloud & Deployment Automation"
  ],
  lifecycle: [
    { step: "01", name: "Understand (Research)", desc: "Deep dive into business goals, edge cases, data flows, and tech requirements." },
    { step: "02", name: "Architect (Design)", desc: "Design relational database schemas, REST endpoints, auth flows, and queues." },
    { step: "03", name: "Develop (Code)", desc: "Write clean, modular MVC code with solid validation and error handling." },
    { step: "04", name: "Integrate (Connect)", desc: "Sync payment gateways, CRM systems (HubSpot, Salesforce), AI models, and webhooks." },
    { step: "05", name: "Optimize (Refine)", desc: "Perform query optimization, index tuning, security checks, and load tests." },
    { step: "06", name: "Deploy (Launch)", desc: "Deploy to production with zero downtime, automated backups, and log monitors." }
  ],
  contact: {
    email: "supriyachandel75@gmail.com",
    sectionLink: "#contact",
    formDetails: "The portfolio features an interactive contact form where visitors can specify their project type (e.g. Backend Development, REST APIs, SaaS, Admin Panel, E-commerce, API/AI Integration) and budget range to start a project discussion."
  }
};

// Safe helper function for query matching (avoids regex syntax errors on inputs like c++)
function getLevenshteinDistance(a: string, b: string): number {
  const tmp: number[][] = [];
  let i, j;
  for (i = 0; i <= a.length; i++) {
    tmp[i] = [i];
  }
  for (j = 0; j <= b.length; j++) {
    tmp[0][j] = j;
  }
  for (i = 1; i <= a.length; i++) {
    for (j = 1; j <= b.length; j++) {
      tmp[i][j] = Math.min(
        tmp[i - 1][j] + 1,
        tmp[i][j - 1] + 1,
        tmp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return tmp[a.length][b.length];
}

function containsWord(msg: string, words: string[]): boolean {
  const msgLower = msg.toLowerCase();
  const cleanMsg = msgLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\"]/g, " ");
  const queryWords = cleanMsg.split(/\s+/).filter(w => w.length > 0);

  const exactMatchOnly = ["it", "its", "she", "her", "you", "who", "how", "why", "what", "that", "this", "the", "git", "php", "aws", "crm", "mvc", "api", "db", "ci3", "ci4"];

  return words.some(word => {
    const t = word.toLowerCase();
    if (/[^a-z0-9]/i.test(t)) {
      return msgLower.includes(t);
    }
    const regex = new RegExp(`\\b${t}\\b`, "i");
    if (regex.test(msgLower)) return true;

    return queryWords.some(qw => {
      if (t.length <= 3 || qw.length <= 3 || exactMatchOnly.includes(t) || exactMatchOnly.includes(qw)) {
        return t === qw;
      }
      const distance = getLevenshteinDistance(qw, t);
      const maxDistance = t.length > 6 ? 2 : 1;
      return distance <= maxDistance;
    });
  });
}

export function getChatbotResponse(message: string, history: ChatMessage[]): string {
  const msg = message.toLowerCase().trim();
  
  // 1. Off-Topic Triggers Detection (Explicit Rejection)
  const offTopicKeywords = [
    "capital of", "weather", "recipe", "joke", "musk", "math problem", "solve", "calculate",
    "france", "india", "china", "germany", "paris", "tokyo", "london", "delhi", "cook", "recipe",
    "how do i make", "write a python", "write a program", "write code in python", "write a script",
    "who is elon", "what is the capital", "today's weather", "temperature today", "funny story", "tell a joke",
    "quadratic equation", "derivative of", "integral of", "sin(x)", "cos(x)", "plus", "minus", "divided by"
  ];

  if (containsWord(msg, offTopicKeywords) || 
      (msg.includes("python") && !msg.includes("fastapi")) || // allow python only if related to FastAPI
      (msg.includes("javascript") && !containsWord(msg, ["jquery", "skill", "stack", "frontend", "know", "use", "experience"])) // general JS requests
  ) {
    if (msg.includes("python")) {
      return "Python isn't listed among the technologies in Supriya's portfolio, so I can't confirm experience with it. I'd be happy to tell you about her listed backend skills like Laravel, PHP, Node.js, and FastAPI.";
    }
    return "I'm here to help with questions about Supriya's portfolio, skills, experience, projects and services. I can't help with unrelated topics, but I'd be happy to tell you about her technical expertise.";
  }

  // 2. Greetings and Casual Chat
  const greetings = ["hello", "hi", "hey", "good morning", "good evening", "g'day", "howdy", "yo"];
  if (greetings.some(g => msg === g || msg.startsWith(g + " ") || msg.endsWith(" " + g))) {
    return "Hello! 👋 I'm Supriya's portfolio assistant. I can tell you about her skills, experience, projects, services and technical expertise. What would you like to know?";
  }

  const howAreYou = ["how are you", "how's it going", "how's everything", "how do you do", "are you doing well"];
  if (howAreYou.some(h => msg.includes(h))) {
    return "I'm doing great, thank you for asking! I'm here as Supriya's professional portfolio assistant. How can I help you explore her skills, projects, or experience today?";
  }

  const thanks = ["thank you", "thanks", "thx", "appreciate it", "thank u"];
  if (thanks.some(t => msg === t || msg.startsWith(t + " ") || msg.includes(" " + t))) {
    return "You're welcome! 😊 Let me know if you'd like to know anything else about Supriya.";
  }

  const goodbye = ["bye", "goodbye", "see you", "see ya", "talk later", "farewell"];
  if (goodbye.some(g => msg === g || msg.startsWith(g + " ") || msg.includes(" " + g))) {
    return "Goodbye! 👋 Feel free to come back if you have any questions about Supriya's work.";
  }

  const acknowledgements = ["ok", "okay", "sure", "cool", "fine", "great", "awesome", "perfect", "good"];
  if (acknowledgements.some(a => msg === a || msg.startsWith(a + " ") || msg.endsWith(" " + a)) && msg.length <= 10) {
    return "Great! Let me know if you have any questions about Supriya's skills, projects, services, or if you'd like to get in touch with her. 👍";
  }

  // 3. Context Analysis (Checking previously mentioned topics in history)
  let lastProjectContext = "";
  for (let i = history.length - 1; i >= 0; i--) {
    const h = history[i];
    const content = (h.content || "").toLowerCase();
    if (content.includes("teamsetu") || content.includes("teemsetu")) {
      lastProjectContext = "teamsetu";
      break;
    } else if (content.includes("grateful marketing") || content.includes("grateful-marketing")) {
      lastProjectContext = "gratefulMarketing";
      break;
    } else if (content.includes("my little home") || content.includes("mylittlehome")) {
      lastProjectContext = "myLittleHome";
      break;
    } else if (content.includes("lawsikho")) {
      lastProjectContext = "lawsikho";
      break;
    }
  }

  const isContextRequest = containsWord(msg, ["it", "this", "that", "the project", "the platform", "the site", "the hrms", "the system"]);

  // 4. Detailed Project Queries (Evaluated before general skills checks)
  // --- TeamSetu ---
  if (containsWord(msg, ["teamsetu", "teemsetu", "hrms", "hr platform"]) || (isContextRequest && lastProjectContext === "teamsetu")) {
    if (containsWord(msg, ["tech", "technology", "technologies", "stack", "build with", "built with"])) {
      return "TeemSetu was built from the ground up using a technology stack comprising: **Node.js**, **React.js**, **MySQL**, **REST APIs**, **JWT Authentication**, and **AWS EC2** for cloud hosting, under a robust SaaS architecture. Laravel and PHP are also associated with the backend processes.";
    }
    if (containsWord(msg, ["feature", "highlights", "function", "what does it do"])) {
      return "TeemSetu is designed to simplify: employee management, biometric attendance, leave management pipelines, payroll automation, and organizational workflows. Engineering highlights include schema design, API endpoints, and React-based admin portals.";
    }
    if (containsWord(msg, ["backend", "involvement", "role", "responsibility"])) {
      return "Supriya was responsible for building the backend from the ground up. This included designing the database architecture, designing high-performance MySQL schemas, developing Node.js backend logic, writing RESTful API endpoints with JWT authentication, and deploying the solution to AWS.";
    }
    if (msg.includes("saas")) {
      return "Yes, TeemSetu is a cloud-based multi-tenant HRMS SaaS platform. It has been built and deployed live into production.";
    }
    return "TeemSetu (TeemSetu.in) is a cloud-based HRMS SaaS platform built from the ground up to simplify employee management, biometric attendance, leave pipelines, payroll, and workflows. Supriya built the Node.js backend, designed the MySQL database, created secure REST APIs (JWT), built the React.js Admin Dashboard, and hosted the system on AWS. Visit it at [https://www.teemsetu.in/](https://www.teemsetu.in/) and the admin portal at [https://admin.teemsetu.in/](https://admin.teemsetu.in/).";
  }

  // --- Grateful Marketing ---
  if (containsWord(msg, ["grateful marketing", "grateful-marketing"]) || (isContextRequest && lastProjectContext === "gratefulMarketing")) {
    if (containsWord(msg, ["ai", "chatgpt", "gemini"])) {
      return "Yes, AI was a core component. Supriya integrated ChatGPT and Gemini APIs into the backend workflows for high-growth campaigns and smart automation.";
    }
    if (containsWord(msg, ["integration", "crm", "hubspot", "salesforce"])) {
      return "Supriya built integrations for Grateful Marketing syncing CRM systems like HubSpot and Salesforce, creating webhook listeners, and linking third-party marketing services.";
    }
    if (containsWord(msg, ["tech", "technology", "technologies", "stack", "build with", "built with", "skills", "tools"])) {
      return "For Grateful Marketing, the technologies and integrations utilized included: AI integrations (ChatGPT and Gemini APIs), CRM syncing (HubSpot and Salesforce APIs), webhook listeners, backend dynamic forms, and automated marketing workflows.";
    }
    return "Grateful Marketing is a modern AI-focused marketing platform. Supriya's technical involvement included developing the backend, syncing HubSpot and Salesforce CRM systems via APIs, implementing webhook listeners, creating dynamic forms, and integrating AI APIs (ChatGPT and Gemini) for workflows. View the website at [https://www.grateful-marketing.com/](https://www.grateful-marketing.com/).";
  }

  // --- My Little Home ---
  if (containsWord(msg, ["my little home", "mylittlehome"]) || (isContextRequest && lastProjectContext === "myLittleHome")) {
    if (containsWord(msg, ["tech", "technology", "technologies", "stack", "build with", "built with", "skills", "tools"])) {
      return "For My Little Home, the technical stack and solutions utilized included: e-commerce database schema design, backend order processing pipelines, inventory synchronization services, secure payment checkouts, and custom admin dashboard controls.";
    }
    return "My Little Home ([https://mylittlehome.com.sa/](https://mylittlehome.com.sa/)) is a high-volume e-commerce platform based in Saudi Arabia. Supriya engineered the backend order processing, inventory sync pipelines, secure payment checkouts, database schema design, and custom admin dashboard controls, in addition to providing ongoing production support.";
  }

  // --- LawSikho ---
  if (containsWord(msg, ["lawsikho"]) || (isContextRequest && lastProjectContext === "lawsikho")) {
    if (containsWord(msg, ["tech", "technology", "technologies", "stack", "build with", "built with", "skills", "tools"])) {
      return "For LawSikho, the technical stack and systems engineered included: automated Revenue Management Architecture, streamlined onboarding workflows, backend API design, and enterprise-scale integrations.";
    }
    return "LawSikho is an enterprise-scale education system. Supriya collaborated with them to build their automated Revenue Management Architecture and streamlined onboarding workflows, designing the backend architecture and integrating necessary APIs.";
  }

  // Project-specific Technical Skills / Tech Stacks (General Check)
  if ((containsWord(msg, ["project", "projects"]) && containsWord(msg, ["tech", "technology", "technologies", "stack", "skills", "tools", "build", "built"])) || 
      containsWord(msg, ["project tech", "project stack", "project technology", "project technologies", "technologies used in projects", "skills used in projects", "project skills", "tech in projects", "technologies in projects", "skills in projects"])) {
    return "Supriya has utilized a wide range of technical skills and stacks across her flagship client projects:\n\n" +
      "1. **TeemSetu (Cloud HRMS SaaS):** Node.js, React.js, MySQL, REST APIs, JWT Authentication, SaaS architecture, and AWS EC2 hosting.\n" +
      "2. **Grateful Marketing:** AI integrations (ChatGPT, Gemini APIs), CRM syncing (HubSpot, Salesforce), webhooks, and backend workflows.\n" +
      "3. **My Little Home (E-commerce):** Order processing engines, inventory sync pipelines, secure payment checkouts, MySQL/database architecture, and custom admin dashboard controls.\n" +
      "4. **LawSikho (Enterprise EdTech):** Revenue management architecture, onboarding flows, and backend API design.\n" +
      "5. **Mobile API Backends (20+ Apps):** Secure REST APIs (JWT/OAuth), Node.js, database syncing, and checkout pipelines.";
  }

  // 5. Specific Skill Queries
  // Backend general
  if (containsWord(msg, ["backend", "back-end"])) {
    return "Supriya is a specialist Backend Developer. Her backend technical stack includes: **PHP**, **Laravel**, **CodeIgniter**, **Node.js**, and **FastAPI**.";
  }

  // Laravel
  if (msg.includes("laravel")) {
    return "Yes. Laravel is one of Supriya's backend technologies. She uses Laravel and PHP for building backend systems, APIs, SaaS platforms and business applications.";
  }
  // PHP
  if (containsWord(msg, ["php"])) {
    return "Supriya works with PHP, Laravel, CodeIgniter and Node.js for backend development. PHP is one of her primary technologies for building robust, custom business platforms.";
  }
  // Node.js
  if (containsWord(msg, ["node", "nodejs", "node.js"])) {
    return "Yes, Supriya works with Node.js for backend development. She used it to build the backend logic, REST APIs, and database schemas for her flagship HRMS SaaS product, TeemSetu.";
  }
  // CodeIgniter
  if (containsWord(msg, ["codeigniter", "ci3", "ci4"])) {
    return "Yes, Supriya works with CodeIgniter as part of her PHP development stack. She has experience developing new features and maintaining existing projects built on CodeIgniter.";
  }
  // FastAPI / Python
  if (containsWord(msg, ["fastapi", "fast api"])) {
    return "Yes, FastAPI is listed under Supriya's backend technology stack on the portfolio, which she uses for building fast, high-performance APIs.";
  }
  // Databases / MongoDB / MySQL / Postgres / Redis
  if (containsWord(msg, ["mongodb", "mongo"])) {
    return "Yes, MongoDB is listed under Supriya's database skills in her portfolio, which she uses for document-based and NoSQL data structures.";
  }
  if (msg.includes("mysql")) {
    return "Yes, Supriya works extensively with MySQL. She designed and optimized the high-performance MySQL schemas for TeemSetu, her cloud HRMS SaaS platform.";
  }
  if (msg.includes("postgresql") || msg.includes("postgres")) {
    return "Yes, PostgreSQL is listed under Supriya's database skills. She uses it for relational database modeling and optimization.";
  }
  if (msg.includes("redis")) {
    return "Her portfolio lists MySQL and MongoDB, along with basic Redis experience. Redis is used primarily for caching and optimizing database performance, but she does not claim advanced Redis expertise.";
  }
  // AWS / Cloud
  if (containsWord(msg, ["aws", "amazon web services", "ec2", "s3"])) {
    return "Yes, Supriya has AWS experience. She used AWS EC2 and S3 for cloud hosting, storage, and deployment of her flagship project TeemSetu, and handles production deployment and server configuration.";
  }
  if (containsWord(msg, ["cloud", "deployment", "railway", "render", "vercel", "cpanel", "linux"])) {
    return "Supriya has experience with various infrastructure platforms, including AWS (EC2/S3), Linux servers, cPanel, Vercel, Railway, and Render. She handles production server configurations and zero-downtime releases.";
  }
  // AI/LLM
  if (containsWord(msg, ["ai integration", "ai integrations", "chatgpt", "gemini", "openai"])) {
    return "Supriya has worked with AI integrations, specifically ChatGPT and Gemini APIs, incorporating them into backend systems for marketing platforms like Grateful Marketing and other workflows.";
  }
  // HubSpot / CRM Integrations
  if (containsWord(msg, ["hubspot", "salesforce", "growthhub"])) {
    return "Supriya has experience integrating various third-party APIs: CRMs (HubSpot CRM, Salesforce, GrowthHub), Google APIs, AI models (ChatGPT, Gemini), webhooks, and payment gateways (Stripe, Razorpay) for secure business transaction flows.";
  }
  // Google APIs
  if (msg.includes("google api") || msg.includes("google apis")) {
    return "Yes, Supriya has experience working with Google APIs as part of her third-party integration services.";
  }
  // Webhooks
  if (containsWord(msg, ["webhook", "webhooks"])) {
    return "Yes, Supriya has experience with Webhooks for real-time event-driven communication. She engineered webhook listeners for syncing CRM platforms (HubSpot, Salesforce) and triggering marketing campaign workflows in Grateful Marketing.";
  }
  // Frontend Skills
  if (containsWord(msg, ["html", "html5", "css", "css3", "tailwind", "javascript", "jquery", "bootstrap", "frontend"])) {
    return "Yes, Supriya has frontend integration skills to support backend development. Her portfolio lists **HTML5**, **CSS3**, **Tailwind CSS**, **JavaScript**, **jQuery**, and **Bootstrap**, along with **React.js** (which she used to build the TeemSetu Admin Dashboard).";
  }
  // Tools & DevOps
  if (containsWord(msg, ["git", "github", "postman", "jira", "vs code", "vscode", "tableplus", "docker", "tools"])) {
    return "Yes, Supriya is experienced with standard development and workflow tools. She uses **Git** and **GitHub** for version control, **Postman** for API testing, **Jira** for project management, **VS Code**, **TablePlus**, and has basic experience with **Docker**.";
  }
  // Backend Concepts
  if (containsWord(msg, ["mvc", "middleware", "validation", "events", "listeners", "queue", "cron", "error handling", "concepts"])) {
    return "Yes, Supriya works with modern backend concepts including the **MVC Pattern**, custom **Middleware** layers, **Events & Listeners**, request **Validation**, background **Queue Workers / Jobs**, **Cron Jobs**, and comprehensive **Error Handling**.";
  }
  // SaaS / Multi-tenant
  if (msg.includes("saas") || msg.includes("multi-tenant") || msg.includes("software as a service")) {
    return "Yes, Supriya has hands-on experience building SaaS products. She built **TeemSetu**, a cloud-based multi-tenant HRMS SaaS platform from the ground up, managing its complete lifecycle including database architecture, Node.js backend logic, REST APIs, and AWS cloud deployment.";
  }
  // E-commerce
  if (msg.includes("e-commerce") || msg.includes("ecommerce") || containsWord(msg, ["shopping", "store", "stores", "checkout", "cart", "purchasing", "shop", "shops", "online store", "online stores"])) {
    return "Yes, Supriya has experience building e-commerce platforms. She engineered backend functionalities for **My Little Home** (https://mylittlehome.com.sa/), a high-volume consumer e-commerce site. Her involvement included database architecture, order processing, inventory sync, secure payment checkouts, and custom admin controls, alongside ongoing production support.";
  }
  // Profile / About Supriya
  if (containsWord(msg, ["who is", "about supriya", "about her", "profile", "introduce", "who are you", "about yourself", "about you", "tell me about supriya"])) {
    return "Supriya is a professional Backend Developer with 5+ years of experience (listed as 6+ years on the portfolio) designing, developing, and maintaining scalable web applications. Her core focus includes building robust backend architectures, REST APIs, database schema design, third-party integrations, and end-to-end SaaS products.";
  }
  // Budget & Pricing Queries
  if (containsWord(msg, ["budget", "pricing", "cost", "charge", "rate", "fee"])) {
    return "Supriya works with client projects across several budget brackets, which can be selected directly on her portfolio's Contact form:\n" +
      "- Under ₹50K\n" +
      "- ₹50K – ₹1L\n" +
      "- ₹1L – ₹3L\n" +
      "- ₹3L+\n" +
      "- Let's Discuss / Custom Pricing\n\n" +
      "You can submit your project requirements and select your budget range in the Contact section:\n" +
      "[Contact Supriya](#contact)";
  }

  // 6. Contact & Hiring Queries
  const contactKeywords = ["contact", "touch", "reach", "email", "phone", "form", "hire", "discuss a project", "available", "job", "message", "inquiry", "write to", "call her"];
  if (containsWord(msg, contactKeywords)) {
    return "You can get in touch with Supriya by scrolling to the **Contact** section of the portfolio (where she has an inquiry form) or by emailing her directly at [supriyachandel75@gmail.com](mailto:supriyachandel75@gmail.com).\n\n" +
      "[Contact Supriya](#contact)";
  }

  // General projects question (Refined to avoid matching standalone "work" without context)
  if (containsWord(msg, ["projects", "portfolio", "what has she built", "client projects", "show projects"]) || 
      (msg.includes("work") && containsWord(msg, ["her", "past", "portfolio", "previous", "client", "done", "completed"]))) {
    return "Supriya's flagship projects include:\n" +
      "1. **TeemSetu (Cloud HRMS SaaS):** Biometric attendance, leaves, and payroll system built with React, Node.js, MySQL, and AWS. ([TeemSetu website](https://www.teemsetu.in/))\n" +
      "2. **Grateful Marketing:** AI-powered (ChatGPT/Gemini) marketing and CRM workflows. ([Grateful Marketing website](https://www.grateful-marketing.com/))\n" +
      "3. **My Little Home:** E-commerce order processing, inventory sync, and checkout system. ([My Little Home website](https://mylittlehome.com.sa/))\n" +
      "4. **LawSikho:** Enterprise automated revenue management systems.\n\n" +
      "She has also built over 30+ admin portals and backend APIs for 20+ mobile apps.";
  }

  // 7. Mobile API Experience Questions
  if (containsWord(msg, ["mobile", "app", "apis for mobile", "mobile application"])) {
    if (msg.includes("is she a mobile app developer") || msg.includes("are you a mobile developer") || msg.includes("does she build mobile apps")) {
      return "Supriya is not a mobile frontend developer, but her portfolio highlights extensive backend/API development for mobile applications. She has engineered secure REST APIs, authentication layers (JWT/OAuth), database sync, and business logic powering 20+ mobile applications, including Cab Booking, Wine Swap, Dating apps, and Clothing Delivery systems.";
    }
    return "Supriya has designed and deployed secure REST APIs for over 20+ mobile applications. Her mobile backend work includes JWT/OAuth2 token validation, fast JSON payloads, database syncing, real-time query optimization, and transaction pipelines (order, cart, checkout) for Cab Booking, Wine Swap, Dating, and Delivery applications.";
  }

  // 8. General Database list query
  if (containsWord(msg, ["databases", "database", "what databases", "which databases", "what database", "which database"])) {
    return "Her portfolio lists MySQL and MongoDB, along with basic Redis experience.";
  }

  // 9. General API list query
  if (containsWord(msg, ["apis", "api", "apis does she work with", "what apis", "which apis", "what api", "which api"])) {
    return "Supriya works with REST APIs, Google APIs, ChatGPT, Gemini, HubSpot, Salesforce, GrowthHub, and third-party APIs / Webhooks.";
  }

  // 10. Experience & Years of Experience
  if (containsWord(msg, ["experience", "years", "how long", "career", "background"])) {
    return "Supriya has 5+ years of professional experience (listed as 6+ years on the portfolio) as a Backend Developer. She has built 30+ custom admin panels, engineered backends for 20+ mobile apps, and developed 1 flagship cloud HRMS SaaS platform, managing projects end-to-end.";
  }

  // 11. Development Process Queries
  if (containsWord(msg, ["process", "lifecycle", "workflow", "steps", "approach", "how does she build", "how does she approach", "how she build", "how she builds", "how she works", "how she develops", "build process", "development process", "building process"])) {
    return "Supriya approaches projects using a structured 6-step Development Lifecycle:\n" +
      "1. **01 Understand (Idea & Requirements):** Deep dive into business goals, edge cases, data flows, and tech requirements.\n" +
      "2. **02 Architect (Architect & Model):** Design relational database schemas, REST endpoints, auth flows, and queues.\n" +
      "3. **03 Develop (Develop & Build):** Write clean, modular MVC code with solid validation and error handling.\n" +
      "4. **04 Integrate (Integrate & Connect):** Sync payment gateways, CRM systems (HubSpot, Salesforce), AI models, and webhooks.\n" +
      "5. **05 Optimize (Test & Optimize):** Perform query optimization, index tuning, security checks, and load tests.\n" +
      "6. **06 Deploy (Deploy & Scale):** Production deployment with zero downtime, automated backups, and log monitoring.";
  }

  // 12. Services Queries
  if (containsWord(msg, ["services", "what does she do", "capabilities", "what can she build", "offer", "provide", "expertise", "expert"])) {
    return "Supriya provides a range of professional backend services, including:\n" +
      "- **Backend Development:** PHP, Laravel, Node.js, and FastAPI scalable backend architectures.\n" +
      "- **REST API Development:** Secure APIs with JWT/OAuth authentication, mobile app backend endpoints, and rate limiting.\n" +
      "- **SaaS & Product Development:** End-to-end SaaS platforms, multi-tenant databases, and recurring billing.\n" +
      "- **Admin Panel Development:** Bespoke dashboards, CRMs, HRMS platforms (30+ delivered).\n" +
      "- **Third-Party Integrations:** HubSpot, Salesforce, Google APIs, AI (ChatGPT, Gemini), and Stripe/Razorpay payments.\n" +
      "- **Database & Performance:** MySQL, PostgreSQL, MongoDB, Redis caching, query optimization, and queue jobs.\n" +
      "- **Cloud & Deployment:** Server configurations on AWS EC2/S3, Linux, Railway, Render, Vercel, and CI/CD pipelines.\n" +
      "- **Maintenance & Refactoring:** Codebase refactoring, legacy upgrades, performance profiling, and bug fixes.";
  }

  // 13. General Tech Stack / Skills Queries
  if (containsWord(msg, ["skills", "skill", "technologies", "technology", "ecosystem", "stack", "languages", "know", "expert", "expertise", "capabilities", "background"])) {
    return "Supriya's technical stack includes:\n" +
      "- **Backend:** PHP, Laravel, Node.js, CodeIgniter, FastAPI\n" +
      "- **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript, jQuery, Bootstrap, React.js (dashboard)\n" +
      "- **Databases:** MySQL, PostgreSQL, MongoDB, Redis (basics)\n" +
      "- **APIs & CRMs:** HubSpot CRM, Salesforce, Google APIs, ChatGPT, Gemini, GrowthHub, Webhooks, Stripe, Razorpay\n" +
      "- **Infrastructure:** AWS (EC2/S3), Linux, cPanel, Railway, Vercel, Render, Docker (basics)\n" +
      "- **DevOps & Tools:** Git, GitHub, Postman, Jira, TablePlus, VS Code";
  }

  // 14. Specific questions for technologies not in portfolio
  const unlistedTechnologies = [
    "python", "ruby", "rails", "django", "flask", "java", "spring", "c#", "dotnet", ".net",
    "golang", "go", "rust", "c++", "angular", "vue", "flutter", "react native", "swift", "kotlin",
    "kubernetes", "k8s", "graphql", "sql server", "oracle", "firebase", "supabase"
  ];
  if (containsWord(msg, unlistedTechnologies)) {
    const matched = unlistedTechnologies.find(t => msg.includes(t));
    const formatted = matched ? matched.charAt(0).toUpperCase() + matched.slice(1) : "That technology";
    return `${formatted} isn't listed among the technologies in Supriya's portfolio, so I can't confirm experience with it.`;
  }

  // 15. Fallback Response for Unknown Portfolio details
  return "I don't have that information in Supriya's portfolio. I can help you explore her listed skills (such as Laravel, PHP, Node.js, MySQL, MongoDB), projects (TeemSetu, Grateful Marketing, My Little Home), services, development process, and contact info.";
}
