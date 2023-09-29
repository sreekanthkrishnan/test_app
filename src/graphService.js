// graphService.js

import { Client } from "@microsoft/microsoft-graph-client";
import authService from "./authService"; // Import your authService that handles authentication

const graphService = {
	getUserGroups: async () => {
		try {
			// Get the access token from MSAL
			const token = await authService.getTokenSilently(); // Use the appropriate method from your authService

			// Initialize the Graph client with the access token
			const client = Client.init({
				authProvider: (done) => {
					done(null, token);
				},
			});

			// Fetch user groups using the Microsoft Graph API
			const response = await client.api("/me/memberOf").get();
			return response.value;
		} catch (error) {
			console.error("Error fetching user groups:", error);
			throw error;
		}
	},
};

export default graphService;
