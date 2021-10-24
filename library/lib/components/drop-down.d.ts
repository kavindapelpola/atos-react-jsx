/// <reference types="react" />
declare type Props = {
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
export declare const DropDown: React.FC<Props>;
export {};
