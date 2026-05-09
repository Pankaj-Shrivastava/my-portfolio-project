# My Portfolio - Skeleton

This is a minimal React + Vite + Tailwind skeleton for a responsive portfolio SPA. It imports existing CSS files (`CSSOne.css`, `CSSTwo.css`, `CSSThree.CSS`) so their font-face and reset rules are preserved.

Quick start (Windows PowerShell):

1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

Project files added:

- `index.html` - Vite entry
- `package.json` - scripts and deps
- `tailwind.config.cjs`, `postcss.config.cjs`
- `src/` - React app, components, `index.css` that imports your attached CSS files

What's next:

- Add your project content, images and routes.
- Hook up a mobile nav toggle and contact form.

# my-portfolio-project

SPA portfolio

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow that builds the app and deploys the `dist/` output to the `gh-pages` branch when you push to `main`.

Steps to enable deployment:

1. Push your branch to GitHub (the workflow triggers on pushes to `main`).
2. The workflow will run `npm ci`, `npm run build` and publish `dist/` to `gh-pages` using the built-in `GITHUB_TOKEN`.
3. In your repository on GitHub, go to Settings → Pages and choose the `gh-pages` branch as the site source (or GitHub may auto-configure this for you). The site will be available at:

   https://<your-github-username>.github.io/my-portfolio-project/

Local preview with the repo base path set:

```powershell
npm run build:gh
npm run preview
```

If you'd rather use the `gh-pages` npm package instead of Actions, tell me and I can switch the setup.
