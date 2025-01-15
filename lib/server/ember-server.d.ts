/// <reference types="node" />
import { EventEmitter } from 'events';
import { S101Socket, SocketStatsInterface } from '../socket/s101.socket';
import { LoggingService, LogLevel } from '../logging/logging.service';
import { MatrixOperation } from '../common/matrix/matrix-operation';
import { TreeNode } from '../common/tree-node';
import { ClientRequest } from './client-request';
import { Matrix } from '../common/matrix/matrix';
import { MatrixConnection } from '../common/matrix/matrix-connection';
import { Parameter } from '../common/parameter';
import { QualifiedParameter } from '../common/qualified-parameter';
export interface EmberServerOptions {
    host: string;
    port?: number;
    tree: TreeNode;
    logger?: LoggingService;
}
export interface ClientInfo {
    remoteAddress: string;
    stats: SocketStatsInterface;
}
export interface ClientErrorEventData {
    remoteAddress: string;
    error: Error;
}
export declare enum EmberServerEvent {
    LISTENING = "listening",
    REQUEST = "request",
    ERROR = "error",
    DISCONNECT = "disconnect",
    CLIENT_ERROR = "clientError",
    CONNECTION = "connection",
    DISCONNECTED = "disconnected",
    EVENT = "event",
    MATRIX_CHANGE = "matrix-change",
    MATRIX_CONNECT = "matrix-connect",
    MATRIX_DISCONNECT = "matrix-disconnect",
    VALUE_CHANGE = "value-change"
}
export declare class EmberServer extends EventEmitter {
    options: EmberServerOptions;
    get host(): string;
    get port(): number;
    get tree(): TreeNode;
    get connectedClientsCount(): number;
    private get logger();
    static readonly TIMEOUT_MS = 2000;
    private _host;
    private _port;
    private _tree;
    private _logger?;
    private server;
    private subscribers;
    private clients;
    private _handlers;
    constructor(options: EmberServerOptions);
    static validateMatrixOperation(matrix: Matrix, target: number, sources: number[]): void;
    static doMatrixOperation(server: EmberServer, path: string, target: number, sources: number[], operation: MatrixOperation): void;
    static createTreeFromJSON(obj: object, logger?: LoggingService): TreeNode;
    getConnectedClients(): ClientInfo[];
    closeAsync(): Promise<void>;
    listen(): Promise<void>;
    matrixConnect(path: string, target: number, sources: number[]): void;
    matrixDisconnect(path: string, target: number, sources: number[]): void;
    matrixSet(path: string, target: number, sources: number[]): void;
    preMatrixConnect(matrix: Matrix, connection: MatrixConnection, res: Matrix, client: ClientRequest, response: boolean): void;
    setLogLevel(logLevel: LogLevel): void;
    setValue(parameter: Parameter | QualifiedParameter, value: string | number | Buffer | boolean, origin?: S101Socket): Promise<void>;
    toJSON(): any;
    private applyMatrixConnect;
    private getDisconnectSource;
    private disconnectMatrixTarget;
    private disconnectSources;
    private applyMatrixOneToNDisconnect;
    private generateEvent;
    private createResponse;
    private createQualifiedResponse;
    private handleError;
    private handleRoot;
    private subscribe;
    private toServerInterface;
    private unsubscribe;
    private updateSubscribers;
}
