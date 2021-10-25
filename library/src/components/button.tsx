import styled from 'styled-components';

export const Button = styled('button')<{ primary?: boolean }>`
  font-weight: bold;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 5px;
  height: 30px;
  background-color: ${(props) => (props.primary ? 'darkblue' : '#4caf50')};
  cursor: pointer;
  &:disabled {
    color: #9fbda0;
    cursor: default;
  }
`;
