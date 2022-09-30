import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

export const FeedbackBtn = styled.li`
  background-color: #fff;
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  background-color: #fff;
  border: normal;
  width: 80px;
  &:hover,
  &:focus {
    background-color: #05c3dd;
  }
`;
