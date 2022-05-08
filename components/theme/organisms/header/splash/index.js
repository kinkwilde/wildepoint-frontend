import ThemeAtomsLogoSplash from "../../../atoms/logo/splash";

import ThemeAtomsBurger from "../../../organisms/burger";

export default function ThemeOrganismsHeaderSplash() {
    return (
        <>
            <header className="mb-8 flex items-center justify-between md:mb-12 lg:mb-24">
                <ThemeAtomsLogoSplash />
                <ThemeAtomsBurger />
            </header>
        </>
    );
}
