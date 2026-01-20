## 1. What is Semantic Versioning?

**Semantic Versioning (SemVer)** is a versioning convention expressed as:

```
MAJOR.MINOR.PATCH
```

Example:

```
2.5.13
```

Each part has a defined meaning:

| Part  | Meaning          | When to increment                            |
| ----- | ---------------- | -------------------------------------------- |
| MAJOR | Breaking changes | API changes that are not backward-compatible |
| MINOR | New features     | Backward-compatible feature additions        |
| PATCH | Bug fixes        | Backward-compatible bug fixes                |

---

## 2. Why SemVer Matters in NPM

In NPM:

* Dependencies are declared using **version ranges**, not just exact versions.
* These ranges tell NPM **which updates are safe to install automatically**.
* SemVer allows NPM to update dependencies **without breaking your application**.

Example (`package.json`):

```json
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

This does **not** lock Express to `4.18.2`; it defines an **allowed range**.

---

## 3. Exact Version Match

### Syntax

```
1.2.3
```

### Meaning

* Only version `1.2.3` is allowed.
* No updates (not even patch).

### Example

```json
"lodash": "4.17.21"
```

✔ Installs only `4.17.21`
✘ `4.17.22` not allowed

### Use when

* You need full reproducibility
* High-risk or legacy systems

---

## 4. Greater Than / Less Than Constraints

### Operators

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | Greater than          |
| `>=`     | Greater than or equal |
| `<`      | Less than             |
| `<=`     | Less than or equal    |

### Example

```json
"axios": ">=1.4.0"
```

✔ `1.4.0`, `1.6.2`, `2.0.0`
⚠ Can include **breaking changes**

### Safer range

```json
"axios": ">=1.4.0 <2.0.0"
```

✔ Any 1.x version
✘ 2.0.0+

---

## 5. PATCH-Only Updates (`~` tilde)

### Syntax

```
~MAJOR.MINOR.PATCH
```

### Meaning

* Allows **PATCH updates only**
* Locks MAJOR and MINOR

### Example

```json
"react": "~18.2.0"
```

✔ `18.2.1`, `18.2.5`
✘ `18.3.0`
✘ `19.0.0`

### Use when

* You want bug fixes
* You want to avoid new features

---

## 6. MINOR + PATCH Updates (`^` caret) – Most Common

### Syntax

```
^MAJOR.MINOR.PATCH
```

### Meaning

* Allows **MINOR and PATCH updates**
* Prevents MAJOR updates

### Example

```json
"express": "^4.18.2"
```

✔ `4.18.3`, `4.19.0`
✘ `5.0.0`

### Why NPM defaults to `^`

* Minor updates should be backward-compatible
* Good balance between stability and freshness

---

## 7. Special Case: Versions Below 1.0.0

For versions `< 1.0.0`, SemVer treats **MINOR as breaking**.

### Example

```json
"lib": "^0.3.2"
```

✔ `0.3.3`
✘ `0.4.0`

Reason: APIs are considered unstable before `1.0.0`.

---

## 8. Wildcards

### Syntax

```json
"moment": "2.x"
```

or

```json
"moment": "*"
```

### Meaning

| Pattern | Allowed     |
| ------- | ----------- |
| `2.x`   | Any `2.*.*` |
| `*`     | Any version |

### Use with caution

* Can introduce breaking changes
* Rarely recommended in production

---

## 9. Combined Ranges

You can combine multiple constraints:

```json
"typescript": ">=4.5 <5.0"
```

✔ `4.5.2`, `4.9.5`
✘ `5.0.0`

This is common in **libraries** to maintain compatibility.

---

## 10. How NPM Actually Installs Versions

* `package.json` defines **allowed range**
* `package-lock.json` locks **exact installed version**
* `npm install`:

  * Respects `package-lock.json`
* `npm update`:

  * Updates within allowed range

---

## 11. Summary Table

| Constraint       | Allows            | Blocks       |
| ---------------- | ----------------- | ------------ |
| `1.2.3`          | Nothing           | All updates  |
| `~1.2.3`         | Patch             | Minor, Major |
| `^1.2.3`         | Minor, Patch      | Major        |
| `>=1.2.3`        | All higher        | None         |
| `>=1.2.3 <2.0.0` | Safe non-breaking | Major        |
| `*`              | Everything        | Nothing      |

---

## 12. Interview-Ready Key Takeaways

* SemVer = **MAJOR.MINOR.PATCH**
* `^` is default in NPM → safest general choice
* `~` = patch-only updates
* Use ranges carefully to avoid breaking changes
* `package-lock.json` ensures deterministic installs
