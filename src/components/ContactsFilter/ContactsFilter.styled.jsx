import styled from '@emotion/styled';

export const FilterInput = styled.input`
  width: 180px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  margin-bottom: 10px;
  outline: none;

  &::placeholder {
    color: #aaa; /* Колір плейсхолдера */
  }
`;
