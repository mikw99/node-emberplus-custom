import { ExtendedReader as Reader } from '../../ber';
import { Element } from '../element';
import { FunctionArgument, JFunctionArgument } from './function-argument';
import { FunctionContents } from './function-contents';
import { QualifiedFunction } from './qualified-function';
export declare type FunctionCallBack = (args: FunctionArgument[]) => FunctionArgument[];
export interface JFunction {
    number: number;
    path: string;
    children: object[];
    identifier: string;
    description: string;
    arguments: JFunctionArgument[];
    result: JFunctionArgument[];
    templateReference: string;
}
export declare class Function extends Element {
    private _func?;
    get contents(): FunctionContents;
    get func(): FunctionCallBack;
    get arguments(): FunctionArgument[];
    set arguments(value: FunctionArgument[]);
    get result(): FunctionArgument[];
    get templateReference(): string;
    set templateReference(value: string);
    constructor(number: number, _func?: FunctionCallBack, identifier?: string);
    static decode(ber: Reader): Function;
    isFunction(): boolean;
    toQualified(): QualifiedFunction;
    static get BERID(): number;
}
