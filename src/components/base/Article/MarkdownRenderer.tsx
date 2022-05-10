import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import oc from 'open-color';
import ResponsiveBox from 'components/base/Responsive';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import style from 'components/base/Article/style';

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
        {`tag: , , , ;

# h1

## h2

### h3

1. hi

2. hi

<hr/>
3. hi

> ghihihihi
> > nested quote

# React implementation using Typescript

[타입스크립트로 컴포넌트 children 사용하기](https://www.carlrippon.com/react-children-with-typescript/)

## UseState 사용하기_hi_

\`cosnt\`

~~~ts
const [count, setCount] = useState<number>(0);

// 12312312
~~~

## Map

배열. Mapping

~~~ts
arr.map(callback, [thsArg]);
~~~

- callback : 새로운 배열의 요소를 생성하는 함수.
  - currentValue: 현재 처리하는 요소
  - index: 현재 처리하는 요소의 index 값
  - array: 현재 처리하는 원본 배열
- thisArg(선택 항목): callback함수에서 사용할 this 레퍼런스

##### 예시

~~~ts
var numbers: <number> = [1, 2, 3, 4, 5];

var processed = numbers.map(function (num) {
 return num * num;
});
~~~

#### 데이터 배열을 컴포넌트 배열로 변환하기

~~~js
import React from 'react';

const IterationSample = () => {
 const names = ['눈사람', '얼음', '눈'];
 const nameList = names.map((name) => <li>{name}</name>);
 return <ul>{nameList}</ul>;
};

export default IterationSample;
~~~

### 스타일드 컴포넌트

~~~ts
const Container = styled.div<{ age: number }>;
~~~

<pre><code>inlinecode</code></pre>

# Hello World! 👋

## I'm JeongHoon Rho ([overthestream]) 👨🏻‍💻

- Junior @ Korea University Dept. of Computer Science & Engineering | 고려대학교 컴퓨터학과 20학번, 3학년

- KU ALPS (Algorithm Learning & Problem Solving) Vice President | 고려대학교 알고리즘 학회 부회장 (2021)

## I'm currently working on ⌨️

    - hi
    - hi
    as
    as
    as
    as

## Misc 💻

[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=overthestream)](https://github.com/anuraghazra/github-readme-stats)

![hyp3rflow's solved.ac stats](https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=bln01)

[overthestream]: https://github.com/overthestream
`}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
};
export default MarkdownRenderer;
