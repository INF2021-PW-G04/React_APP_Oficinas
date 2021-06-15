"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reparacao = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const automovel_model_1 = require("./automovel.model");
const cliente_model_1 = require("./cliente.model");
const intervencao_model_1 = require("./intervencao.model");
const oficina_model_1 = require("./oficina.model");
let Reparacao = class Reparacao extends repository_1.Entity {
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
], Reparacao.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        jsonSchema: {
            format: 'date', //This can be changed to 'date-time', 'time' or 'date'
        },
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Reparacao.prototype, "data", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Reparacao.prototype, "custo", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => oficina_model_1.Oficina, { name: 'Oficina' }),
    tslib_1.__metadata("design:type", Number)
], Reparacao.prototype, "idOficina", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => cliente_model_1.Cliente, { name: 'Cliente' }),
    tslib_1.__metadata("design:type", Number)
], Reparacao.prototype, "idCliente", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => automovel_model_1.Automovel, { name: 'Automovel' }),
    tslib_1.__metadata("design:type", Number)
], Reparacao.prototype, "idAutomovel", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => intervencao_model_1.Intervencao, { keyTo: 'idReparacao' }),
    tslib_1.__metadata("design:type", Array)
], Reparacao.prototype, "intervencoes", void 0);
Reparacao = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Reparacao);
exports.Reparacao = Reparacao;
//# sourceMappingURL=reparacao.model.js.map