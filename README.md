# Next.js experiment

Testing if `_middleware.ts` has access to private env variables.

https://middleware-env-access.vercel.app

## Conclusion (2021-11-02)

- `_middleware.ts` **has access** to `NEXT_PUBLIC_*` env variables.
- `_middleware.ts` **doesn't have access** to private env variables set in `.env` files (`.env`, `.env.preview`, `.env.production`).
- `_middleware.ts` **has access** to any private env variable that is used in another file and that file is imported. (branch `env-from-other-file`)
- `_middleware.ts` **has access** to all private env variables that ar set via Vercel dashboard UI.
