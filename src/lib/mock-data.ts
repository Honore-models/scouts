/* ═══════════════════════════════════════════════════════════════
   MOCK DATA — Centralized store for the entire ScouTTs app.
   Every page imports from here instead of duplicating data.
   ═══════════════════════════════════════════════════════════════ */

// ─── Products ─────────────────────────────────────────────────

export interface Product {
  id: string;
  name: string;
  tagline: string;
  maker: string;
  image: string;
  tags: string[];
  upvotes: number;
  comments: number;
  rating: number;
  category: string;
  description: string;
  website?: string;
  github?: string;
  features: { title: string; desc: string }[];
  techStack: { name: string; icon: string; color: string }[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'FlowBoard',
    tagline: 'AI powered whiteboard for collaborative teams',
    maker: 'David Kim',
    image: '/landing/dashboard-tilt.png',
    tags: ['SaaS', 'AI', 'Collaboration', 'Design'],
    upvotes: 1240,
    comments: 89,
    rating: 4.9,
    category: 'SaaS',
    description: 'FlowBoard is a next-generation whiteboard that uses AI to help teams brainstorm, plan, and build together. With real-time collaboration, smart suggestions, and an infinite canvas, it makes teamwork effortless.',
    website: 'https://flowboard.dev',
    github: 'https://github.com/davidkim/flowboard',
    features: [
      { title: 'AI Powered assistance', desc: 'Get smart suggestions, auto generate diagrams, and improve your workflow' },
      { title: 'Real time collaboration', desc: 'Work together with your team in real time with cursors, comments and voice chat' },
      { title: 'Infinite canvas', desc: 'No limits — create, connect and visualize your ideas freely' },
      { title: 'Multiple templates', desc: 'Use ready made templates for flowcharts, mind maps, wireframes and more' },
      { title: 'Export & integrations', desc: 'Export to PDF, SVG, or integrate with your favorite tools' },
    ],
    techStack: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Node.js', icon: 'N', color: '#339933' },
      { name: 'Tailwind CSS', icon: '~', color: '#06B6D4' },
      { name: 'MongoDB', icon: 'M', color: '#47A248' },
    ],
  },
  {
    id: '2',
    name: 'DeliciousFood',
    tagline: 'All in one platform that helps restaurants grow from dashboard to doorstep',
    maker: 'Ivan Hirwa',
    image: '/landing/delicious.png',
    tags: ['Web Apps', 'Marketplace', 'Design'],
    upvotes: 987,
    comments: 64,
    rating: 4.8,
    category: 'Web Apps',
    description: 'DeliciousFood is a comprehensive restaurant management platform that streamlines operations from the kitchen to the customer\'s door. Manage orders, inventory, and delivery all in one place.',
    features: [
      { title: 'Order management', desc: 'Track and manage all incoming orders in real time' },
      { title: 'Delivery tracking', desc: 'Live GPS tracking for all deliveries with customer notifications' },
      { title: 'Inventory control', desc: 'Automatic stock alerts and ingredient tracking' },
      { title: 'Analytics dashboard', desc: 'Insights into sales, peak hours, and popular menu items' },
    ],
    techStack: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Python', icon: '🐍', color: '#3776AB' },
      { name: 'PostgreSQL', icon: 'PG', color: '#4169E1' },
    ],
  },
  {
    id: '3',
    name: 'CodeSnap',
    tagline: 'Beautiful code screenshots in one click',
    maker: 'Cenat',
    image: '/landing/code.png',
    tags: ['Developer tools', 'Design'],
    upvotes: 856,
    comments: 52,
    rating: 4.7,
    category: 'Developer tools',
    description: 'CodeSnap lets you create beautiful, shareable code screenshots in seconds. Choose from dozens of themes, customize backgrounds, and export in high resolution.',
    features: [
      { title: 'Multiple themes', desc: 'Over 20 beautifully designed themes for your code screenshots' },
      { title: 'Syntax highlighting', desc: 'Support for 50+ programming languages' },
      { title: 'Custom backgrounds', desc: 'Choose from gradients, patterns, or upload your own' },
      { title: 'One-click export', desc: 'Export as PNG, SVG, or copy to clipboard' },
    ],
    techStack: [
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Rust', icon: '🦀', color: '#DEA584' },
      { name: 'Canvas API', icon: 'C', color: '#FF6B6B' },
    ],
  },
  {
    id: '4',
    name: 'Kartz',
    tagline: 'Art selling website for independent artists',
    maker: 'Mandrake',
    image: '/landing/kartz.png',
    tags: ['Marketplace', 'Design', 'E-Commerce'],
    upvotes: 743,
    comments: 41,
    rating: 4.6,
    category: 'Marketplace',
    description: 'Kartz is a marketplace built specifically for independent artists to sell their artwork. With beautiful galleries, secure payments, and artist-friendly tools, it\'s the perfect platform to showcase your creativity.',
    features: [
      { title: 'Artist galleries', desc: 'Beautiful portfolio pages to showcase your work' },
      { title: 'Secure payments', desc: 'Integrated payment processing with instant payouts' },
      { title: 'Print on demand', desc: 'Automatic print fulfillment for physical products' },
      { title: 'Social sharing', desc: 'Built-in tools to share your work across social media' },
    ],
    techStack: [
      { name: 'Next.js', icon: '▲', color: '#111111' },
      { name: 'Stripe', icon: 'S', color: '#635BFF' },
      { name: 'Supabase', icon: 'SB', color: '#3ECF8E' },
    ],
  },
  {
    id: '5',
    name: 'ShipFast',
    tagline: 'Ship your MVP in days not months',
    maker: 'Liam Chen',
    image: '/landing/code.png',
    tags: ['Developer tools', 'SaaS'],
    upvotes: 621,
    comments: 38,
    rating: 4.5,
    category: 'Developer tools',
    description: 'ShipFast is a boilerplate and toolkit that helps founders launch their MVP in record time. Includes auth, payments, landing pages, and more — all pre-built and ready to customize.',
    features: [
      { title: 'Pre-built components', desc: 'Auth, payments, email, and more — all ready to go' },
      { title: 'Landing page templates', desc: 'High-converting templates optimized for launches' },
      { title: 'Database setup', desc: 'Pre-configured database with migrations and seed data' },
      { title: 'Deployment guides', desc: 'Step-by-step guides for Vercel, Railway, and more' },
    ],
    techStack: [
      { name: 'Next.js', icon: '▲', color: '#111111' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Tailwind', icon: '~', color: '#06B6D4' },
      { name: 'Prisma', icon: 'P', color: '#2D3748' },
    ],
  },
  {
    id: '6',
    name: 'MindMap AI',
    tagline: 'AI powered mind mapping and brainstorming',
    maker: 'Alex Park',
    image: '/landing/delicious.png',
    tags: ['AI', 'Productivity', 'SaaS'],
    upvotes: 534,
    comments: 29,
    rating: 4.4,
    category: 'AI',
    description: 'MindMap AI uses artificial intelligence to help you brainstorm and organize your thoughts. Simply type an idea and watch as the AI generates connected concepts, suggestions, and visual mind maps.',
    features: [
      { title: 'AI brainstorming', desc: 'Type an idea and let AI generate connected concepts' },
      { title: 'Visual mind maps', desc: 'Automatic visual layouts that make complex ideas simple' },
      { title: 'Collaboration', desc: 'Real-time editing with team members' },
      { title: 'Export options', desc: 'Export as PNG, PDF, or Markdown' },
    ],
    techStack: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'OpenAI', icon: '🤖', color: '#412991' },
      { name: 'D3.js', icon: 'D3', color: '#F9A03C' },
    ],
  },
  {
    id: '7',
    name: 'LandingKit',
    tagline: 'Beautiful landing page templates for startups',
    maker: 'Sara Kim',
    image: '/landing/kartz.png',
    tags: ['Design', 'Developer tools'],
    upvotes: 412,
    comments: 22,
    rating: 4.3,
    category: 'Design',
    description: 'LandingKit provides a library of beautifully designed, conversion-optimized landing page templates. Customize with a visual editor or code directly — every template is built with modern best practices.',
    features: [
      { title: '50+ templates', desc: 'A growing library of conversion-optimized designs' },
      { title: 'Visual editor', desc: 'Customize colors, fonts, and layouts without code' },
      { title: 'SEO optimized', desc: 'Built-in meta tags, Open Graph, and schema markup' },
      { title: 'Fast loading', desc: 'All templates score 95+ on Lighthouse' },
    ],
    techStack: [
      { name: 'Next.js', icon: '▲', color: '#111111' },
      { name: 'Figma', icon: 'F', color: '#F24E1E' },
      { name: 'Tailwind', icon: '~', color: '#06B6D4' },
    ],
  },
  {
    id: '8',
    name: 'DataPulse',
    tagline: 'Real time analytics dashboard for SaaS products',
    maker: 'Mike Ross',
    image: '/landing/code.png',
    tags: ['SaaS', 'Analytics', 'Developer tools'],
    upvotes: 389,
    comments: 18,
    rating: 4.2,
    category: 'SaaS',
    description: 'DataPulse gives SaaS founders real-time insights into their product metrics. Track MRR, churn, user engagement, and more with a beautiful, customizable dashboard.',
    features: [
      { title: 'Real-time metrics', desc: 'Watch your numbers update in real time' },
      { title: 'Custom dashboards', desc: 'Build dashboards tailored to your business' },
      { title: 'Automated reports', desc: 'Get weekly email summaries of key metrics' },
      { title: 'Integrations', desc: 'Connect Stripe, Segment, Mixpanel, and more' },
    ],
    techStack: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'Go', icon: 'Go', color: '#00ADD8' },
      { name: 'ClickHouse', icon: 'CH', color: '#FFCC01' },
    ],
  },
  {
    id: '9',
    name: 'PixelForge',
    tagline: 'AI image generation and editing platform',
    maker: 'Emma Wilson',
    image: '/landing/delicious.png',
    tags: ['AI', 'Design', 'SaaS'],
    upvotes: 367,
    comments: 15,
    rating: 4.1,
    category: 'AI',
    description: 'PixelForge is an AI-powered image generation and editing platform. Create stunning visuals from text prompts, edit existing images, and build a library of brand assets — all powered by cutting-edge AI.',
    features: [
      { title: 'Text-to-image', desc: 'Generate images from natural language descriptions' },
      { title: 'Image editing', desc: 'AI-assisted editing tools for quick adjustments' },
      { title: 'Style transfer', desc: 'Apply artistic styles to any image' },
      { title: 'Brand kit', desc: 'Save and reuse brand colors, fonts, and styles' },
    ],
    techStack: [
      { name: 'Python', icon: '🐍', color: '#3776AB' },
      { name: 'Stable Diffusion', icon: '🎨', color: '#A855F7' },
      { name: 'FastAPI', icon: 'FA', color: '#009688' },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// ─── Developers ───────────────────────────────────────────────

export interface Developer {
  id: string;
  name: string;
  handle: string;
  bio: string;
  location: string;
  website?: string;
  joinDate: string;
  projects: number;
  followers: number;
  following: number;
  totalUpvotes: number;
  avatar: string;
  color: string;
  featured: string;
  projectIds: string[];
}

export const developers: Developer[] = [
  {
    id: '1',
    name: 'David Kim',
    handle: '@davidkim',
    bio: 'Building tools that help teams think and create better together. Passionate about AI, collaboration, and developer experience.',
    location: 'San Francisco, CA',
    website: 'https://davidkim.dev',
    joinDate: 'March 2023',
    projects: 12,
    followers: 2540,
    following: 186,
    totalUpvotes: 4820,
    avatar: 'DK',
    color: '#315BFF',
    featured: 'FlowBoard',
    projectIds: ['1', '5', '6', '7'],
  },
  {
    id: '2',
    name: 'Ivan Hirwa',
    handle: '@ivanhirwa',
    bio: 'Full stack developer passionate about restaurant tech and AI.',
    location: 'New York, NY',
    joinDate: 'June 2023',
    projects: 8,
    followers: 1820,
    following: 142,
    totalUpvotes: 3120,
    avatar: 'IH',
    color: '#8B5CF6',
    featured: 'DeliciousFood',
    projectIds: ['2'],
  },
  {
    id: '3',
    name: 'Cenat',
    handle: '@cenat',
    bio: 'Creating beautiful developer tools and code utilities.',
    location: 'London, UK',
    joinDate: 'January 2023',
    projects: 15,
    followers: 3210,
    following: 210,
    totalUpvotes: 5430,
    avatar: 'CE',
    color: '#10B981',
    featured: 'CodeSnap',
    projectIds: ['3'],
  },
  {
    id: '4',
    name: 'Mandrake',
    handle: '@mandrake',
    bio: 'Designer and developer building art marketplaces.',
    location: 'Berlin, Germany',
    joinDate: 'September 2023',
    projects: 6,
    followers: 980,
    following: 88,
    totalUpvotes: 1650,
    avatar: 'MA',
    color: '#F59E0B',
    featured: 'Kartz',
    projectIds: ['4'],
  },
  {
    id: '5',
    name: 'Liam Chen',
    handle: '@liamchen',
    bio: 'Ship fast, ship often. Building MVP tools for founders.',
    location: 'Toronto, Canada',
    joinDate: 'April 2023',
    projects: 10,
    followers: 2100,
    following: 165,
    totalUpvotes: 3890,
    avatar: 'LC',
    color: '#EF4444',
    featured: 'ShipFast',
    projectIds: ['5'],
  },
  {
    id: '6',
    name: 'Alex Park',
    handle: '@alexpark',
    bio: 'AI researcher building the next generation of brainstorming tools.',
    location: 'Seoul, South Korea',
    joinDate: 'July 2023',
    projects: 7,
    followers: 1560,
    following: 130,
    totalUpvotes: 2780,
    avatar: 'AP',
    color: '#EC4899',
    featured: 'MindMap AI',
    projectIds: ['6'],
  },
  {
    id: '7',
    name: 'Sara Kim',
    handle: '@sarakim',
    bio: 'Design engineer crafting beautiful templates for startups.',
    location: 'Tokyo, Japan',
    joinDate: 'May 2023',
    projects: 9,
    followers: 1340,
    following: 120,
    totalUpvotes: 2150,
    avatar: 'SK',
    color: '#6366F1',
    featured: 'LandingKit',
    projectIds: ['7'],
  },
  {
    id: '8',
    name: 'Mike Ross',
    handle: '@mikeross',
    bio: 'Data enthusiast building analytics dashboards for SaaS.',
    location: 'Austin, TX',
    joinDate: 'August 2023',
    projects: 5,
    followers: 870,
    following: 95,
    totalUpvotes: 1420,
    avatar: 'MR',
    color: '#06B6D4',
    featured: 'DataPulse',
    projectIds: ['8'],
  },
  {
    id: '9',
    name: 'Emma Wilson',
    handle: '@emmawilson',
    bio: 'Creative technologist exploring the intersection of AI and art.',
    location: 'Portland, OR',
    joinDate: 'October 2023',
    projects: 4,
    followers: 720,
    following: 78,
    totalUpvotes: 1100,
    avatar: 'EW',
    color: '#F97316',
    featured: 'PixelForge',
    projectIds: ['9'],
  },
];

export function getDeveloperById(id: string): Developer | undefined {
  return developers.find((d) => d.id === id);
}

export function getDeveloperProjects(developerId: string) {
  const dev = getDeveloperById(developerId);
  if (!dev) return [];
  return products.filter((p) => dev.projectIds.includes(p.id));
}

// ─── Categories ───────────────────────────────────────────────

export interface Category {
  id: string;
  label: string;
  count: number;
  color: string;
}

export const categories: Category[] = [
  { id: 'saas', label: 'SaaS', count: 342, color: '#315BFF' },
  { id: 'ai', label: 'AI & Machine Learning', count: 289, color: '#8B5CF6' },
  { id: 'devtools', label: 'Developer Tools', count: 256, color: '#10B981' },
  { id: 'web', label: 'Web Apps', count: 198, color: '#F59E0B' },
  { id: 'mobile', label: 'Mobile Apps', count: 167, color: '#EF4444' },
  { id: 'design', label: 'Design Tools', count: 143, color: '#EC4899' },
  { id: 'database', label: 'Database & Storage', count: 98, color: '#06B6D4' },
  { id: 'ecommerce', label: 'E-Commerce', count: 87, color: '#F97316' },
  { id: 'productivity', label: 'Productivity', count: 124, color: '#6366F1' },
  { id: 'utilities', label: 'Utilities', count: 76, color: '#84CC16' },
];

// ─── Notifications ────────────────────────────────────────────

export interface Notification {
  id: string;
  type: 'upvote' | 'comment' | 'follow' | 'like' | 'mention';
  user: string;
  avatar: string;
  avatarColor: string;
  action: string;
  target: string;
  time: string;
  read: boolean;
}

export const notifications: Notification[] = [
  { id: '1', type: 'upvote', user: 'David Kim', avatar: 'DK', avatarColor: '#315BFF', action: 'upvoted your project', target: 'FlowBoard', time: '2 min ago', read: false },
  { id: '2', type: 'comment', user: 'Sarah Johnson', avatar: 'SJ', avatarColor: '#8B5CF6', action: 'commented on', target: 'FlowBoard', time: '15 min ago', read: false },
  { id: '3', type: 'follow', user: 'Liam Chen', avatar: 'LC', avatarColor: '#10B981', action: 'started following you', target: '', time: '1 hour ago', read: false },
  { id: '4', type: 'like', user: 'Emma Wilson', avatar: 'EW', avatarColor: '#F59E0B', action: 'liked your project', target: 'ShipFast', time: '2 hours ago', read: true },
  { id: '5', type: 'mention', user: 'Alex Park', avatar: 'AP', avatarColor: '#EF4444', action: 'mentioned you in a comment on', target: 'MindMap AI', time: '3 hours ago', read: true },
  { id: '6', type: 'upvote', user: 'Mike Ross', avatar: 'MR', avatarColor: '#06B6D4', action: 'upvoted your project', target: 'DataPulse', time: '5 hours ago', read: true },
  { id: '7', type: 'comment', user: 'Sara Kim', avatar: 'SK', avatarColor: '#EC4899', action: 'replied to your comment on', target: 'LandingKit', time: '1 day ago', read: true },
  { id: '8', type: 'follow', user: 'Mandrake', avatar: 'MA', avatarColor: '#F97316', action: 'started following you', target: '', time: '2 days ago', read: true },
];

// ─── Feedback ─────────────────────────────────────────────────

export interface FeedbackItem {
  id: string;
  projectName: string;
  user: string;
  avatar: string;
  avatarColor: string;
  type: 'suggestion' | 'bug' | 'praise' | 'question';
  message: string;
  time: string;
  upvotes: number;
  replies: number;
  responded: boolean;
}

export const feedbackItems: FeedbackItem[] = [
  { id: '1', projectName: 'FlowBoard', user: 'Sarah Johnson', avatar: 'SJ', avatarColor: '#8B5CF6', type: 'suggestion', message: 'It would be great to have a dark mode option for the canvas. Working late at night with a bright background is tiring.', time: '2 hours ago', upvotes: 24, replies: 3, responded: true },
  { id: '2', projectName: 'FlowBoard', user: 'Mike Chen', avatar: 'MC', avatarColor: '#10B981', type: 'praise', message: 'Absolutely love the real-time collaboration feature! The cursor tracking is super smooth and the AI suggestions are spot on.', time: '5 hours ago', upvotes: 18, replies: 1, responded: false },
  { id: '3', projectName: 'ShipFast', user: 'Emma Wilson', avatar: 'EW', avatarColor: '#F59E0B', type: 'bug', message: 'The deployment step seems to hang when deploying to Vercel. It works fine on Netlify though. Any ideas?', time: '1 day ago', upvotes: 12, replies: 5, responded: true },
  { id: '4', projectName: 'CodeSnap', user: 'Alex Park', avatar: 'AP', avatarColor: '#EF4444', type: 'suggestion', message: 'Could you add support for more programming languages? I mainly use Rust and Go, and the syntax highlighting is missing for those.', time: '2 days ago', upvotes: 9, replies: 2, responded: false },
  { id: '5', projectName: 'FlowBoard', user: 'David Kim', avatar: 'DK', avatarColor: '#315BFF', type: 'question', message: 'Is there a plan to support mobile editing? Would love to make quick edits from my phone.', time: '3 days ago', upvotes: 15, replies: 4, responded: true },
  { id: '6', projectName: 'ShipFast', user: 'Lisa Brown', avatar: 'LB', avatarColor: '#EC4899', type: 'praise', message: 'This saved me weeks of work! The template system is incredibly well thought out. Highly recommend to any founder.', time: '5 days ago', upvotes: 31, replies: 2, responded: false },
];

// ─── Collections ──────────────────────────────────────────────

export interface Collection {
  id: string;
  name: string;
  description: string;
  projectCount: number;
  isPublic: boolean;
  image: string;
  projects: string[];
}

export const collections: Collection[] = [
  { id: '1', name: 'AI Tools', description: 'Best AI powered tools and platforms', projectCount: 12, isPublic: true, image: '/landing/delicious.png', projects: ['FlowBoard', 'MindMap AI', 'CodeSnap'] },
  { id: '2', name: 'Developer Productivity', description: 'Tools to boost developer workflow', projectCount: 8, isPublic: true, image: '/landing/code.png', projects: ['ShipFast', 'CodeSnap', 'LandingKit'] },
  { id: '3', name: 'Design Inspiration', description: 'Beautiful design tools and references', projectCount: 6, isPublic: false, image: '/landing/kartz.png', projects: ['Kartz', 'LandingKit'] },
  { id: '4', name: 'SaaS Picks', description: 'Top SaaS products to watch', projectCount: 15, isPublic: true, image: '/landing/dashboard-tilt.png', projects: ['FlowBoard', 'DataPulse', 'ShipFast'] },
  { id: '5', name: 'Web Apps', description: 'Interesting web applications', projectCount: 10, isPublic: false, image: '/landing/delicious.png', projects: ['DeliciousFood', 'FlowBoard'] },
  { id: '6', name: 'Bookmarked', description: 'Projects I want to check out later', projectCount: 23, isPublic: false, image: '/landing/code.png', projects: ['CodeSnap', 'ShipFast', 'MindMap AI'] },
];

// ─── Saved Products ───────────────────────────────────────────

export interface SavedProduct {
  id: string;
  name: string;
  tagline: string;
  maker: string;
  image: string;
  category: string;
  upvotes: number;
  comments: number;
  rating: number;
  saved: string;
}

export const savedProducts: SavedProduct[] = [
  { id: '1', name: 'FlowBoard', tagline: 'AI powered whiteboard for collaborative teams', maker: 'David Kim', image: '/landing/dashboard-tilt.png', category: 'SaaS', upvotes: 482, comments: 68, rating: 4.8, saved: '2 days ago' },
  { id: '3', name: 'CodeSnap', tagline: 'Beautiful code screenshots in one click', maker: 'Cenat', image: '/landing/code.png', category: 'Developer tools', upvotes: 298, comments: 32, rating: 4.6, saved: '5 days ago' },
  { id: '5', name: 'ShipFast', tagline: 'Ship your MVP in days not months', maker: 'Liam Chen', image: '/landing/code.png', category: 'Developer tools', upvotes: 234, comments: 22, rating: 4.4, saved: '1 week ago' },
  { id: '6', name: 'MindMap AI', tagline: 'AI powered mind mapping and brainstorming', maker: 'Alex Park', image: '/landing/delicious.png', category: 'AI', upvotes: 198, comments: 18, rating: 4.3, saved: '2 weeks ago' },
];

// ─── Drafts ───────────────────────────────────────────────────

export interface Draft {
  id: string;
  name: string;
  description: string;
  lastEdited: string;
  completionPercent: number;
  image: string;
  category: string;
}

export const drafts: Draft[] = [
  { id: '1', name: 'ChatFlow', description: 'AI powered chatbot builder for customer support', lastEdited: '2 hours ago', completionPercent: 65, image: '/landing/code.png', category: 'AI' },
  { id: '2', name: 'PixelPerfect', description: 'Design to code tool with AI assistance', lastEdited: '1 day ago', completionPercent: 40, image: '/landing/kartz.png', category: 'Design' },
  { id: '3', name: 'APIHub', description: 'Centralized API management dashboard', lastEdited: '3 days ago', completionPercent: 25, image: '/landing/delicious.png', category: 'Developer tools' },
  { id: '4', name: 'TaskBoard', description: 'Kanban style project management for small teams', lastEdited: '1 week ago', completionPercent: 80, image: '/landing/dashboard-tilt.png', category: 'Productivity' },
];

// ─── Pricing Plans ────────────────────────────────────────────

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  billedYearly: string | null;
  popular: boolean;
  cta: string;
  featuresTitle: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for trying out Scouts.',
    price: '$0',
    period: '/month',
    billedYearly: null,
    popular: false,
    cta: 'Get started',
    featuresTitle: 'Includes:',
    features: ['Launch 1 product', 'Upload up to 3 media files', 'Basic analytics', 'Community support'],
  },
  {
    name: 'Pro',
    description: 'Grow faster and reach more people.',
    price: '$19',
    period: '/month',
    billedYearly: '$228',
    popular: true,
    cta: 'Start free trial',
    featuresTitle: 'Everything in Starter, plus:',
    features: ['Launch up to 20 products', 'Upload unlimited media', 'Detailed analytics & insights', 'Custom domain', 'Newsletter feature', 'Priority support'],
  },
  {
    name: 'Team',
    description: 'For teams building and shipping together.',
    price: '$49',
    period: '/month',
    billedYearly: '$588',
    popular: false,
    cta: 'Start free trial',
    featuresTitle: 'Everything in Pro, plus:',
    features: ['Unlimited products', 'Team collaboration', 'Role & permission management', 'API access', 'Dedicated support'],
  },
];

