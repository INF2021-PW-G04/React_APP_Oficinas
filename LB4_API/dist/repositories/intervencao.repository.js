"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervencaoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let IntervencaoRepository = class IntervencaoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, reparacaoRepositoryGetter) {
        super(models_1.Intervencao, dataSource);
        this.reparacaoRepositoryGetter = reparacaoRepositoryGetter;
        this.Reparacao = this.createBelongsToAccessorFor('Reparacao', reparacaoRepositoryGetter);
        this.registerInclusionResolver('Reparacao', this.Reparacao.inclusionResolver);
    }
};
IntervencaoRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.db_oficinas')), tslib_1.__param(1, repository_1.repository.getter('ReparacaoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbOficinasDataSource, Function])
], IntervencaoRepository);
exports.IntervencaoRepository = IntervencaoRepository;
//# sourceMappingURL=intervencao.repository.js.map