export function fromOtherFile() {
	return {
        NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV ?? null,
        ENV: process.env.ENV ?? null,
        NEXT_PUBLIC_VERCEL_UI_ENV:
            process.env.NEXT_PUBLIC_VERCEL_UI_ENV ?? null,
        VERCEL_UI_ENV: process.env.VERCEL_UI_ENV ?? null,
	};
}
