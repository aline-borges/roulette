// @ts-nocheck
import styled from 'styled-components';

export const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
  min-height: 100vh;
  background: ${props => `url(${props.background})`};
`;

export default BackgroundImage