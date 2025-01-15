import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
import { Element } from './element';
import { QualifiedTemplate } from './qualified-template';
export declare class Template extends Element {
    element?: Element;
    static get BERID(): number;
    get description(): string | null;
    set description(description: string);
    protected _description?: string;
    constructor(number: number, element?: Element);
    static decode(ber: Reader): Template;
    encode(ber: Writer): void;
    isTemplate(): boolean;
    toQualified(): QualifiedTemplate;
    update(other: Template | QualifiedTemplate): boolean;
}
