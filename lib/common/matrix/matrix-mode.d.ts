export declare enum MatrixMode {
    linear = 0,
    nonLinear = 1
}
declare type MatrixModeStrings = keyof typeof MatrixMode;
export declare function matrixModeFromString(s: MatrixModeStrings): MatrixMode;
export declare function matrixModeToString(m: MatrixMode): string;
export {};
