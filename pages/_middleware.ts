import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
	console.log(req.ua, ev);
	console.log({
		NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV ?? null,
		ENV: process.env.ENV ?? null,
	});
	return NextResponse.rewrite(
		`/?data=${encodeURIComponent(
			JSON.stringify({
				NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV ?? null,
				ENV: process.env.ENV ?? null,
				NEXT_PUBLIC_VERCEL_UI_ENV:
					process.env.NEXT_PUBLIC_VERCEL_UI_ENV ?? null,
				VERCEL_UI_ENV: process.env.VERCEL_UI_ENV ?? null,
			})
		)}`
	);
}
