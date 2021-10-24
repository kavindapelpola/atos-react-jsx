/// <reference types="react" />
declare type Props = {
    name: string;
    title?: string;
    value: string | undefined;
    onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
    onBlur?: () => void;
    width: number;
    error?: string;
    info?: () => void;
};
export declare const Input: React.FC<Props>;
export {};
