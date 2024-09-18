import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { appConfig, postgresConfig } from './configuration/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, postgresConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [postgresConfig.KEY],
      useFactory: (config: ConfigType<typeof postgresConfig>) => {
        return {
          type: 'postgres',
          ...config,
          synchronize: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
    }),
    TransactionsModule,
  ],
})
export class AppModule {}
