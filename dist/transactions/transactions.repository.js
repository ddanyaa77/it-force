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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("./entity/transaction.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TransactionsRepository = class TransactionsRepository {
    constructor(transactionsRepo, dataSource) {
        this.transactionsRepo = transactionsRepo;
        this.dataSource = dataSource;
    }
    async create(transaction) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction('REPEATABLE READ');
        const repo = queryRunner.manager.getRepository(transaction_entity_1.UserTransaction);
        try {
            const userTransaction = repo.create(transaction);
            await repo.save(userTransaction);
            await queryRunner.commitTransaction();
            return;
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        }
        finally {
            await queryRunner.release();
        }
    }
    findOne(transactionId) {
        return this.transactionsRepo.findOne({ where: { id: transactionId } });
    }
    deleteOne(transactionId) {
        return this.transactionsRepo.delete({ id: transactionId });
    }
};
exports.TransactionsRepository = TransactionsRepository;
exports.TransactionsRepository = TransactionsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(transaction_entity_1.UserTransaction)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], TransactionsRepository);
//# sourceMappingURL=transactions.repository.js.map