"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OficinaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OficinaController = class OficinaController {
    constructor(oficinaRepository) {
        this.oficinaRepository = oficinaRepository;
    }
    async create(oficina) {
        return this.oficinaRepository.create(oficina);
    }
    async count(where) {
        return this.oficinaRepository.count(where);
    }
    async find(filter) {
        return this.oficinaRepository.find(filter);
    }
    async updateAll(oficina, where) {
        return this.oficinaRepository.updateAll(oficina, where);
    }
    async findById(id, filter) {
        return this.oficinaRepository.findById(id, filter);
    }
    async updateById(id, oficina) {
        await this.oficinaRepository.updateById(id, oficina);
    }
    async replaceById(id, oficina) {
        await this.oficinaRepository.replaceById(id, oficina);
    }
    async deleteById(id) {
        await this.oficinaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/oficinas'),
    rest_1.response(200, {
        description: 'Oficina model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Oficina) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Oficina, {
                    title: 'NewOficina',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/oficinas/count'),
    rest_1.response(200, {
        description: 'Oficina model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Oficina)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/oficinas'),
    rest_1.response(200, {
        description: 'Array of Oficina model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Oficina, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Oficina)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/oficinas'),
    rest_1.response(200, {
        description: 'Oficina PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Oficina, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Oficina)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Oficina, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/oficinas/{id}'),
    rest_1.response(200, {
        description: 'Oficina model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Oficina, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Oficina, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/oficinas/{id}'),
    rest_1.response(204, {
        description: 'Oficina PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Oficina, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Oficina]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/oficinas/{id}'),
    rest_1.response(204, {
        description: 'Oficina PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Oficina]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/oficinas/{id}'),
    rest_1.response(204, {
        description: 'Oficina DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OficinaController.prototype, "deleteById", null);
OficinaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OficinaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OficinaRepository])
], OficinaController);
exports.OficinaController = OficinaController;
//# sourceMappingURL=oficina.controller.js.map