import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Intervencao } from '../models';
import { IntervencaoRepository } from '../repositories';
export declare class IntervencaoController {
    intervencaoRepository: IntervencaoRepository;
    constructor(intervencaoRepository: IntervencaoRepository);
    create(intervencao: Omit<Intervencao, 'id'>): Promise<Intervencao>;
    count(where?: Where<Intervencao>): Promise<Count>;
    find(filter?: Filter<Intervencao>): Promise<Intervencao[]>;
    updateAll(intervencao: Intervencao, where?: Where<Intervencao>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Intervencao>): Promise<Intervencao>;
    updateById(id: number, intervencao: Intervencao): Promise<void>;
    replaceById(id: number, intervencao: Intervencao): Promise<void>;
    deleteById(id: number): Promise<void>;
}
