export declare enum MatrixOperation {
    absolute = 0,
    connect = 1,
    disconnect = 2
}
declare type MatrixOperationStrings = keyof typeof MatrixOperation;
export declare function matrixOperationFromString(s: MatrixOperationStrings): MatrixOperation;
export {};
