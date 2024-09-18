"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const exception_filter_1 = require("./common/filters/exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new exception_filter_1.GlobalExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    const configService = app.get(config_1.ConfigService);
    const HTTP_PORT = configService.get('app-config.HTTP_PORT');
    await app.listen(HTTP_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map