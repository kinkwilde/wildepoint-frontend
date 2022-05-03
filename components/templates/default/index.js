import ThemeOrganismsHeader from "../../theme/organisms/header";
import ThemeOrganismsFooter from "../../theme/organisms/footer";

export default function TemplateDefault({ children }) {
    return (
        <div>
            <ThemeOrganismsHeader />
            <main className="grow">{children}</main>
            <ThemeOrganismsFooter />
        </div>
    );
}
