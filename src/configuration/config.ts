import { registerAs } from '@nestjs/config';

export const appConfig = registerAs(
  'app-config',
  () =>
    ({
      HTTP_PORT: Number(process.env.HTTP_PORT) || 8083,

      REDIS_CONFIG: {
        host: process.env.REDIS_URL,
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
        tls: process.env.REDIS_TLS === 'true',
        database: Number(process.env.REDIS_ADMIN_DATABASE) || 0,
        REDIS_USER_PREFIX: process.env.REDIS_USER_PREFIX || 'userId:',
        REDIS_KEY_FOR_BONUS_METADATA_IN_CACHE:
          process.env.REDIS_KEY_FOR_BONUS_METADATA_IN_CACHE ||
          'api-gateway-bonuses-metadata',
        redisConnectionTimeout: process.env.REDIS_CONNECTION_TIMEOUT || 2000,
      },
    }) as const,
);

export const postgresConfig = registerAs(
  'postgres-config',
  () =>
    ({
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'user_transaction',
    }) as const,
);
