# Module #1: Getting Started with React

## Understanding the React Project Structure

Topics

- Understanding Project Structure

---

## High-level View

A Vite-based React project is organized around:

* **Build tooling (Vite)**
* **Application source code (React)**
* **Static assets**
* **Configuration and metadata**

---

## Folder-Level Explanation

### `node_modules/`

**Purpose:**
Contains all third-party dependencies installed via `npm`.

**Key points:**

* Generated automatically by `npm install`
* Should **never** be committed to Git
* Can be recreated from `package.json` + `package-lock.json`

---

### `public/`

**Purpose:**
Holds **static assets that are served as-is** (without bundling or processing by Vite).

**Typical use cases:**

* `favicon.ico`
* Static images
* `robots.txt`
* Files that must be referenced via absolute paths

**Important behavior:**

* Files inside `public/` are available directly at the root URL
  Example:

  ```
  public/logo.png → http://localhost:5173/logo.png
  ```
* Vite does **not** hash, optimize, or bundle these files.

**Rule of thumb:**

* Use `public/` for **static, unprocessed files**
* Use `src/assets/` for assets **imported into JavaScript/CSS**

---

### `src/`

**Purpose:**
Contains the **entire React application source code**.

This is the most important directory from a development perspective.

---

### `src/assets/`

**Purpose:**
Stores assets that are **part of the module graph**.

**Examples:**

* Images imported into components
* Fonts
* CSS files
* SVGs used as React components

**Key difference vs `public/`:**

* Assets here are **processed by Vite**
* Can be imported like:

  ```js
  import logo from './assets/logo.png';
  ```

---

### `src/main.jsx`

**Purpose:**
The **true entry point** of the React application.

**What happens here:**

* React is mounted to the DOM
* The root component (`<App />`) is rendered

**Typical content:**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### `src/App.jsx`

**Purpose:**
The **root React component** of the application.

**Key point:**

* `main.jsx` bootstraps React
* `App.jsx` defines the main UI structure

---

## Root / Loose Files Explanation

### `.gitignore`

**Purpose:**
Defines files and folders Git should **not track**.

**Common entries:**

* `node_modules/`
* `dist/`
* `.env`

---

### `eslint.config.js`

**Purpose:**
Configuration for **ESLint**, a static code analysis tool.

**What it enforces:**

* Code style rules
* Best practices
* Potential bug detection

Used heavily in professional teams to maintain code quality.

---

### `index.html`

**Purpose:**
The **single HTML file** of the application.

**Important Vite-specific behavior:**

* This file lives at the project root (not inside `public`)
* Vite treats it as part of the build pipeline
* It includes the mounting DOM node:

  ```html
  <div id="root"></div>
  ```

**Key difference from CRA (Create React App):**

* In Vite, `index.html` is not static; it is processed and supports imports.

---

### `package.json`

**Purpose:**
Project metadata and dependency definition.

**Contains:**

* Project name & version
* Scripts (`dev`, `build`, `preview`)
* Dependencies and devDependencies

---

### `package-lock.json`

**Purpose:**
Locks **exact dependency versions** for consistent installs.

**Why it matters:**

* Ensures identical dependency trees across environments
* Prevents “works on my machine” issues

---

### `README.md`

**Purpose:**
Project documentation.

**Common sections:**

* Project overview
* Setup instructions
* Available scripts
* Contribution guidelines

---

### `vite.config.js`

**Purpose:**
Vite’s configuration file.

**Controls:**

* Plugins (e.g., React plugin)
* Build options
* Path aliases
* Dev server settings

Example:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

---

## Important Folder You’ll See Later

### `dist/`

**Purpose:**
Generated **production build output**.

* Created after running `npm run build`
* Contains optimized HTML, JS, and assets
* Should not be committed to Git

---

## Summary (Interview-Ready)

* `main.jsx` is the **React entry point**
* `index.html` is the **HTML entry point**
* `src/` contains application logic
* `public/` is for **unprocessed static files**
* `src/assets/` is for **bundled assets**
* `vite.config.js` configures the build system
* `package.json` defines dependencies and scripts
* `package-lock.json` ensures deterministic installs
