import styled from "styled-components";

export const Button = styled.button`
  font-weight: bold;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 18px;
  height: 38px;
  background-color: #4caf50;
  cursor: pointer;
  &:disabled {
    color: #9fbda0;
    cursor: default;
  }
`;

export const HighlightedButton = styled.button`
  font-weight: bold;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 18px;
  height: 38px;
  background-color: darkblue;
  cursor: pointer;
  &:disabled {
    color: #9fbda0;
    cursor: default;
  }
`;
