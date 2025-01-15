import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../../ber';
import { Matrix } from './matrix';
import { QualifiedMatrix } from './qualified-matrix';
import { MatrixType } from './matrix-type';
import { MatrixMode } from './matrix-mode';
export declare class MatrixNode extends Matrix {
    constructor(number: number, identifier?: string, type?: MatrixType, mode?: MatrixMode);
    static decode(ber: Reader): MatrixNode;
    encode(ber: Writer): void;
    getMinimal(complete?: boolean): MatrixNode;
    toQualified(): QualifiedMatrix;
    static get BERID(): number;
}
