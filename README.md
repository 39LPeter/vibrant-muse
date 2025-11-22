# Fresh Thoughts - A Gen-Z Focused Blog Platform

Fresh Thoughts is a modern blog platform built on Replit's fullstack template, designed for sharing authentic perspectives on culture, society, and personal growth. It features a clean, visually appealing interface with category filtering, search functionality, and responsive design optimized for both desktop and mobile experiences.

## Project Overview

This project has been migrated from Lovable to Replit's fullstack template, combining a React frontend with an Express backend in a single cohesive development environment.

**Live Project**: Access the running project in Replit's preview pane or publish it for a public URL.

## Technologies Used

### Frontend
- **React 18** with TypeScript
- **Vite** - Fast build tool with HMR (Hot Module Replacement)
- **Wouter** - Lightweight client-side routing
- **TanStack React Query** - Server state management
- **shadcn/ui** - Accessible UI components with Radix primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Express.js 4.x** - Web server framework
- **Node.js** - JavaScript runtime

### Development Tools
- **TypeScript** - Static typing
- **ESLint** - Code quality
- **tsx** - TypeScript executor with file watching

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── pages/         # Route pages
│   │   ├── components/    # Reusable components
│   │   ├── data/          # Static blog posts
│   │   ├── lib/           # Utilities and helpers
│   │   ├── App.tsx        # Main app component with routing
│   │   └── main.tsx       # React entry point
│   └── index.html         # HTML template
├── server/                # Backend application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Data models
└── vite.config.ts         # Build configuration
```

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server (runs on port 5000)
npm run dev
```

The development server will:
- Start the Express backend on port 5000
- Start Vite dev server with Hot Module Replacement
- Automatically reload on file changes

### Build for Production

```bash
npm run build
```

This builds both the frontend and backend for production.

### Start Production Server

```bash
npm run start
```

## Features

- **Blog Posts** - Static blog content with rich metadata
- **Search** - Client-side search across all posts
- **Categories** - Filter posts by category (Culture, Society, Technology, Wellness, Community, Life)
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Dark Mode** - Theme toggle for light/dark appearance
- **Clean Navigation** - Intuitive navigation with mobile-friendly menu
- **SEO Optimized** - Proper meta tags and semantic HTML

## Pages

- **Home** (/) - Hero section with featured stories
- **Blog** (/blog) - All posts with search and filtering
- **Blog Post** (/blog/:id) - Individual post view with related posts
- **About** (/about) - Blog mission and values
- **Contact** (/contact) - Contact form
- **404** - Not found page

## Deployment on Replit

### To Publish Your Project

1. Click the **"Publish"** button at the top of the Replit editor
2. Replit will generate a shareable public URL
3. Share the URL with others to view your published blog

The project is configured to run on **port 5000** and will automatically be served by Replit's deployment system.

## Development Guidelines

### Adding New Pages

1. Create a new component in `client/src/pages/`
2. Register the route in `client/src/App.tsx`
3. Add navigation links as needed

### Adding New Blog Posts

1. Edit `client/src/data/blogPosts.ts`
2. Add your post to the array with required metadata
3. Posts are automatically available in the blog feed

### Styling

- Uses **Tailwind CSS** with custom design system
- Custom colors defined in `client/src/index.css`
- Components from shadcn/ui library

### Type Safety

All types and schemas are centralized in `shared/schema.ts` for frontend and backend consistency.

## Common Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Run production server
npm run lint      # Check code quality
npm run check     # Type check both frontend and backend
```

## Notes

- Blog content is currently stored as static TypeScript objects
- No database or backend API integration yet
- Perfect for adding authentication, comments, or other features in the future

## License

This project is part of the Fresh Thoughts blog initiative.
