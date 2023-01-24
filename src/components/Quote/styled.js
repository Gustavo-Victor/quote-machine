import styled from "styled-components";

export const QuoteBox = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  color: ${({ theme }) => theme.color};
  border-radius: 3px;
  padding: 40px 50px;
  width: 100%;

  .quote-text {
    font-size: 1.75rem;
    text-align: center;
    transition: opacity 0.7s ease;

    #left-quote-icon {
      position: relative;
      right: 10px;
    }
  }

  .quote-author {
    font-size: 1rem;
    text-align: right;
    margin: 1.5rem 0;
    transition: opacity 0.7s ease;

    #author {
      color: ${({ theme }) => theme.color};
    }
  }

  /*media queries*/
  @media only screen and (max-width: 350px) {
    padding: 1rem;

    .quote-text {
      font-size: 1.4rem;
    }

    .quote-author {
      text-align: center;
      font-size: 0.9rem;
    }
  }
`;
