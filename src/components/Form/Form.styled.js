import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 200px;
  height: 25px;

  border-radius: 3px;
  outline: 1px solid #c22f2f;
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  background-color: #ffe087;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 0 4px 0px;

  :hover,
  :focus {
    background-color: #fdd358;
  }

  :active {
    box-shadow: inset 0 0 4px 0px;
  }
`;
