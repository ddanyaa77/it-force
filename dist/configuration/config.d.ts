export declare const appConfig: (() => {
    readonly HTTP_PORT: number;
    readonly REDIS_CONFIG: {
        readonly host: string | undefined;
        readonly port: number;
        readonly password: string | undefined;
        readonly tls: boolean;
        readonly database: number;
        readonly REDIS_USER_PREFIX: string;
        readonly REDIS_KEY_FOR_BONUS_METADATA_IN_CACHE: string;
        readonly redisConnectionTimeout: string | 2000;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    readonly HTTP_PORT: number;
    readonly REDIS_CONFIG: {
        readonly host: string | undefined;
        readonly port: number;
        readonly password: string | undefined;
        readonly tls: boolean;
        readonly database: number;
        readonly REDIS_USER_PREFIX: string;
        readonly REDIS_KEY_FOR_BONUS_METADATA_IN_CACHE: string;
        readonly redisConnectionTimeout: string | 2000;
    };
}>;
export declare const postgresConfig: (() => {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
    readonly database: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
    readonly database: string;
}>;
