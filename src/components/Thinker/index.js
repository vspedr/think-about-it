import React from 'react';
import styled, { keyframes } from 'styled-components';

import thinker from '../../assets/thinker.svg';

const Thinker = ({ className }) => (
  <img alt="Thinking" className={className} src={thinker} />
);

const fadeOut = keyframes`
  0% { opacity: 0; transform: scale(1.0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.5); }
`;

const StyledThinker = styled(Thinker)`
  opacity: 1;
  animation: ${fadeOut} ${props => props.lifespan}s ease-in-out infinite;
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
  position: fixed;
  top: ${ props => props.top }px;
  left: ${ props => props.left }px;
`;

export default StyledThinker;
