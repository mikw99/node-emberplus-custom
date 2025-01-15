import { ExtendedReader as Reader } from '../../ber';
import { QualifiedElement } from '../qualified-element';
import { FunctionContents } from './function-contents';
import { FunctionArgument } from './function-argument';
import { Function } from './function';
export declare class QualifiedFunction extends QualifiedElement {
    func?: (x: FunctionArgument[]) => FunctionArgument[];
    static get BERID(): number;
    get contents(): FunctionContents;
    get arguments(): FunctionArgument[];
    set arguments(value: FunctionArgument[]);
    get result(): FunctionArgument[];
    get templateReference(): string;
    set templateReference(value: string);
    constructor(path: string, func?: (x: FunctionArgument[]) => FunctionArgument[], identifier?: string);
    static decode(ber: Reader): QualifiedFunction;
    isFunction(): boolean;
    toElement(): Function;
}
