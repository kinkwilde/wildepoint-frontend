import { useSession, signOut } from "next-auth/react";

export default function ThemeOrganismsFooter() {
    const { data: session } = useSession();

    return (
        <div className="container">
            {session && (
                <div className="text-center">
                    <p className="mr-2 uppercase">
                        Signed in as {session.user.email}
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
