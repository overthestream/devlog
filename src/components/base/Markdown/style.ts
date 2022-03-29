const draculaGreen = '#4FFB7B';
const draculaPink = '#FA89CD';
const draculaSky = '#8AE9FD';
const draculaYellow = '#F2F996';
const draculaWhite = '#F8F8F2';
const draculaPurple = '#BD93F9';
const draculaNavy = '#6272A4';
const draculaOrange = '#FCDB00';
const draculaBackground = '#282A36';

export default {
  'code[class*="language-"]': {
    color: draculaPurple,
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: draculaWhite,
    background: draculaBackground,
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'l eft',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: draculaBackground,
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  comment: {
    color: draculaNavy,
  },
  prolog: {
    color: draculaNavy,
  },
  doctype: {
    color: draculaNavy,
  },
  cdata: {
    color: draculaNavy,
  },
  punctuation: {
    color: draculaOrange,
  },
  '.namespace': {
    Opacity: '.7',
  },
  property: {
    color: draculaPink,
  },
  tag: {
    color: draculaPink,
  },
  constant: {
    color: draculaPink,
  },
  symbol: {
    color: draculaPink,
  },
  deleted: {
    color: draculaPink,
  },
  boolean: {
    color: draculaPurple,
  },
  number: {
    color: draculaPurple,
  },
  selector: {
    color: draculaSky,
  },
  'attr-name': {
    color: draculaSky,
  },
  string: {
    color: draculaYellow,
  },
  char: {
    color: draculaSky,
  },
  builtin: {
    color: draculaSky,
  },
  inserted: {
    color: draculaSky,
  },
  operator: {
    color: draculaPink,
  },
  entity: {
    color: draculaWhite,
    cursor: 'help',
  },
  url: {
    color: draculaWhite,
  },
  '.language-css .token.string': {
    color: draculaWhite,
  },
  '.style .token.string': {
    color: draculaWhite,
  },
  variable: {
    color: draculaWhite,
  },
  atrule: {
    color: draculaYellow,
  },
  'attr-value': {
    color: draculaYellow,
  },
  function: {
    color: draculaGreen,
  },
  'class-name': {
    color: draculaYellow,
  },
  keyword: {
    color: draculaPink,
  },
  regex: {
    color: draculaOrange,
  },
  important: {
    color: draculaOrange,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};
