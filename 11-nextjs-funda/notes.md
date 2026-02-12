# Next.js Fundamentals

## What React Lags / React Limitations

React is a **JavaScript library** focused on building UI components, but it doesn't provide a complete solution for building full applications. Key limitations:

### 1. **Routing**
- React doesn't have built-in routing
- Need external libraries like React Router
- Manually handle navigation, URL params, query strings

### 2. **Server-Side Rendering (SSR)**
- React is primarily client-side rendering by default
- SSR requires additional setup and configuration
- Need separate server logic (Express, etc.)

### 3. **Static Site Generation (SSG)**
- No built-in way to generate static HTML at build time
- Requires external tools or workarounds

### 4. **Image Optimization**
- React doesn't optimize images automatically
- Manual implementation of lazy loading, responsive images, etc.

### 5. **API Routes**
- No built-in backend API support
- Need separate backend server or external services

### 6. **File-based Structure**
- React doesn't enforce any file structure
- Need to manage folder organization and routing manually

### 7. **Environment Variables**
- Basic support through `.env` files
- More complex configuration needed for different environments

### 8. **Database Integration**
- No built-in database support
- Need to manually set up connections and ORMs

### 9. **Authentication**
- No authentication system
- Requires external solutions or manual implementation

### 10. **Performance & SEO**
- Limited built-in SEO features (meta tags, structured data)
- Manual optimization needed for performance

---

## What Next.js Fulfills Out of the Box

Next.js is a **React framework** that provides production-ready solutions for all React's limitations:

### 1. **File-Based Routing**
- Automatic routing based on file structure in `/app` or `/pages`
- No need for manual route configuration

### 2. **Server-Side Rendering (SSR)**
- Built-in SSR support
- Get data on the server and pre-render pages

### 3. **Static Site Generation (SSG)**
- Generate static HTML at build time
- Deploy pre-built HTML files

### 4. **Incremental Static Regeneration (ISR)**
- Revalidate static pages at specified intervals
- No need to rebuild entire site for content changes

### 5. **Image Optimization**
- `<Image>` component with automatic optimization
- Responsive images, lazy loading, WebP format support

### 6. **API Routes**
- Create backend API endpoints using `/api` folder
- No need for separate backend server

### 7. **CSS & Styling**
- Built-in support for CSS Modules, Tailwind CSS, styled-jsx
- Automatic critical CSS extraction

### 8. **Environment Variables**
- `.env.local`, `.env.production`, `.env.development` support
- Automatic configuration for different environments

### 9. **Middleware**
- Request middleware for auth, logging, redirects
- Works at edge runtime for fast execution

### 10. **Database Integration**
- Works seamlessly with any database (Prisma, MongoDB, PostgreSQL, etc.)
- Built-in connection pooling support

### 11. **Authentication**
- Easy integration with NextAuth.js (now Auth.js v5)
- Built-in session management

### 12. **Performance & SEO**
- Automatic code splitting
- Next.js Head component for meta tags
- Search engine optimization built-in
- Image and font optimization

### 13. **Deployment**
- Optimized for Vercel (created by same team)
- Works with any Node.js hosting

---

## App Router vs Page Router

Next.js supports two routing systems. You must choose one for your project.

### **Page Router** (Legacy - `/pages` directory)

The original routing system in Next.js.

**Structure:**
```
pages/
├── index.js          → /
├── about.js          → /about
├── blog/
│   ├── index.js      → /blog
│   └── [id].js       → /blog/:id (dynamic route)
├── api/
│   └── users.js      → /api/users
└── _app.js           (wrapper component)
```

**Key Features:**
- File-based routing in `/pages` folder
- Dynamic routes with `[param].js` syntax
- API routes in `/api` folder
- `getStaticProps()` for SSG
- `getStaticPaths()` for dynamic SSG
- `getServerSideProps()` for SSR
- `getInitialProps()` for data fetching

