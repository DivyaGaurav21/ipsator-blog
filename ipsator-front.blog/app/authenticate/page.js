"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStytchUser, useStytch } from "@stytch/nextjs";

// Constants for authentication token types
const OAUTH_TOKEN = "oauth";
const MAGIC_LINKS_TOKEN = "magic_links";

/**
 * Component responsible for handling Stytch authentication flows.
 * It checks for authentication tokens in the URL parameters, authenticates the user using Stytch SDK,
 * and redirects to the appropriate page based on the authentication result.
 */

const Authenticate = () => {
    // Fetch the current user and initialization status from Stytch
    const { user, isInitialized } = useStytchUser();
    const stytch = useStytch();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Check if Stytch SDK is initialized, the user is not authenticated, and authentication parameters are present
        if (stytch && !user && isInitialized) {
            const token = searchParams.get("token");
            const stytch_token_type = searchParams.get("stytch_token_type");
            // Authenticate user based on the provided token and Stytch token type
            if (token && stytch_token_type === OAUTH_TOKEN) {
                stytch.oauth.authenticate(token, {
                    session_duration_minutes: 60,
                });
            } else if (token && stytch_token_type === MAGIC_LINKS_TOKEN) {
                stytch.magicLinks.authenticate(token, {
                    session_duration_minutes: 60,
                });
            }
        }
    }, [isInitialized, router, searchParams, stytch, user]);

    useEffect(() => {
        // If user is authenticated, redirect to the profile page
        if (!isInitialized) {
            return;
        }
        if (user) {
            router.replace("/profile");
        }
    }, [router, user, isInitialized]);
    // Render nothing since this component handles authentication in the background
    return null;
};

export default Authenticate;