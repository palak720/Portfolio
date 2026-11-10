export type Variant = 'forest' | 'slate' | 'lavender' | 'tan' | 'sage' | 'sky' | 'cream'
export type Filter = 'all' | 'ai' | 'web'

export interface Project {
  id: string
  kicker: string
  label: string
  filter: Exclude<Filter, 'all'>
  name: string
  tagline: string
  description: string
  stack: string[]
  live?: string
  repo?: string
  variant: Variant
  featured?: boolean
  caption: string
}

export const projects: Project[] = [
  {
    id: 'groweasy',
    kicker: 'Featured flagship',
    label: 'AI & Full-Stack',
    filter: 'ai',
    name: 'GrowEasy',
    tagline: 'Messy CSVs in. Clean leads out.',
    description:
      'An AI-assisted importer that maps any lead export — Facebook, Google Ads, CRM dumps — onto one unified schema. Batch processing with retries, drag-and-drop upload, a preview before you confirm, and CSV re-export.',
    stack: ['Next.js', 'Node.js', 'TypeScript', 'Claude AI', 'Docker'],
    live: 'https://groweasy-csv-importer-assignment.vercel.app/',
    repo: 'https://github.com/palak720/groweasy-csv-importer-assignment',
    variant: 'forest',
    featured: true,
    caption: 'Inside the import workspace',
  },
  {
    id: 'medconnect',
    kicker: 'AI productivity',
    label: 'Pharma CRM',
    filter: 'ai',
    name: 'MedConnect',
    tagline: 'Log every doctor interaction by simply talking.',
    description:
      'An AI-first CRM for pharma field reps. Log HCP interactions through a form or a chat backed by a LangGraph agent with five tools: log, edit, profile lookup, follow-ups and search.',
    stack: ['React', 'Redux', 'FastAPI', 'LangGraph', 'Groq'],
    repo: 'https://github.com/palak720/ai-first-crm-hcp-module',
    variant: 'lavender',
    caption: 'Inside the interaction workspace',
  },
  {
    id: 'cybershield',
    kicker: 'AI & security',
    label: 'Threat detection',
    filter: 'ai',
    name: 'CyberShield',
    tagline: 'See the risk before it spreads.',
    description:
      'Real-time threat detection that scores social profiles for risk, with live animated charts, an AI simulation mode, automated email alerts through n8n, and explainable output.',
    stack: ['React', 'Flask', 'MongoDB', 'n8n'],
    live: 'https://cybershield-ai.vercel.app',
    repo: 'https://github.com/palak720/cybershield-ai',
    variant: 'tan',
    caption: 'Inside the risk dashboard',
  },
  {
    id: 'auditpilot',
    kicker: 'Team project',
    label: 'API security',
    filter: 'ai',
    name: 'AuditPilot',
    tagline: 'An autonomous auditor for Kong API gateways.',
    description:
      'A multi-agent LangGraph system with a RAG pipeline that audits Kong gateway configs against enterprise security policies, writes the compliance report, and offers one-click remediation.',
    stack: ['React', 'LangGraph', 'Kong AI Gateway', 'Redis VectorDB', 'Flask'],
    repo: 'https://github.com/varsha-katiyar/AuditPilot',
    variant: 'slate',
    featured: true,
    caption: 'Inside the audit workspace',
  },
  {
    id: 'k72',
    kicker: 'Web & motion',
    label: 'Landing page',
    filter: 'web',
    name: 'K72',
    tagline: 'A motion-first landing page.',
    description:
      'Animated landing page with GSAP micro-interactions, scroll-reveal sections and a fully responsive layout, built with React and Vite.',
    stack: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
    live: 'https://k72-d8bd47.netlify.app/',
    repo: 'https://github.com/palak720/k72',
    variant: 'sage',
    caption: 'Inside the landing page',
  },
  {
    id: 'biographx',
    kicker: 'Data & simulation',
    label: 'Feasibility tool',
    filter: 'ai',
    name: 'BioGraphX',
    tagline: 'Is bagasse-to-graphene actually viable?',
    description:
      'A techno-economic simulator that evaluates turning sugarcane bagasse into graphene oxide: production, financial performance, market context and scenario viability in a single interface.',
    stack: ['React', 'Simulation', 'Data viz'],
    live: 'https://bagasse-bloom-main.vercel.app/',
    repo: 'https://github.com/palak720/bagasse-bloom-main',
    variant: 'sky',
    caption: 'Inside the simulator',
  },
  {
    id: 'recipes',
    kicker: 'Web app',
    label: 'React app',
    filter: 'web',
    name: 'Recipe App',
    tagline: 'Search recipes, fast.',
    description:
      'A single-page React app for browsing and searching recipes. Context API handles global state and plain CSS keeps the UI light and easy to maintain.',
    stack: ['React', 'Context API', 'CSS'],
    live: 'https://astonishing-flan-5553a7.netlify.app/',
    repo: 'https://github.com/palak720/recipesapp',
    variant: 'cream',
    caption: 'Inside the app',
  },
]
