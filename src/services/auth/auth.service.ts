import { AuthServiceController } from './auth-service.controller';

/**
 * Auth Service
 */
export namespace AuthServiceContract {
    /** Наименование сервиса */
    export const name = 'AUTH_SERVICE';
    /** Auth контроллер сервиса */
    export const AuthController = AuthServiceController;
}
