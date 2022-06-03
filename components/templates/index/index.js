import ThemeOrganismsHeaderSplash from "../../theme/organisms/header/splash";
import ThemeOrganismsFooterSplash from "../../theme/organisms/footer/splash";

export default function TemplateIndex({ children }) {
    return (
        <div className="bg-grey p-2 dark:bg-black sm:p-4 md:p-6 lg:p-12 xl:p-24">
            <div className="container">
                <div className="rounded-lg border-4 border-black bg-white p-2 dark:border-white dark:bg-gray-900 sm:p-4 md:p-6 lg:p-12 xl:p-24">
                    <div className="flex flex-col">
                        <ThemeOrganismsHeaderSplash />
                        <main className="grow">{children}</main>
                        <ThemeOrganismsFooterSplash />
                    </div>
                </div>
            </div>
        </div>
    );
}
