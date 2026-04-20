# Angular Routing Demo

An Angular 21 application demonstrating routing concepts including **basic routing**, **dynamic routing**, **nested (child) routing**, and **wildcard routes**.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Routing Architecture](#routing-architecture)
  - [Basic Routes](#basic-routes)
  - [Dynamic Routes](#dynamic-routes)
  - [Nested Routes](#nested-routes)
  - [Wildcard Route](#wildcard-route)
- [Key Concepts](#key-concepts)
- [Development](#development)

## Features

- ✅ Basic page routing (Home, About, Contact)
- ✅ Dynamic routing with route parameters (`/user/:id`)
- ✅ Nested (child) routing under a Dashboard section
- ✅ Active link highlighting with `routerLinkActive`
- ✅ Wildcard route for 404 Not Found pages
- ✅ Default route redirect

## Tech Stack

| Technology | Version |
|------------|---------|
| Angular    | 21.2.0  |
| TypeScript | 5.9.2   |
| RxJS       | 7.8.x   |
| Vitest     | 4.0.8   |
| Node.js    | 18+     |

## Project Structure

```
src/app/
├── app.ts                          # Root component
├── app.html                        # Root template with navigation
├── app.css                         # Global app styles
├── app.routes.ts                   # Route configuration
├── app.config.ts                   # App configuration
└── pages/
    ├── home/                       # Home page
    │   ├── home.ts
    │   ├── home.html
    │   └── home.css
    ├── about/                      # About page
    │   ├── about.ts
    │   ├── about.html
    │   └── about.css
    ├── contact/                    # Contact page
    │   ├── contact.ts
    │   ├── contact.html
    │   └── contact.css
    ├── user/                       # Dynamic route page
    │   ├── user.ts
    │   ├── user.html
    │   └── user.css
    ├── dashboard/                  # Parent route (nested routing)
    │   ├── dashboard.ts
    │   ├── dashboard.html
    │   ├── dashboard.css
    │   ├── overview/               # Child route
    │   │   └── overview.ts
    │   └── settings/               # Child route
    │       └── settings.ts
    └── not-found/                  # 404 wildcard page
        ├── not-found.ts
        ├── not-found.html
        └── not-found.css
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
# Clone the repository
git clone https://github.com/sahidulcse12/routing-demo.git

# Navigate to the project directory
cd routing-demo

# Install dependencies
npm install

# Start the development server
ng serve
```

Open your browser and navigate to `http://localhost:4200/`.

## Routing Architecture

All routes are configured in [`src/app/app.routes.ts`](src/app/app.routes.ts):

```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user/:id', component: User },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'settings', component: Settings }
    ]
  },
  { path: '**', component: NotFound }
];
```

### Basic Routes

Standard page-level navigation using `routerLink`:

| Route       | Component  | Description       |
|-------------|------------|-------------------|
| `/home`     | `Home`     | Landing page      |
| `/about`    | `About`    | About page        |
| `/contact`  | `Contact`  | Contact page      |

### Dynamic Routes

Routes with parameters, accessed via `ActivatedRoute`:

| Route         | Component | Description                          |
|---------------|-----------|--------------------------------------|
| `/user/:id`   | `User`    | Displays user details for given `id` |

**Example:** Navigating to `/user/42` passes `42` as the `id` parameter.

### Nested Routes

The **Dashboard** section demonstrates nested (child) routing. The `Dashboard` component contains its own `<router-outlet>` and sidebar navigation, while child components render inside it.

| Route                  | Component  | Description                     |
|------------------------|------------|---------------------------------|
| `/dashboard`           | `Dashboard`| Redirects to `/dashboard/overview` |
| `/dashboard/overview`  | `Overview` | Dashboard overview with stats   |
| `/dashboard/settings`  | `Settings` | Dashboard settings panel        |

**How it works:**

1. The `Dashboard` component has its own `<router-outlet>` in its template
2. Child routes are defined using the `children` array in the route config
3. Child `routerLink` values are **relative** (e.g., `routerLink="overview"` instead of `routerLink="/dashboard/overview"`)
4. Navigating to `/dashboard` automatically redirects to `/dashboard/overview`

### Wildcard Route

| Route  | Component  | Description                    |
|--------|------------|--------------------------------|
| `**`   | `NotFound` | Catches all unmatched routes   |

> **Note:** The wildcard route must be the **last** entry in the routes array.

## Key Concepts

### `<router-outlet>`

Acts as a placeholder where Angular renders the component for the active route. This app uses two levels:
- **Root level** — in `app.html` for top-level pages
- **Nested level** — in `dashboard.html` for child pages

### `routerLink` & `routerLinkActive`

```html
<!-- Absolute link in main navigation -->
<a routerLink="/home" routerLinkActive="active">Home</a>

<!-- Relative link in nested navigation -->
<a routerLink="overview" routerLinkActive="active-sub">Overview</a>
```

- `routerLink` — Navigates to the specified route
- `routerLinkActive` — Applies a CSS class when the link's route is active

### Route Parameters

```typescript
// In the component
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    const userId = params['id'];
  });
}
```

## Development

```bash
# Start dev server
ng serve

# Run unit tests
ng test

# Build for production
ng build

# Generate a new component
ng generate component pages/my-new-page
```

## License

This project is for educational and demonstration purposes.
