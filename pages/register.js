import { useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import TemplateDefault from "../components/templates/default";

export default function PageLogin({ csrfToken }) {
    const router = useRouter();
    const [error, setError] = useState();

    return (
        <>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                validationSchema={Yup.object({
                    username: Yup.string().required(
                        "Please enter your username"
                    ),
                    email: Yup.string()
                        .max(30, "Must be 30 characters or less")
                        .email("Invalid email address")
                        .required("Please enter your email"),
                    password: Yup.string().required(
                        "Please enter your password"
                    ),
                    repeatPassword: Yup.string()
                        .oneOf(
                            [Yup.ref("password"), null],
                            "Passwords must match"
                        )
                        .required("Required"),
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify({
                                username: values.username,
                                email: values.email,
                                password: values.password,
                            }),
                        }
                    );

                    if (res?.error) {
                        setError(res.error);
                    } else {
                        setError(null);
                    }

                    if (res.url) router.push("/");

                    setSubmitting(false);
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <div className="container">
                            <div className="mb-4 bg-blue-100 px-8 pt-6 pb-8 shadow-md">
                                <input
                                    name="csrfToken"
                                    type="hidden"
                                    defaultValue={csrfToken}
                                />
                                <div className="text-md p-2 text-center text-red-400">
                                    {error}
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="username"
                                        className="text-sm font-bold uppercase text-gray-600"
                                    >
                                        Username
                                        <Field
                                            name="username"
                                            aria-label="enter your username"
                                            aria-required="true"
                                            type="text"
                                            className="mt-2 w-full bg-gray-300 p-3 text-gray-900"
                                        />
                                    </label>

                                    <div className="text-sm text-red-600">
                                        <ErrorMessage name="username" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-bold uppercase text-gray-600"
                                    >
                                        Email
                                        <Field
                                            name="email"
                                            aria-label="enter your email"
                                            aria-required="true"
                                            type="text"
                                            className="mt-2 w-full bg-gray-300 p-3 text-gray-900"
                                        />
                                    </label>

                                    <div className="text-sm text-red-600">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-bold uppercase text-gray-600"
                                    >
                                        Password
                                        <Field
                                            name="password"
                                            aria-label="enter your password"
                                            aria-required="true"
                                            type="password"
                                            className="mt-2 w-full bg-gray-300 p-3 text-gray-900"
                                        />
                                    </label>

                                    <div className="text-sm text-red-600">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="repeatPassword"
                                        className="text-sm font-bold uppercase text-gray-600"
                                    >
                                        Repeat Password
                                        <Field
                                            name="repeatPassword"
                                            aria-label="repeat password"
                                            aria-required="true"
                                            type="password"
                                            className="mt-2 w-full bg-gray-300 p-3 text-gray-900"
                                        />
                                    </label>

                                    <div className="text-sm text-red-600">
                                        <ErrorMessage name="repeatPassword" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="w-full bg-green-400 p-3 text-gray-100"
                                    >
                                        {formik.isSubmitting
                                            ? "Please wait..."
                                            : "Sign In"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
}

PageLogin.getLayout = function getLayout(page) {
    return <TemplateDefault>{page}</TemplateDefault>;
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
