import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function Home(
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	return (
		<div>
		<p>
			Source code at{" "}
			<a href="https://github.com/ViliamKopecky/nextjs-vercel-middleware-env-access">
				github.com/ViliamKopecky/nextjs-vercel-middleware-env-access
			</a>
		</p>
			<pre>
				{JSON.stringify(
					{
						props,
						render: {
							NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV ?? null,
							ENV: process.env.ENV ?? null,
						},
					},
					null,
					2
				)}
			</pre>
		</div>
	);
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	console.log(context);
	return {
		props: {
			timestamp: new Date().toISOString(),
			resolvedUrl: context.resolvedUrl,
			url: context.req.url,
			query: context.query ?? null,
			params: context.params ?? null,
			gssr: {
				NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV ?? null,
				ENV: process.env.ENV ?? null,
			},
		},
	};
};
