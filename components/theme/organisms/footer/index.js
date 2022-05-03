import { useSession, signOut } from "next-auth/react";

export default function ThemeOrganismsFooter() {
    const { data: userSession } = useSession();

    return (
        <div className="container">
            {userSession && (
                <div className="text-center">
                    <p className="mr-2 uppercase">
                        Signed in as {userSession.user.email}
                    </p>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-300 p-4 uppercase"
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
}
