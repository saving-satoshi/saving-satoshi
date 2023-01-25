import { CopyButton } from "./CopyButton";

export const CopyableCode = ({ code, language }) => {
    return (
        <pre className="p-2 mt-2 border-dashed border-2 border-white">
        <code className={`language-${language} pl-2 pr-0 items-center flex justify-between`}>
            {code}
            <CopyButton compact content={code} />
        </code>
        </pre>
    );
    };