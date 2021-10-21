/// <reference types="react" />
declare type Props = {
    name: string;
    title: string;
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    width: number;
    rows: number;
    error?: string;
};
export declare const InputArea: React.FC<Props>;
export {};
