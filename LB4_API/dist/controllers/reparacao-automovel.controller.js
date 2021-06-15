"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparacaoAutomovelController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReparacaoAutomovelController = class ReparacaoAutomovelController {
    constructor(reparacaoRepository) {
        this.reparacaoRepository = reparacaoRepository;
    }
    async getAutomovel(id) {
        return this.reparacaoRepository.Automovel(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/reparacaos/{id}/automovel', {
        responses: {
            '200': {
                description: 'Automovel belonging to Reparacao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Automovel) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoAutomovelController.prototype, "getAutomovel", null);
ReparacaoAutomovelController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ReparacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReparacaoRepository])
], ReparacaoAutomovelController);
exports.ReparacaoAutomovelController = ReparacaoAutomovelController;
//# sourceMappingURL=reparacao-automovel.controller.js.map