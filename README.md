# Guest List Manager

A small client-side guest-list exercise.

**Repository created:** 2021-07-11  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2021-07-11

## Features and implementation

- Add names to an array.
- Display the list.
- Sort alphabetically.
- Search for matching names.

## Technologies

HTML, CSS, JavaScript.

## How the code works

`submit()` adds an entry, `show()` renders the list, `sort()` orders the names, and `searching()` counts matching entries.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `main.js`: `submit()`, `show()`, `sort()`, `searching()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/Guest_List.git
cd Guest_List
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Enter names, click Submit, then use Show, Sort or Search.

## Current status and limitations

Names are stored in memory and are lost on page reload; no backend.

---

Source reference: [`b60556cb`](https://github.com/Avenger-Sonic123/Guest_List/tree/b60556cb9e85e335a319f36534efb50a2d0c25e5) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
