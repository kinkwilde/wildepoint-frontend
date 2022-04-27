import NextLink from "next/link";

export default function ThemeAtomsLogo() {
    return (
        <NextLink href="/">
            <a className="inline-flex p-3 text-4xl no-underline hover:text-red-500">
                <span className="font-bold">wilde</span>
                <span>.</span>
            </a>
        </NextLink>
    );
}
