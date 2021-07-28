import styled from "styled-components";
export const MainHomeContainer = styled.main`
  width: calc(100% - 315px);
  /* height: 100vh; */
  position: relative;
  left: 315px;
  top: 0;
  background: ${({ theme }) => theme.mainBg};
  padding: 1em;

  @media screen and (max-width: 966px) {
    left: 0;
    width: 100%;
  }
`;
