import { Entity } from '@loopback/repository';
import { Cliente } from './cliente.model';
import { Reparacao } from './reparacao.model';
export declare class Oficina extends Entity {
    id?: number;
    nome: string;
    endereco: string;
    distrito: string;
    email?: string;
    num_contato?: number;
    clientes: Cliente[];
    reparacoes: Reparacao[];
    constructor(data?: Partial<Oficina>);
}
export interface OficinaRelations {
}
export declare type OficinaWithRelations = Oficina & OficinaRelations;
