"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OficinaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let OficinaRepository = class OficinaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, clienteRepositoryGetter, reparacaoRepositoryGetter) {
        super(models_1.Oficina, dataSource);
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.reparacaoRepositoryGetter = reparacaoRepositoryGetter;
        this.reparacoes = this.createHasManyRepositoryFactoryFor('reparacoes', reparacaoRepositoryGetter);
        this.registerInclusionResolver('reparacoes', this.reparacoes.inclusionResolver);
        this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter);
        this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    }
};
OficinaRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db_oficinas')), tslib_1.__param(1, repository_1.repository.getter('ClienteRepository')), tslib_1.__param(2, repository_1.repository.getter('ReparacaoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbOficinasDataSource, Function, Function])
], OficinaRepository);
exports.OficinaRepository = OficinaRepository;
//# sourceMappingURL=oficina.repository.js.map