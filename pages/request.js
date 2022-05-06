import TemplateIndex from "../components/templates/index";

export default function PageRequest() {
    return (
        <>
            <div className="mx-auto mb-12 max-w-prose text-center">
                <h1>Request Access</h1>
                <p className="text-lg">This will be coming soon.</p>
                <p>This will be coming soon.</p>
            </div>
        </>
    );
}

PageRequest.getLayout = function getLayout(page) {
    return <TemplateIndex>{page}</TemplateIndex>;
};
