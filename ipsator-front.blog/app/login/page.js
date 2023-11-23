"use client";

/**
 * The `Login` component is responsible for configuring and rendering the StytchLogin component, which is a prebuilt UI component for authentication powered by Stytch.
 * It utilizes Stytch's email magic links and OAuth products for authentication.
 * 
 * The component accepts style, config, and callback props. The `config` object defines the authentication products, options, and redirect URLs, while the `styles` object defines the appearance of the StytchLogin component.
 * For more details on available configuration options, refer to the Stytch JavaScript SDK documentation: https://stytch.com/docs/sdks/javascript-sdk#ui-configs
 * 
 * @returns {JSX.Element} - Returns the JSX element for the Login component, rendering the StytchLogin component within a styled container.
 */

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
    // Define styles for the StytchLogin component
    const styles = {
        container: {
            width: "400px",
            backgroundColor: "#fbf4c1",

        },
        buttons: {
            primary: {
                backgroundColor: "#830000",
                borderColor: "black",
            },
        },
    };
    // Define configuration options for StytchLogin component
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
        <div className="flex justify-center items-center h-[65vh]">
            {/* Render the StytchLogin component with configured styles and options */}
            <StytchLogin config={config} styles={styles} />
        </div>
    );
};

export default Login;