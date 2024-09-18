"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransaction = void 0;
const typeorm_1 = require("typeorm");
const transaction_types_1 = require("../types/transaction.types");
const user_balance_entity_1 = require("../../user-balance/entity/user-balance.entity");
let UserTransaction = class UserTransaction {
};
exports.UserTransaction = UserTransaction;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid' }),
    __metadata("design:type", String)
], UserTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTransaction.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_balance_entity_1.UserBalance),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_balance_entity_1.UserBalance)
], UserTransaction.prototype, "userBalance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: transaction_types_1.TransactionAction }),
    __metadata("design:type", String)
], UserTransaction.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], UserTransaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserTransaction.prototype, "createdAt", void 0);
exports.UserTransaction = UserTransaction = __decorate([
    (0, typeorm_1.Entity)({ name: 'transactions' })
], UserTransaction);
//# sourceMappingURL=transaction.entity.js.map