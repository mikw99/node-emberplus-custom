import { PacketStats } from './s101.packet-stats.socket';
export interface RateStats {
    [index: string]: number | {
        rxByteSecond: number;
        txByteSecond: number;
        rxPacketSecond: number;
        txPacketSecond: number;
    };
}
export declare class StatsCollector {
    private stats;
    constructor();
    add(stats: PacketStats): void;
    getStats(): RateStats;
    static get intervals(): {
        name: string;
        interval: number;
    }[];
}
