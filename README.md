# UI Monorepo

This monorepo houses various UI applications and reusable React components, managed with Turborepo and pnpm. It's designed to streamline development and ensure consistency across our user interfaces.

## Structure

This repository is organized into the following main directories:

- **`apps/`**: Contains standalone applications.
  - `web`: Our primary web application, likely built with React.
- **`packages/`**: Contains shared utility packages.
  - `pittorica`: Our core design system and styling package, providing consistent UI styles.
  - `react`: A general-purpose React package, possibly containing hooks, utilities, or base components, and also re-exports all components from `packages-react`.
- **`packages-react/`**: A collection of individual, reusable React components. Each subdirectory within `packages-react` represents a distinct component package (e.g., `@pittorica/button-react`, `@pittorica/avatar-react`, `@pittorica/dialog-react`).

## Technologies

- **[Turborepo](https://turborepo.dev/)**: For high-performance build system and monorepo management.
- **[pnpm](https://pnpm.io/)**: As our package manager, for efficient dependency management.
- **[React](https://react.dev/)**: For building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: For static type checking and improved code quality.
- **[ESLint](https://eslint.org/)**: For code linting.
- **[Prettier](https://prettier.io/)**: For code formatting.
- **[Vitest](https://vitest.dev/)**: For unit and component testing.

## Getting Started

### Installation

To set up the project, install dependencies using pnpm:

```sh
pnpm install
```

### Development

To start all applications and packages in development mode:

```sh
pnpm dev
```

To develop a specific application or package, use the `filter` option:

```sh
# Example: Develop the web application
pnpm --filter=web dev

# Example: Develop a specific React component (e.g., button)
pnpm --filter=@pittorica/button-react dev
```

### Build

To build all applications and packages for production:

```sh
pnpm build
```

To build a specific application or package:

```sh
# Example: Build the web application
pnpm --filter=web build

# Example: Build the pittorica design system
pnpm --filter=@pittorica/pittorica build
```

### Testing

To run tests across all packages:

```sh
pnpm test
```

To run tests for a specific package:

```sh
# Example: Run tests for the button component
pnpm --filter=@pittorica/button-react test
```

### Linting and Formatting

To lint all files:

```sh
pnpm lint
```

To format all files:

```sh
pnpm format
```

## Useful Links

- [Turborepo Documentation](https://turborepo.dev/docs)
- [pnpm Documentation](https://pnpm.io/documentation)
- [React Documentation](https://react.dev/learn)
