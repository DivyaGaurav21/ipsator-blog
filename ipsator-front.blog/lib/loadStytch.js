/**
 * The `loadStytch` function initializes and loads the Stytch client for authentication.
 * It ensures a single instance of the Stytch client is created and reused to avoid unnecessary duplicate instances.
 * The Stytch client is configured with the project ID, secret, and environment (test or live) obtained from environment variables.
 * 
 * @returns {stytch.Client} - Returns the Stytch client instance.
 */
import * as stytch from "stytch";

let client;


const loadStytch = () => {
    // Check if the Stytch client instance is not already created
    if (!client) {
        // Create a new Stytch client instance with project ID, secret, and environment configuration
        client = new stytch.Client({
            project_id: process.env.STYTCH_PROJECT_ID || "",
            secret: process.env.STYTCH_SECRET || "",
            env:
                process.env.STYTCH_PROJECT_ENV === "live"
                    ? stytch.envs.live
                    : stytch.envs.test,
        });
    }
    // Return the Stytch client instance
    return client;
};

export default loadStytch;