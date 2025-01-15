export declare const enum LogLevel {
    critical = 1,
    error = 2,
    warn = 3,
    info = 4,
    debug = 5
}
export interface LogEventConstructor {
    logLevel: LogLevel;
    createLog: (...args: any[]) => LoggingEvent;
}
export interface LoggingEventInterface {
    logLevel: LogLevel;
    type: string;
    arguments: any[];
    error: Error;
    timestamp: number;
    isError: () => boolean;
    toString: () => string;
}
export declare class LoggingEvent implements LoggingEventInterface {
    private message;
    readonly logLevel: LogLevel;
    readonly type: string;
    get timestamp(): number;
    get arguments(): any[];
    get error(): Error;
    private _timestamp;
    private args;
    constructor(message: string | Error, logLevel: LogLevel, type: string, ...args: any[]);
    isError(): boolean;
    toString(): string;
}
export declare class LoggingService {
    private logLevel;
    constructor(logLevel?: LogLevel);
    _log(msg: string | Error, ...args: any[]): void;
    critic(msg: string, ...args: any[]): void;
    debug(msg: string, ...args: any[]): void;
    error(msg: string | Error, ...args: any[]): void;
    info(msg: string, ...args: any[]): void;
    warn(msg: string | Error, ...args: any[]): void;
    setLogLevel(level: LogLevel): void;
    log(logEvent: LogEventConstructor): void;
}
