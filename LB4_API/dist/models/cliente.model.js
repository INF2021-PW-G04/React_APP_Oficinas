"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const oficina_model_1 = require("./oficina.model");
const automovel_model_1 = require("./automovel.model");
const reparacao_model_1 = require("./reparacao.model");
let Cliente = class Cliente extends repository_1.Entity {
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
], Cliente.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "apelido", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Cliente.prototype, "num_telefone", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "carta_conducao", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => oficina_model_1.Oficina, { name: 'Oficina' }),
    tslib_1.__metadata("design:type", Number)
], Cliente.prototype, "idOficina", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => automovel_model_1.Automovel, { keyTo: 'idCliente' }),
    tslib_1.__metadata("design:type", Array)
], Cliente.prototype, "automoveis", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => reparacao_model_1.Reparacao, { keyTo: 'idCliente' }),
    tslib_1.__metadata("design:type", Array)
], Cliente.prototype, "reparacoes", void 0);
Cliente = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map