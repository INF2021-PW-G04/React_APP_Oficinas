import { Count, Filter, Where } from '@loopback/repository';
import { Reparacao, Intervencao } from '../models';
import { ReparacaoRepository } from '../repositories';
export declare class ReparacaoIntervencaoController {
    protected reparacaoRepository: ReparacaoRepository;
    constructor(reparacaoRepository: ReparacaoRepository);
    find(id: number, filter?: Filter<Intervencao>): Promise<Intervencao[]>;
    create(id: typeof Reparacao.prototype.id, intervencao: Omit<Intervencao, 'id'>): Promise<Intervencao>;
    patch(id: number, intervencao: Partial<Intervencao>, where?: Where<Intervencao>): Promise<Count>;
    delete(id: number, where?: Where<Intervencao>): Promise<Count>;
}
