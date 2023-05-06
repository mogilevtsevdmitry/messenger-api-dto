import { LoginEmail, RegisterEmail } from '@api';

/**
 * ### Controller Auth сервиса
 */
export namespace AuthServiceController {
    /**
     * Авторизация через email и пароль
     * @MessagePattern команда
     */
    export const LoginEmailMessagePattern = { cmd: LoginEmail.urlPath };
    /**
     * Тело запроса
     */
    export type LoginEmailRequest = LoginEmail.RequestBody;

    /**
     * Регистрация через email и пароль
     * @MessagePattern команда
     */
    export const RegisterEmailMessagePattern = { cmd: RegisterEmail.urlPath };
    /**
     * Тело запроса
     */
    export type RegisterEmailRequest = RegisterEmail.RequestBody;
}
