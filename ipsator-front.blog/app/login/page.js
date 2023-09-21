"use client";

import React from "react";
import { StytchLogin } from "@stytch/nextjs";
import { Products } from "@stytch/vanilla-js";
import { getDomainFromWindow } from '../../lib/urlUtils';

/*
 * Login configures and renders the StytchLogin component which is a prebuilt UI component for auth powered by Stytch
 * 
 * This component accepts style, config, and callbacks props. To learn more about possible options review the documentation at
 * https://stytch.com/docs/sdks/javascript-sdk#ui-configs
*/
const Login = () => {
    const styles = {
        container: {
            width: "400px",
            backgroundColor: "#bcbaba",

        },
        buttons: {
            primary: {
                backgroundColor: "#830000",
                borderColor: "black",
            },
        },
    };

    const config = {
        products: [Products.emailMagicLinks, Products.oauth],
        emailMagicLinksOptions: {
            loginRedirectURL: getDomainFromWindow() + '/authenticate',
            loginExpirationMinutes: 60,
            signupRedirectURL: getDomainFromWindow() + '/authenticate',
            signupExpirationMinutes: 60,
        },
        oauthOptions: {
            providers: [{ type: "google" }],
            loginRedirectURL: getDomainFromWindow() + '/authenticate',
            signupRedirectURL: getDomainFromWindow() + '/authenticate',
        },
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <StytchLogin config={config} styles={styles} />
        </div>
    );
};

export default Login;