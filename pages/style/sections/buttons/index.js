export default function SectionButtons() {
    return (
        <section className="border-t border-b border-gray-200">
            <div>
                <h2>Buttons</h2>
            </div>
            <div>
                <ul className="mb-0 grid list-none grid-cols-1 gap-4 pl-0 lg:grid-cols-2">
                    <li>
                        <div className="grid grid-cols-[200px_1fr] gap-4">
                            <div className="flex flex-col space-y-4">
                                <button className="primary-button">
                                    Primary
                                </button>
                                <button className="primary-button bg-blue-hover focus:ring-0 lg:hover:bg-blue-hover lg:active:bg-blue-hover">
                                    Hover
                                </button>
                                <button className="primary-button bg-blue-active focus:ring-0 lg:hover:bg-blue-active lg:active:bg-blue-active">
                                    Pressed
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
                                    Pressed
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
                </ul>
            </div>
        </section>
    );
}
