"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const config_2 = require("./configuration/config");
const typeorm_1 = require("@nestjs/typeorm");
const transactions_module_1 = require("./transactions/transactions.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.appConfig, config_2.postgresConfig],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_2.postgresConfig.KEY],
                useFactory: (config) => {
                    return {
                        type: 'postgres',
                        ...config,
                        synchronize: true,
                        entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    };
                },
            }),
            transactions_module_1.TransactionsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map