// msalConfig.js

export const msalConfig = {
	auth: {
		clientId: "f4fe2ee5-a7a4-4b84-9782-ab12bf139c57",
		authority: `https://login.microsoftonline.com/9740513b-f375-4518-a980-bcb46d7c9aa2`,
	},
	cache: {
		cacheLocation: "sessionStorage", // You can use localStorage for a different caching strategy
		storeAuthStateInCookie: false,
	},
};
