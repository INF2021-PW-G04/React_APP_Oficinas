import { Automovel, Reparacao } from '../models';
import { ReparacaoRepository } from '../repositories';
export declare class ReparacaoAutomovelController {
    reparacaoRepository: ReparacaoRepository;
    constructor(reparacaoRepository: ReparacaoRepository);
    getAutomovel(id: typeof Reparacao.prototype.id): Promise<Automovel>;
}
