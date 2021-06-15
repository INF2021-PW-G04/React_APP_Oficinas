import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Reparacao } from '../models';
import { ReparacaoRepository } from '../repositories';
export declare class ReparacaoController {
    reparacaoRepository: ReparacaoRepository;
    constructor(reparacaoRepository: ReparacaoRepository);
    create(reparacao: Omit<Reparacao, 'id'>): Promise<Reparacao>;
    count(where?: Where<Reparacao>): Promise<Count>;
    find(filter?: Filter<Reparacao>): Promise<Reparacao[]>;
    updateAll(reparacao: Reparacao, where?: Where<Reparacao>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Reparacao>): Promise<Reparacao>;
    updateById(id: number, reparacao: Reparacao): Promise<void>;
    replaceById(id: number, reparacao: Reparacao): Promise<void>;
    deleteById(id: number): Promise<void>;
}
