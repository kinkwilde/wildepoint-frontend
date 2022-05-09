import { useState } from "react";

import { useRouter } from "next/router";

import { signIn, getCsrfToken } from "next-auth/react";

import { Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import TemplateIndex from "../components/templates/index";

import SVGSpinner from "../components/svgs/spinner";

export default function PageLogin({ csrfToken }) {
    const router = useRouter();

    const [error, setError] = useState();

    return (
        <>
            <div className="mx-auto mb-12 max-w-prose text-center">
                <h1 className="uppercase">Login</h1>
                <p>Please fill out form to access the website.</p>
            </div>
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .max(30, "Must be 30 characters or less")
                            .email("Invalid email address")
                            .required("Please enter your email"),
                        password: Yup.string().required(
                            "Please enter your password"
                        ),
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        const res = await signIn("credentials", {
                            redirect: false,
                            email: values.email,
                            password: values.password,
                            callbackUrl: "/",
                        });

                        if (res?.error) {
                            setError(res.error);
                        } else {
                            setError(null);
                        }

                        if (res.url) router.push(res.url);

                        setSubmitting(false);
                    }}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid gap-y-8">
                                {error && (
                                    <div
                                        className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700"
                                        role="alert"
                                    >
                                        <span className="font-montserrat font-bold uppercase">
                                            Error:
                                        </span>{" "}
                                        {error}
                                    </div>
                                )}
                                <div className="group relative">
                                    <Field
                                        className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-3 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-white"
                                        type="email"
                                        name="email"
                                        aria-label="enter your email"
                                        aria-required="true"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform font-montserrat text-sm uppercase duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-4 font-montserrat text-sm uppercase text-red-600">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div className="group relative">
                                    <Field
                                        className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-3 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-white"
                                        type="password"
                                        name="password"
                                        aria-label="enter your password"
                                        aria-required="true"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform font-montserrat text-sm uppercase duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-4 font-montserrat text-sm uppercase text-red-600">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 flex items-center justify-center">
                                <button
                                    className="block rounded-lg border border-blue-800 bg-blue-600 px-10 py-6 text-center font-montserrat font-bold uppercase text-white no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 lg:hover:bg-blue-800"
                                    type="submit"
                                >
                                    {formik.isSubmitting ? (
                                        <SVGSpinner />
                                    ) : (
                                        "Sign In"
                                    )}
                                </button>
                            </div>
                            <input
                                className="hidden"
                                type="hidden"
                                name="csrfToken"
                                defaultValue={csrfToken}
                            />
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
}

PageLogin.getLayout = function getLayout(page) {
    return <TemplateIndex>{page}</TemplateIndex>;
};

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
