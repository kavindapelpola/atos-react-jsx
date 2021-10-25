import { Label, LabelError, LabelMessage, StyledInfo } from './label';
import { LabeledInput } from './labeled-input';
import styled from 'styled-components';
import { HiOutlineInformationCircle } from 'react-icons/hi';

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 12px;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 26px;
  -webkit-appearance: none;
  &:disabled {
    background: hsl(0, 0%, 95%);
    cursor: default;
  }
`;

type Props = {
  name: string;
  title?: string;
  value: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
  onBlur?: () => void;
  width: number;
  error?: string;
  info?: () => void;
  disabled?: boolean;
};

export const Input: React.FC<Props> = (props: Props) => {
  const icon = (
    <StyledInfo>
      <HiOutlineInformationCircle
        size={15}
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          props.info && props.info();
        }}
      />
    </StyledInfo>
  );

  return (
    <LabeledInput>
      {props.title && !props.error && (
        <Label>
          {props.title}:{props.info && icon}
        </Label>
      )}
      {props.title && props.error && (
        <LabelError>
          {props.title}:{props.info && icon}
        </LabelError>
      )}
      <StyledInput
        value={props.value}
        width={props.width}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={() => props.onBlur && props.onBlur()}
        disabled={props.disabled}
      />
      {props.title && <LabelMessage>{props.error}</LabelMessage>}
    </LabeledInput>
  );
};
