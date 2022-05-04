import NextLink from "next/link";

export default function ThemeOrganismsFooterSplash() {
    const copyrightDate = new Date().getFullYear();

    return (
        <div className="mt-8 mb-6 flex flex-col items-center md:mt-12 md:flex-row md:justify-between lg:mt-24 xl:mb-0">
            <div>
                <p className="mb-4 text-center font-montserrat text-sm uppercase text-gray-600 md:mb-0 md:text-left">
                    &copy; Copyright wildepoint (1989 - {copyrightDate})
                </p>
            </div>
            <div className="flex flex-col space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4">
                <NextLink href="/">
                    <a className="font-montserrat text-sm uppercase text-gray-600">
                        Terms &amp; Conditions
                    </a>
                </NextLink>
                <NextLink href="/">
                    <a className="font-montserrat text-sm uppercase text-gray-600">
                        Privacy Policy
                    </a>
                </NextLink>
            </div>
        </div>
    );
}
