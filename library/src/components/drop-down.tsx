import { Label, LabelError, LabelMessage, StyledInfo } from './label';
import { LabeledInput } from './labeled-input';
import Select, { StylesConfig } from 'react-select';
import { HiOutlineInformationCircle } from 'react-icons/hi';

type Props = {
  name: string;
  title?: string;
  options: string[];
  value: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
  width: number;
  error?: string;
  loading?: boolean;
  disabled?: boolean;
  info?: () => void;
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
        color: 'white',
        border: '1px solid transparent',
        borderRadius: '1px',
        outline: 'none',
        boxShadow: '0 0.0625rem 0.125rem rgba(0, 0, 0, 0.15)',
        minWidth: props.width,
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: '#2d3748',
        fontSize: '12px',
      };
    },
    option: (provided, { isSelected, isFocused }) => {
      return {
        ...provided,
        color: '#2d3748',
        fontSize: '12px',
        backgroundColor: isSelected
          ? '#B8C4D8'
          : isFocused
          ? '#F2F7FF'
          : 'white',
      };
    },
  };

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
      <Select
        styles={selectStyle}
        value={{ label: props.value, value: props.value }}
        onChange={(n) => props.onChange(n?.value)}
        options={props.options.map((o) => ({ label: o, value: o }))}
        isClearable={true}
        isLoading={props.loading}
        isDisabled={props.disabled}
      />
      {props.title && <LabelMessage>{props.error}</LabelMessage>}
    </LabeledInput>
  );
};
