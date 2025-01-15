export declare enum StreamFormat {
    unsignedInt8 = 0,
    unsignedInt16BigEndian = 2,
    unsignedInt16LittleEndian = 3,
    unsignedInt32BigEndian = 4,
    unsignedInt32LittleEndian = 5,
    unsignedInt64BigEndian = 6,
    unsignedInt64LittleENdian = 7,
    signedInt8 = 8,
    signedInt16BigEndian = 9,
    signedInt16LittleEndian = 10,
    signedInt32BigEndian = 11,
    signedInt32LittleEndian = 12,
    signedInt64BigEndian = 13,
    signedInt64LittleEndian = 14,
    ieeeFloat32BigEndian = 15,
    ieeeFloat32LittleEndian = 16,
    ieeeFloat64BigEndian = 17,
    ieeeFloat64LittleEndian = 18
}
declare type StreamFormatStrings = keyof typeof StreamFormat;
export declare function streamFormatFromString(s: StreamFormatStrings): StreamFormat;
export {};
