import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, code }) => {
    return (
        <SyntaxHighlighter language={language} style={prism}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
