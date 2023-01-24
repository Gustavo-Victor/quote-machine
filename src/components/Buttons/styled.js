import styled from "styled-components";

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .button {
    color: white;
    background-color: ${({ theme }) => theme.color};
    padding: 0.6rem 1.5rem;
    border-radius: 5px;
    text-align: center;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    a {
      padding: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /*media queries*/
  @media only screen and (max-width: 350px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
