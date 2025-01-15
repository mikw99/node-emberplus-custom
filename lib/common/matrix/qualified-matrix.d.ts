import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../../ber';
import { Matrix, MatrixConnections } from './matrix';
import { TreeNode } from '../tree-node';
import { Command } from '../command';
import { MatrixType } from './matrix-type';
import { MatrixMode } from './matrix-mode';
import { MatrixNode } from './matrix-node';
export declare class QualifiedMatrix extends Matrix {
    static get BERID(): number;
    constructor(path?: string, identifier?: string, type?: MatrixType, mode?: MatrixMode);
    static decode(ber: Reader): QualifiedMatrix;
    isQualified(): boolean;
    getCommand(cmd: Command): TreeNode;
    connect(connections: MatrixConnections): TreeNode;
    encode(ber: Writer): void;
    toElement(): MatrixNode;
}
