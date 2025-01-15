/// <reference types="node" />
import { ExtendedReader, ExtendedWriter } from '../../ber';
import { StreamEntry } from './stream-entry';
export interface StreamCollectionInterface {
    identifier: number;
    value: string | number | boolean | Buffer;
}
export declare class StreamCollection {
    static get BERID(): number;
    private elements;
    constructor();
    static decode(ber: ExtendedReader): StreamCollection;
    addEntry(entry: StreamEntry): void;
    removeEntry(entry: StreamEntry): void;
    getEntry(identifier: number): StreamEntry;
    size(): number;
    encode(ber: ExtendedWriter): void;
    [Symbol.iterator](): any;
    toJSON(): StreamCollectionInterface[];
}
