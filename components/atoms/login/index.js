import { useSession, signIn, signOut } from "next-auth/react";

export default function AtomsLogin() {
    const { data: userSession } = useSession();

    return (
        <>
            {!userSession && (
                <button
                    className="block rounded-lg border border-gray-300 bg-white px-10 py-6 text-center font-montserrat font-bold uppercase text-gray-900 no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 lg:hover:bg-gray-100"
                    onClick={() => signIn()}
                >
                    Sign in
                </button>
            )}
            {userSession && (
                <button
                    className="block rounded-lg border border-blue-800 bg-blue-600 px-10 py-6 text-center font-montserrat font-bold uppercase text-white no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 lg:hover:bg-blue-800"
                    onClick={() => signOut()}
                >
                    Sign Out Of Account
                </button>
            )}
        </>
    );
}
