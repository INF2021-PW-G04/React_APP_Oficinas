import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { DbOficinasDataSource } from '../datasources';
import { Intervencao, IntervencaoRelations, Reparacao } from '../models';
import { ReparacaoRepository } from './reparacao.repository';
export declare class IntervencaoRepository extends DefaultCrudRepository<Intervencao, typeof Intervencao.prototype.id, IntervencaoRelations> {
    protected reparacaoRepositoryGetter: Getter<ReparacaoRepository>;
    readonly Reparacao: BelongsToAccessor<Reparacao, typeof Intervencao.prototype.id>;
    constructor(dataSource: DbOficinasDataSource, reparacaoRepositoryGetter: Getter<ReparacaoRepository>);
}
