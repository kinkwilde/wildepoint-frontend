export default function SectionButtons({ name, url }) {
    return (
        <section className="border-t border-b border-gray-200 py-12" id={url}>
            <div className="mb-12">
                <h2>{name}</h2>
                <p className="mb-0">Intro to how to use our colors.</p>
            </div>
            <ul className="mb-0 grid list-none grid-cols-1 gap-4 pl-0 lg:grid-cols-2">
                <li>
                    <div className="grid grid-cols-[200px_1fr] gap-4">
                        <div className="flex flex-col space-y-4">
                            <button className="primary-button">Primary</button>
                            <button className="primary-button bg-blue-hover focus:ring-0 lg:hover:bg-blue-hover lg:active:bg-blue-hover">
                                Hover
                            </button>
                            <button className="primary-button bg-blue-active focus:ring-0 lg:hover:bg-blue-active lg:active:bg-blue-active">
                                Active
                            </button>
                            <button className="primary-button bg-blue-active ring-4 ring-focus lg:hover:bg-blue-active lg:active:bg-blue-active">
                                Focus
                            </button>
                        </div>
                        <div>
                            <h4 className="mb-1 text-lg uppercase">
                                Primary Button
                            </h4>
                            <p className="mb-0">
                                Used for all main call to actions.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="grid grid-cols-[200px_1fr] gap-4">
                        <div className="flex flex-col space-y-4">
                            <button className="secondary-button">
                                Secondary
                            </button>
                            <button className="secondary-button bg-grey-hover focus:ring-0 lg:hover:bg-grey-hover lg:active:bg-grey-hover">
                                Hover
                            </button>
                            <button className="secondary-button bg-grey-active focus:ring-0 lg:hover:bg-grey-active lg:active:bg-grey-active">
                                Active
                            </button>
                            <button className="secondary-button bg-grey-active ring-4 ring-focus lg:hover:bg-grey-active lg:active:bg-grey-active">
                                Focus
                            </button>
                        </div>
                        <div>
                            <h4 className="mb-1 text-lg uppercase">
                                Secondary Button
                            </h4>
                            <p className="mb-0">
                                Used for all main call to actions.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}
