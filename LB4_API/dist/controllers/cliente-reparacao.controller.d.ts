import { Count, Filter, Where } from '@loopback/repository';
import { Cliente, Reparacao } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteReparacaoController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: number, filter?: Filter<Reparacao>): Promise<Reparacao[]>;
    create(id: typeof Cliente.prototype.id, reparacao: Omit<Reparacao, 'id'>): Promise<Reparacao>;
    patch(id: number, reparacao: Partial<Reparacao>, where?: Where<Reparacao>): Promise<Count>;
    delete(id: number, where?: Where<Reparacao>): Promise<Count>;
}
