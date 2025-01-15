/// <reference types="node" />
import { ParameterType } from './parameter-type';
import { ParameterAccess } from './parameter-access';
import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
import { StringIntegerCollection } from './string-integer-collection';
import { StreamDescription } from './stream/stream-description';
export interface JParameterContents {
    identifier: string;
    description?: string;
    value?: string | number | boolean | Buffer;
    minimum?: string | number | boolean | Buffer;
    maximum?: string | number | boolean | Buffer;
    access?: string;
    format?: string;
    enumeration?: string;
    factor?: number;
    isOnline?: boolean;
    formula?: string;
    step?: number;
    default?: string | number | boolean | Buffer;
    type?: string;
    streamIdentifier?: number;
    enumMap?: object;
    streamDescriptor?: object;
    schemaIdentifiers?: string;
    templateReference?: string;
}
export declare class ParameterContents {
    type?: ParameterType;
    value?: string | number | boolean | Buffer;
    identifier?: string;
    description?: string;
    minimum?: string | number | boolean | Buffer;
    maximum?: string | number | boolean | Buffer;
    access?: ParameterAccess;
    format?: string;
    enumeration?: string;
    factor?: number;
    isOnline?: boolean;
    formula?: string;
    step?: number;
    default?: string | number | boolean | Buffer;
    streamIdentifier?: number;
    enumMap?: StringIntegerCollection;
    streamDescriptor?: StreamDescription;
    schemaIdentifiers?: string;
    templateReference?: string;
    constructor(type?: ParameterType, value?: string | number | boolean | Buffer);
    static createParameterContent(value: number | string | boolean | Buffer, type?: ParameterType): ParameterContents;
    static decode(ber: Reader): ParameterContents;
    encode(ber: Writer): void;
    toJSON(res?: {
        [index: string]: any;
    }): JParameterContents;
}
