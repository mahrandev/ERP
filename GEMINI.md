# Project Overview

This project is a comprehensive ERP (Enterprise Resource Planning) system designed for a car rental company. It aims to manage all aspects of the business, from vehicle and customer management to financial tracking and reporting.

**Key Technologies:**

*   **Frontend:** React, TypeScript, Vite
*   **UI Components:** shadcn/ui
*   **Styling:** Tailwind CSS
*   **Routing:** React Router
*   **State Management:** Zustand
*   **Data Fetching:** TanStack Query (React Query)
*   **Forms:** React Hook Form with Zod for validation
*   **Testing:** Vitest, React Testing Library
*   **Backend (as planned):** Supabase

**Architecture:**

The application follows a component-based architecture with a clear separation of concerns. It uses a feature-based folder structure to organize modules like `employees`, `trips`, and `customers`.

**Localization:**

*   The application is designed to support **Arabic only**. The necessary fonts have been included.

# Building and Running

**1. Installation:**

```bash
npm install
```

**2. Running the Development Server:**

To start the local development server with hot-reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

**3. Building for Production:**

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory.

**4. Linting:**

To check the code for any linting issues:

```bash
npm run lint
```

**5. Testing:**

To run the test suite:

```bash
npm run test
```

# Development Conventions

*   **Component-Based:** The UI is built using reusable React components.
*   **Styling:** Styling is done using Tailwind CSS utility classes.
*   **State Management:** Zustand is used for global state management, while TanStack Query handles server state.
*   **Folder Structure:** The project follows a structured organization:
    *   `src/components`: Shared UI components.
    *   `src/features`: Feature-specific modules.
    *   `src/hooks`: Custom React hooks.
    *   `src/lib`: Utility functions and Supabase client.
    *   `src/pages`: Top-level page components.
    *   `src/store`: Zustand store definitions.
*   **Testing:** The project uses `vitest` for running tests and `@testing-library/react` for component testing. Each component or feature must have its corresponding test file (e.g., `MyComponent.test.tsx`) co-located within the same directory.
*   **API Interaction:** Data fetching from the Supabase backend is managed using TanStack Query for caching, refetching, and mutations.