// ─── Dashboard Stats ──────────────────────────────────────────

export interface Stat {
  label: string;
  value: string;
  change: string;
  sub: string;
  up: boolean;
  color: string;
}

export const dashboardStats: Stat[] = [
  { label: 'Views', value: '12.4K', change: '18.4%', sub: 'vs previous 30 days', up: true, color: '#315BFF' },
  { label: 'Visitors', value: '3,842', change: '12.1%', sub: 'vs previous 30 days', up: true, color: '#315BFF' },
  { label: 'Likes', value: '1,284', change: '24.8%', sub: 'vs previous 30 days', up: true, color: '#315BFF' },
  { label: 'Comments', value: '368', change: '31.3%', sub: 'vs previous 30 days', up: true, color: '#315BFF' },
  { label: 'Saves', value: '742', change: '27.6%', sub: 'vs previous 30 days', up: true, color: '#315BFF' },
];

export interface TopProject {
  name: string;
  views: string;
  visitors: string;
  likes: number;
  comments: number;
  letter: string;
  color: string;
}

export const topProjects: TopProject[] = [
  { name: 'FlowBoard', views: '8,432', visitors: '2,945', likes: 842, comments: 154, letter: 'F', color: '#315BFF' },
  { name: 'ShipFast', views: '2,841', visitors: '1,142', likes: 312, comments: 68, letter: 'S', color: '#8B5CF6' },
  { name: 'MindMap AI', views: '1,642', visitors: '731', likes: 198, comments: 42, letter: 'M', color: '#10B981' },
  { name: 'DeliciousFood', views: '1,204', visitors: '532', likes: 121, comments: 29, letter: 'D', color: '#F59E0B' },
  { name: 'LandingKit', views: '842', visitors: '312', likes: 93, comments: 15, letter: 'L', color: '#6366F1' },
];

