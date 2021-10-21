/// <reference types="react" />
declare type Props = {
    title: string;
    user: string;
    prodUrl: string;
    lang?: string;
    langs?: string[];
    setLang?: React.Dispatch<React.SetStateAction<string>>;
};
export declare const Title: React.FC<Props>;
export {};
