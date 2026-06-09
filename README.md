# Red Bull Clone
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/N-PCs/redbull-clone)

This repository contains a high-fidelity clone of the Red Bull website, showcasing a rich, interactive user experience with complex animations and a modern web technology stack. The project is built using TanStack Start, Vite, React, and TypeScript, with styling handled by Tailwind CSS.

The application features a dark, cinematic home page with scroll-triggered animations powered by GSAP, and a separate, light-themed page dedicated to exploring the ingredients of the energy drink.

## Project Structure 
```
redbull-clone/
├── components.json
├── eslint.config.js
├── package-lock.json
├── package.json
├── public/
├── README.md
├── src/
│   ├── components/
│   │   ├── Can3D.tsx
│   │   ├── FlavorCard.tsx
│   │   ├── ingredients/
│   │   │   ├── ComparisonChart.tsx
│   │   │   ├── ComparisonIllustrations.tsx
│   │   │   ├── FlavorSlider.tsx
│   │   │   ├── IngredientArrows.tsx
│   │   │   ├── IngredientHub.tsx
│   │   │   └── IngredientsNav.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── SiteNav.tsx
│   │   └── ui
│   ├── data/
│   │   ├── flavors.ts
│   │   └── ingredients.ts
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   └── utils.ts
│   ├── router.tsx
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   └── ingredients.tsx
│   ├── routeTree.gen.ts
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc
```
## Key Features

-   **Interactive Animations**: Smooth, performant animations using GSAP and ScrollTrigger, including a signature floating can that "docks" into a product card on scroll.
-   **Component-Driven UI**: A well-structured interface built with reusable React components, leveraging the shadcn/ui component library.
-   **Two Distinct Themes**: The project demonstrates theme switching between the dark, high-energy home page and the bright, informational ingredients page.
-   **Responsive Design**: The layout adapts seamlessly from desktop to mobile devices, with custom navigation and component states for different screen sizes.
-   **Detailed Ingredient Exploration**: The `/ingredients` route offers an in-depth look at what's inside a can of Red Bull, complete with:
    -   An interactive ingredient hub diagram.
    -   Comparison charts to visualize ingredient amounts against common products.
    -   A dynamic flavor slider to browse different editions.

## Pages & Core Components

### Home Page (`/`)

The main landing page provides a cinematic experience.

-   **`SiteNav`**: A floating navigation bar with a glassmorphic effect and dropdown menu for mobile.
-   **`Can3D`**: A CSS-animated 2D image of a Red Bull can that floats and reacts to user interaction. It uses GSAP ScrollTrigger to fly into its position in the marketplace grid.
-   **`FlavorCard`**: A component used to display each Red Bull flavor in the marketplace grid, featuring custom backgrounds and hover effects.

### Ingredients Page (`/ingredients`)

A clean, informational page that breaks down the product's formula.

-   **`IngredientsNav`**: A distinct navigation bar for this page.
-   **`IngredientHub`**: An interactive diagram showcasing the primary ingredients (Caffeine, Taurine, Water, etc.) with arrows pointing to a central can. Callouts provide brief descriptions.
-   **`ComparisonChart`**: A data visualization component that compares the amount of sugar or caffeine in Red Bull to other beverages like coffee and juice.
-   **`FlavorSlider`**: A GSAP-powered carousel that allows users to slide through different Red Bull editions, with animated text and background transitions.

## Technology Stack

-   **Framework**: [TanStack Start](https://tanstack.com/start)
-   **Bundler**: [Vite](https://vitejs.dev/)
-   **UI Library**: [React](https://reactjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Routing**: [TanStack Router](https://tanstack.com/router)
-   **Data & State Management**: [TanStack Query](https://tanstack.com/query)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animation**: [GSAP (GreenSock Animation Platform)](https://gsap.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

-   Node.js (v18 or later recommended)
-   A package manager like npm, pnpm, or yarn

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/n-pcs/redbull-clone.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd redbull-clone
    ```

3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

Start the Vite development server to view the application.

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

The `package.json` file includes the following scripts:

-   `npm run dev`: Starts the development server with hot-reloading.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run preview`: Serves the production build locally for previewing.
-   `npm run lint`: Lints the project files using ESLint.
-   `npm run format`: Formats the code using Prettier.
