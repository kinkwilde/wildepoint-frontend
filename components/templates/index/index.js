import ThemeOrganismsHeaderSplash from "../../theme/organisms/header/splash";
import ThemeOrganismsFooterSplash from "../../theme/organisms/footer/splash";

export default function TemplateIndex({ children }) {
    return (
        <div className="p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24">
            <div className="container">
                <div className="rounded-md border-4 border-black p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24">
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
