# Fresh Thoughts Blog

## Overview

Fresh Thoughts is a modern, Gen-Z focused blog platform built with React and TypeScript. The application provides a clean, visually appealing interface for sharing perspectives on culture, society, and personal growth. It features a static blog system with category filtering, search functionality, and responsive design optimized for both desktop and mobile experiences.

The project uses a client-server architecture with Vite for development and building, Express for server-side routing, and shadcn/ui components for a polished user interface with custom theming.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite with SWC for fast compilation
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack React Query for server state
- **UI Components:** shadcn/ui (Radix UI primitives with Tailwind CSS)
- **Styling:** Tailwind CSS with custom design system

**Design System:**
The application implements a comprehensive design system defined in `client/src/index.css` with:
- Custom color palette (vibrant purple primary, teal secondary, rose accent)
- HSL-based color system for theme consistency
- Custom gradients and shadows
- Typography using Plus Jakarta Sans and Outfit fonts
- Responsive breakpoints and spacing scales

**Key Architectural Decisions:**
1. **Static Content Approach:** Blog posts are stored as TypeScript objects in `client/src/data/blogPosts.ts` rather than fetched from a backend API. This provides fast load times and simplifies deployment but requires code changes to add new posts.

2. **Component Structure:** Uses a Layout component pattern with nested routing, enabling consistent navigation and theming across all pages.

3. **Client-Side Filtering:** Search and category filtering happens entirely in the browser, providing instant feedback without server requests.

**Pages:**
- Index (/) - Hero section with featured posts
- Blog (/blog) - All posts with search and category filtering
- BlogPost (/blog/:id) - Individual post view with related posts
- About (/about) - Information about the blog's mission
- Contact (/contact) - Contact form (currently client-side only)
- NotFound - 404 error page

### Backend Architecture

**Technology Stack:**
- **Server Framework:** Express.js
- **Development Server:** tsx with watch mode for hot reloading
- **Production Build:** TypeScript compilation to dist/

**Current Implementation:**
The backend is minimal, serving primarily as a static file server in production and development proxy. The `server/routes.ts` file contains an empty route registration function, indicating no custom API endpoints are currently implemented.

**Development vs Production:**
- **Development:** Vite dev server with HMR, Express middleware mode
- **Production:** Compiled static assets served by Express from dist/public

**Key Architectural Decisions:**
1. **No Database:** The application currently has no persistent data layer. Blog content is hardcoded in TypeScript files.

2. **Middleware Architecture:** Request logging middleware captures API calls (though none exist currently), measuring response times and logging JSON responses.

3. **Error Handling:** Global error handler middleware catches and formats errors consistently.

### External Dependencies

**UI Component Libraries:**
- **@radix-ui/*:** Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown-menu, navigation-menu, popover, select, toast, tooltip, etc.)
- **shadcn/ui:** Pre-configured Radix components with Tailwind styling
- **lucide-react:** Icon library for consistent iconography

**Development Tools:**
- **Lovable Integration:** Project created via Lovable platform with component tagging plugin for development
- **TypeScript:** Strict typing disabled in tsconfig for flexibility
- **ESLint:** Code quality with React-specific rules

**Styling:**
- **Tailwind CSS:** Utility-first CSS framework
- **class-variance-authority:** Type-safe variant styling
- **tailwind-merge/clsx:** Utility for merging Tailwind classes

**Form Handling:**
- **react-hook-form:** Form state management
- **@hookform/resolvers:** Form validation integration
- **zod:** Schema validation (minimal usage in shared/schema.ts)

**Carousel/Media:**
- **embla-carousel-react:** Touch-friendly carousel component

**Theming:**
- **next-themes:** Dark/light mode support (implementation in Layout component)

**Notable Absences:**
- No database or ORM (no Drizzle, Prisma, or similar)
- No authentication system
- No API client libraries (fetch used directly)
- No backend validation or data processing
- No email service integration (contact form is UI-only)

**Path Aliases:**
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*`