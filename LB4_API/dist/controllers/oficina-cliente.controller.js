"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OficinaClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OficinaClienteController = class OficinaClienteController {
    constructor(oficinaRepository) {
        this.oficinaRepository = oficinaRepository;
    }
    async find(id, filter) {
        return this.oficinaRepository.clientes(id).find(filter);
    }
    async create(id, cliente) {
        return this.oficinaRepository.clientes(id).create(cliente);
    }
    async patch(id, cliente, where) {
        return this.oficinaRepository.clientes(id).patch(cliente, where);
    }
    async delete(id, where) {
        return this.oficinaRepository.clientes(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/oficinas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Array of Oficina has many Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Cliente) },
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
], OficinaClienteController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/oficinas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Oficina model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Cliente) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cliente, {
                    title: 'NewClienteInOficina',
                    exclude: ['id'],
                    optional: ['idOficina']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaClienteController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/oficinas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Oficina.Cliente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cliente, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Cliente))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaClienteController.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/oficinas/{id}/clientes', {
        responses: {
            '200': {
                description: 'Oficina.Cliente DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Cliente))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaClienteController.prototype, "delete", null);
OficinaClienteController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OficinaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OficinaRepository])
], OficinaClienteController);
exports.OficinaClienteController = OficinaClienteController;
//# sourceMappingURL=oficina-cliente.controller.js.map