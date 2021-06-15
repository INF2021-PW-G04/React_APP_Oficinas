"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oficina = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const reparacao_model_1 = require("./reparacao.model");
let Oficina = class Oficina extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Oficina.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Oficina.prototype, "nome", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Oficina.prototype, "endereco", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Oficina.prototype, "distrito", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Oficina.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Oficina.prototype, "num_contato", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => cliente_model_1.Cliente, { keyTo: 'idOficina' }),
    tslib_1.__metadata("design:type", Array)
], Oficina.prototype, "clientes", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => reparacao_model_1.Reparacao, { keyTo: 'idOficina' }),
    tslib_1.__metadata("design:type", Array)
], Oficina.prototype, "reparacoes", void 0);
Oficina = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Oficina);
exports.Oficina = Oficina;
//# sourceMappingURL=oficina.model.js.map