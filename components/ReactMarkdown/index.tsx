import React from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


interface CodeBlockProps {
  value: string;
}


const ReactMarkdown = (props: CodeBlockProps) => {
  const { value } = props;
  return (
    <Markdown
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              style={oneDark}
              PreTag='div'
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {value}
    </Markdown>
  );
};

export default ReactMarkdown;
