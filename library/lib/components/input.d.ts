/// <reference types="react" />
declare type Props = {
    name: string;
    title: string;
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    width: number;
    error?: string;
    info?: () => void;
};
export declare const Input: React.FC<Props>;
export {};
