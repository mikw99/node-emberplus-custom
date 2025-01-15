/// <reference types="node" />
import { EventEmitter } from 'events';
import { SmartBuffer } from 'smart-buffer';
import { LoggingService } from '../logging/logging.service';
export declare enum S101CodecEvent {
    KEEP_ALIVE_REQUEST = "keepAliveReq",
    EMBER_PACKET = "emberPacket",
    KEEP_ALIVE_RESPONSE = "keepAliveResp"
}
export declare class S101Codec extends EventEmitter {
    private logger;
    inbuf: SmartBuffer;
    emberbuf: SmartBuffer;
    escaped: boolean;
    private pendingData;
    private isProcessing;
    constructor(logger?: LoggingService);
    static calculateCRC(buf: Buffer): number;
    static calculateCRCCE(buf: Buffer): number;
    static makeBERFrame(flags: number, data: Buffer): Buffer;
    static finalizeBuffer(smartbuf: SmartBuffer): Buffer;
    static validateFrame(buf: Buffer): boolean;
    dataIn(buf: Buffer): void;
    encodeBER: (data: Buffer) => Buffer[];
    keepAliveRequest(): Buffer;
    keepAliveResponse(): Buffer;
    private processData;
    private handleEmberPacket;
    private handleEmberFrame;
    private handleFrame;
    private decodeBuffer;
}
