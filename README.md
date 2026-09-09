# Drone4Build Website

This is a NextJS project for Drone4Build homepage.

## Development

```bash
use nvm
yarn install
```

and run the project with:

```bash
yarn dev
```

## Updating Dependencies

Keeping packages current matters: security patches, bug fixes, and Next.js/React improvements ship in newer versions, and letting dependencies drift too far behind makes future upgrades riskier and harder to do incrementally.

Process:

1. Check what's outdated:

   ```bash
   yarn outdated
   ```

2. Bump patch/minor versions within existing semver ranges (low risk):

   ```bash
   yarn upgrade
   ```

3. Bump major versions one package at a time, not in bulk. After each one, verify before moving to the next:

   ```bash
   yarn add <package>@<version>
   yarn tsc --noEmit
   yarn build
   ```

   `yarn build` alone does not catch type errors (Next.js skips type validation during build), so `tsc --noEmit` is required separately.
4. Manually test the app in the browser (`yarn dev` or a production build) — type checking and build success verify code compiles, not that features still behave correctly.
5. Commit each verified upgrade (or a small verified batch) separately, keeping `yarn.lock` in sync with `package.json`, so a regression can be bisected to a single dependency bump.

If a major bump breaks the build, lint, or types, revert just that package and leave it for a later, dedicated upgrade rather than blocking the rest.

## Deployment

Hosted on Vercel, connected to this GitHub repository. Pushes to `main` deploy to production; other branches/PRs get preview deployments automatically. Environment variables (see `.env.sample`) are set in the Vercel project settings.
