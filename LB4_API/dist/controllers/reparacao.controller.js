"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparacaoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReparacaoController = class ReparacaoController {
    constructor(reparacaoRepository) {
        this.reparacaoRepository = reparacaoRepository;
    }
    async create(reparacao) {
        return this.reparacaoRepository.create(reparacao);
    }
    async count(where) {
        return this.reparacaoRepository.count(where);
    }
    async find(filter) {
        return this.reparacaoRepository.find(filter);
    }
    async updateAll(reparacao, where) {
        return this.reparacaoRepository.updateAll(reparacao, where);
    }
    async findById(id, filter) {
        return this.reparacaoRepository.findById(id, filter);
    }
    async updateById(id, reparacao) {
        await this.reparacaoRepository.updateById(id, reparacao);
    }
    async replaceById(id, reparacao) {
        await this.reparacaoRepository.replaceById(id, reparacao);
    }
    async deleteById(id) {
        await this.reparacaoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/reparacaos'),
    rest_1.response(200, {
        description: 'Reparacao model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Reparacao) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, {
                    title: 'NewReparacao',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/reparacaos/count'),
    rest_1.response(200, {
        description: 'Reparacao model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Reparacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/reparacaos'),
    rest_1.response(200, {
        description: 'Array of Reparacao model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Reparacao, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Reparacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/reparacaos'),
    rest_1.response(200, {
        description: 'Reparacao PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Reparacao)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Reparacao, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/reparacaos/{id}'),
    rest_1.response(200, {
        description: 'Reparacao model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Reparacao, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/reparacaos/{id}'),
    rest_1.response(204, {
        description: 'Reparacao PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reparacao, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Reparacao]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/reparacaos/{id}'),
    rest_1.response(204, {
        description: 'Reparacao PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Reparacao]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/reparacaos/{id}'),
    rest_1.response(204, {
        description: 'Reparacao DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoController.prototype, "deleteById", null);
ReparacaoController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ReparacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReparacaoRepository])
], ReparacaoController);
exports.ReparacaoController = ReparacaoController;
//# sourceMappingURL=reparacao.controller.js.map