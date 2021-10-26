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
    disabled?: boolean;
    testId?: string;
    hint?: string;
};
export declare const Input: React.FC<Props>;
export {};
