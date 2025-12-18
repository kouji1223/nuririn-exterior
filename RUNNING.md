# Local development & build

Follow these steps to run the project locally and build for production.

## Prerequisites
- Node.js (LTS recommended)

## Development
1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` in the project root and add your Gemini API key:

```env
GEMINI_API_KEY=your_real_api_key_here
```

> Keep your `.env.local` secret and do not commit it.

3. Start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` by default.

## Build & Preview
- Build for production:

```bash
npm run build
```

- Preview the built app locally:

```bash
npm run preview
```

**Important:** Some environments (for example working directly inside the `Downloads` folder) may have restricted permissions and cause `Access is denied` errors during `npm run build` or `npm run preview`. If you see such errors, move the project to a regular folder such as `C:\projects\nuririn-exterior` and run the commands again.

## Tailwind setup
Tailwind is installed locally and configured via `postcss.config.cjs` and `tailwind.config.cjs`. The project no longer uses the CDN in production.

## Troubleshooting
- If `npm run build` fails with `Access is denied`, try moving the folder to a different location (see note above) or run the build with elevated privileges as a temporary workaround.
- For large bundles, consider code-splitting or tuning `build.rollupOptions.output.manualChunks` in `vite.config.ts`.

---
