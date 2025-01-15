/// <reference types="node" />
import { EventEmitter } from 'events';
import net = require('net');
export declare type S101ServerStatus = 'disconnected' | 'listening';
export declare enum S101ServerEvent {
    CONNECTION = "connection",
    LISTENING = "listening",
    ERROR = "error",
    DISCONNECTED = "disconnected"
}
export declare enum SocketServerEvent {
    LISTENING = "listening",
    ERROR = "error"
}
export declare class S101Server extends EventEmitter {
    private _address;
    private _port;
    private _server;
    private _status;
    constructor(_address: string, _port: number);
    get address(): string;
    private get server();
    get port(): number;
    get status(): S101ServerStatus;
    addClient(socket: net.Socket): void;
    close(cb: (err?: Error) => void): void;
    listen(timeout?: number): Promise<void>;
}
