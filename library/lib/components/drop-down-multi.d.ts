/// <reference types="react" />
declare type Props = {
    name: string;
    title?: string;
    options: string[];
    value: string[] | undefined;
    onChange: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    onBlur?: () => void;
    width: number;
    error?: string;
    loading?: boolean;
    disabled?: boolean;
};
export declare const DropDownMulti: React.FC<Props>;
export {};
