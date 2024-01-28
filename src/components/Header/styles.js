import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;

  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: auto;
    border-radius: 50%;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    line-height: 24px;
 
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  svg {
    transition: color 0.3s;
  }

  &:hover {
    svg {
      color: #ff0000 !important;
    }
  }
`;