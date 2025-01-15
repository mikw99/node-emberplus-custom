import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
import { Invocation, IInvocation, JInvocation } from './invocation';
import { ElementBase } from './element.base';
export declare enum FieldFlags {
    sparse = -2,
    all = -1,
    default = 0,
    identifier = 1,
    description = 2,
    tree = 3,
    value = 4,
    connections = 5
}
export interface ICommand {
    number: number;
    fieldFlags: FieldFlags;
    invocation: IInvocation | null;
}
export interface JCommand {
    number: number;
    fieldFlags: FieldFlags;
    invocation: JInvocation | null;
}
export declare class Command extends ElementBase {
    number?: number;
    fieldFlags: FieldFlags;
    invocation: Invocation;
    constructor(number?: number);
    static decode(ber: Reader): Command;
    static getCommand(cmd: number, key: string, value: any): Command;
    static getInvocationCommand(invocation: Invocation): Command;
    isCommand(): boolean;
    encode(ber: Writer): void;
    getNumber(): number;
    toJSON(): JCommand;
    static get BERID(): number;
}
