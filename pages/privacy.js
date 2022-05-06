import TemplateIndex from "../components/templates/index";

export default function PagePrivacy() {
    return (
        <>
            <div className="mx-auto mb-12 max-w-prose text-center">
                <h1>Privacy Policy</h1>
                <p className="text-lg">This will be coming soon.</p>
                <p>This will be coming soon.</p>
            </div>
        </>
    );
}

PagePrivacy.getLayout = function getLayout(page) {
    return <TemplateIndex>{page}</TemplateIndex>;
};
