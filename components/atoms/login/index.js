import { useSession, signIn } from "next-auth/react";

export default function AtomsLogin() {
    const { data: userSession } = useSession();

    return (
        <>
            <button
                className="block rounded-lg border border-gray-300 bg-white px-6 py-4 text-center uppercase text-gray-900 no-underline hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
                onClick={() => signIn()}
            >
                {userSession ? "Sign Out Of Account" : "Sign In To Wilde"}
            </button>
        </>
    );
}
