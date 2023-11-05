import styled from '@emotion/styled';

export const LabelForm = styled.form`
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-size: 16px;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #0073e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
  &:hover {
    background-color: #005bb8;
  }
`;
