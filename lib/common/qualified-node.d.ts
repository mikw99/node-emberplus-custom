import { ExtendedReader as Reader } from '../ber';
import { QualifiedElement } from './qualified-element';
import { NodeContents } from './node-contents';
import { Node } from './node';
export declare class QualifiedNode extends QualifiedElement {
    static get BERID(): number;
    get contents(): NodeContents;
    get isOnline(): boolean | null;
    set isOnline(isOnline: boolean);
    get schemaIdentifiers(): string | null;
    set schemaIdentifiers(schemaIdentifiers: string);
    constructor(path: string, identifier?: string);
    static decode(ber: Reader): QualifiedNode;
    isNode(): boolean;
    toElement(): Node;
}
