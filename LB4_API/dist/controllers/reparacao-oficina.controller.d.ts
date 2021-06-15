import { Reparacao, Oficina } from '../models';
import { ReparacaoRepository } from '../repositories';
export declare class ReparacaoOficinaController {
    reparacaoRepository: ReparacaoRepository;
    constructor(reparacaoRepository: ReparacaoRepository);
    getOficina(id: typeof Reparacao.prototype.id): Promise<Oficina>;
}
