export declare enum Types {
    UNKNOWN = 0,
    SETVALUE = 1,
    GETDIRECTORY = 2,
    SUBSCRIBE = 3,
    UNSUBSCRIBE = 4,
    INVOKE = 5,
    MATRIX_CONNECTION = 6
}
export declare class ServerEvents {
    private txt;
    readonly type: Types;
    get timestamp(): number;
    private _timestamp;
    constructor(txt: string, type?: Types);
    static SETVALUE(identifier: string, path: string, src: string): ServerEvents;
    static GETDIRECTORY(identifier: string, path: string, src: string): ServerEvents;
    static SUBSCRIBE(identifier: string, path: string, src: string): ServerEvents;
    static UNSUBSCRIBE(identifier: string, path: string, src: string): ServerEvents;
    static INVOKE(identifier: string, path: string, src: string): ServerEvents;
    static MATRIX_CONNECTION(identifier: string, path: string, src: string, target: number, sources: number[]): ServerEvents;
    toString(): string;
}
