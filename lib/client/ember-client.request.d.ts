import { TreeNode } from '../common/tree-node';
export declare type RequestCallBack = (e?: Error) => void;
export declare class Request {
    private _node;
    private _func;
    private _timeoutError;
    constructor(_node: TreeNode, _func: RequestCallBack);
    get timeoutError(): Error;
    set timeoutError(value: Error);
    get node(): TreeNode;
    get func(): RequestCallBack;
}
