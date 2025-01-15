import { QualifiedHandlers } from './qualified.handlers';
import { S101Socket } from '../socket/s101.socket';
import { TreeNode } from '../common/tree-node';
import { ClientRequest } from './client-request';
import { Element } from '../common/element';
import { EmberServerInterface } from './ember-server.interface';
import { LoggingService } from '../logging/logging.service';
export declare class NodeHandlers extends QualifiedHandlers {
    constructor(server: EmberServerInterface, logger: LoggingService);
    handleRoot(socket: S101Socket, root: TreeNode): string;
    handleNode(client: ClientRequest, node: Element): string;
}
