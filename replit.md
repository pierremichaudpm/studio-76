# Studio 76 - Video Production Website

## Overview

This is a full-stack web application for Studio 76, a video production company based in Quebec, Canada. The application is built as a modern React single-page application with an Express.js backend, featuring a professional portfolio website showcasing the company's video production services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Migrations**: Managed through drizzle-kit with PostgreSQL dialect

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Full-screen hero with Studio 76 branding and tagline
- **Services Section**: Three main service offerings (documentary series, live sports, brand content)
- **Team Section**: Leadership profiles with professional backgrounds
- **Contact Section**: Contact information and call-to-action

### UI System
- **Design System**: Dark theme with Studio 76 blue accent color
- **Typography**: Apple system fonts with clean, modern styling
- **Layout**: Responsive grid system with mobile-first approach
- **Animations**: CSS-based animations with Tailwind utilities

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic CRUD operations for user entities
- **API Routes**: RESTful endpoints prefixed with `/api`
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Client Requests**: React frontend makes API calls through TanStack Query
2. **Server Processing**: Express.js handles requests and delegates to storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Flow**: JSON responses with proper error handling
5. **State Updates**: TanStack Query manages caching and state synchronization

## External Dependencies

### Production Dependencies
- **UI Components**: Comprehensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: Neon Database for serverless PostgreSQL
- **Validation**: Zod for runtime type checking
- **Date Handling**: date-fns for date utilities
- **Carousel**: Embla Carousel for image/content sliders

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server with HMR and optimized builds
- **ESBuild**: Fast bundling for production builds
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema consistency

### Environment Setup
- **Development**: Uses Vite dev server with Express backend
- **Production**: Serves static files from Express with built React app
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build of both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Push database schema changes

## Key Architectural Decisions

### Database Choice
- **PostgreSQL with Drizzle ORM**: Chosen for type safety, modern API, and PostgreSQL's reliability
- **Neon Database**: Serverless PostgreSQL for easy deployment and scaling
- **Session Storage**: PostgreSQL-backed sessions for stateful authentication

### Frontend Framework
- **React with TypeScript**: Industry standard for type-safe UI development
- **Vite**: Superior developer experience compared to Create React App
- **TanStack Query**: Robust server state management with caching

### UI/UX Approach
- **Dark Theme**: Matches video production industry aesthetics
- **French Language**: Targets Quebec market with French content
- **Professional Design**: Clean, modern design emphasizing creativity and professionalism

### Monorepo Structure
- **Shared Schema**: Common TypeScript types between frontend and backend
- **Unified Build**: Single repository with coordinated frontend/backend builds
- **Development Efficiency**: Hot reloading for both client and server code