"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intervencao = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const reparacao_model_1 = require("./reparacao.model");
let Intervencao = class Intervencao extends repository_1.Entity {
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
], Intervencao.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Intervencao.prototype, "descricao", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => reparacao_model_1.Reparacao, { name: 'Reparacao' }),
    tslib_1.__metadata("design:type", Number)
], Intervencao.prototype, "idReparacao", void 0);
Intervencao = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Intervencao);
exports.Intervencao = Intervencao;
//# sourceMappingURL=intervencao.model.js.map