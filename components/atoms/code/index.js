import { FiX, FiMinus, FiMaximize2 } from "react-icons/fi";

function CodeWrap({ children }) {
    return (
        <pre className="whitespace-pre-wrap font-firacode text-base">
            {children}
        </pre>
    );
}

function codeMessage(content, error) {
    if (error) {
        <CodeWrap>{JSON.stringify(error, null, 2)}</CodeWrap>;
    }

    if (!content & !error) {
        <CodeWrap>Unkown Error</CodeWrap>;
    }

    return <CodeWrap>{JSON.stringify(content, null, 2)}</CodeWrap>;
}

export default function AtomsCode({ content, error }) {
    const message = codeMessage(content, error);

    return (
        <div data-testid="code" className="mt-12 lg:mt-24">
            <div className="flex rounded-t-lg border border-b border-gray-900 bg-gray-800 py-3 px-4">
                <div className="mr-2 flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-red-500">
                    <FiX className="text-xs" />
                </div>
                <div className="mr-2 flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-yellow-500">
                    <FiMinus className="text-xs" />
                </div>
                <div className="flex min-h-[1rem] min-w-[1rem] items-center justify-center rounded-full bg-green-500">
                    <FiMaximize2 className="text-xs" />
                </div>
            </div>
            <code className="block overflow-x-hidden rounded-b-lg bg-gray-700 p-4 text-white shadow-inner">
                {message}
            </code>
        </div>
    );
}
