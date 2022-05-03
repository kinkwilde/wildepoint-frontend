// import ThemeOrganismsHeader from "../../theme/organisms/header";
// import ThemeOrganismsFooter from "../../theme/organisms/footer";

export default function TemplateDefault({ children }) {
    return (
        <div className="px-2 py-4 sm:p-4 md:p-6 lg:p-12 xl:p-24">
            <div className="container">
                <div className="rounded-md border-4 border-black p-4 sm:p-6 md:p-12 lg:p-24">
                    <div className="flex flex-col">
                        {/* <ThemeOrganismsHeader /> */}
                        <main className="grow">{children}</main>
                        {/* <ThemeOrganismsFooter /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
