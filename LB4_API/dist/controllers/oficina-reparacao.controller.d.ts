import { Count, Filter, Where } from '@loopback/repository';
import { Oficina, Reparacao } from '../models';
import { OficinaRepository } from '../repositories';
export declare class OficinaReparacaoController {
    protected oficinaRepository: OficinaRepository;
    constructor(oficinaRepository: OficinaRepository);
    find(id: number, filter?: Filter<Reparacao>): Promise<Reparacao[]>;
    create(id: typeof Oficina.prototype.id, reparacao: Omit<Reparacao, 'id'>): Promise<Reparacao>;
    patch(id: number, reparacao: Partial<Reparacao>, where?: Where<Reparacao>): Promise<Count>;
    delete(id: number, where?: Where<Reparacao>): Promise<Count>;
}
