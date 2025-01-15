import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
import { FunctionArgument, IFunctionArgument, JFunctionArgument } from './function/function-argument';
export interface IInvocation {
    id: number;
    arguments: IFunctionArgument[];
}
export interface JInvocation {
    id: number;
    arguments: JFunctionArgument[];
}
export declare class Invocation {
    id?: number;
    arguments: FunctionArgument[];
    constructor(id?: number, args?: FunctionArgument[]);
    static decode(ber: Reader): Invocation;
    static newInvocationID(): number;
    encode(ber: Writer): void;
    toJSON(): JInvocation;
    static get BERID(): number;
}
