"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparacaoOficinaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReparacaoOficinaController = class ReparacaoOficinaController {
    constructor(reparacaoRepository) {
        this.reparacaoRepository = reparacaoRepository;
    }
    async getOficina(id) {
        return this.reparacaoRepository.Oficina(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/reparacaos/{id}/oficina', {
        responses: {
            '200': {
                description: 'Oficina belonging to Reparacao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Oficina) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoOficinaController.prototype, "getOficina", null);
ReparacaoOficinaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ReparacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReparacaoRepository])
], ReparacaoOficinaController);
exports.ReparacaoOficinaController = ReparacaoOficinaController;
//# sourceMappingURL=reparacao-oficina.controller.js.map