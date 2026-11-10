const base = import.meta.env.BASE_URL

export const site = {
  name: 'Palak Kasaudhan',
  first: 'Palak',
  last: 'Kasaudhan',
  roleTop: 'Full-Stack',
  roleBottom: 'Developer',
  email: 'palakkasaudhan123@gmail.com',
  githubUser: 'palak720',
  github: 'https://github.com/palak720',
  linkedin: 'https://www.linkedin.com/in/palak-kasaudhan-098399208/',
  resume: 'https://drive.google.com/file/d/1fGl6ea-18D0Q0FJBMXfd-i3f8F3vT666/view?usp=sharing',
  // Drop your photo into /public/images/ with ANY of these names (transparent PNG looks best).
  photoCandidates: ['palak.png', 'palak.jpg', 'palak.jpeg', 'palak.webp'].map((f) => `${base}images/${f}`),

  hero: {
    kicker: "Hey, I'm Palak.",
    lineOne: 'Curious by nature.',
    lineTwo: 'Builder by habit.',
    body: 'I build web apps, wire up AI agents, and sweat the small details. Got a “what if” idea? Let’s build it together.',
    cta: 'Explore my work',
    rightLines: ['Code on my screen.', 'Ideas in my head.'],
    rightSmall: 'Always learning.',
  },

  about: {
    kicker: 'Full-stack development / Applied AI',
    paragraphs: [
      'I’m Palak, a full-stack developer building web applications with thoughtful interfaces and practical AI features.',
      'Still learning, and happy about it. I like understanding the problem first, making deliberate choices, and shipping things people genuinely use.',
      'I interned at Qurocity.ai building React + Tailwind interfaces and wiring up REST APIs. Since then I’ve shipped an AI-first CRM on LangGraph, a threat-detection platform, an API security auditor, and an AI-powered CSV importer.',
      'Based in Kanpur, India, and pursuing a BCA at Shoolini University.',
    ],
  },
}

export interface TechItem {
  name: string
  icon?: string
}

const dev = (slug: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${slug}/${slug}-${variant}.svg`

export const tech: TechItem[] = [
  { name: 'React', icon: dev('react') },
  { name: 'TypeScript', icon: dev('typescript') },
  { name: 'Next.js', icon: dev('nextjs') },
  { name: 'Tailwind CSS', icon: dev('tailwindcss') },
  { name: 'Node.js', icon: dev('nodejs') },
  { name: 'Python', icon: dev('python') },
  { name: 'FastAPI', icon: dev('fastapi') },
  { name: 'Flask', icon: dev('flask') },
  { name: 'LangGraph' },
  { name: 'MongoDB', icon: dev('mongodb') },
  { name: 'PostgreSQL', icon: dev('postgresql') },
  { name: 'Redis', icon: dev('redis') },
  { name: 'Docker', icon: dev('docker') },
  { name: 'Git', icon: dev('git') },
  { name: 'Figma', icon: dev('figma') },
]
