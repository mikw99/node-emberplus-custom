export declare enum ParameterAccess {
    none = 0,
    read = 1,
    write = 2,
    readWrite = 3
}
declare type ParameterAccessStrings = keyof typeof ParameterAccess;
export declare function parameterAccessFromString(s: ParameterAccessStrings): ParameterAccess;
export declare function parameterAccessToString(a: ParameterAccess): string;
export {};
