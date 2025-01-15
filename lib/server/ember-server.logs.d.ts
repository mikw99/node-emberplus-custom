import { LogEventConstructor } from '../logging/logging.service';
export declare const ServerLogs: {
    [index: string]: (...args: any[]) => LogEventConstructor;
};
