# Copilot Instructions — doctorspub-bickfaya

Concise, project-specific guidance to help AI agents contribute productively.

## Big Picture
- Static single-page site: all UI, styles, and JS live in `index.html`.
- No build, bundler, or external framework; everything is inline CSS/JS.
- Navigation is anchor-based (`#home`, `#about`, `#entertainment`, `#gallery`, `#contact`) with smooth scrolling.

## Source Layout
- `index.html`: the only source file; sections are stacked vertically.
- Images are referenced by root-relative filenames (e.g., `7c51e9f6-….jpeg`). Place new images in the repo root or adjust paths accordingly.
- One hero image uses an external Googleusercontent URL; other images are local JPEGs.

## Visual/Structure Conventions
- Color scheme: black background with gold accents `#D4AF37` (borders, headings, hover states).
- Section pattern: each section uses a `.section-title` heading and internal grid containers.
  - Day/Night split: `.dual-identity` → `.identity-cards` → `.identity-card` with variant classes `.cafe`/`.pub`.
  - Entertainment grid: `.entertainment` → `.entertainment-grid` → `.entertainment-item` with an emoji icon and `<h3>` + `<p>`.
  - Gallery grid: `.gallery-section` → `.gallery-grid` → `.gallery-item` wrapping an `<img>` and `onclick` to open the modal.
- Modal viewer: `openModal(src)` expects a string path to the image; `closeModal()` hides it.
- Responsiveness: single breakpoint at `@media (max-width: 768px)` adjusts type scales and grids.

## Safe Editing Guidelines
- Do not rename existing section `id`s or core class names used by CSS (`.section-title`, `.identity-card`, `.entertainment-item`, `.gallery-item`), as styling and JS depend on them.
- Keep the inline `<script>` at the end of `<body>` so DOM elements exist before listeners attach.
- When adding anchors, ensure the nav link `href="#id"` exactly matches the section’s `id`.

## Common Tasks (Examples)
- Add a gallery image (place `photo.jpeg` at repo root):
  ```html
  <div class="gallery-item" onclick="openModal('photo.jpeg')">
    <img src="photo.jpeg" alt="Descriptive Alt Text">
  </div>
  ```
- Add an entertainment card:
  ```html
  <div class="entertainment-item">
    <div class="entertainment-icon">🎮</div>
    <h3>Game Night</h3>
    <p>Board games and casual tournaments weekly.</p>
  </div>
  ```
- Add a new section and nav link:
  - In `<nav>`: `<li><a href="#events">Events</a></li>`
  - New section:
    ```html
    <section id="events" class="events">
      <div class="container">
        <h2 class="section-title">Events</h2>
        <!-- content here -->
      </div>
    </section>
    ```

## Local Development
- Open `index.html` directly in a browser, or serve the folder to avoid path issues:
  ```bash
  python3 -m http.server 8080
  # then visit http://localhost:8080/
  ```
- VS Code Live Server also works well for instant reloads.

## Debugging Tips
- If images don’t show, verify the filename and that the file sits at the repo root (paths in HTML are relative to `index.html`).
- Check the browser console for JS errors (modal and smooth-scroll are minimal but rely on `id`/selector correctness).
- Keep the meta viewport and responsive CSS intact when changing typography to preserve mobile layout.

## Deployment Notes
- Site is static and GitHub Pages–friendly. Keeping `index.html` at the repo root is sufficient for root-based Pages hosting.

## Key Files
- `index.html`: all sections, styles, and behaviors.
- Root-level `*.jpeg`: local assets referenced by the gallery and hero/logo.
