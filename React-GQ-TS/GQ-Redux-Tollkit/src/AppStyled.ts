import styled, {css} from 'styled-components';

export const fullWidthHeight = css`
  width: 100%;
  height: 100%;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppContainer = styled.div`
  ${fullWidthHeight};
  ${flexCenter};
  flex-direction: column;
`;

