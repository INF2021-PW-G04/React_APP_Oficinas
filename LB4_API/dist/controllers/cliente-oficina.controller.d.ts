import { Cliente, Oficina } from '../models';
import { ClienteRepository } from '../repositories';
export declare class ClienteOficinaController {
    clienteRepository: ClienteRepository;
    constructor(clienteRepository: ClienteRepository);
    getOficina(id: typeof Cliente.prototype.id): Promise<Oficina>;
}
