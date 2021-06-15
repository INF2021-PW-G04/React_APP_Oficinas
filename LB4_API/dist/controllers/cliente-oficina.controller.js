"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteOficinaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteOficinaController = class ClienteOficinaController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async getOficina(id) {
        return this.clienteRepository.Oficina(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/clientes/{id}/oficina', {
        responses: {
            '200': {
                description: 'Oficina belonging to Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Oficina) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteOficinaController.prototype, "getOficina", null);
ClienteOficinaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteOficinaController);
exports.ClienteOficinaController = ClienteOficinaController;
//# sourceMappingURL=cliente-oficina.controller.js.map