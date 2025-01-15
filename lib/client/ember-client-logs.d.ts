import { LogEventConstructor } from '../logging/logging.service';
export declare const ClientLogs: {
    [index: string]: (...args: any[]) => LogEventConstructor;
};
