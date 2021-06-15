"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovelReparacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AutomovelReparacaoController = class AutomovelReparacaoController {
    constructor(automovelRepository) {
        this.automovelRepository = automovelRepository;
    }
    async find(id, filter) {
        return this.automovelRepository.reparacaos(id).find(filter);
    }
    async create(id, reparacao) {
        return this.automovelRepository.reparacaos(id).create(reparacao);
    }
    async patch(id, reparacao, where) {
        return this.automovelRepository.reparacaos(id).patch(reparacao, where);
    }
    async delete(id, where) {
        return this.automovelRepository.reparacaos(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/automovels/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Array of Automovel has many Reparacao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Reparacao) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelReparacaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/automovels/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Automovel model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Reparacao) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, {
                    title: 'NewReparacaoInAutomovel',
                    exclude: ['id'],
                    optional: ['idAutomovel']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelReparacaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/automovels/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Automovel.Reparacao PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Reparacao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelReparacaoController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/automovels/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Automovel.Reparacao DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Reparacao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelReparacaoController.prototype, "delete", null);
AutomovelReparacaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AutomovelRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AutomovelRepository])
], AutomovelReparacaoController);
exports.AutomovelReparacaoController = AutomovelReparacaoController;
//# sourceMappingURL=automovel-reparacao.controller.js.map