// Allows non-Cloudflare type checks to parse the optional D1 helper.
declare module "cloudflare:workers" {
  export const env: { DB?: unknown };
}
