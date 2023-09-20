import { NextResponse } from "next/server";

export async function middleware(req) {
	console.log(req);
	const cookies = req.headers.cookie;
	console.log(cookies);
	/* if (!session) {
		const requestedPage = req.nextUrl.pathname;
		const url = req.nextUrl.clone();
		url.pathname = "/sigIn";
		url.search = `p=${requestedPage}`;
		console.log("🚀 ~ file: middleware.js:13 ~ middleware ~ url:", url);
		return NextResponse.redirect(url);
	} */

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/my-list"],
};
