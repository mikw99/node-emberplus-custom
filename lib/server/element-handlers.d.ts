import { EmberServerInterface } from './ember-server.interface';
import { Command } from '../common/command';
import { ClientRequest } from './client-request';
import { TreeNode } from '../common/tree-node';
import { Invocation } from '../common/invocation';
import { QualifiedFunction } from '../common/function/qualified-function';
import { Function } from '../common/function/function';
import { LoggingService } from '../logging/logging.service';
export declare class ElementHandlers {
    private _server;
    private _logger;
    constructor(_server: EmberServerInterface, _logger: LoggingService);
    protected get logger(): LoggingService;
    protected get server(): EmberServerInterface;
    handleCommand(client: ClientRequest, element: TreeNode, cmd: Command): void;
    handleGetDirectory(client: ClientRequest, element: TreeNode): void;
    handleInvoke(client: ClientRequest, invocation: Invocation, element: Function | QualifiedFunction): void;
    handleSubscribe(client: ClientRequest, element: TreeNode): void;
    handleUnSubscribe(client: ClientRequest, element: TreeNode): void;
}
