import { useState } from "react";
import { getCsrfToken } from "next-auth/react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import TemplateIndex from "../components/templates/index";

import SVGSpinner from "../components/svgs/spinner";

export default function PageLogin({ csrfToken }) {
    const router = useRouter();
    const [error, setError] = useState();

    return (
        <>
            <div className="mx-auto mb-12 max-w-prose text-center">
                <h1 className="uppercase">Register</h1>
                <p>Please fill out form to access the website.</p>
            </div>
            <div>
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
                                        className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-3 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0"
                                        type="text"
                                        name="username"
                                        aria-label="enter your username"
                                        aria-required="true"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="username"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform font-montserrat text-sm uppercase duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-4 font-montserrat text-sm uppercase text-red-600">
                                        <ErrorMessage name="username" />
                                    </div>
                                </div>
                                <div className="group relative">
                                    <Field
                                        className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-3 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0"
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
                                        className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-3 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0"
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
                                <div className="group relative">
                                    <Field
                                        className="peer block w-full appearance-none border-0 border-b-2 border-black bg-transparent py-3 px-0 text-base focus:border-blue-600 focus:outline-none focus:ring-0"
                                        type="password"
                                        name="repeatPassword"
                                        aria-label="repeat your password"
                                        aria-required="true"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="repeatPassword"
                                        className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform font-montserrat text-sm uppercase duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-blue-600"
                                    >
                                        Repeat Password
                                    </label>
                                    <div className="mt-4 font-montserrat text-sm uppercase text-red-600">
                                        <ErrorMessage name="repeatPassword" />
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
                                name="csrfToken"
                                type="hidden"
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

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
