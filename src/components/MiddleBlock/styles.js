import styled from 'styled-components';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 10rem 0 8rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MinTitle = styled.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled.p`
  font-size: 0.75rem;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;