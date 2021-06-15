"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntervencaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let IntervencaoController = class IntervencaoController {
    constructor(intervencaoRepository) {
        this.intervencaoRepository = intervencaoRepository;
    }
    async create(intervencao) {
        return this.intervencaoRepository.create(intervencao);
    }
    async count(where) {
        return this.intervencaoRepository.count(where);
    }
    async find(filter) {
        return this.intervencaoRepository.find(filter);
    }
    async updateAll(intervencao, where) {
        return this.intervencaoRepository.updateAll(intervencao, where);
    }
    async findById(id, filter) {
        return this.intervencaoRepository.findById(id, filter);
    }
    async updateById(id, intervencao) {
        await this.intervencaoRepository.updateById(id, intervencao);
    }
    async replaceById(id, intervencao) {
        await this.intervencaoRepository.replaceById(id, intervencao);
    }
    async deleteById(id) {
        await this.intervencaoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/intervencaos'),
    rest_1.response(200, {
        description: 'Intervencao model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Intervencao) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Intervencao, {
                    title: 'NewIntervencao',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/intervencaos/count'),
    rest_1.response(200, {
        description: 'Intervencao model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Intervencao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/intervencaos'),
    rest_1.response(200, {
        description: 'Array of Intervencao model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Intervencao, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Intervencao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/intervencaos'),
    rest_1.response(200, {
        description: 'Intervencao PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Intervencao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Intervencao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Intervencao, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/intervencaos/{id}'),
    rest_1.response(200, {
        description: 'Intervencao model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Intervencao, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Intervencao, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/intervencaos/{id}'),
    rest_1.response(204, {
        description: 'Intervencao PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Intervencao, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Intervencao]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/intervencaos/{id}'),
    rest_1.response(204, {
        description: 'Intervencao PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Intervencao]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/intervencaos/{id}'),
    rest_1.response(204, {
        description: 'Intervencao DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], IntervencaoController.prototype, "deleteById", null);
IntervencaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.IntervencaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.IntervencaoRepository])
], IntervencaoController);
exports.IntervencaoController = IntervencaoController;
//# sourceMappingURL=intervencao.controller.js.map