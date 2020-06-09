import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-width: 50vw;
  min-height: 100vh;
  background: ${props => `url(${props.background})`};
`;

export default Background