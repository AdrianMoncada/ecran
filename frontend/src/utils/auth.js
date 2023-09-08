export function checkUserCookie(context) {
	const { req } = context;

	if (req && req.headers && req.headers.cookie) {
		const encodedUserInfo = req.headers.cookie.split("; ").find((cookie) => cookie.startsWith("userInfo="));

		if (encodedUserInfo) {
			const userInfoJSON = atob(encodedUserInfo.split("=")[1]);
			const userInfo = JSON.parse(userInfoJSON);
			return userInfo;
		}
	}

	return null;
}
