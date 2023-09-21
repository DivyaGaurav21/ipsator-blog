"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStytchUser, useStytch } from "@stytch/nextjs";

const OAUTH_TOKEN = "oauth";
const MAGIC_LINKS_TOKEN = "magic_links";

const Authenticate = () => {
    const { user, isInitialized } = useStytchUser();
    const stytch = useStytch();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (stytch && !user && isInitialized) {
            const token = searchParams.get("token");
            const stytch_token_type = searchParams.get("stytch_token_type");

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
        if (!isInitialized) {
            return;
        }
        if (user) {
            router.replace("/profile");
        }
    }, [router, user, isInitialized]);

    return null;
};

export default Authenticate;