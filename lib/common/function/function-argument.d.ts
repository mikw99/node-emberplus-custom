import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../../ber';
import { ParameterType } from '../parameter-type';
export interface IFunctionArgument {
    type: ParameterType;
    name: string;
    value: any;
}
export interface JFunctionArgument {
    type: string;
    name: string;
    value: any;
}
export declare class FunctionArgument {
    private _type;
    private _value?;
    private _name?;
    constructor(_type: ParameterType, _value?: any, _name?: string);
    get value(): any;
    set value(value: any);
    get type(): ParameterType;
    get name(): string;
    static decode(ber: Reader): FunctionArgument;
    encode(ber: Writer): void;
    toJSON(): JFunctionArgument;
    static get BERID(): number;
}
