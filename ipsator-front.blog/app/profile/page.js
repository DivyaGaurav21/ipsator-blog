"use client";

import React from "react";
import { useStytch, useStytchSession, useStytchUser } from "@stytch/nextjs";
import { useRouter } from "next/navigation";

/**
 * The Profile component is shown to a user that is logged in.
 * 
 * This component renders the full User and Session object for education. 
 * 
 * This component also includes a log out button which is accomplished by making a method call to revoking the existing session
*/
const Profile = () => {
    const stytch = useStytch();
    // Get the Stytch User object if available
    const { user } = useStytchUser();
    // Get the Stytch Session object if available
    const { session } = useStytchSession();

    const router = useRouter();

    const handleLogout = () => {
        stytch.session.revoke()
        // Redirect to the home page after logout
        router.push('/');
    };


    return (
        // <div className="card">
        //     <h1>Profile</h1>
        //     <h2>User object</h2>
        //     <pre className="code-block">
        //         <code>{JSON.stringify(user, null, 2)}</code>
        //     </pre>

        //     <h2>Session object</h2>
        //     <pre className="code-block">
        //         <code>{JSON.stringify(session, null, 2)}</code>
        //     </pre>
        // </div>
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Profile Page</h1>
            <div className="bg-white p-4 rounded shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-xl font-semibold">User Information</h2>
                        <div className="mt-2">
                            <p>
                                <strong>Name:</strong> {user?.name?.first_name} {user?.name?.last_name}
                            </p>
                            <p>
                                <strong>Email:</strong> {user?.emails[0]?.email}
                            </p>
                            {/* Add other user information as needed */}
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={user?.providers[0]?.profile_picture_url} // Assuming the profile picture URL is available in user.providers[0].profile_picture_url
                            alt="Profile"
                            className="w-40 h-40 rounded-full"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Session Information</h2>
                    <div className="mt-2">
            <p>
                            <strong>Last Accessed At:</strong> {session?.last_accessed_at.slice(0, 10)}
            </p>
                        {/* Add other session information as needed */}
                    </div>
                </div>
                <div className="text-right">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
        </div>
            </div>
        </div>
    );
};

export default Profile;