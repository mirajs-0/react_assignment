# React + Vite Template

This template provides a **minimal setup** to get React working with Vite, complete with **Hot Module Replacement (HMR)** and essential **ESLint** rules for better code quality.

---

## Available Official Plugins

Two official plugins are available to enable React in your Vite project:

### 1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)**

- Uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used with [rolldown-vite](https://vite.dev/guide/rolldown))
- Provides **Fast Refresh** for fast updates during development.

### 2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)**

- Utilizes [SWC](https://swc.rs/) for a faster, more efficient **Fast Refresh**.

---

## React Compiler

**Note**: The React Compiler is **disabled** by default in this template due to its impact on both **dev** and **build** performance. However, if you want to enable it, you can follow the detailed instructions in the [React Compiler Installation Guide](https://react.dev/learn/react-compiler/installation).

---

## ESLint Configuration

For production-ready applications, it's recommended to use **TypeScript** along with **type-aware linting rules**. To integrate TypeScript and the [`typescript-eslint`](https://typescript-e)
