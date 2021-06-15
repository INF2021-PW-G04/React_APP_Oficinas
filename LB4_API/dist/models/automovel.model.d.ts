import { Entity } from '@loopback/repository';
import { Reparacao } from './reparacao.model';
export declare class Automovel extends Entity {
    id?: number;
    matricula: string;
    marca: string;
    modelo?: string;
    ano?: number;
    cor?: string;
    idCliente: number;
    reparacoes: Reparacao[];
    reparacaos: Reparacao[];
    constructor(data?: Partial<Automovel>);
}
export interface AutomovelRelations {
}
export declare type AutomovelWithRelations = Automovel & AutomovelRelations;
