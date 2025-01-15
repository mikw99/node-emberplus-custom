import { ExtendedWriter as Writer, ExtendedReader as Reader } from '../../ber';
import { StreamFormat } from './stream-format';
export interface StreamDescriptionInterface {
    format: StreamFormat;
    offset: number;
}
export declare class StreamDescription {
    format: StreamFormat;
    offset: number;
    constructor(format: StreamFormat, offset: number);
    static decode(ber: Reader): StreamDescription;
    encode(ber: Writer): void;
    toJSON(): StreamDescriptionInterface;
    static get BERID(): number;
}
