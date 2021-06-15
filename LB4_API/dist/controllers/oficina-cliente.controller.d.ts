import { Count, Filter, Where } from '@loopback/repository';
import { Oficina, Cliente } from '../models';
import { OficinaRepository } from '../repositories';
export declare class OficinaClienteController {
    protected oficinaRepository: OficinaRepository;
    constructor(oficinaRepository: OficinaRepository);
    find(id: number, filter?: Filter<Cliente>): Promise<Cliente[]>;
    create(id: typeof Oficina.prototype.id, cliente: Omit<Cliente, 'id'>): Promise<Cliente>;
    patch(id: number, cliente: Partial<Cliente>, where?: Where<Cliente>): Promise<Count>;
    delete(id: number, where?: Where<Cliente>): Promise<Count>;
}
