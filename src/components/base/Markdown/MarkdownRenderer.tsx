import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import oc from 'open-color';
import ResponsiveBox from 'components/base/Responsive';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import style from 'components/base/Markdown/style';

const MarkdownWrapper = styled(ResponsiveBox)`
  line-height: 2.5rem;
`;

const BlockQuoteWrapper = styled.blockquote`
  width: 100%;
  padding: 0 20px;
  background-color: ${oc.gray[0]};
  border-left: 4px solid;
  border-left-color: ${oc.indigo[8]};
`;

// 구현할 것 :  <hr/>, h2?쯤 되는 태그에 구분선 넣기. tag 기능. 왼쪽 h별 목차, 목록 좀 더 예쁘게.
// ~~ cancelline 이미지 넣는 방식 고안하기
const BlockQuote: React.FC = (props) => {
  const { children } = props;
  return <BlockQuoteWrapper>{children}</BlockQuoteWrapper>;
};

const Code: SpecialComponents['code'] = (props) => {
  const { inline, className, children } = props;
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
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
  ) : (
    <SyntaxHighlighter
      PreTag="span"
      useInlineStyles
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
};

const example = `
<hr/>
1. hi

2. hi

3. hi

> ghihihihi
> > nested quote

# React implementation using Typescript

[타입스크립트로 컴포넌트 children 사용하기](https://www.carlrippon.com/react-children-with-typescript/)

## UseState 사용하기
![image](./hi.png)
_hi_
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
~~~ jk ~~~


# Hello World! 👋

## I'm JeongHoon Rho ([overthestream]) 👨🏻‍💻
    
- Junior @ Korea University Dept. of Computer Science & Engineering | 고려대학교 컴퓨터학과 20학번, 3학년

- KU ALPS (Algorithm Learning & Problem Solving) Vice President | 고려대학교 알고리즘 학회 부회장 (2021)

## I'm currently working on ⌨️

    -

## Misc 💻

[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=overthestream)](https://github.com/anuraghazra/github-readme-stats)

![hyp3rflow's solved.ac stats](https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=bln01)

[overthestream]: https://github.com/overthestream
`;

const MarkdownRenderer: React.FC = () => {
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        components={{
          blockquote: BlockQuote,
          code: Code,
        }}
      >
        {`\`const\`${example}`}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
};
export default MarkdownRenderer;
