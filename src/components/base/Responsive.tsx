import React from 'react';
import styled from 'styled-components';

const ResponsiveBoxWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export type ResponsiveBoxProps = React.ComponentPropsWithoutRef<'div'>;

const ResponsiveBox = React.forwardRef<HTMLDivElement, ResponsiveBoxProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <ResponsiveBoxWrapper ref={ref} {...props}>
        {children}
      </ResponsiveBoxWrapper>
    );
  }
);

export default ResponsiveBox;
