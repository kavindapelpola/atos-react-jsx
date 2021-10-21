/// <reference types="react" />
declare type Props = {
    name: string;
    title: string;
    options: string[];
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    width: number;
};
export declare const Select: React.FC<Props>;
export {};
