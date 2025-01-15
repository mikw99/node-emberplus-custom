import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
import { QualifiedElement } from './qualified-element';
import { Element } from './element';
import { Template } from './template';
export declare class QualifiedTemplate extends QualifiedElement {
    element?: Element;
    static get BERID(): number;
    get description(): string | null;
    set description(description: string);
    protected _description?: string;
    constructor(path: string, element?: Element);
    static decode(ber: Reader): QualifiedTemplate;
    isTemplate(): boolean;
    encode(ber: Writer): void;
    toElement(): Template;
    update(element: Element): boolean;
}
