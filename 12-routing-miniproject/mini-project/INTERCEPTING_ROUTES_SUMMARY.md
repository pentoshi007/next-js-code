# Intercepting Routes - Complete Implementation Guide

## Overview

This project includes **THREE complete examples** of intercepting routes in Next.js 16, demonstrating all three major patterns:

1. **Same Level - (.)** 
2. **One Level Up - (..)** 
3. **Two Levels Up - (...)**

---

## Pattern 1: Same Level `(.)`

### Location
```
app/
  @modal/
    (.)gallery/[id]/page.tsx
  gallery/
    page.tsx
    [id]/page.tsx ← Target
```

### How It Works
- File: `app/@modal/(.)gallery/[id]/page.tsx`
- Intercepts: `/gallery/[id]`
- Pattern matches sibling segments at the same level

### Example: Photo Gallery
```
URL: /gallery
↓ Click photo
↓ Route: /gallery/1
↓ Intercepted by: @modal/(.)gallery/[id]
↓ Shows: Modal instead of full page
```

### Files
- **Main page**: `app/gallery/page.tsx`
- **Full page**: `app/gallery/[id]/page.tsx`
- **Modal**: `app/@modal/(.)gallery/[id]/page.tsx`

---

## Pattern 2: One Level Up `(..)`

### Location
```
app/
  @modal/
    (..)/
      store/products/[id]/page.tsx
  store/
    products/
      page.tsx ← Starting point
      [id]/page.tsx ← Target
```

### How It Works
- File: `app/@modal(..)/store/products/[id]/page.tsx`
- Intercepts: `/store/products/[id]`
- Pattern matches one level up from the route structure

### Example: Store Products
```
URL: /store/products
↓ Click product
↓ Route: /store/products/1
↓ Intercepted by: @modal(..)/store/products/[id]
↓ Shows: Modal instead of full page
```

### Files
- **Main page**: `app/store/products/page.tsx`
- **Full page**: `app/store/products/[id]/page.tsx`
- **Modal**: `app/@modal(..)/store/products/[id]/page.tsx`

---

## Pattern 3: Two Levels Up `(...)`

### Location
```
app/
  @modal/
    (...)/
      team/members/[id]/page.tsx
  dashboard/
    team/
      members/
        page.tsx ← Starting point
        [id]/page.tsx ← Target
```

### How It Works
- File: `app/@modal(...)/team/members/[id]/page.tsx`
- Intercepts: `/dashboard/team/members/[id]`
- Pattern matches two levels up from the route structure

### Example: Team Members
```
URL: /dashboard/team/members
↓ Click member
↓ Route: /dashboard/team/members/1
↓ Intercepted by: @modal(...)/team/members/[id]
↓ Shows: Modal instead of full page
```

### Files
- **Main page**: `app/dashboard/team/members/page.tsx`
- **Full page**: `app/dashboard/team/members/[id]/page.tsx`
- **Modal**: `app/@modal(...)/team/members/[id]/page.tsx`

---

## Key Concepts

### Parallel Routes (`@modal`)
- Uses `@` symbol to define a named slot
- `@modal` is a slot that renders in the same layout
- Can show alternative content for certain routes

### Intercepting Routes
- `(.)` - intercepts at same level
- `(..)` - intercepts one level up
- `(...)` - intercepts two levels up
- `(..)(../)` - intercepts multiple levels up

### How They Work Together
1. User navigates to a route
2. Intercepting route pattern matches the URL
3. Instead of rendering the target page, the intercepting route's modal renders
4. URL updates to match the target route
5. Browser back button works naturally

---

## Implementation Checklist

### Root Layout
```tsx
// app/layout.tsx must accept modal prop
export default function RootLayout({
  children,
  modal, // Parallel route slot
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        {modal} {/* Modal renders here */}
        <Footer />
      </body>
    </html>
  );
}
```

