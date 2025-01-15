import { StringIntegerPair, StringIntegerPairInterface } from './string-integer-pair';
import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
export declare class StringIntegerCollection {
    static get BERID(): number;
    private _collection;
    constructor();
    static decode(ber: Reader): StringIntegerCollection;
    addEntry(key: string, value: StringIntegerPair): void;
    get(key: string): StringIntegerPair;
    encode(ber: Writer): void;
    toJSON(): StringIntegerPairInterface[];
}
