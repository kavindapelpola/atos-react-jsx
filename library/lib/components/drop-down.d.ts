/// <reference types="react" />
declare type Props = {
    name: string;
    title: string;
    options: string[];
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    width: number;
    error?: string;
};
export declare const DropDown: React.FC<Props>;
export {};
