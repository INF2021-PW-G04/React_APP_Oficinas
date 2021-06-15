import { Entity } from '@loopback/repository';
import { Automovel } from './automovel.model';
import { Reparacao } from './reparacao.model';
export declare class Cliente extends Entity {
    id?: number;
    nome: string;
    apelido: string;
    num_telefone?: number;
    carta_conducao?: string;
    idOficina: number;
    automoveis: Automovel[];
    reparacoes: Reparacao[];
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
