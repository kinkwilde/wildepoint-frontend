export default function ThemeOrganismsFooterSplash() {
    const copyrightDate = new Date().getFullYear();

    return (
        <div className="mt-8 flex flex-col md:mt-12 md:flex-row md:justify-between lg:mt-24">
            <div>
                <p className="text-center font-montserrat text-sm uppercase text-gray-600 md:text-left">
                    &copy; Copyright wildepoint (1989 - {copyrightDate})
                </p>
            </div>
            <div className="flex space-x-4">
                <p className="font-montserrat text-sm uppercase text-gray-600">
                    Liink
                </p>
                <p className="font-montserrat text-sm uppercase text-gray-600">
                    Liink
                </p>
            </div>
        </div>
    );
}
