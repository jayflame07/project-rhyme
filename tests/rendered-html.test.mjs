import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the RHYME homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>RHYME/);
  assert.match(html, /More than/);
  assert.match(html, /Stream \u00b7 Learn \u00b7 Connect/);
  assert.match(html, /Exclusive live sessions/);
  assert.match(html, /Two ways to earn/);
  assert.match(html, /No price has been announced yet/);
  assert.match(html, /Reserve your username/);
  assert.match(html, /<meta[^>]+name="robots"[^>]+content="noindex, nofollow"/i);
  assert.doesNotMatch(html, /Your site is taking shape|Codex is working|react-loading-skeleton|codex-preview/i);
});

test("server-renders the username reservation page", async () => {
  const response = await render("/reserve");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Reserve your RHYME username/);
  assert.match(html, /Claim the name/);
  assert.match(html, /Choose your RHYME username/);
  assert.match(html, /Music creator/);
  assert.match(html, /Private preview: reservations activate after the Supabase database and email confirmation settings are connected/);
  assert.doesNotMatch(html, /Your site is taking shape|Codex is working|react-loading-skeleton|codex-preview/i);
});

test("keeps Supabase credentials out of committed configuration", async () => {
  const envExample = await readFile(new URL("../.env.example", import.meta.url), "utf8");
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  assert.match(envExample, /^SUPABASE_URL=$/m);
  assert.match(envExample, /^SUPABASE_ANON_KEY=$/m);
  assert.doesNotMatch(`${envExample}\n${packageJson}`, /service_role|SUPABASE_SERVICE/i);
});
