import React, { useState } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';
import oc from 'open-color';
import useScroll from 'hooks/useScroll';

interface BarProps {
  scrollProgress: number;
}

const Bar = styled.div<BarProps>`
  width: ${(props) => `${props.scrollProgress}%`};
  height: 3px;

  position: fixed;
  top: 67px;
  background: ${oc.indigo[8]};
  opacity: 1;
`;
const BarToFill = styled.div<BarProps>`
  width: ${(props) => `${100 - props.scrollProgress}%`};
  height: 3px;

  position: fixed;
  right: 0px;
  top: 67px;
  background: ${oc.gray[2]};
  opacity: 1;
`;
const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const getScrollProgress = throttle(() => {
    const maxHeight =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - window.innerHeight;
    const temp = (1 - (maxHeight - window.pageYOffset) / maxHeight) * 100;
    setScrollProgress(temp);
    console.log(scrollProgress);
  }, 50);

  useScroll(getScrollProgress);

  return (
    <>
      <Bar scrollProgress={scrollProgress} />
      <BarToFill scrollProgress={scrollProgress} />
    </>
  );
};
export default ProgressBar;
