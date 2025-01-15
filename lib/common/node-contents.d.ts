import { ExtendedReader as Reader } from '../ber';
import { Writer } from 'gdnet-asn1';
export interface JNodeContents {
    identifier?: string;
    description?: string;
    isRoot?: boolean;
    isOnline?: boolean;
    schemaIdentifiers?: string;
    templateReference?: string;
}
export declare class NodeContents {
    identifier?: string;
    description?: string;
    isOnline: boolean;
    isRoot: boolean;
    schemaIdentifiers: string;
    templateReference: string;
    constructor(identifier?: string, description?: string);
    static decode(ber: Reader): NodeContents;
    encode(ber: Writer): void;
    toJSON(res?: {
        [index: string]: any;
    }): JNodeContents;
}
