import NextLink from "next/link";

export default function ThemeAtomsLogoSplash() {
    return (
        <NextLink href="/">
            <a className="inline-flex h-full items-center px-4 text-4xl no-underline">
                <span className="font-bold">wilde</span>
                <span className="font-black">.</span>
            </a>
        </NextLink>
    );
}
