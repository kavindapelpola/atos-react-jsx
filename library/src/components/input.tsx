import { Label, LabelError, LabelMessage } from "./label";
import { LabeledInput } from "./labeled-input";
import styled from "styled-components";

const StyledInput = styled.input`
  display: table-cell;
  padding: 0 10px;
  background: #fff;
  height: 35px;
  width: ${(props) => props.width}px;
  border: 1px solid transparent;
  box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15);
  border-radius: 1px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 14px;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 26px;
  -webkit-appearance: none;
`;

type Props = {
  name: string;
  title: string;
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  width: number;
  error?: string;
};

export const Input: React.FC<Props> = (props: Props) => {
  return (
    <LabeledInput>
      {!props.error && <Label>{props.title}:</Label>}
      {props.error && <LabelError>{props.title}:</LabelError>}
      <StyledInput
        value={props.value}
        width={props.width}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <LabelMessage>{props.error}</LabelMessage>
    </LabeledInput>
  );
};