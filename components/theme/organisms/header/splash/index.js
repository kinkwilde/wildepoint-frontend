import ThemeAtomsLogoSplash from "../../../atoms/logo/splash";

import ThemeAtomsBurger from "../../../../atoms/burger";

import AtomsTheme from "../../../../atoms/theme";

export default function ThemeOrganismsHeaderSplash() {
    return (
        <>
            <header className="mb-8 flex items-center justify-between md:mb-12 lg:mb-24">
                <ThemeAtomsLogoSplash />
                <div className="flex items-center space-x-2">
                    <ThemeAtomsBurger />
                    <AtomsTheme />
                </div>
            </header>
        </>
    );
}
