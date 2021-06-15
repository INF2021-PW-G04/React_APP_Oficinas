import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbOficinasDataSource } from '../datasources';
import { Oficina, OficinaRelations, Cliente, Reparacao } from '../models';
import { ClienteRepository } from './cliente.repository';
import { ReparacaoRepository } from './reparacao.repository';
export declare class OficinaRepository extends DefaultCrudRepository<Oficina, typeof Oficina.prototype.id, OficinaRelations> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    protected reparacaoRepositoryGetter: Getter<ReparacaoRepository>;
    readonly clientes: HasManyRepositoryFactory<Cliente, typeof Oficina.prototype.id>;
    readonly reparacoes: HasManyRepositoryFactory<Reparacao, typeof Oficina.prototype.id>;
    constructor(dataSource: DbOficinasDataSource, clienteRepositoryGetter: Getter<ClienteRepository>, reparacaoRepositoryGetter: Getter<ReparacaoRepository>);
}
