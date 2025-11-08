## Design System Structure

This document outlines the structure and conventions of the design system used in this project.

### 1. Token Definitions

Design tokens (colors, typography, spacing, etc.) are managed through Tailwind CSS and are defined implicitly by the `shadcn/ui` "new-york" style.

*   **Location**: Token definitions are not explicitly defined in a separate file. Instead, they are based on the "new-york" style from `shadcn/ui` and can be customized within a Tailwind CSS configuration file (e.g., `tailwind.config.js` or `tailwind.config.ts`).
*   **Format**: Tokens are accessed via Tailwind CSS utility classes.
*   **Transformation**: No token transformation systems are currently in place.

### 2. Component Library

The UI components are based on `shadcn/ui`.

*   **Location**: UI components are located in `src/components/ui`.
*   **Architecture**: The component architecture follows the `shadcn/ui` pattern, where components are added to the project via the CLI and can be customized as needed. These are not library dependencies in the traditional sense, but rather code that you own.
*   **Documentation**: There is no specific Storybook or component documentation within this project. Refer to the official `shadcn/ui` documentation for component usage and examples.

### 3. Frameworks & Libraries

*   **UI Framework**: React (`react`, `react-dom`)
*   **Styling**:
    *   Tailwind CSS (`tailwindcss`)
    *   `class-variance-authority`, `clsx`, and `tailwind-merge` for creating flexible and conflict-free component variants.
*   **Build System**: Vite (`vite`)
*   **Routing**: React Router (`react-router-dom`)

### 4. Asset Management

*   **Storage**: Assets like images and videos are stored in the `src/assets` directory.
*   **Referencing**: Assets are imported directly into components.
*   **Optimization**: No explicit asset optimization techniques are configured beyond Vite's built-in optimizations.
*   **CDN**: No CDN is configured.

### 5. Icon System

*   **Storage**: The project uses `lucide-react` for icons.
*   **Importing**: Icons are imported as individual React components from the `lucide-react` library.
*   **Naming Convention**: Icon names follow the `lucide-react` naming convention (e.g., `import { ChevronRight } from 'lucide-react';`).

### 6. Styling Approach

*   **Methodology**: Styling is primarily done using Tailwind CSS utility classes.
*   **Global Styles**: Global styles are defined in `src/index.css`. This file is also where Tailwind's base, components, and utilities are imported.
*   **Responsive Design**: Responsive designs are implemented using Tailwind's responsive modifiers (e.g., `md:`, `lg:`).

### 7. Project Structure

The codebase is organized as follows:

```
/
├── src/
│   ├── assets/         # Static assets (images, etc.)
│   ├── components/     # Application-specific components
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Library code and utilities
│   │   └── utils.ts    # Utility functions for shadcn/ui
│   ├── pages/          # Page components for different routes
│   ├── services/       # API service definitions
│   ├── store/          # State management (e.g., Redux, Zustand)
│   ├── types/          # TypeScript type definitions
│   └── utils/          # General utility functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

This structure separates concerns and provides a clear organization for the different parts of the application.
