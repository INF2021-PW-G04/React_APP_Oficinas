"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteAutomovelController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteAutomovelController = class ClienteAutomovelController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async find(id, filter) {
        return this.clienteRepository.automoveis(id).find(filter);
    }
    async create(id, automovel) {
        return this.clienteRepository.automoveis(id).create(automovel);
    }
    async patch(id, automovel, where) {
        return this.clienteRepository.automoveis(id).patch(automovel, where);
    }
    async delete(id, where) {
        return this.clienteRepository.automoveis(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/clientes/{id}/automovels', {
        responses: {
            '200': {
                description: 'Array of Cliente has many Automovel',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Automovel) },
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
], ClienteAutomovelController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/clientes/{id}/automovels', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Automovel) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Automovel, {
                    title: 'NewAutomovelInCliente',
                    exclude: ['id'],
                    optional: ['idCliente']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteAutomovelController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/clientes/{id}/automovels', {
        responses: {
            '200': {
                description: 'Cliente.Automovel PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Automovel, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Automovel))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteAutomovelController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/clientes/{id}/automovels', {
        responses: {
            '200': {
                description: 'Cliente.Automovel DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Automovel))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteAutomovelController.prototype, "delete", null);
ClienteAutomovelController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteAutomovelController);
exports.ClienteAutomovelController = ClienteAutomovelController;
//# sourceMappingURL=cliente-automovel.controller.js.map