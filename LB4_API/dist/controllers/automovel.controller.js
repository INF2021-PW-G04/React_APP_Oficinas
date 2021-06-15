"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovelController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AutomovelController = class AutomovelController {
    constructor(automovelRepository) {
        this.automovelRepository = automovelRepository;
    }
    async create(automovel) {
        return this.automovelRepository.create(automovel);
    }
    async count(where) {
        return this.automovelRepository.count(where);
    }
    async find(filter) {
        return this.automovelRepository.find(filter);
    }
    async updateAll(automovel, where) {
        return this.automovelRepository.updateAll(automovel, where);
    }
    async findById(id, filter) {
        return this.automovelRepository.findById(id, filter);
    }
    async updateById(id, automovel) {
        await this.automovelRepository.updateById(id, automovel);
    }
    async replaceById(id, automovel) {
        await this.automovelRepository.replaceById(id, automovel);
    }
    async deleteById(id) {
        await this.automovelRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/automovels'),
    rest_1.response(200, {
        description: 'Automovel model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Automovel) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Automovel, {
                    title: 'NewAutomovel',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Automovel]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/automovels/count'),
    rest_1.response(200, {
        description: 'Automovel model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Automovel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/automovels'),
    rest_1.response(200, {
        description: 'Array of Automovel model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Automovel, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Automovel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/automovels'),
    rest_1.response(200, {
        description: 'Automovel PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Automovel, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Automovel)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Automovel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/automovels/{id}'),
    rest_1.response(200, {
        description: 'Automovel model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Automovel, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Automovel, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/automovels/{id}'),
    rest_1.response(204, {
        description: 'Automovel PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Automovel, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Automovel]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/automovels/{id}'),
    rest_1.response(204, {
        description: 'Automovel PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Automovel]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/automovels/{id}'),
    rest_1.response(204, {
        description: 'Automovel DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelController.prototype, "deleteById", null);
AutomovelController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AutomovelRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AutomovelRepository])
], AutomovelController);
exports.AutomovelController = AutomovelController;
//# sourceMappingURL=automovel.controller.js.map