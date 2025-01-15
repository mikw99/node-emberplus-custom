import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../../ber';
import { FunctionArgument, JFunctionArgument } from './function-argument';
export interface JFunctionContents {
    identifier: string;
    description: string;
    arguments: JFunctionArgument[];
    result: JFunctionArgument[];
    templateReference: string;
}
export declare class FunctionContents {
    private _identifier?;
    private _description?;
    private _arguments;
    private _result;
    private _templateReference?;
    constructor(_identifier?: string, _description?: string);
    get identifier(): string;
    set identifier(value: string);
    get description(): string;
    set description(description: string);
    get arguments(): FunctionArgument[];
    set arguments(value: FunctionArgument[]);
    get result(): FunctionArgument[];
    set result(result: FunctionArgument[]);
    get templateReference(): string;
    set templateReference(value: string);
    static decode(ber: Reader): FunctionContents;
    encode(ber: Writer): void;
    toJSON(): JFunctionContents;
}
