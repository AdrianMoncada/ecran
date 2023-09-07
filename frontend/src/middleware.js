import { NextResponse } from "next/server";

export async function middleware(request) {
	let cookie = request.cookies.get("token");
	if (!cookie) {
		const requestedPage = request.nextUrl.pathname;
		const url = request.nextUrl.clone();
		url.pathname = "/signIn";
		url.search = `p=${requestedPage}`;

		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/my-list"],
};
