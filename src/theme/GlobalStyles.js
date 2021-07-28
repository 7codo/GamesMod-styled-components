import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Source Sans Pro', 'sans-serif';
        @media screen and (max-width: 710px) {
            font-size: .9rem;
        }
    }

    /**Scroll bar style */
    ::-webkit-scrollbar {
      width: 6.5px ;
      height: 6.5px ;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.secondaryBg};
    }
    ::-webkit-scrollbar-thumb{
      background: ${({ theme }) => theme.scrollbarTrack};
      transition: border .5s ease-out;
    }
    ::-webkit-scrollbar-thumb:hover{
      border: 1px solid ${({ theme }) => theme.mainBg};
    }
`;

export const ResPadding = styled.div`
  padding: 1.5em 2em;
  @media screen and (max-width: 966px) {
    padding: 0.75em 1em;
  }
`;

export const ResMargin = styled.div`
  margin: 1.5em auto;
  @media screen and (max-width: 966px) {
    margin: 0.75em auto;
  }
`;

export const Button = styled.button`
  background: ${({ primary }) => (primary ? "#0061fd" : "")};
  padding: 1.1em 1.3em;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;
