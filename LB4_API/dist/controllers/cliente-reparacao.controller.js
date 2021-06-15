"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteReparacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteReparacaoController = class ClienteReparacaoController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async find(id, filter) {
        return this.clienteRepository.reparacoes(id).find(filter);
    }
    async create(id, reparacao) {
        return this.clienteRepository.reparacoes(id).create(reparacao);
    }
    async patch(id, reparacao, where) {
        return this.clienteRepository.reparacoes(id).patch(reparacao, where);
    }
    async delete(id, where) {
        return this.clienteRepository.reparacoes(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/clientes/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Array of Cliente has many Reparacao',
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
], ClienteReparacaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/clientes/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Reparacao) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, {
                    title: 'NewReparacaoInCliente',
                    exclude: ['id'],
                    optional: ['idCliente']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteReparacaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/clientes/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Cliente.Reparacao PATCH success count',
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
], ClienteReparacaoController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/clientes/{id}/reparacaos', {
        responses: {
            '200': {
                description: 'Cliente.Reparacao DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Reparacao))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteReparacaoController.prototype, "delete", null);
ClienteReparacaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteReparacaoController);
exports.ClienteReparacaoController = ClienteReparacaoController;
//# sourceMappingURL=cliente-reparacao.controller.js.map