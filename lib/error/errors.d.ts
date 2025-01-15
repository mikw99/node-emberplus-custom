export declare class UnimplementedEmberTypeError extends Error {
    constructor(tag?: number);
}
export declare class S101SocketError extends Error {
    constructor(message: string);
}
export declare class ASN1Error extends Error {
    constructor(message: string);
}
export declare class InvalidEmberResponseError extends Error {
    constructor(req: string);
}
export declare class EmberTimeoutError extends Error {
    constructor(message: string);
}
export declare class InvalidCommandError extends Error {
    constructor(number: number);
}
export declare class MissingElementNumberError extends Error {
    constructor();
}
export declare class MissingElementContentsError extends Error {
    constructor(path: string);
}
export declare class UnknownElementError extends Error {
    constructor(path: string);
}
export declare class InvalidRequestError extends Error {
    constructor();
}
export declare class InvalidRequestFormatError extends Error {
    constructor(path: string);
}
export declare class InvalidEmberNodeError extends Error {
    constructor(path?: string, info?: string);
}
export declare class PathDiscoveryFailureError extends Error {
    constructor(path: string);
    static getMessage(path: string): string;
    setPath(path: string): void;
}
export declare class InvalidBERFormatError extends Error {
    constructor(info?: string);
}
export declare class InvalidMatrixSignalError extends Error {
    constructor(value: number, info: string);
}
export declare class ErrorMultipleError extends Error {
    errors: Error[];
    constructor(errors: Error[]);
}
export declare class InvalidFunctionCallError extends Error {
    constructor(msg: string);
}
export declare class UnsupportedValueError extends Error {
    constructor(value: any);
}
