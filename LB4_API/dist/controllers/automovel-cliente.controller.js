"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomovelClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AutomovelClienteController = class AutomovelClienteController {
    constructor(automovelRepository) {
        this.automovelRepository = automovelRepository;
    }
    async getCliente(id) {
        return this.automovelRepository.Cliente(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/automovels/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Automovel',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AutomovelClienteController.prototype, "getCliente", null);
AutomovelClienteController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AutomovelRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AutomovelRepository])
], AutomovelClienteController);
exports.AutomovelClienteController = AutomovelClienteController;
//# sourceMappingURL=automovel-cliente.controller.js.map