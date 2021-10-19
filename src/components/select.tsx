import { ChangeEvent } from "react";
import { Label } from "./label";
import { LabeledInput } from "./labeled-input";

type Props = {
  name: string;
  title: string;
  options: string[];
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const Select: React.FC<Props> = (props: Props) => {
  return (
    <LabeledInput>
      <Label>{props.title}:</Label>
      <select
        data-testid={props.name}
        id={props.name}
        name={props.name}
        value={props.value ? props.value : ""}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          props.setValue(e.target.value)
        }
      >
        {props.options.map((o) => (
          <option value="{o}">{o}</option>
        ))}
      </select>
    </LabeledInput>
  );
};
