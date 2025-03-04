/// <reference types="node" />
import { EventEmitter } from 'events';
import { TreeNode } from '../common/tree-node';
import { InvocationResult } from '../common/invocation-result';
import { QualifiedFunction } from '../common/function/qualified-function';
import { FunctionArgument } from '../common/function/function-argument';
import { Matrix } from '../common/matrix/matrix';
import { Parameter } from '../common/parameter';
import { QualifiedParameter } from '../common/qualified-parameter';
import { Function } from '../common/function/function';
import { LoggingService, LogLevel } from '../logging/logging.service';
import { SocketStatsInterface } from '../socket/s101.socket';
import { ParameterType } from '../common/parameter-type';
export declare const DEFAULT_PORT = 9000;
export declare const DEFAULT_TIMEOUT = 3000;
export interface EmberClientOptions {
    timeoutValue?: number;
    logger?: LoggingService;
    host: string;
    port?: number;
}
export declare class EmberClient extends EventEmitter {
    timeoutValue: number;
    root: TreeNode;
    private _logger;
    private _host;
    private _port;
    private _streams;
    private _pendingRequests;
    private _activeRequest;
    private _timeout;
    private _callback?;
    private _requestID;
    private socket;
    private get logger();
    constructor(options: EmberClientOptions);
    static isDirectSubPathOf(path: string, parent: string): boolean;
    connectAsync(timeout?: number): Promise<void>;
    disconnectAsync(): Promise<void>;
    expandAsync(node?: TreeNode, callback?: (d: TreeNode) => void): Promise<void>;
    getDirectoryAsync(qNode?: TreeNode, callback?: (d: TreeNode) => void): Promise<TreeNode | null>;
    getElementByPathAsync(path: string, callback?: (d: TreeNode) => void): Promise<TreeNode>;
    getStats(): SocketStatsInterface;
    invokeFunctionAsync(fnNode: Function | QualifiedFunction, params: FunctionArgument[]): Promise<InvocationResult>;
    isConnected(): boolean;
    matrixConnectAsync(matrixNode: Matrix, targetID: number, sources: number[]): Promise<Matrix>;
    matrixDisconnectAsync(matrixNode: Matrix, targetID: number, sources: number[]): Promise<Matrix>;
    matrixSetConnection(matrixNode: Matrix, targetID: number, sources: number[]): Promise<Matrix>;
    saveTree(f: (x: Buffer) => void): void;
    setLogLevel(logLevel: LogLevel): void;
    setValueAsync(node: Parameter | QualifiedParameter, value: string | number | boolean | Buffer, type?: ParameterType): Promise<void>;
    subscribeAsync(qNode: Parameter | Matrix | QualifiedParameter, callback?: (d: TreeNode) => void): Promise<void>;
    unsubscribeAsync(qNode: Parameter | QualifiedParameter, callback: (d: TreeNode) => void): Promise<void>;
    private matrixOperationAsync;
    private handleRoot;
    private finishRequest;
    private makeRequest;
    private makeRequestAsync;
    private clearTimeout;
    private handleNode;
    private handleQualifiedNode;
}
