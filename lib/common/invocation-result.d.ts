import { ExtendedWriter as Writer, ExtendedReader as Reader } from '../ber';
import { FunctionArgument, JFunctionArgument } from './function/function-argument';
import { ElementBase } from './element.base';
export interface InvocationResultInterface {
    invocationId: number;
    success: boolean;
    result: JFunctionArgument[];
}
export declare class InvocationResult extends ElementBase {
    invocationId?: number;
    success?: boolean;
    result?: FunctionArgument[];
    constructor(invocationId?: number, success?: boolean, result?: FunctionArgument[]);
    static decode(ber: Reader): InvocationResult;
    encode(ber: Writer): void;
    isInvocationResult(): boolean;
    setFailure(): void;
    setSuccess(): void;
    setResult(result: FunctionArgument[]): void;
    toJSON(): InvocationResultInterface;
    toQualified(): InvocationResult;
    static get BERID(): number;
}
