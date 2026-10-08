# Winnebago Parts Direct: working notes for Claude

This repo holds the Claude-built mockups (`main`, `*.dc.html`) and the Shopify theme (`Shopify/`).
Goal: bring the mockup designs into the Horizon-based theme, section by section.

## Rules when writing theme code

- Before writing or changing Liquid, schema, CSS or JS, check current Shopify knowledge through the Shopify MCP
  (`search_docs_chunks` for shopify.dev docs; validate GraphQL with `validate_graphql_codeblocks`).
  Do not rely on memory for Liquid objects, filters, theme block or schema rules.
- Read `Shopify/AGENTS.md` first. It is the theme's own authoring guide (settings-driven styling, theme blocks,
  schema ownership, CSS ownership, Component framework, accessibility, performance, verification).
- Design values come from `docs/design-tokens.md`. Keep the mockup's look, but reuse the theme's existing
  tokens, blocks and snippets wherever they already do the job.
- Keep Horizon behavior that is not being redesigned (for example the `Shop parts` hover menu).
- Never edit or push to the live theme. Work on a development theme and preview there.
- Run Theme Check (`shopify theme check`) on changes and report anything that could not be run.
