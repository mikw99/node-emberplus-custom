import { EmberServerInterface } from './ember-server.interface';
import { MatrixHandlers } from './matrix.handlers';
import { ClientRequest } from './client-request';
import { QualifiedNode } from '../common/qualified-node';
import { QualifiedMatrix } from '../common/matrix/qualified-matrix';
import { QualifiedParameter } from '../common/qualified-parameter';
import { Matrix } from '../common/matrix/matrix';
import { TreeNode } from '../common/tree-node';
import { LoggingService } from '../logging/logging.service';
export declare class QualifiedHandlers extends MatrixHandlers {
    constructor(server: EmberServerInterface, logger: LoggingService);
    handleQualifiedMatrix(client: ClientRequest, element: Matrix, matrix: Matrix): void;
    handleQualifiedNode(client: ClientRequest, node: QualifiedNode | QualifiedParameter | QualifiedMatrix): string;
    handleQualifiedParameter(client: ClientRequest, element: TreeNode, parameter: QualifiedParameter): void;
}
