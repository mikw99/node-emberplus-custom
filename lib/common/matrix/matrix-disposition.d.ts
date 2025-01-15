export declare enum MatrixDisposition {
    tally = 0,
    modified = 1,
    pending = 2,
    locked = 3
}
declare type MatrixDispositionStrings = keyof typeof MatrixDisposition;
export declare function matrixDispositionFromString(s: MatrixDispositionStrings): MatrixDisposition;
export {};
