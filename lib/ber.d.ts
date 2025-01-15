/// <reference types="node" />
import BER from 'gdnet-asn1';
import Long = require('long');
export declare const APPLICATION: (x: number) => number;
export declare const CONTEXT: (x: number) => number;
export declare const UNIVERSAL: (x: number) => number;
export declare const EMBER_BOOLEAN = 1;
export declare const EMBER_INTEGER = 2;
export declare const EMBER_BITSTRING = 3;
export declare const EMBER_OCTETSTRING = 4;
export declare const EMBER_NULL = 5;
export declare const EMBER_OBJECTIDENTIFIER = 6;
export declare const EMBER_OBJECTDESCRIPTOR = 7;
export declare const EMBER_EXTERNAL = 8;
export declare const EMBER_REAL = 9;
export declare const EMBER_ENUMERATED = 10;
export declare const EMBER_EMBEDDED = 11;
export declare const EMBER_STRING = 12;
export declare const EMBER_RELATIVE_OID = 13;
export declare const EMBER_SEQUENCE: number;
export declare const EMBER_SET: number;
export declare class ExtendedReader extends BER.Reader {
    constructor(data: Buffer);
    getSequence(tag: number): ExtendedReader;
    readValue(): any;
    readReal(tag?: number): number;
}
export declare class ExtendedWriter extends BER.Writer {
    constructor(options?: BER.WriterOptions);
    static _shorten(value: number): {
        size: number;
        value: number;
    };
    static _shortenLong(value: Long): {
        size: number;
        value: Long;
    };
    writeIfDefined(property: any, writer: (b: any, tag?: number) => void, outer: number, inner?: number): void;
    writeIfDefinedEnum(property: any, type: any, writer: (value: any, tag: number) => void, outer: number, inner: number): void;
    writeReal(value: number, tag?: number): void;
    writeValue(value: any, tag?: number): void;
}
