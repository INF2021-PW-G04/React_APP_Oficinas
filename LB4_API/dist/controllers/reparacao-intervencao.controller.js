"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparacaoIntervencaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReparacaoIntervencaoController = class ReparacaoIntervencaoController {
    constructor(reparacaoRepository) {
        this.reparacaoRepository = reparacaoRepository;
    }
    async find(id, filter) {
        return this.reparacaoRepository.intervencoes(id).find(filter);
    }
    async create(id, intervencao) {
        return this.reparacaoRepository.intervencoes(id).create(intervencao);
    }
    async patch(id, intervencao, where) {
        return this.reparacaoRepository.intervencoes(id).patch(intervencao, where);
    }
    async delete(id, where) {
        return this.reparacaoRepository.intervencoes(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/reparacaos/{id}/intervencaos', {
        responses: {
            '200': {
                description: 'Array of Reparacao has many Intervencao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Intervencao) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoIntervencaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/reparacaos/{id}/intervencaos', {
        responses: {
            '200': {
                description: 'Reparacao model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Intervencao) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Intervencao, {
                    title: 'NewIntervencaoInReparacao',
                    exclude: ['id'],
                    optional: ['idReparacao']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoIntervencaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/reparacaos/{id}/intervencaos', {
        responses: {
            '200': {
                description: 'Reparacao.Intervencao PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Intervencao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Intervencao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoIntervencaoController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/reparacaos/{id}/intervencaos', {
        responses: {
            '200': {
                description: 'Reparacao.Intervencao DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Intervencao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoIntervencaoController.prototype, "delete", null);
ReparacaoIntervencaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ReparacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReparacaoRepository])
], ReparacaoIntervencaoController);
exports.ReparacaoIntervencaoController = ReparacaoIntervencaoController;
//# sourceMappingURL=reparacao-intervencao.controller.js.map