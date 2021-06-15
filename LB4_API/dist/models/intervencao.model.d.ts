import { Entity } from '@loopback/repository';
export declare class Intervencao extends Entity {
    id?: number;
    descricao: string;
    idReparacao: number;
    constructor(data?: Partial<Intervencao>);
}
export interface IntervencaoRelations {
}
export declare type IntervencaoWithRelations = Intervencao & IntervencaoRelations;
