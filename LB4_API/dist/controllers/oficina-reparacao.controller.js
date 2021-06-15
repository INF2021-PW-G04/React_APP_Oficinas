"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OficinaReparacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OficinaReparacaoController = class OficinaReparacaoController {
    constructor(oficinaRepository) {
        this.oficinaRepository = oficinaRepository;
    }
    async find(id, filter) {
        return this.oficinaRepository.reparacoes(id).find(filter);
    }
    async create(id, reparacao) {
        return this.oficinaRepository.reparacoes(id).create(reparacao);
    }
    async patch(id, reparacao, where) {
        return this.oficinaRepository.reparacoes(id).patch(reparacao, where);
    }
    async delete(id, where) {
        return this.oficinaRepository.reparacoes(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/oficinas/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Array of Oficina has many Reparacao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Reparacao) },
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
], OficinaReparacaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/oficinas/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Oficina model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Reparacao) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, {
                    title: 'NewReparacaoInOficina',
                    exclude: ['id'],
                    optional: ['idOficina']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaReparacaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/oficinas/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Oficina.Reparacao PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
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
], OficinaReparacaoController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/oficinas/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Oficina.Reparacao DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Reparacao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaReparacaoController.prototype, "delete", null);
OficinaReparacaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OficinaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OficinaRepository])
], OficinaReparacaoController);
exports.OficinaReparacaoController = OficinaReparacaoController;
//# sourceMappingURL=oficina-reparacao.controller.js.map