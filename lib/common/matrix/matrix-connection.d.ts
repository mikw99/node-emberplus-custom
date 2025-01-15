import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../../ber';
import { MatrixDisposition } from './matrix-disposition';
import { MatrixOperation } from './matrix-operation';
export interface JMatrixConnection {
    target: number;
    sources?: number[];
}
export declare class MatrixConnection {
    target?: number;
    sources?: number[];
    operation: MatrixOperation;
    disposition?: MatrixDisposition;
    private _locked;
    constructor(target?: number);
    static decode(ber: Reader): MatrixConnection;
    connectSources(sources: number[]): void;
    disconnectSources(sources: number[]): void;
    encode(ber: Writer): void;
    isDifferent(sources: number[]): boolean;
    isLocked(): boolean;
    lock(): void;
    setSources(sources: number[]): void;
    validateSources(sources?: number[]): null | number[];
    unlock(): void;
    static get BERID(): number;
}
