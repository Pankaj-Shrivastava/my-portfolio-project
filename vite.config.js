import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace this with your repository name if different
const repoName = 'my-portfolio-project';

// When hosting on GitHub Pages under https://<user>.github.io/<repo>/
// set base to `/${repoName}/`. For local dev it will be ignored.
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
