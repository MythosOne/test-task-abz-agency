import styled from '@emotion/styled';

export const UpLoadButton = styled.button`
  all: unset;

  width: 83px;
  height: 100%;
  font-size: 16px;
  line-height: 26px;
  color: #000;
  text-align: center;

  cursor: pointer;
  border: 1px solid #000;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-color: inherit;

  &:hover {
    color: #535bf2;
    border-color: #646cff;
  }
`;
export const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 54px;
  border: 1px solid rgba(63, 63, 63, 0.23);
  border-radius: 4px;

  color: #7e7e7e;
`;

export const Span = styled.span`
  margin-left: 16px;
`;

export const Input = styled.input``;
