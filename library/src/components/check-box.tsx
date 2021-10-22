import { Label, LabelError, LabelMessage } from "./label";
import { LabeledInput } from "./labeled-input";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px;
`;

type Props = {
  name: string;
  title: string;
  value: boolean | undefined;
  setValue: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  error?: string;
};

export const CheckBox: React.FC<Props> = (props: Props) => {
  return (
    <LabeledInput>
      {!props.error && <Label>{props.title}</Label>}
      {props.error && <LabelError>{props.title}</LabelError>}
      <StyledInput>
        {props.value && (
          <ImCheckboxChecked
            onClick={() => props.setValue(false)}
            color="rgba(0, 0, 0, 0.50)"
          />
        )}
        {!props.value && (
          <ImCheckboxUnchecked
            onClick={() => props.setValue(true)}
            color="rgba(0, 0, 0, 0.15)"
          />
        )}
      </StyledInput>
      <LabelMessage>{props.error}</LabelMessage>
    </LabeledInput>
  );
};
