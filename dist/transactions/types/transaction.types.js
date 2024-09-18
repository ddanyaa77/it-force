"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompensateTransactionAddress = exports.CreateTransactionAddress = exports.TransactionAction = exports.TransactionsControllerAddress = void 0;
exports.TransactionsControllerAddress = 'transactions';
var TransactionAction;
(function (TransactionAction) {
    TransactionAction["DEDUCTION"] = "DEDUCTION";
    TransactionAction["REPLENISHMENT"] = "REPLENISHMENT";
})(TransactionAction || (exports.TransactionAction = TransactionAction = {}));
exports.CreateTransactionAddress = `${exports.TransactionsControllerAddress}`;
exports.CompensateTransactionAddress = `${exports.TransactionsControllerAddress}/:id`;
//# sourceMappingURL=transaction.types.js.map