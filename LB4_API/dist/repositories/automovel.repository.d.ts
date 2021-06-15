import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbOficinasDataSource } from '../datasources';
import { Automovel, AutomovelRelations, Cliente, Reparacao } from '../models';
import { ClienteRepository } from './cliente.repository';
import { ReparacaoRepository } from './reparacao.repository';
export declare class AutomovelRepository extends DefaultCrudRepository<Automovel, typeof Automovel.prototype.id, AutomovelRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected reparacaoRepositoryGetter: Getter<ReparacaoRepository>;
    readonly Cliente: BelongsToAccessor<Cliente, typeof Automovel.prototype.id>;
    readonly reparacaos: HasManyRepositoryFactory<Reparacao, typeof Automovel.prototype.id>;
    constructor(dataSource: DbOficinasDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, reparacaoRepositoryGetter: Getter<ReparacaoRepository>);
}
