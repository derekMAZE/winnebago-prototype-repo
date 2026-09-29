Winnebago Motorhomes — DTC Parts & Accessories
Clickable Prototype Export
================================================

This folder is a self-contained, static export of the design concept — no
Claude account or login needed to view it. Open index.html to see a linked
directory of all 20 screens, or open any screen file directly.

It's genuinely interactive, not a flat image: the nav links between Home,
Fitment, Category and PDP work, the "Ask about this part" chat responds to
the quick-reply chips, and the mobile hamburger menu opens a real drawer.

HOW TO GET A SHAREABLE LINK FOR THE CLIENT
-------------------------------------------
Because it references its own image/font files with a leading slash
(e.g. /_blob/...), it needs to be served as a website rather than opened
directly from your file system (double-clicking index.html will show a
blank/broken page). Any of these gets you a real URL in well under a
minute, with no coding required:

1. Netlify Drop — drag this whole folder onto https://app.netlify.com/drop
   and it gives you a live URL immediately.

2. Vercel — if you have Node installed: `npx vercel --prod` from inside
   this folder.

3. GitHub Pages — push this folder's contents to a repo and enable Pages
   on it in the repo settings.

4. Just to preview locally first: open a terminal in this folder and run
   `npx serve` (or `python3 -m http.server 8000`), then visit
   http://localhost:3000 (or :8000).

WHAT'S INSIDE
-------------
- index.html            Directory of all 20 screens, grouped by section
- Home.dc.html, etc.     The 20 screens themselves (desktop + mobile pairs,
                         the Add/Manage Vehicle modal, the Product
                         Assistant Q&A chat, and the 8-step RV Quiz Flow
                         reference sequence)
- support.js             The small rendering engine the screens use — keep
                         it alongside them, it's referenced by every page
- _blob/                 Images and fonts used across the screens

This was exported directly from the working design file, so it reflects
whatever was last built there.
