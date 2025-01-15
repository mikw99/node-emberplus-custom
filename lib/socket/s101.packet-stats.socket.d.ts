export interface PacketStatsInterface {
    txPackets: number;
    rxPackets: number;
    txFailures: number;
    txBytes: number;
    rxBytes: number;
    rxByteSecond: number;
    txByteSecond: number;
    txPacketSecond: number;
    rxPacketSecond: number;
    timestamp: number;
}
export declare class PacketStats implements PacketStatsInterface {
    txPackets: number;
    rxPackets: number;
    txFailures: number;
    txBytes: number;
    rxBytes: number;
    rxPacketSecond: number;
    txPacketSecond: number;
    rxByteSecond: number;
    txByteSecond: number;
    timestamp: number;
    constructor();
    computeRate(stats: PacketStats): void;
    getNewPacketStats(): PacketStats;
    reset(): void;
    toJSON(): PacketStatsInterface;
    private computeByteRate;
    private computePacketRate;
}
