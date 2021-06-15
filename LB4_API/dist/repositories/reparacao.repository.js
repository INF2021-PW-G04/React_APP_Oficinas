"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparacaoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ReparacaoRepository = class ReparacaoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, oficinaRepositoryGetter, clienteRepositoryGetter, automovelRepositoryGetter, intervencaoRepositoryGetter) {
        super(models_1.Reparacao, dataSource);
        this.oficinaRepositoryGetter = oficinaRepositoryGetter;
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.automovelRepositoryGetter = automovelRepositoryGetter;
        this.intervencaoRepositoryGetter = intervencaoRepositoryGetter;
        this.intervencoes = this.createHasManyRepositoryFactoryFor('intervencoes', intervencaoRepositoryGetter);
        this.registerInclusionResolver('intervencoes', this.intervencoes.inclusionResolver);
        this.Automovel = this.createBelongsToAccessorFor('Automovel', automovelRepositoryGetter);
        this.registerInclusionResolver('Automovel', this.Automovel.inclusionResolver);
        this.Cliente = this.createBelongsToAccessorFor('Cliente', clienteRepositoryGetter);
        this.registerInclusionResolver('Cliente', this.Cliente.inclusionResolver);
        this.Oficina = this.createBelongsToAccessorFor('Oficina', oficinaRepositoryGetter);
        this.registerInclusionResolver('Oficina', this.Oficina.inclusionResolver);
    }
};
ReparacaoRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db_oficinas')), tslib_1.__param(1, repository_1.repository.getter('OficinaRepository')), tslib_1.__param(2, repository_1.repository.getter('ClienteRepository')), tslib_1.__param(3, repository_1.repository.getter('AutomovelRepository')), tslib_1.__param(4, repository_1.repository.getter('IntervencaoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbOficinasDataSource, Function, Function, Function, Function])
], ReparacaoRepository);
exports.ReparacaoRepository = ReparacaoRepository;
//# sourceMappingURL=reparacao.repository.js.map