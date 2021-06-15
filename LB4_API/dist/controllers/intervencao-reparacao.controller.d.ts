import { Intervencao, Reparacao } from '../models';
import { IntervencaoRepository } from '../repositories';
export declare class IntervencaoReparacaoController {
    intervencaoRepository: IntervencaoRepository;
    constructor(intervencaoRepository: IntervencaoRepository);
    getReparacao(id: typeof Intervencao.prototype.id): Promise<Reparacao>;
}
