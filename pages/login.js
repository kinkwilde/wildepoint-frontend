import { useState } from "react";
import { signIn, getCsrfToken } from "next-auth/react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import TemplateIndex from "../components/templates/index";

export default function PageLogin({ csrfToken }) {
    const router = useRouter();
    const [error, setError] = useState();

    return (
        <>
            <div className="my-2 md:my-8">
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
                            <div className="grid gap-y-4">
                                <input
                                    className="hidden"
                                    type="hidden"
                                    name="csrfToken"
                                    defaultValue={csrfToken}
                                />
                                {error && (
                                    <div className="text-md p-2 text-center text-red-400">
                                        {error}
                                    </div>
                                )}
                                <div>
                                    <label className="sr-only" htmlFor="email">
                                        Email
                                    </label>
                                    <Field
                                        className="m-0 block w-full bg-gray-100 p-4 focus:bg-white"
                                        type="text"
                                        name="email"
                                        aria-label="enter your email"
                                        aria-required="true"
                                    />

                                    <div className="text-sm text-red-600">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        className="sr-only"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <Field
                                        className="m-0 block w-full bg-gray-100 p-4 focus:bg-white"
                                        type="password"
                                        name="password"
                                        aria-label="enter your password"
                                        aria-required="true"
                                    />
                                    <div className="text-sm text-red-600">
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        className="w-full bg-green-400 p-3 text-gray-100"
                                        type="submit"
                                    >
                                        {formik.isSubmitting
                                            ? "Please wait..."
                                            : "Sign In"}
                                    </button>
                                </div>
                            </div>
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
