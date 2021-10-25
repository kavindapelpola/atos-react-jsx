/// <reference types="react" />
declare type Props = {
    name: string;
    title?: string;
    value: string | undefined;
    onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
    onBlur?: () => void;
    width: number;
    rows: number;
    error?: string;
    info?: () => void;
    disabled?: boolean;
};
export declare const InputArea: React.FC<Props>;
export {};
