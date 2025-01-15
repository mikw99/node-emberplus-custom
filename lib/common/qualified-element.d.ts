import { ExtendedWriter as Writer } from '../ber';
import { Command } from './command';
import { TreeNode } from './tree-node';
export declare class QualifiedElement extends TreeNode {
    constructor(path: string);
    isQualified(): boolean;
    encode(ber: Writer): void;
    getCommand(cmd: Command): TreeNode;
    toQualified(): QualifiedElement;
}
