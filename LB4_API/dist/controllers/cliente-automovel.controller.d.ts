import { Count, Filter, Where } from '@loopback/repository';
import { Automovel, Cliente } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteAutomovelController {
    protected clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    find(id: number, filter?: Filter<Automovel>): Promise<Automovel[]>;
    create(id: typeof Cliente.prototype.id, automovel: Omit<Automovel, 'id'>): Promise<Automovel>;
    patch(id: number, automovel: Partial<Automovel>, where?: Where<Automovel>): Promise<Count>;
    delete(id: number, where?: Where<Automovel>): Promise<Count>;
}
