"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReparacaoClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReparacaoClienteController = class ReparacaoClienteController {
    constructor(reparacaoRepository) {
        this.reparacaoRepository = reparacaoRepository;
    }
    async getCliente(id) {
        return this.reparacaoRepository.Cliente(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/reparacaos/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Reparacao',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReparacaoClienteController.prototype, "getCliente", null);
ReparacaoClienteController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ReparacaoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReparacaoRepository])
], ReparacaoClienteController);
exports.ReparacaoClienteController = ReparacaoClienteController;
//# sourceMappingURL=reparacao-cliente.controller.js.map