import { Reparacao, Cliente } from '../models';
import { ReparacaoRepository } from '../repositories';
export declare class ReparacaoClienteController {
    reparacaoRepository: ReparacaoRepository;
    constructor(reparacaoRepository: ReparacaoRepository);
    getCliente(id: typeof Reparacao.prototype.id): Promise<Cliente>;
}
