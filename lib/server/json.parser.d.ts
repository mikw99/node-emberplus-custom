import { TreeNode } from '../common/tree-node';
import { MatrixNode } from '../common/matrix/matrix-node';
import { LoggingService } from '../logging/logging.service';
export declare class JSONParser {
    static logger: LoggingService | null;
    static getJSONParser(_logger?: LoggingService): typeof JSONParser;
    static parseMatrixContent(number: number, content: {
        [index: string]: any;
    }): MatrixNode;
    static parseObj(parent: TreeNode, obj: {
        [index: string]: any;
    }): void;
}
