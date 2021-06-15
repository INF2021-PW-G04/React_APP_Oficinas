"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervencaoReparacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let IntervencaoReparacaoController = class IntervencaoReparacaoController {
    constructor(intervencaoRepository) {
        this.intervencaoRepository = intervencaoRepository;
    }
    async getReparacao(id) {
        return this.intervencaoRepository.Reparacao(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/intervencaos/{id}/reparacao', {
        responses: {
            '200': {
                description: 'Reparacao belonging to Intervencao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Reparacao) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoReparacaoController.prototype, "getReparacao", null);
IntervencaoReparacaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.IntervencaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.IntervencaoRepository])
], IntervencaoReparacaoController);
exports.IntervencaoReparacaoController = IntervencaoReparacaoController;
//# sourceMappingURL=intervencao-reparacao.controller.js.map