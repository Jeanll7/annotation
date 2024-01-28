import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  /* overflow-y: hidden; */

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;
  
  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  } 
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }

  @media (max-width: 720px) { 
    max-width: 80%; 
    font-size: 14px; 
    position: relative;
    top: -20px;

    > h1, p {
      position: relative;
      top: -20px;
      margin-bottom: -20px;
    }
  }
`;


// FLEXBOX
// export const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// export const Header = styled.header`
//   height: 105px;
// `;

// export const Content = styled.div`
//   flex-grow: 1;
// `;

