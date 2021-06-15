import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { DbOficinasDataSource } from '../datasources';
import { Reparacao, ReparacaoRelations, Oficina, Cliente, Automovel, Intervencao } from '../models';
import { OficinaRepository } from './oficina.repository';
import { ClienteRepository } from './cliente.repository';
import { AutomovelRepository } from './automovel.repository';
import { IntervencaoRepository } from './intervencao.repository';
export declare class ReparacaoRepository extends DefaultCrudRepository<Reparacao, typeof Reparacao.prototype.id, ReparacaoRelations> {
    protected oficinaRepositoryGetter: Getter<OficinaRepository>;
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected automovelRepositoryGetter: Getter<AutomovelRepository>;
    protected intervencaoRepositoryGetter: Getter<IntervencaoRepository>;
    readonly Oficina: BelongsToAccessor<Oficina, typeof Reparacao.prototype.id>;
    readonly Cliente: BelongsToAccessor<Cliente, typeof Reparacao.prototype.id>;
    readonly Automovel: BelongsToAccessor<Automovel, typeof Reparacao.prototype.id>;
    readonly intervencoes: HasManyRepositoryFactory<Intervencao, typeof Reparacao.prototype.id>;
    constructor(dataSource: DbOficinasDataSource, oficinaRepositoryGetter: Getter<OficinaRepository>, clienteRepositoryGetter: Getter<ClienteRepository>, automovelRepositoryGetter: Getter<AutomovelRepository>, intervencaoRepositoryGetter: Getter<IntervencaoRepository>);
}
