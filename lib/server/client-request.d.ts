import { S101Socket } from '../socket/s101.socket';
import { Command } from '../common/command';
import { TreeNode } from '../common/tree-node';
import { InvocationResult } from '../common/invocation-result';
export declare class ClientRequest {
    socket: S101Socket;
    request: TreeNode | Command | InvocationResult;
    constructor(socket: S101Socket, request: TreeNode | Command | InvocationResult);
}
