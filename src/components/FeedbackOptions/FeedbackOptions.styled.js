import styled from '@emotion/styled';

export const FeedbackOption = styled.button`
  font-size: 20px;

  height: 30px;
  min-width: 100px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;

  text-transform: capitalize;
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 0px -1px 2px rgba(0, 0, 0, 0.12),
    0px 2px 2px rgba(0, 0, 0, 0.16);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
`;
