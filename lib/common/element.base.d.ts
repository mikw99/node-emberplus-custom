export declare abstract class ElementBase {
    _parent: ElementBase;
    isCommand(): boolean;
    isInvocationResult(): boolean;
    isNode(): boolean;
    isMatrix(): boolean;
    isParameter(): boolean;
    isFunction(): boolean;
    isRoot(): boolean;
    isQualified(): boolean;
    isStream(): boolean;
    isTemplate(): boolean;
}
