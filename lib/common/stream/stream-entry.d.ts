/// <reference types="node" />
import { ExtendedReader, ExtendedWriter } from '../../ber';
export interface StreamEntryInterface {
    identifier: number;
    value: string | number | boolean | Buffer;
}
export declare class StreamEntry implements StreamEntryInterface {
    identifier: number;
    value: string | number | boolean | Buffer;
    constructor(identifier: number, value: string | number | boolean | Buffer);
    static decode(ber: ExtendedReader): StreamEntry;
    encode(ber: ExtendedWriter): void;
    toJSON(): StreamEntryInterface;
    static get BERID(): number;
}
