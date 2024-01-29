import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
    flex: 1;
    overflow-y: auto;
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
    align-self: flex-end;
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

    > h1 {
      position: relative;
      top: -20px;
    }
  }
`;
