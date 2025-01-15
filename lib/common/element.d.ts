import { ExtendedWriter as Writer } from '../ber';
import { TreeNode } from './tree-node';
export declare class Element extends TreeNode {
    constructor(number: number);
    encode(ber: Writer): void;
}
