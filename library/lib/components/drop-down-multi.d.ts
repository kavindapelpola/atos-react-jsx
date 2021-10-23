/// <reference types="react" />
declare type Props = {
    name: string;
    title?: string;
    options: string[];
    value: string[] | undefined;
    setValue: React.Dispatch<React.SetStateAction<string[] | undefined>>;
    width: number;
    error?: string;
    loading?: boolean;
    disabled?: boolean;
};
export declare const DropDownMulti: React.FC<Props>;
export {};
