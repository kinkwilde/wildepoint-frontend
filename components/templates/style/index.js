export default function TemplatesStyle({ children }) {
    return (
        <div className="grid h-screen grid-cols-[auto_1fr]">
            <div className="h-full border-r border-gray-200 p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24">
                <div className="w-64">
                    <p>Sidebar</p>
                    <p>Dark / Light Switcher</p>
                </div>
            </div>
            <div className="h-full overflow-y-scroll bg-gray-50">
                <div className="h-full p-2 sm:p-4 md:p-6 lg:p-12 xl:p-24">
                    <div className="flex h-full flex-col">
                        <main className="grow">{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