### Modal Component
```tsx
// app/@modal/(.)gallery/[id]/page.tsx
"use client"; // Client component for interactivity

import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

export default function PhotoModal({ params }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleClose = () => {
    router.back();
  };

  return (
    <dialog ref={dialogRef} onClick={(e) => {
      if (e.target === dialogRef.current) {
        handleClose();
      }
    }}>
      {/* Modal content */}
    </dialog>
  );
}
```

---

## URL Behavior

### Same Level (.)
```
FROM: /gallery
CLICK: Photo link to /gallery/1
RESULT: Modal shows, URL = /gallery/1
BACK: Returns to /gallery
DIRECT: /gallery/1 shows full page
```

### One Level Up (..)
```
FROM: /store/products
CLICK: Product link to /store/products/1
RESULT: Modal shows, URL = /store/products/1
BACK: Returns to /store/products
DIRECT: /store/products/1 shows full page
```

### Two Levels Up (...)
```
FROM: /dashboard/team/members
CLICK: Member link to /dashboard/team/members/1
RESULT: Modal shows, URL = /dashboard/team/members/1
BACK: Returns to /dashboard/team/members
DIRECT: /dashboard/team/members/1 shows full page
```

---

## Use Cases

### (.) Same Level
- ✓ Photo galleries
- ✓ Image lightboxes
- ✓ Quick view modals
- ✓ Simple overlays

### (..) One Level Up
- ✓ Product previews
- ✓ Store shopping modals
- ✓ Item details
- ✓ Preview dialogs

### (...) Two Levels Up
- ✓ User profile modals
- ✓ Team member details
- ✓ Deeply nested item previews
- ✓ Admin interfaces

---

## Testing All Patterns

### Pattern 1 - Same Level (.)
```
Visit: /gallery
Click: Any photo
Expected: Modal shows with photo
URL: /gallery/1
Press ESC: Returns to /gallery
```

### Pattern 2 - One Level Up (..)
```
Visit: /store/products
Click: Any product
Expected: Modal shows with product
URL: /store/products/1
Press ESC: Returns to /store/products
```

### Pattern 3 - Two Levels Up (...)
```
Visit: /dashboard/team/members
Click: Any team member
Expected: Modal shows with member details
URL: /dashboard/team/members/1
Press ESC: Returns to /dashboard/team/members
```

---

## Files Organization

```
app/
├── @modal/
│   ├── (.)gallery/[id]/page.tsx ← Same level
│   ├── (..)/store/products/[id]/page.tsx ← One level up
│   └── (...)/team/members/[id]/page.tsx ← Two levels up
├── gallery/
│   ├── page.tsx
│   └── [id]/page.tsx
├── store/
│   └── products/
│       ├── page.tsx
│       └── [id]/page.tsx
├── dashboard/
│   ├── page.tsx
│   └── team/
│       └── members/
│           ├── page.tsx
│           └── [id]/page.tsx
├── intercepting-routes-guide/page.tsx ← Documentation
└── layout.tsx ← Must handle modal slot
```

---

## Key Learnings

1. **Parallel Routes** enable multiple content streams in the same layout
2. **Intercepting Routes** intercept navigation and show alternative content
3. **Patterns determine reach**: (.) for same, (..) for parent, (...) for two levels
4. **URL updates** while showing modal content
5. **Browser history** works naturally with back button
6. **Full page fallback** when accessing URL directly
7. **Client component** needed for interactivity ("use client")
8. **Dialog element** provides native modal behavior

---

## Next.js 16 Features

- ✓ Parallel routes with `@` slots
- ✓ Intercepting routes patterns
- ✓ Native `<dialog>` element support
- ✓ Router methods (`useRouter`, `back()`)
- ✓ Route params as Promise (async params)
- ✓ Seamless URL integration

---

## Quick Links

- **Gallery Example**: `/gallery`
- **Store Example**: `/store/products`
- **Dashboard Example**: `/dashboard/team/members`
- **Learning Guide**: `/intercepting-routes-guide`
- **Examples Hub**: `/examples`
