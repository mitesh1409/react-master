## What happens in development vs production

### Development (`npm run dev`)

* Browser loads `index.html`
* `index.html` contains:

  ```html
  <script type="module" src="/src/main.jsx"></script>
  ```
* Browser requests `main.jsx` directly
* Vite dev server:

  * Transpiles JSX on the fly
  * Serves ES modules
  * No bundling happens

So in **development**, the browser really is loading `main.jsx`.

---

## Production (`npm run build` or `vite build`)

Now the behavior changes completely.

### Step-by-step build process (Vite)

1. **`index.html` is treated as an entry file**

2. Vite starts from:

   ```html
   <script type="module" src="/src/main.jsx"></script>
   ```

3. Vite:

   * Traverses the entire import graph (`main.jsx → App.jsx → other files`)
   * Bundles everything using **Rollup**
   * Transpiles JSX, modern JS
   * Optimizes, tree-shakes, minifies
   * Hashes filenames for cache busting

4. Output is written to:

   ```
   dist/
   ```

---

## What happens to `index.html` during build?

**Vite generates a new, production-ready `index.html` inside `dist/`.**

**`index.html` is transformed during the build**, and it is updated to reference the compiled JavaScript instead of `main.jsx`.

Example transformation:

### Before build (source `index.html`)

```html
<script type="module" src="/src/main.jsx"></script>
```

### After build (`dist/index.html`)

```html
<script type="module" src="/assets/index-3f2a9c7e.js"></script>
```

Key points:

* `main.jsx` is **gone**
* The script now points to the **compiled bundle**
* File names are **hashed** for long-term caching

So the answer to your doubt is:

> **Yes, `index.html` is updated automatically during the build process to reference the compiled JavaScript output instead of `main.jsx`.**

---

## What exactly gets deployed to production?

You deploy **only the `dist/` folder**, which typically looks like:

```
dist/
├── index.html
├── assets/
│   ├── index-3f2a9c7e.js
│   ├── index-a1b2c3.css
│   └── vendor-9d8e7f.js
```

Important:

* `src/` is NOT deployed
* `main.jsx` is NOT deployed
* Node.js is NOT required at runtime
* Any static server (Nginx, Apache, S3, CDN) can serve it

---

## Why this design is important

### 1. Cache busting

Hashed filenames ensure browsers download new files when content changes.

### 2. Performance

* Bundled
* Minified
* Tree-shaken
* Optimized asset loading

### 3. Security

Source JSX and module structure are not exposed.

---

## Comparison with CRA (for clarity)

| Aspect       | CRA                   | Vite                    |
| ------------ | --------------------- | ----------------------- |
| Build output | `build/`              | `dist/`                 |
| index.html   | Generated & rewritten | Generated & rewritten   |
| Entry JS     | Injected by Webpack   | Injected by Vite/Rollup |
| JSX in prod  | No                    | No                      |

Both ultimately serve:

* **HTML**
* **Plain JavaScript**
* **CSS**
* **Static assets**

---

## Interview-ready summary

> During `vite build`, Vite treats `index.html` as an entry point, bundles the entire dependency graph starting from `main.jsx`, and generates a new `index.html` in the `dist` folder that references the compiled, hashed JavaScript files. The original `main.jsx` is not used in production.
