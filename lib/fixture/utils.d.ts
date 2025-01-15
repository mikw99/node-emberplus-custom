import { TreeNode } from '../common/tree-node';
export declare const testErrorReturned: (action: () => void, errorClass: any) => Error;
export declare const testErrorReturnedAsync: (action: () => Promise<void>, errorClass: any) => Promise<Error>;
export declare function getRootAsync(): Promise<TreeNode>;
export declare const init: (_src?: string[], _tgt?: string[]) => {
    [index: string]: any;
}[];
