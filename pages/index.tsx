import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export default function Home(
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	return (
		<div>
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