export const trafficSources = [
  { label: 'Discover feed', pct: 45, color: '#315BFF' },
  { label: 'Search', pct: 28, color: '#8B5CF6' },
  { label: 'Direct', pct: 15, color: '#10B981' },
  { label: 'External', pct: 8, color: '#F59E0B' },
  { label: 'Other', pct: 4, color: '#D1D5DB' },
];

export const audienceLocations = [
  { country: 'United States', pct: 32 },
  { country: 'India', pct: 18 },
  { country: 'United Kingdom', pct: 9 },
  { country: 'Germany', pct: 6 },
  { country: 'Other', pct: 35 },
];

// ─── Dashboard Projects ───────────────────────────────────────

export interface DashboardProject {
  id: string;
  name: string;
  tagline: string;
  status: 'live' | 'draft';
  image: string;
  views: string;
  visitors: string;
  likes: number;
  comments: number;
  rating: number;
  letter: string;
  color: string;
  category: string;
  created: string;
}

export const dashboardProjects: DashboardProject[] = [
  { id: '1', name: 'FlowBoard', tagline: 'AI powered whiteboard for collaborative teams', status: 'live', image: '/landing/dashboard-tilt.png', views: '8,432', visitors: '2,945', likes: 842, comments: 154, rating: 4.9, letter: 'F', color: '#315BFF', category: 'SaaS', created: 'Jan 24, 2024' },
  { id: '5', name: 'ShipFast', tagline: 'Ship your MVP in days not months', status: 'live', image: '/landing/code.png', views: '2,841', visitors: '1,142', likes: 312, comments: 68, rating: 4.7, letter: 'S', color: '#8B5CF6', category: 'Developer tools', created: 'Mar 12, 2024' },
  { id: '6', name: 'MindMap AI', tagline: 'AI powered mind mapping and brainstorming', status: 'draft', image: '/landing/delicious.png', views: '1,642', visitors: '731', likes: 198, comments: 42, rating: 4.5, letter: 'M', color: '#10B981', category: 'AI', created: 'May 8, 2024' },
  { id: '7', name: 'LandingKit', tagline: 'Beautiful landing page templates for startups', status: 'live', image: '/landing/kartz.png', views: '842', visitors: '312', likes: 93, comments: 15, rating: 4.3, letter: 'L', color: '#6366F1', category: 'Design', created: 'Jun 20, 2024' },
];

