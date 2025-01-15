import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
export interface LabelInterface {
    basePath: string;
    description: string;
}
export declare class Label {
    basePath: string;
    description: string;
    static get BERID(): number;
    constructor(basePath: string, description: string);
    static decode(ber: Reader): Label;
    encode(ber: Writer): void;
    toJSON(): LabelInterface;
}
