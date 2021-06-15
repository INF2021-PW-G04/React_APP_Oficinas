"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClienteRepository = class ClienteRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, oficinaRepositoryGetter, automovelRepositoryGetter, reparacaoRepositoryGetter) {
        super(models_1.Cliente, dataSource);
        this.oficinaRepositoryGetter = oficinaRepositoryGetter;
        this.automovelRepositoryGetter = automovelRepositoryGetter;
        this.reparacaoRepositoryGetter = reparacaoRepositoryGetter;
        this.reparacoes = this.createHasManyRepositoryFactoryFor('reparacoes', reparacaoRepositoryGetter);
        this.registerInclusionResolver('reparacoes', this.reparacoes.inclusionResolver);
        this.automoveis = this.createHasManyRepositoryFactoryFor('automoveis', automovelRepositoryGetter);
        this.registerInclusionResolver('automoveis', this.automoveis.inclusionResolver);
        this.Oficina = this.createBelongsToAccessorFor('Oficina', oficinaRepositoryGetter);
        this.registerInclusionResolver('Oficina', this.Oficina.inclusionResolver);
    }
};
ClienteRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db_oficinas')), tslib_1.__param(1, repository_1.repository.getter('OficinaRepository')), tslib_1.__param(2, repository_1.repository.getter('AutomovelRepository')), tslib_1.__param(3, repository_1.repository.getter('ReparacaoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbOficinasDataSource, Function, Function, Function])
], ClienteRepository);
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=cliente.repository.js.map