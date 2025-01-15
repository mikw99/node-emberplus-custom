import { S101Socket } from './s101.socket';
export declare enum S101ClientEvent {
    CONNECTING = "connecting",
    CONNECTED = "connected",
    DISCONNECTED = "disconnected",
    ERROR = "error",
    EMBER_TREE = "emberTree"
}
export declare class S101Client extends S101Socket {
    private _address;
    private _port;
    static readonly DEFAULT_CONNECT_TIMEOUT = 2;
    constructor(_address: string, _port: number);
    get address(): string;
    get port(): number;
    connect(timeoutMsec?: number): void;
}
