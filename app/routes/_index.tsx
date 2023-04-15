import type { V2_MetaFunction } from "@remix-run/react";
import type { LoaderFunction } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'
import { redirect, json, createCookieSessionStorage } from '@remix-run/node'


export const loader: LoaderFunction = async ({ request }) => {
	try {
	  await requireUserId(request);
	  return null;
	} catch (err) {
	  const redirectTo = new URL(request.url).pathname;
	  const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
	  return redirect(`/login?${searchParams}`);
	}
  };
  

export default function Index() {
  	return (
		<div className="h-screen bg-slate-700 flex justify-center items-center">
			<h2 className="text-blue-600 font-extrabold text-5xl">TailwindCSS Is Working!</h2>
  		</div>
  	);
}
