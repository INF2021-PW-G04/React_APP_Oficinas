import { Entity } from '@loopback/repository';
import { Intervencao } from './intervencao.model';
export declare class Reparacao extends Entity {
    id?: number;
    data: string;
    custo: number;
    idOficina: number;
    idCliente: number;
    idAutomovel: number;
    intervencoes: Intervencao[];
    constructor(data?: Partial<Reparacao>);
}
export interface ReparacaoRelations {
}
export declare type ReparacaoWithRelations = Reparacao & ReparacaoRelations;
