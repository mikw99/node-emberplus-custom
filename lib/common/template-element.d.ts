import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../ber';
import { Template } from './template';
import { Parameter } from './parameter';
import { MatrixNode } from './matrix/matrix-node';
import { Node } from './node';
import { QualifiedTemplate } from './qualified-template';
import { Function } from '../common/function/function';
export declare abstract class TemplateElement {
    static decode(ber: Reader): Parameter | Node | Function | MatrixNode;
    static decodeContent(template: Template | QualifiedTemplate, tag: number, ber: Reader): void;
    static encodeContent(template: Template | QualifiedTemplate, ber: Writer): void;
}
