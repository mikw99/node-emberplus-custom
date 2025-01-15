export declare enum MatrixType {
    oneToN = 0,
    oneToOne = 1,
    nToN = 2
}
declare type MatrixTypeStrings = keyof typeof MatrixType;
export declare function matrixTypeFromString(s: MatrixTypeStrings): MatrixType;
export declare function matrixTypeToString(t: MatrixType): string;
export {};
