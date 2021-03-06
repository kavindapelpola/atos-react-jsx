/// <reference types="react" />
declare type Props = {
    name: string;
    title: string;
    value: boolean | undefined;
    onChange: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    error?: string;
};
export declare const CheckBox: React.FC<Props>;
export {};
