import React, { useState } from 'react';
import useScroll from 'hooks/useScroll';
import styled from 'styled-components';
import oc from 'open-color';

import ResponsiveBox from 'components/base/Responsive';
import ProgressBar from 'components/base/header/ProgressBar';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;

  position: fixed;
  display: inline-flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);

  color: black;
`;

const HeaderLayout = styled(ResponsiveBox)`
  height: 100%;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
`;

const HeaderItemContainer = styled.a`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  border-radius: 8px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 20px;

  color: #3c4249;
  font-weight: bold;
  height: 16px;
  margin-top: 23px;
  margin-right: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${oc.indigo[8]};
    background-color: ${oc.gray[2]};
  }
`;

const ColoredText = styled.span`
  color: ${oc.indigo[8]};
`;

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset && !active) setActive(true);
    else setActive(false);
  };

  useScroll(handleScroll);

  const homePageURL = 'http://localhost:3000';
  const postsURL = 'http://localhost:3000';
  return (
    <>
      <HeaderWrapper>
        <HeaderLayout>
          <HeaderItemContainer href={homePageURL}>
            {'<'}
            <ColoredText>stream.devlog</ColoredText>
            {'/>'}
          </HeaderItemContainer>
          <HeaderItemContainer href={postsURL}>Posts</HeaderItemContainer>
        </HeaderLayout>
      </HeaderWrapper>
      <ProgressBar />
    </>
  );
};

export default Header;
