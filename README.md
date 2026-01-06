# 🥦 Grocery Helper App

## 🏗️ Architecture & Tech Stack

This project uses **NPM Workspaces** to manage dependencies.

| Scope | Technology | Purpose |
| :--- | :--- | :--- |
| **Monorepo** | NPM Workspaces | Unified dependency management. |
| **Mobile** | React Native (Expo) | iOS & Android app. |
| **Mobile Router** | Expo Router | File-based routing (similar to Next.js). |
| **Mobile UI** | NativeWind (Tailwind) | Utility-first CSS styling for native. |
| **State** | Zustand & TanStack Query | Client state & Server data caching. |
| **Backend** | NestJS | Robust, scalable Node.js framework. |
| **Database** | PostgreSQL (Supabase) | Primary relational database. |
| **ORM** | Prisma | Type-safe database access & migrations. |
| **Docs** | Swagger (OpenAPI) | API documentation (Dev only). |
| **CI/CD** | GitHub Actions | Automated Linting, Testing, and Build checks. |

---

## 📂 Project Structure

```
grocery-helper-app/
├── apps/
│   ├── backend/          # NestJS API (Port 4000)
│   │   ├── prisma/       # Database Schema & Migrations
│   │   ├── src/          # API Controllers & Services
│   │   ├── test/         # End-to-End Tests
│   │   └── package.json  # Backend dependencies & scripts
│   └── mobile/           # Expo App (Port 8081)
│       ├── app/          # Expo Router Pages
│       ├── src/          # Hooks, Stores, Utility Logic
│       ├── components/   # Shared UI Components
│       └── package.json  # Mobile dependencies & scripts
├── .github/              # CI Workflows & PR Templates
├── .husky/               # Git Hooks (Pre-commit checks)
├── package.json          # Root scripts
└── README.md             # Project Documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
* **Node.js**: v22+ 
* **Package Manager**: `npm` (v11+).

### 2. Installation
Run this command in the root folder. It installs dependencies for **all** workspaces (Backend, Mobile and Root).

```bash
npm install
```

### 3. Environment Setup

You must configure the backend secrets before starting.

1. **Navigate to backend directory:**
   ```bash
   cd apps/backend
   ```

2. **Create a .env file:**

  ```
  # apps/backend/.env
  DATABASE_URL="your_supabase_polling_url"
  NODE_ENV="development"
  API_PORT=4000
  FRONTEND_URL="http://localhost:8081"
  ```

### 🏃‍♂️ Running the App

We use `concurrently` to launch the full stack with a single command from the root.

#### The Magic Command ✨
Starts **Backend** (Blue logs) and **Mobile** (Magenta logs) simultaneously.

```bash
npm run dev
```
After that choose a way you want to start the mobile app: Scan the QR code in the terminal or press i (iOS Simulator) / a (Android Emulator).

Here is the explenation of all the root scripts:

| Script | Name | Command | Explanation |
| :--- | :--- | :--- | :--- |
| dev | Full Stack Start | concurrently ... | Launches both Backend and Mobile dev servers in a single terminal session. |
| dev:api | Backend Dev | npm run start:dev --workspace=api | Runs the API workspace in development mode with hot-reloading. |
| dev:mobile | Mobile Dev | npm run start --workspace=mobile | Starts the Expo bundler for the mobile application workspace. |
| build | Global Build | npm run build --workspaces | Compiles all workspaces (API and Mobile) for production deployment. |
| lint | Linting Check | npm run lint --workspaces | Runs static code analysis across the entire monorepo to find issues. |
| format | Code Prettier | prettier --write ... | Automatically fixes code style and formatting in all supported files. |
| test | Global Testing | npm run test --workspaces | Executes the test suites for all packages in the monorepo. |
| prepare | Husky Init | husky | Sets up Git hooks to ensure code quality checks run before commits. |
| android | Run Android | expo run:android | Compiles the native Android project and launches it on a device/emulator. |
| ios | Run iOS | expo run:ios | Compiles the native iOS project and launches it on a simulator/device. |

### 🛠 Running Services Separately

If you encounter issues running both services simultaneously, you can start them individually.

```bash
npm run dev:api
```
and

```bash
npm run dev:mobile
```

## 🤝 Contributing

#### 1. Branching Strategy
* **Main Branch:** Protected. Do not push directly to `main`.
* **Feature Branches:** Create a branch for your task (e.g., `feat/login-screen` or `fix/api-validation` or `refactor\api-users`).

#### 2. Commit Messages
* Commits **MUST**  be prefixed with a type, which consists of a noun, `feat` or `fix`, followed by the scope `apps\mobile`, `apps\api` or `root`.
* The type `feat` **MUST** be used when a commit adds a new feature to your application or library.
* The type `fix` **MUST** be used when a commit represents a bug fix for your application.
* The prefix and the scope has to end with a colon, adter that we put the description of the code that is commited -> `feat(app/mobile): added the reusable button component`

#### 3. Pull Request Process
1.  **Template:** The PR description will auto-fill with our template. Please fill it out.
2.  **Description:** Clearly summarize **what** changed and **why**. If it involves UI changes, please attach screenshots.
3.  **CI Checks:** Wait for all GitHub Actions (Lint, Build, Test) to turn green. **Do not try to merge** if the checks are failing.
