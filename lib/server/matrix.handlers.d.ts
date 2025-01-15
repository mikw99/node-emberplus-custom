import { EmberServerInterface } from './ember-server.interface';
import { ElementHandlers } from './element-handlers';
import { Matrix, MatrixConnections } from '../common/matrix/matrix';
import { ClientRequest } from './client-request';
import { LoggingService } from '../logging/logging.service';
export declare class MatrixHandlers extends ElementHandlers {
    constructor(server: EmberServerInterface, logger: LoggingService);
    getDisconnectSource(matrix: Matrix, targetID: number): number;
    handleMatrixConnections(client: ClientRequest, matrix: Matrix, connections: MatrixConnections, response?: boolean): void;
}
