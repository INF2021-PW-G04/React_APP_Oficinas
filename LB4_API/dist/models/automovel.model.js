"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automovel = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const cliente_model_1 = require("./cliente.model");
const reparacao_model_1 = require("./reparacao.model");
let Automovel = class Automovel extends repository_1.Entity {
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
], Automovel.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        unique: true,
        jsonSchema: {
            maxLength: 10,
            minLength: 9,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Automovel.prototype, "matricula", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Automovel.prototype, "marca", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Automovel.prototype, "modelo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Automovel.prototype, "ano", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Automovel.prototype, "cor", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => cliente_model_1.Cliente, { name: 'Cliente' }),
    tslib_1.__metadata("design:type", Number)
], Automovel.prototype, "idCliente", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => reparacao_model_1.Reparacao, { keyTo: 'idAutomovel' }),
    tslib_1.__metadata("design:type", Array)
], Automovel.prototype, "reparacoes", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => reparacao_model_1.Reparacao, { keyTo: 'idAutomovel' }),
    tslib_1.__metadata("design:type", Array)
], Automovel.prototype, "reparacaos", void 0);
Automovel = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Automovel);
exports.Automovel = Automovel;
//# sourceMappingURL=automovel.model.js.map