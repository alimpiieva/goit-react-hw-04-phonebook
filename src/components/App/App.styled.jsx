import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: cursive;
  font-size: 16px;
  background-color: lightgray;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const AppHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const ContactListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  margin-top: 15px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const DeleteButton = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff3d3d;
  }
`;

export const ContactListEmpty = styled.p`
  font-size: 16px;
  color: #777;
  margin-top: 20px;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  margin-top: 20px;
`;

export const ContactFormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ContactFormInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

export const ContactFormSubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;
