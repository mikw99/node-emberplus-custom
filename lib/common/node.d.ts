import { ExtendedReader as Reader } from '../ber';
import { Element } from './element';
import { NodeContents } from './node-contents';
import { QualifiedNode } from './qualified-node';
export interface JNode {
    number: number;
    path: string;
    children: object[];
    identifier?: string;
    description?: string;
    isRoot?: boolean;
    isOnline?: boolean;
    schemaIdentifiers?: string;
    templateReference?: string;
}
export declare class Node extends Element {
    static get BERID(): number;
    get contents(): NodeContents;
    get isOnline(): boolean | null;
    set isOnline(isOnline: boolean);
    get schemaIdentifiers(): string | null;
    set schemaIdentifiers(schemaIdentifiers: string);
    constructor(number: number, identifier?: string);
    static decode(ber: Reader): Node;
    isNode(): boolean;
    toQualified(): QualifiedNode;
}
