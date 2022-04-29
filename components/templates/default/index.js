import ThemeOrganismsHeader from "../../theme/organisms/header";
import ThemeOrganismsFooter from "../../theme/organisms/footer";

export default function TemplateDefault({ children }) {
    return (
        <>
            <ThemeOrganismsHeader />
            <main>{children}</main>
            <ThemeOrganismsFooter />
        </>
    );
}
