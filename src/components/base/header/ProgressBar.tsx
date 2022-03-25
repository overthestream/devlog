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
    // const newScrollProgress = temp < 2 ? 0 : temp > 98 ? 100 : temp;
    setScrollProgress(temp);
  }, 100);

  useScroll(getScrollProgress);

  return <Bar scrollProgress={scrollProgress} />;
};
export default ProgressBar;
