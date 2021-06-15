import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { DbOficinasDataSource } from '../datasources';
import { Cliente, ClienteRelations, Oficina, Automovel, Reparacao } from '../models';
import { OficinaRepository } from './oficina.repository';
import { AutomovelRepository } from './automovel.repository';
import { ReparacaoRepository } from './reparacao.repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    protected oficinaRepositoryGetter: Getter<OficinaRepository>;
    protected automovelRepositoryGetter: Getter<AutomovelRepository>;
    protected reparacaoRepositoryGetter: Getter<ReparacaoRepository>;
    readonly Oficina: BelongsToAccessor<Oficina, typeof Cliente.prototype.id>;
    readonly automoveis: HasManyRepositoryFactory<Automovel, typeof Cliente.prototype.id>;
    readonly reparacoes: HasManyRepositoryFactory<Reparacao, typeof Cliente.prototype.id>;
    constructor(dataSource: DbOficinasDataSource, oficinaRepositoryGetter: Getter<OficinaRepository>, automovelRepositoryGetter: Getter<AutomovelRepository>, reparacaoRepositoryGetter: Getter<ReparacaoRepository>);
}
