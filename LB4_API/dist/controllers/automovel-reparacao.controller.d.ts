import { Count, Filter, Where } from '@loopback/repository';
import { Automovel, Reparacao } from '../models';
import { AutomovelRepository } from '../repositories';
export declare class AutomovelReparacaoController {
    protected automovelRepository: AutomovelRepository;
    constructor(automovelRepository: AutomovelRepository);
    find(id: number, filter?: Filter<Reparacao>): Promise<Reparacao[]>;
    create(id: typeof Automovel.prototype.id, reparacao: Omit<Reparacao, 'id'>): Promise<Reparacao>;
    patch(id: number, reparacao: Partial<Reparacao>, where?: Where<Reparacao>): Promise<Count>;
    delete(id: number, where?: Where<Reparacao>): Promise<Count>;
}
