// authService.js
import { UserAgentApplication } from "msal";
import { msalConfig } from "./msalConfig";

const msalInstance = new UserAgentApplication(msalConfig);

const authService = {
	login: async () => {
		const loginRequest = {
			scopes: ["openid", "profile", "User.Read", "Group.Read.All"],
		};

		try {
			const response = await msalInstance.loginPopup(loginRequest);
			return response.account;
		} catch (error) {
			console.error("Error during login:", error);
			throw error;
		}
	},

	logout: () => {
		msalInstance.logout();
	},

	getTokenSilently: async () => {
		try {
			const response = await msalInstance.acquireTokenSilent({
				scopes: ["openid", "profile", "User.Read", "Group.Read.All"],
			});
			return response.accessToken;
		} catch (error) {
			console.error("Error acquiring token silently:", error);
			throw error;
		}
	},
};

export default authService;
