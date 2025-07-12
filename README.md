# njayserver

A modern, full-stack web application template using Bun, Hono, React, and Vite. This setup is designed for rapid development with a focus on performance.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone <your-repo-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd njayserver
    ```
3.  Install the dependencies:
    ```sh
    bun install
    ```

---

## 📜 Available Scripts

This template comes with a few pre-configured scripts to help with development and production workflows.

* **`bun run dev`**
    * Runs the backend server in development mode with hot-reloading. Any changes in `src/index.ts` will automatically restart the server.

* **`bun run cdev`**
    * Starts the Vite development server for the client-side React application. This is ideal for focusing on frontend development with its own hot-reloading.

* **`bun run cbuild`**
    * Builds the client-side React application for production. The output will be placed in the `dist` directory.

* **`bun start`**
    * Executes a production-ready start. It first builds the client-side application and then starts the production server.

---

## 🛠️ Key Technologies

This project is built with a modern, performance-oriented stack.

* **[Bun](https://bun.sh/):** A fast all-in-one JavaScript runtime, bundler, and package manager.
* **[Hono](https://hono.dev/):** A small, simple, and ultrafast web framework for the edge.
* **[React](https://react.dev/):** A popular JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/):** A next-generation frontend tooling that provides a faster and leaner development experience.
* **[TypeScript](https://www.typescriptlang.org/):** A statically typed superset of JavaScript that adds optional types.

---

## 📁 Project Structure
```sh
├── bun-env.d.ts
├── bunfig.toml
├── bun.lock
├── .gitignore
├── package.json
├── README.md
├── src
│   ├── index.ts
│   └── view
│       ├── APITester.tsx
│       ├── App.tsx
│       ├── frontend.tsx
│       ├── index.css
│       ├── index.html
│       ├── index.tsx
│       ├── logo.svg
│       └── react.svg
├── tsconfig.json
└── vite.config.ts
```