**Data Fetching Methods:**
```javascript
// Static Generation
export async function getStaticProps() {
  return { props: { data }, revalidate: 60 };
}

// Server-Side Rendering
export async function getServerSideProps() {
  return { props: { data } };
}

// Dynamic Routes
export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
```

**Advantages:**
- Mature and stable
- Large community and many tutorials
- Works well for simple to medium projects

**Disadvantages:**
- More verbose data fetching methods
- Harder to share data between routes
- Less flexible for complex layouts

---

### **App Router** (Modern - `/app` directory)

The new routing system introduced in Next.js 13+.

**Structure:**
```
app/
├── layout.js                    → Root layout (wrapper)
├── page.js                      → / (home page)
├── about/
│   └── page.js                  → /about
├── blog/
│   ├── layout.js                → Layout for /blog routes
│   ├── page.js                  → /blog
│   └── [id]/
│       └── page.js              → /blog/:id (dynamic route)
├── api/
│   └── users/
│       └── route.js             → /api/users
└── not-found.js                 → Custom 404 page
```

**Key Features:**
- File-based routing in `/app` folder
- React Server Components by default
- Dynamic routes with `[param]` syntax
- Optional `layout.js` for nested layouts
- API routes with `route.js`
- Built-in support for `async` in Server Components
- `generateMetadata()` for dynamic meta tags
- `generateStaticParams()` for dynamic SSG

**Data Fetching Methods:**
```javascript
// Server Component - Direct database access
export default async function Page() {
  const data = await fetch('...', { cache: 'force-cache' });
  return <div>{data}</div>;
}

// Dynamic Meta Tags
export async function generateMetadata() {
  return { title: 'Dynamic Title' };
}

// Dynamic Routes for SSG
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

// Client Component - for interactivity
'use client';
export default function ClientComponent() {
  return <div>Interactive content</div>;
}
```

**Advantages:**
- Simpler data fetching (no special functions needed)
- Server Components reduce JavaScript bundle size
- Better performance by default
- Nested layouts are more intuitive
- Streaming support for faster perceived page loads
- Modern React patterns (Server Actions, etc.)

**Disadvantages:**
- Newer, less community resources initially
- Requires understanding of Server vs Client Components
- Some third-party libraries may not support Server Components yet

---

## Comparison Table

| Feature | Page Router | App Router |
|---------|-------------|-----------|
| Directory | `/pages` | `/app` |
| Default Rendering | Client Component | Server Component |
| Data Fetching | `getStaticProps`, `getServerSideProps` | Direct in Server Components |
| Layouts | Manual in `_app.js` | Nested `layout.js` files |
| API Routes | `/pages/api/` | `/app/api/` with `route.js` |
| Meta Tags | `next/head` | `generateMetadata()` |
| Status | Legacy | Recommended |
| Learning Curve | Lower | Higher (but rewarded) |
| Performance | Good | Better |
| Bundle Size | Higher | Lower |

---

## Quick Summary: What's Different

### **Page Router**
1. **Older way** - Original routing system
2. **Example**: `pages/about.js` → `yourdomain.com/about`
3. **Supported**: Works with Next.js 12 and older, still supported in Next.js 13+

### **App Router**
1. **Latest approach** - Modern routing system (Next.js 13+)
2. **Based on `/app` folder** - All routes in `/app` directory
3. **React Server Components** - Default rendering on server
4. **Server Actions** - Backend logic directly in components
5. **More modern and scalable** - Designed for modern applications with better performance

---

## Recommendation

**Use App Router** for new projects because:
- ✅ Better performance
- ✅ Smaller bundle sizes
- ✅ Simpler data fetching
- ✅ Better developer experience
- ✅ Future-proof (actively being improved)

**Use Page Router** only if:
- You're maintaining legacy projects
- You need specific libraries that don't support Server Components yet
- Your team is unfamiliar with Server Components
