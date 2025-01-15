import { MatrixType } from './matrix-type';
import { MatrixMode } from './matrix-mode';
import { ExtendedReader as Reader, ExtendedWriter as Writer } from '../../ber';
import { Label, LabelInterface } from '../label';
export interface JMatrixContents {
    identifier?: string;
    description?: string;
    targetCount?: number;
    sourceCount?: number;
    maximumTotalConnects?: number;
    maximumConnectsPerTarget?: number;
    parametersLocation?: number | string;
    gainParameterNumber?: number;
    labels?: LabelInterface[];
    schemaIdentifiers?: string;
    templateReference?: string;
}
export declare class MatrixContents {
    type: MatrixType;
    mode: MatrixMode;
    identifier?: string;
    description?: string;
    targetCount?: number;
    sourceCount?: number;
    maximumTotalConnects?: number;
    maximumConnectsPerTarget?: number;
    parametersLocation?: number | string;
    gainParameterNumber?: number;
    labels?: Label[];
    schemaIdentifiers?: string;
    templateReference?: string;
    constructor(type?: MatrixType, mode?: MatrixMode);
    static decode(ber: Reader): MatrixContents;
    encode(ber: Writer): void;
    toJSON(res?: {
        [index: string]: any;
    }): JMatrixContents;
}
