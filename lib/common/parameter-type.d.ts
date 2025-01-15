export declare const ParameterTypeToBERTAG: (type: ParameterType) => number;
export declare const ParameterTypeFromBERTAG: (tag: number) => number;
declare type ParameterTypeStrings = keyof typeof ParameterType;
export declare function parameterTypeFromString(s: ParameterTypeStrings): ParameterType;
export declare function parameterTypeToString(t: ParameterType): string;
export declare enum ParameterType {
    integer = 1,
    real = 2,
    string = 3,
    boolean = 4,
    trigger = 5,
    enum = 6,
    octets = 7
}
export {};