// ─── Product Comments ─────────────────────────────────────────

export interface Comment {
  id: number;
  name: string;
  avatar: string;
  time: string;
  text: string;
  likes: number;
}

export const productComments: Record<string, Comment[]> = {
  '1': [
    { id: 1, name: 'Sarah Johnson', avatar: 'SJ', time: '2h ago', text: 'This is exactly what our team needed — the AI suggestions are 🔥 and real time collaboration is super smooth', likes: 12 },
    { id: 2, name: 'Mike Chen', avatar: 'MC', time: '5h ago', text: 'Just tried it out. The infinite canvas feature is a game changer for brainstorming sessions.', likes: 8 },
  ],
  '2': [
    { id: 3, name: 'Alex Park', avatar: 'AP', time: '1h ago', text: 'The delivery tracking feature is incredibly detailed. Love the real-time GPS integration!', likes: 6 },
  ],
  '3': [
    { id: 4, name: 'Emma Wilson', avatar: 'EW', time: '3h ago', text: 'Best code screenshot tool I\'ve used. The themes are gorgeous and export quality is perfect.', likes: 15 },
    { id: 5, name: 'David Kim', avatar: 'DK', time: '8h ago', text: 'Would love to see more language support. Otherwise, this is perfect for documentation!', likes: 4 },
  ],
};

// ─── Similar Projects ─────────────────────────────────────────

export interface SimilarProject {
  name: string;
  tagline: string;
  votes: number;
  id: string;
}

export function getSimilarProjects(productId: string): SimilarProject[] {
  const current = getProductById(productId);
  if (!current) return [];
  return products
    .filter((p) => p.id !== productId && (p.category === current.category || p.tags.some((t) => current.tags.includes(t))))
    .slice(0, 3)
    .map((p) => ({ name: p.name, tagline: p.tagline, votes: p.upvotes, id: p.id }));
}
