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
exports.CreateTransactionReqDto = void 0;
const transaction_types_1 = require("../types/transaction.types");
const class_validator_1 = require("class-validator");
class CreateTransactionReqDto {
}
exports.CreateTransactionReqDto = CreateTransactionReqDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateTransactionReqDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTransactionReqDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(transaction_types_1.TransactionAction),
    __metadata("design:type", String)
], CreateTransactionReqDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTransactionReqDto.prototype, "amount", void 0);
//# sourceMappingURL=create-transaction.dto.js.map