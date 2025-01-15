import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
export interface StringIntegerPairInterface {
    key: string;
    value: number;
}
export declare class StringIntegerPair {
    private _key;
    private _value;
    static get BERID(): number;
    get key(): string;
    set key(key: string);
    get value(): number;
    set value(value: number);
    constructor(_key: string, _value: number);
    static decode(ber: Reader): StringIntegerPair;
    encode(ber: Writer): void;
    toJSON(): StringIntegerPairInterface;
}
