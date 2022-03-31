import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import oc from 'open-color';
import ResponsiveBox from 'components/base/Responsive';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import style from 'components/base/Markdown/style';

const MarkdownWrapper = styled(ResponsiveBox)`
  line-height: 2.5rem;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 5px;
  background-color: ${oc.gray[3]};
`;

const HorizontalRule: React.FC = () => {
  return <HorizontalLine />;
};

const H1Wrapper = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding: 20px 0px;
`;
const H1divider = styled.div`
  width: 100%;
  margin-top: 4px;
  height: 3px;
  background-color: ${oc.gray[4]};
`;

const HeaderFirst: React.FC = (props) => {
  const { children } = props;
  return (
    <H1Wrapper>
      {children}
      <H1divider />
    </H1Wrapper>
  );
};

const H2Wrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderSecond: React.FC = (props) => {
  const { children } = props;
  return (
    <H2Wrapper>
      {children}
      <HorizontalLine />
    </H2Wrapper>
  );
};

const List: SpecialComponents['li'] = (props) => {
  const { ordered, children } = props;
  if (ordered) return <li {...props}>{children}</li>;
  return (
    <div>
      <span>- </span>
      {children}
    </div>
  );
};

const BlockQuoteWrapper = styled.blockquote`
  width: 100%;
  padding: 0 20px;
  background-color: ${oc.gray[0]};
  border-left: 4px solid;
  border-left-color: ${oc.indigo[8]};
`;

const BlockQuote: React.FC = (props) => {
  const { children } = props;

  return <BlockQuoteWrapper>{children}</BlockQuoteWrapper>;
};

const Code: SpecialComponents['code'] = (props) => {
  const { inline, className, children } = props;
  const match = /language-(\w+)/.exec(className || '');
  const inlineCodeBlock = (
    <SyntaxHighlighter
      PreTag="span"
      customStyle={{
        padding: '2px 3px 3px 2px',
        margin: 0,
        'background-color': oc.gray[3],
        'border-radius': '5px',
      }}
      lineNumberStyle={{ color: '#6272A4' }}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
  if (inline) return inlineCodeBlock;
  if (match) {
    const LanguageDefinedCodeBlock = (
      <SyntaxHighlighter
        style={style}
        language={match[1]}
        PreTag="div"
        useInlineStyles
        lineNumberStyle={{ color: '#6272A4' }}
        showLineNumbers
        showInlineLineNumbers={false}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
    return LanguageDefinedCodeBlock;
  }

  const CodeBlock = (
    <SyntaxHighlighter
      PreTag="div"
      useInlineStyles
      lineNumberStyle={{ color: '#6272A4' }}
      showInlineLineNumbers={false}
      customStyle={{
        margin: 0,
        'background-color': oc.gray[3],
        'border-radius': '10px',
      }}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
  return CodeBlock;
};

const example = `

`;

export interface MarkdownRendererProps {
  markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = (props) => {
  const { markdown } = props;
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        components={{
          blockquote: BlockQuote,
          code: Code,
          hr: HorizontalRule,
          h1: HeaderFirst,
          h2: HeaderSecond,
          li: List,
        }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      >
        {markdown}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
};
export default MarkdownRenderer;
