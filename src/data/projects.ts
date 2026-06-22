export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string | null;
  liveUrl: string;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Resource Planning (ERP)",
    description: "Developing a specialized ERP platform designed to manage financial transactions, project operations, and administrative data through a modern dashboard interface.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Zustand", "React Hook Form"],
    features: [
      "Financial transaction management",
      "Ledger & multi-site project modules",
      "Role-Based Access Control (RBAC)",
      "Financial analytics dashboards",
      "Demo Credencials : owner@erp.com-owner123, admin@erp.com-admin123, user@erp.com-user123",
    ],
    fullDescription: "The Enterprise Resource Planning (ERP) system is a comprehensive, enterprise-grade platform built to streamline and automate complex business operations. Architected as a modern single-page application using Next.js and TypeScript, this system serves as the central nervous system for organizational data, securely managing financial transactions, multi-site project operations, and administrative workflows through a highly intuitive dashboard interface. The backend data layer is powered by PostgreSQL, ensuring robust ACID compliance and relational integrity for critical financial records.\n\nA core focus of the system is its advanced financial management capabilities. It supports diverse voucher types—including receipts, payments, contra entries, journals, sales, and purchases—allowing accountants to maintain pristine digital ledgers. The ledger management module is rigorously categorized by asset, liability, income, and expense, facilitating accurate trial balances and P&L generation. Multi-site operations are seamlessly handled via dedicated parking and dispatch management modules, enabling logistical tracking across different physical locations.\n\nTechnically, the platform employs a stringent Role-Based Access Control (RBAC) architecture, guaranteeing that users—from data entry clerks to C-level executives—only access authorized modules. The frontend utilizes Zustand for highly performant global state management, avoiding unnecessary re-renders during complex data mutations. Data input is heavily guarded by React Hook Form integrated with Zod validation schemas, ensuring clean data ingestion. Finally, the system aggregates this massive data pool into actionable intelligence, utilizing Recharts to render dynamic, interactive financial analytics dashboards.",
    image: "/ERP.png",
    liveUrl: "https://software-erp.vercel.app/login",
    githubUrl: "https://github.com/Shubs-m7/Software_ERP",
  },
  {
    id: 2,
    title: "Web Agency HRM System",
    description: "Developed a Human Resource Management platform for managing employees, internal projects, and workforce operations.",
    techStack: ["Next.js", "React", "TypeScript", "Socket.io", "DnD Kit"],
    features: [
      "Responsive HR dashboard with RBAC",
      "Employee profile & project tracking",
      "Drag-and-drop Kanban task management",
      "Real-time chat and notifications"
    ],
    fullDescription: "The Web Agency HRM System is a comprehensive Human Resource Management platform engineered specifically for the dynamic needs of modern digital agencies. Built with the Next.js App Router and React, this dual-sided system modernizes workforce operations by providing dedicated, secure interfaces for administrators, HR managers, and regular employees. The platform significantly reduces administrative overhead by centralizing employee profile management, securely storing and tracking personal, financial, and professional records in one unified database.\n\nBeyond basic HR functions, the system integrates a powerful project and task management ecosystem. It features an advanced project lifecycle tracker that monitors initiatives through planning, in-progress, on-hold, completed, and cancelled states. To facilitate agile workflows, a highly interactive drag-and-drop Kanban board was developed using DnD Kit, allowing teams to seamlessly transition tasks across distinct stages. This is augmented by a real-time communication layer powered by Socket.io, which enables instant peer-to-peer chat and system-wide notifications, drastically improving team synchronization.\n\nSecurity and data integrity are paramount, enforced by a rigorous Role-Based Access Control (RBAC) system that dynamically adjusts UI rendering and API access based on ADMIN, HR_MANAGER, MANAGER, EMPLOYEE, and CLERK roles. The application leverages TypeScript for end-to-end type safety, preventing a wide class of runtime errors. To help management track performance and project velocity, the platform utilizes Recharts to generate insightful analytics dashboards, translating raw operational data into clear, visual metrics.",
    image: "/hrm.png",
    liveUrl: "https://hrm-frontend-ten.vercel.app",
    githubFrontendUrl: "https://github.com/WebMatrix-Technology/HRM-frontend",
    githubBackendUrl: "https://github.com/WebMatrix-Technology/HRM-backend",
  },
  {
    id: 3,
    title: "CRM Platform",
    description: "Developed a CRM system for managing customer relationships, sales pipelines, and business analytics.",
    techStack: ["Next.js", "TypeScript", "TanStack React Query", "Zod", "Recharts"],
    features: [
      "Lead lifecycle & customer tracking",
      "Sales pipeline stage management",
      "Task and activity tracking",
      "Sales analytics dashboards"
    ],
    fullDescription: "The Customer Relationship Management (CRM) Platform is a powerful, data-driven application developed to optimize sales pipelines, enhance client interactions, and drive business growth. Architected with Next.js and TypeScript, the system is designed to seamlessly track the entire lead lifecycle. It intelligently categorizes customers and manages complex deal pipelines, moving prospects through clearly defined stages—from initial 'in-talks' and 'stage-1' to definitive 'won' or 'lost' outcomes. This structured pipeline management allows sales teams to accurately forecast revenue and identify bottlenecks in the sales process.\n\nTo maximize sales team efficiency, the platform features highly integrated task and activity tracking modules. Sales representatives can log meetings, schedule follow-up calls, and attach internal notes directly to specific client profiles, ensuring context is never lost. The data fetching and server state synchronization are meticulously managed using TanStack React Query, providing users with a fast, optimistic UI that caches data aggressively while keeping it fresh in the background. This ensures the dashboard feels instantaneous even when querying large datasets.\n\nData integrity during rapid data entry is safeguarded by the integration of React Hook Form and Zod, providing instantaneous client-side validation for complex data structures. Furthermore, the CRM acts as a business intelligence tool by aggregating pipeline data into interactive sales analytics dashboards using Recharts. These visualizations empower sales managers to perform deep-dive analyses into conversion rates, team performance, and historical sales trends, ultimately leading to more informed, data-driven decision making.",
    image: "/crm.png",
    liveUrl: "https://crm-frontend-pied-seven.vercel.app",
    githubUrl: "https://github.com/WebMatrix-Technology/CRM-frontend",
  },
  {
    id: 4,
    title: "College ERP & Management System",
    description: "Co-developed a comprehensive College Enterprise Resource Planning (ERP) and Management system as part of a two-developer team, streamlining administration, academic tracking, student engagement, and multi-role operations.",
    techStack: ["Next.js", "TypeScript"],
    features: [
      "Multi-role administrative dashboards",
      "Interactive academic schedule frameworks",
      "Student management & fee invoicing workflows",
      "Faculty portals with digital grading",
      "Library automation & placement tracking"
    ],
    fullDescription: "The College ERP & Management System is an expansive, multi-tenant educational platform architected to completely digitize and streamline institutional administration. Co-developed as a comprehensive solution, the system caters to a highly diverse user base. It features specialized, deeply integrated dashboard portals tailored specifically for Super Admins, College Admins, Heads of Departments (HODs), HR personnel, Accountants, and Librarians. Each portal provides targeted tooling, ensuring that every faculty and staff member has immediate access to the functions critical to their role, all within a unified Next.js and TypeScript ecosystem.\n\nAt the heart of the system is its robust academic tracking engine. It replaces legacy, paper-based scheduling with interactive academic frameworks, featuring dynamic timetables and complex multi-tier examination planners that automatically handle scheduling conflicts. The student management workflows are equally comprehensive, automating the entire student lifecycle from initial admission tracking and document verification to recurring fee invoicing and digital grade report generation. This significantly reduces manual administrative labor and minimizes human error.\n\nThe platform also vastly improves the daily experience for academic staff through structured faculty portals. These portals enable seamless digital grading workflows and the direct distribution of study materials to students. Beyond core academics, the ERP extends its reach into campus operations by incorporating automated library cataloging systems—tracking book issuance and returns—as well as dedicated placement coordination modules to help manage corporate recruitment drives and student career tracking.",
    image: "/college.png",
    liveUrl: "https://college-tawny-ten.vercel.app",
    githubUrl: "https://github.com/WebMatrix-Technology/college",
  },
  {
    id: 5,
    title: "Healing Touch",
    description: "Co-developed a dynamic clinical booking and patient session management platform as part of a two-developer team, creating an intuitive patient intake process and an administrative medical dashboard.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Interactive 2D/3D Body Map for pinpointing affected areas",
      "Pain localization workflow with custom selectors and sliders",
      "Asynchronous clinical appointment scheduler",
      "Secure administrative panel for statistics and patient records",
      "Integrated billing components with real-time payment trackers"
    ],
    fullDescription: "Healing Touch is a highly specialized, cutting-edge clinical booking and patient session management platform engineered to modernize healthcare administration and enhance the patient experience. Co-developed with a focus on intuitive user interaction, the application revolutionizes the patient intake process. Its flagship feature is an innovative, interactive 2D/3D Body Map component. This bespoke graphical interface allows patients to visually pinpoint exact areas of discomfort before even stepping into the clinic, providing practitioners with crucial preliminary diagnostic data.\n\nThe system seamlessly integrates this visual data into a comprehensive pain localization workflow. Patients utilize custom-built category selectors and fine-grained pain intensity sliders to accurately articulate their symptoms. This data feeds directly into an asynchronous clinical appointment scheduler, which intelligently manages clinic availability and dispatches automated booking confirmation modals, complete with structured step indicators to guide the user through the booking flow effortlessly.\n\nOn the administrative backend, the platform equips clinic staff with a secure, highly capable medical dashboard. This administrative panel securely manages comprehensive patient health records, historical session logs, and upcoming appointment queues. Furthermore, the platform integrates robust billing components featuring real-time payment trackers to log processing states and manage medical invoices. Built utilizing Tailwind CSS and modular UI components, the interface remains exceptionally responsive and performant across both desktop and mobile environments, heavily relying on strict TypeScript typing to ensure the absolute reliability required in healthcare software.",
    image: "/physio.png",
    liveUrl: "https://adaptus-tan.vercel.app",
    githubFrontendUrl:"https://github.com/Shubs-m7/healing-touch",
    githubBackendUrl: "https://github.com/Shubs-m7/healing-backend",
  },
  {
    id: 6,
    title: "WebMatrix Portfolio Website",
    description: "Co-developed a high-performance marketing landing page and digital asset showcase for WebMatrix Technology as part of a two-developer team.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive UI configured with Tailwind CSS",
      "Modular text components with varied typography",
      "Fluid animations and transitions via Framer Motion",
      "Optimized vector SVG illustration rendering",
      "Unified design system with interactive component states"
    ],
    fullDescription: "The WebMatrix Portfolio Website is a visually striking, high-performance marketing landing page and digital asset showcase built specifically to highlight the capabilities of WebMatrix Technology. Co-engineered with a relentless focus on modern design aesthetics and extreme performance, the platform utilizes Next.js and TypeScript to deliver a statically generated, SEO-optimized user experience. The entire interface is meticulously styled using advanced Tailwind CSS configurations, ensuring pixel-perfect responsiveness across all viewport sizes, from ultrawide desktop monitors to mobile devices.\n\nA defining characteristic of this project is its sophisticated typography and layout engine. It incorporates highly modular, custom-built text components that support a wide array of typography variants and dynamic weights, allowing for expressive, brand-aligned messaging. To ensure pristine visual quality on high-density Retina displays, the platform completely eschews raster images in favor of optimized vector SVG illustrations, resulting in razor-sharp rendering and significantly reduced payload sizes.\n\nThe user experience is dramatically elevated through the implementation of fluid, hardware-accelerated animations and seamless interactive transitions powered by Framer Motion. These micro-interactions are woven into core showcase components, bringing the interface to life without compromising performance. By establishing a unified design system grounded in cohesive neutral backgrounds and distinctly interactive component states, the landing page successfully captures user attention, communicates technical authority, and drives deeper engagement.",
    image: "/webmatrix.png",
    liveUrl: "https://web-matrix.in/",
    githubFrontendUrl:"https://github.com/WebMatrix-Technology/WebMatrix-landing-page",
    githubBackendUrl: "https://github.com/WebMatrix-Technology/WebMatrix-Backend",
  },
  {
    id: 7,
    title: "All-in-One Tools",
    description: "Co-developed a versatile multi-tool utility web application as part of a two-developer team, delivering a centralized hub for productivity, conversion, and financial tools.",
    techStack: ["Next.js", "TypeScript"],
    features: [
      "Computation utilities including Age, EMI, Split Bill, and GST Calculators",
      "Developer tools like JSON Formatter, Password Generator, and Meta Tag Generator",
      "Asset processors including an Image Compressor and a client-side PDF Merger",
      "Localized front-end tools like QR Code Generator and Color Palette generator",
      "Reusable UI dashboard foundations tied into a global theme toggle system"
    ],
    fullDescription: "Co-developed a versatile multi-tool utility web application as part of a two-developer team, delivering a centralized hub for productivity, conversion, and financial tools. Designed and built specialized computation utilities including an Age Calculator, EMI Calculator, Split Bill calculator, and GST Calculator. Developed developer-focused productivity tools such as a JSON Formatter, a custom Password Generator, and a programmatic Meta Tag Generator.\n\nEngineered multi-format asset file processors, including an interactive Image Compressor and a client-side PDF Merger utility. Programmed localized front-end tools including a Dynamic QR Code Generator, a Word Counter, and a dynamic Color Palette generator. Co-authored client-side security and history tracking architectures by implementing custom authentication actions and persistent tool usage logs. Designed and implemented reusable UI dashboard foundations, constructing custom Select, DatePicker, TimePicker, and ColorPicker inputs tied into a global theme toggle system.",
    image: "/tools.png",
    liveUrl: "https://all-in-one-tools-nine.vercel.app/",
    githubUrl: "https://github.com/Shubs-m7/All-in-One-Tools",

  },
];

export function getProjectById(id: string | number): Project | undefined {
  return projects.find((p) => p.id.toString() === id.toString());
}
