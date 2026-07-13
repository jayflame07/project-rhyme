# RHYME

RHYME is an artist-first music community for streaming, learning, and intimate live sessions with verified creators.

## Preview

- Homepage: https://rhyme-design-studio.ocanseyderrick07.chatgpt.site
- Username reservation: https://rhyme-design-studio.ocanseyderrick07.chatgpt.site/reserve

The preview remains private and is configured not to appear in search engines.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm test
npm run lint
```

## Username reservations

The reservation experience is intentionally inactive until Supabase is connected. Before enabling it in production:

1. Create the Supabase project and run `supabase/username-reservations.sql` in the SQL Editor.
2. Configure the Supabase URL and anonymous key.
3. Add the published URL to Supabase Authentication settings.
4. Configure production email delivery.

No username is secured until this setup is complete and a visitor confirms their email.
