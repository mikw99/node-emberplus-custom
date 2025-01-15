/// <reference types="node" />
import { EventEmitter } from 'events';
import { S101Codec } from './s101.codec';
import { Socket } from 'net';
import { TreeNode } from '../common/tree-node';
import { PacketStatsInterface } from './s101.packet-stats.socket';
import { StatsCollector, RateStats } from './stats-collector';
export declare type S101SocketStatus = 'connected' | 'disconnected';
export declare enum S101SocketEvent {
    EMBER_TREE = "emberTree",
    EMBER_PACKET = "emberPacket",
    ERROR = "error",
    DISCONNECTED = "disconnected",
    KEEP_ALIVE_RESPONSE = "keepAlive-response",
    KEEP_ALIVE_REQUEST = "keepAlive-request",
    DEAD = "dead"
}
export declare enum SocketEvent {
    TIMEOUT = "timeout",
    ERROR = "error",
    DATA = "data",
    CLOSE = "close",
    END = "end"
}
export interface SocketStatsInterface {
    keepAliveRequests: PacketStatsInterface;
    keepAliveResponses: PacketStatsInterface;
    s101Messages: RateStats;
}
export declare class S101Socket extends EventEmitter {
    private _socket?;
    get socket(): Socket;
    set socket(value: Socket);
    get status(): string;
    get remoteAddress(): string;
    static readonly DEFAULT_KEEP_ALIVE_INTERVAL = 10;
    keepAliveIntervalSec: number;
    deadTimeout: number;
    codec: S101Codec;
    rateStats: StatsCollector;
    protected _remoteAddress: string;
    protected _status: S101SocketStatus;
    protected deadTimer: NodeJS.Timeout;
    private keepAliveIntervalTimer;
    private pendingRequests;
    private activeRequest;
    private keepAliveRequestStats;
    private keepAliveResponseStats;
    private s101MessageStats;
    private statsTimer;
    constructor(_socket?: Socket);
    isConnected(): boolean;
    queueMessage(node: TreeNode): void;
    disconnectAsync(timeout?: number): Promise<void>;
    sendBERNode(node: TreeNode): void;
    getStats(): SocketStatsInterface;
    startDeadTimer(): void;
    startKeepAlive(): void;
    setKeepAliveInterval(value: number): void;
    stopKeepAlive(): void;
    protected _clearTimers(): void;
    protected initSocket(): void;
    protected handleClose(): void;
    private handleKeepAliveResponse;
    private handleKeepAliveRequest;
    private handleEmberPacket;
    private collectStat;
    private addRequest;
    private clearDeadTimer;
    private handleDeadTimeout;
    private makeRequest;
    private sendBER;
    private sendKeepAliveRequest;
    private sendKeepAliveResponse;
}
