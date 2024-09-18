"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionActionCompensationMap = void 0;
const transaction_types_1 = require("./types/transaction.types");
exports.TransactionActionCompensationMap = {
    [transaction_types_1.TransactionAction.DEDUCTION]: transaction_types_1.TransactionAction.REPLENISHMENT,
    [transaction_types_1.TransactionAction.REPLENISHMENT]: transaction_types_1.TransactionAction.DEDUCTION,
};
//# sourceMappingURL=transactions.utils.js.map