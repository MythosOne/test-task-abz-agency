import styled from '@emotion/styled';

export const UploadContainer = styled.div``;

export const Label = styled.label<{ isVisible: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 54px;
  border: ${({ isVisible }) =>
    !isVisible ? '1px solid rgba(63, 63, 63, 0.23)' : '2px solid #CB3D40'};
  border-radius: 4px;
  color: #7e7e7e;
`;

export const UpLoadButton = styled.button<{ isVisible: boolean }>`
  all: unset;

  width: 83px;
  height: 100%;
  font-size: 16px;
  line-height: 26px;
  color: #000;
  text-align: center;

  cursor: pointer;

  border: ${({ isVisible }) =>
    !isVisible ? '1px solid #000' : '2px solid #CB3D40'};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-color: inherit;
  margin-left: -2px;
`;

export const Span = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: #000;
  margin-left: 16px;
`;

export const Input = styled.input``;

export const ErrorMessage = styled.span<{ isVisible: boolean }>`
  display: block;
  height: 18px;
  color: red;
  font-size: 14px;

  visibility: ${({ isVisible }) => (!isVisible ? 'hidden' : 'visible')};
`;
