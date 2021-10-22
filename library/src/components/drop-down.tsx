import { Label, LabelError, LabelMessage } from "./label";
import { LabeledInput } from "./labeled-input";
import Select, { StylesConfig } from "react-select";

type Props = {
  name: string;
  title: string;
  options: string[];
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  width: number;
  error?: string;
};

export const DropDown: React.FC<Props> = (props: Props) => {
  const selectStyle: StylesConfig<
    { label: string | undefined; value: string | undefined },
    false
  > = {
    control: (provided) => {
      return {
        ...provided,
        fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen", "Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue", sans-serif;`,
        color: "white",
        border: "1px solid transparent",
        borderRadius: "1px",
        outline: "none",
        boxShadow: "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15)",
        width: props.width,
        //        outline: "#2d3748",
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: "#2d3748",
      };
    },
    option: (provided, { isSelected, isFocused }) => {
      return {
        ...provided,
        color: "#2d3748",
        fontSize: "14px",
        backgroundColor: isSelected
          ? "#B8C4D8"
          : isFocused
          ? "#F2F7FF"
          : "white",
      };
    },
  };

  return (
    <LabeledInput>
      {!props.error && <Label>{props.title}:</Label>}
      {props.error && <LabelError>{props.title}:</LabelError>}
      <Select
        styles={selectStyle}
        value={{ label: props.value, value: props.value }}
        onChange={(n) => props.setValue(n?.value)}
        options={props.options.map((o) => ({ label: o, value: o }))}
      />
      <LabelMessage>{props.error}</LabelMessage>
    </LabeledInput>
  );
};
