import NextLink from "next/link";

export default function ThemeAtomsLogo() {
    return (
        <NextLink href="/">
            <a className="inline-flex h-full items-center px-4 text-4xl no-underline hover:text-red-500">
                <span className="font-bold">wilde</span>
                <span className="font-extrabold">.</span>
            </a>
        </NextLink>
    );
}
