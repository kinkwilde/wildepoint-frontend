import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "test@test.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)

                const userCredentials = {
                    identifier: credentials.email,
                    password: credentials.password,
                };

                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
                        {
                            method: "POST",
                            body: JSON.stringify(userCredentials),
                            headers: { "Content-Type": "application/json" },
                        }
                    );

                    const user = await res.json();

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user;
                    }
                    // Return null if user data could not be retrieved
                    return null;
                } catch (e) {
                    // console.log('caught error');
                    // const errorMessage = e.response.data.message
                    // Redirecting to the login page with error message          in the URL
                    // throw new Error(errorMessage + '&email=' + credentials.email)
                    return null;
                }
            },
        }),
    ],
    session: {
        jwt: true,
    },
    callbacks: {
        jwt: async ({ token, user, account }) => {
            const isSignIn = user ? true : false;

            if (isSignIn) {
                token.jwt = user.jwt;
                token.id = user.user.id;
                token.name = user.user.username;
                token.email = user.user.email;
            }

            return Promise.resolve(token);
        },

        session: async ({ session, token, user }) => {
            return Promise.resolve(session);
        },
    },
    pages: {
        signIn: "/login",
    },
});
