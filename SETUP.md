# Publishing this prototype to Netlify (one-time setup)

This folder is a complete, self-contained static export of the Winnebago DTC
concept — 20 screens, no build step, no dependencies. It's already a git
repo. You just need to get it onto GitHub and connect it to Netlify once;
after that, every push auto-deploys.

I can't do the GitHub/Netlify parts myself — pushing to GitHub needs your
authenticated account, and there's no Netlify connection available from
this session — but everything below is copy-paste and takes about five
minutes total.

## Step 1 — Push this repo to GitHub

From a terminal on your own machine (after downloading and unzipping this
repo):

```
cd winnebago-prototype-repo
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

(If you'd rather not use a terminal: create a new empty repo on
github.com, then use GitHub Desktop's "Add local repository" and push from
there.)

## Step 2 — Connect it to Netlify (recommended: native Git integration)

This is the simplest path — no secrets, no config to copy, every future
`git push` auto-deploys.

1. Go to [app.netlify.com](https://app.netlify.com) and sign in (or create
   a free account).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub**, authorize Netlify if prompted, and select the repo
   you just pushed.
4. Build settings: leave **Build command** blank and set **Publish
   directory** to `.` (this repo's `netlify.toml` already sets this, so
   Netlify should pick it up automatically).
5. Click **Deploy site**. You'll get a live URL
   (something like `random-name-123.netlify.app`) within a few seconds.
6. Optional: **Site settings → Domain management** to set a custom
   subdomain, e.g. `winnebago-dtc-concept.netlify.app`, so the link you
   share with the client is easy to read.

From here on, every `git push` to `main` redeploys automatically — no
further action needed on either side.

## Step 2 (alternative) — GitHub Actions instead

If your team prefers deploys to run through GitHub Actions rather than
Netlify's own Git integration, this repo already includes
`.github/workflows/deploy.yml`. To use it instead of Step 2 above:

1. In Netlify, create the site once manually (**Add new site → Deploy
   manually**, drag-and-drop this folder just to create the site record),
   then grab its **Site ID** from **Site settings → General → Site
   details**.
2. Generate a personal access token in Netlify: **User settings →
   Applications → New access token**.
3. In the GitHub repo, go to **Settings → Secrets and variables →
   Actions** and add two repository secrets:
   - `NETLIFY_AUTH_TOKEN` — the token from step 2
   - `NETLIFY_SITE_ID` — the site ID from step 1
4. Push to `main` (or re-run the workflow manually from the Actions tab)
   and it will deploy via the Actions workflow instead.

Only use one of the two options above, not both, to avoid double-deploying.

## What's in this repo

- `index.html` — a directory of all 20 screens, grouped by section
- `Home.dc.html`, etc. — the 20 screens themselves (desktop + mobile
  pairs, the Add/Manage Vehicle modal, the Product Assistant Q&A chat, and
  the 8-step RV Quiz Flow reference sequence)
- `support.js` — the small rendering engine the screens use; keep it
  alongside them
- `_blob/` — images and fonts used across the screens
- `netlify.toml` — tells Netlify how to serve this (static, no build)
- `.github/workflows/deploy.yml` — optional GitHub Actions deploy path
  (see Step 2 alternative above)

## Keeping it up to date later

If the design changes again, ask me to rebuild the export from the working
canvas, drop the updated files into this same folder structure, commit,
and push — Netlify (or the Actions workflow) will pick it up and
redeploy automatically.
