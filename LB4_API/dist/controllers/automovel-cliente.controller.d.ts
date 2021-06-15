import { Automovel, Cliente } from '../models';
import { AutomovelRepository } from '../repositories';
export declare class AutomovelClienteController {
    automovelRepository: AutomovelRepository;
    constructor(automovelRepository: AutomovelRepository);
    getCliente(id: typeof Automovel.prototype.id): Promise<Cliente>;
}
